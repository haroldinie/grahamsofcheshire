'use client';

import type { PutBlobResult } from '@vercel/blob';
import { useState, useRef } from 'react';

export default function UploadPage() {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [overlayText, setOverlayText] = useState<string>('');
  const [blob, setBlob] = useState<PutBlobResult | null>(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [reviewBody, setReviewBody] = useState('');
  const [statusMessage, setStatusMessage] = useState('');

  const handleUpload = async (event: React.FormEvent) => {
    event.preventDefault();
    setError(null);
    setUploading(true);

    if (!inputFileRef.current?.files) {
      setError("No file selected");
      setUploading(false);
      return;
    }

    const file = inputFileRef.current.files[0];

    try {
      // Upload image to Vercel Blob Storage
      const response = await fetch(`/api/upload?filename=${file.name}`, {
        method: 'POST',
        body: file,
      });

      if (!response.ok) throw new Error("Failed to upload image to Vercel");

      const newBlob = (await response.json()) as PutBlobResult;
      setBlob(newBlob);

      // Call the Supabase API route to save data
      const supabaseResponse = await fetch('/api/uploadSupabase', { // <- Updated path
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ file_path: newBlob.url, overlay_text: overlayText }),
      });

      if (!supabaseResponse.ok) throw new Error("Failed to save data to Supabase");

      alert("Image and overlay text uploaded successfully!");

    } catch (uploadError) {
      console.error("Error during upload:", uploadError);
      setError("Failed to upload image. Please try again.");
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

  return (
    <>
      <h1>Upload Your Image</h1>
      <form onSubmit={handleUpload}>
        <input name="file" ref={inputFileRef} type="file" required />
        <input
          type="text"
          placeholder="Enter overlay text"
          value={overlayText}
          onChange={(e) => setOverlayText(e.target.value)}
          required
        />
        <button type="submit" disabled={uploading}>
          {uploading ? "Uploading..." : "Upload"}
        </button>
      </form>
      {error && <p className="error-message">{error}</p>}
      {blob && (
        <div>
          Blob URL: <a href={blob.url}>{blob.url}</a>
        </div>
      )}
<div>
      {/* Review Form */}
      <form onSubmit={handleReviewSubmit}>
        <h2>Upload a Review</h2>
        <textarea
          value={reviewBody}
          onChange={(e) => setReviewBody(e.target.value)}
          placeholder="Write your review here"
          required
          rows={4}
          className="border border-gray-300 p-2 rounded-md w-full"
        />
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md mt-2">
          Submit Review
        </button>
      </form>
      
      {/* Display status messages */}
      {statusMessage && <p className="mt-2">{statusMessage}</p>}
    </div>
    </>
  );
}