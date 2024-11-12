// Upload Page Component

'use client';

import type { PutBlobResult } from '@vercel/blob';
import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import supabase from '@/supabaseClient';
import LogoutButton from '@/components/logout';

export default function UploadPage() {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [overlayText, setOverlayText] = useState('');
  const [blob, setBlob] = useState<PutBlobResult | null>(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [reviewBody, setReviewBody] = useState('');
  const [statusMessage, setStatusMessage] = useState('');
  // upcoming events state
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState(''); 

  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        router.push('/login');
      } else {
        setLoading(false);
      }
    };
    checkAuth();
  }, [router]);

  // Only show the content once the auth check is complete
  if (loading) return <p>Loading...</p>;

  const handleUpload = async (event: React.FormEvent) => {
    event.preventDefault();
    setError(null);
    setUploading(true);

    if (!inputFileRef.current?.files) {
      setError('No file selected');
      setUploading(false);
      return;
    }

    const file = inputFileRef.current.files[0];

    try {
      const response = await fetch(`/api/upload?filename=${file.name}`, {
        method: 'POST',
        body: file,
      });

      if (!response.ok) throw new Error('Failed to upload image to Vercel');

      const newBlob = (await response.json()) as PutBlobResult;
      setBlob(newBlob);

      const supabaseResponse = await fetch('/api/uploadSupabase', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ file_path: newBlob.url, overlay_text: overlayText }),
      });

      if (!supabaseResponse.ok) throw new Error('Failed to save data to Supabase');

      alert('Image and overlay text uploaded successfully!');
    } catch (uploadError) {
      console.error('Error during upload:', uploadError);
      setError('Failed to upload image. Please try again.');
    } finally {
      setUploading(false);
    }
  };

  const handleReviewSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/uploadReview', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ review_body: reviewBody }),
      });

      if (response.ok) {
        setStatusMessage('Review uploaded successfully!');
        setReviewBody('');
      } else {
        const { message } = await response.json();
        setStatusMessage(`Failed to upload review: ${message}`);
      }
    } catch (error) {
      setStatusMessage('An error occurred while uploading the review');
    }
  };

  const handleEventSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const {
      data: { session },
      error: sessionError,
  } = await supabase.auth.getSession();

  if (sessionError || !session?.user) {
      console.error("User not authenticated", sessionError);
      setStatusMessage('You must be logged in to upload events.');
      return;
  }

  if (!session) {
    console.error("User not authenticated there is no session");
    return;
  }

  const userId = session.user.id; // Get the user ID
  console.log(userId)
  // console.log(typeof session.user.id)
  
    
    try {
      const response = await fetch('/api/uploadEvent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, description, user_id: userId }),
      });

      if (response.ok) {
        setStatusMessage('Event uploaded successfully!');
        setTitle('');
        setDescription('');
      } else {
        const { message } = await response.json();
        setStatusMessage(`Failed to upload event: ${message}`);
      }
    } catch (error) {
      setStatusMessage('An error occurred while uploading the event');
    }
  };


  // the below is the latest code which currently doesnt work 
//   const handleEventSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     const { data: { session }, error: sessionError } = await supabase.auth.getSession();

//     // Check for session
//     if (sessionError || !session?.user) {
//         console.error("User not authenticated", sessionError);
//         setStatusMessage('You must be logged in to upload events.');
//         return;
//     }

//     const userId = session.user.id; // Get the user ID
//     console.log(userId);

//     try {
//         const response = await fetch('/api/uploadEvent', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({ title, description }), // Do not send user_id here, it's handled in the API
//         });

//         if (response.ok) {
//             setStatusMessage('Event uploaded successfully!');
//             setTitle('');
//             setDescription('');
//         } else {
//             const { message } = await response.json();
//             setStatusMessage(`Failed to upload event: ${message}`);
//         }
//     } catch (error) {
//         setStatusMessage('An error occurred while uploading the event');
//     }
// };


  return (
      <>
                {/* Image Form */}
        <div className="flex flex-col items-center justify-center min-h-screen p-4">
          <form
            onSubmit={handleUpload}
            className="flex flex-col items-center w-full bg-[#231F20] max-w-md p-6 rounded-lg shadow-md space-y-4 border"
          >
          <h1 className="text-3xl font-bold mb-4">Upload Your Image</h1>
            <input
              name="file"
              ref={inputFileRef}
              type="file"
              required
              className="w-full text-center border border-gray-300 p-2 rounded-md"
            />
            <input
              type="text"
              placeholder="Enter overlay text"
              value={overlayText}
              onChange={(e) => setOverlayText(e.target.value)}
              required
              className="w-full border border-gray-300 p-2 rounded-md text-black"
            />
            <button
              type="submit"
              disabled={uploading}
              className="w-full text-white py-2 rounded-md bg-[#AD974F] hover:bg-[#8E793E]"
            >
              {uploading ? 'Uploading...' : 'Upload'}
            </button>
          </form>
          {error && <p className="error-message text-red-500 mt-2">{error}</p>}
          {blob && (
            <div className="mt-4 text-center">
              Blob URL: <a href={blob.url} className="text-blue-500 underline">{blob.url}</a>
            </div>
          )}
    
          {/* Review Form */}
          <form
            onSubmit={handleReviewSubmit}
            className="flex flex-col items-center w-full max-w-md p-6 rounded-lg shadow-md space-y-4 mt-8 border"
          >
            <h2 className="text-2xl font-semibold">Upload a Review</h2>
            <textarea
              value={reviewBody}
              onChange={(e) => setReviewBody(e.target.value)}
              placeholder="Write your review here"
              required
              rows={4}
              className="w-full border border-gray-300 p-2 rounded-md text-black"
            />
            <button
              type="submit"
              className="w-full text-white py-2 rounded-md bg-[#AD974F] hover:bg-[#8E793E]"
            >
              Submit Review
            </button>
          </form>
    
          {/* Event Form */}
          <form
            onSubmit={handleEventSubmit}
            className="flex flex-col items-center w-full max-w-md p-6 rounded-lg shadow-md space-y-4 mt-8 border"
          >
            <h2 className="text-2xl font-semibold">Upload an Upcoming Event</h2>
            <input
              type="text"
              placeholder="Event Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="w-full border border-gray-300 p-2 rounded-md text-black"
            />
            <textarea
              placeholder="Event Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              rows={4}
              className="w-full border border-gray-300 p-2 rounded-md text-black"
            />
            <button
              type="submit"
              className="w-full text-white py-2 rounded-md bg-[#AD974F] hover:bg-[#8E793E]"
            >
              Submit Event
            </button>
          </form>
    
          {statusMessage && <p className="mt-4 text-center text-[#EAEAEA] p-4 border rounded">{statusMessage}</p>}
          
          <div className="mt-8 w-full max-w-screen-sm">
            <LogoutButton />
          </div>
        </div>
      </>
    );
  }