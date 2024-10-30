import { NextResponse } from 'next/server';
import supabase from '@/supabaseClient';

export async function POST(request: Request) {
    try {
        const { review_body } = await request.json();
        
        const { error } = await supabase
            .from('reviews')
            .insert([{ review_body }]);

        if (error) throw error;

        return NextResponse.json({ message: 'Review uploaded successfully!' });
    } catch (error) {
        console.error('Error uploading review:', error);
        return NextResponse.json({ message: 'Failed to upload review' }, { status: 500 });
    }
}

// import type { NextApiRequest, NextApiResponse } from 'next';
// import supabase from '@/supabaseClient';

// type Data = {
//   message: string;
//   error?: string;
// };

// export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
//   if (req.method === 'POST') {
//     const { review_body } = req.body;

//     if (!review_body) {
//       return res.status(400).json({ message: 'Review body is required' });
//     }

//     try {
//       const { data, error } = await supabase.from('reviews').insert([{ review_body }]);

//       if (error) {
//         throw error;
//       }

//       res.status(200).json({ message: 'Review uploaded successfully' });
//     } catch (error) {
//       res.status(500).json({ message: 'Error uploading review', error: error.message });
//     }
//   } else {
//     res.setHeader('Allow', ['POST']);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }