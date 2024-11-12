// import { NextResponse } from 'next/server';
// import supabase from '@/supabaseClient';

// export async function POST(request: Request) {
//     try {
//         const { title, description } = await request.json();

//         // Retrieve the session from Supabase on the server side
//         const { data: { session } } = await supabase.auth.getSession();
//         if (!session) {
//             return NextResponse.json({ message: 'User not authenticated' }, { status: 401 });
//         }

//         const user_id = session.user.id; // Get the authenticated user's ID

//         // Insert event with user_id
//         const { error } = await supabase
//             .from('upcoming_events')
//             .insert([{ title, description, user_id }]);

//         if (error) throw error;

//         return NextResponse.json({ message: 'Event uploaded successfully!' });
//     } catch (error) {
//         console.error('Error uploading event:', error);
//         return NextResponse.json({ message: 'Failed to upload event' }, { status: 500 });
//     }
// }

import { NextResponse } from 'next/server';
import supabase from '@/supabaseClient';

export async function POST(request: Request) {
    try {
        const { title, description, user_id } = await request.json();

        const { data: session } = await supabase.auth.getSession(); // Get the session

        if (!session) {
            return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
        }

        const { error } = await supabase
            .from('upcoming_events')
            .insert([{ title, description, user_id }], {
            });
            console.log([{ title, description, user_id}])

        if (error) throw error;

        return NextResponse.json({ message: 'Event uploaded successfully!' });
    } catch (error) {
        console.error('Error uploading event:', error);
        return NextResponse.json({ message: 'Failed to upload event' }, { status: 500 });
    }
}


// the latest code is below but doesnt work

// import { NextResponse } from 'next/server';
// import supabase from '@/supabaseClient';

// export async function POST(request: Request) {
//     try {
//         const { title, description } = await request.json();

//         const { data: { session }, error: sessionError } = await supabase.auth.getSession();

//         if (sessionError) {
//             console.error('Session error:', sessionError);
//             return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
//         }

//         // Check if the session exists
//         if (!session || !session.user) {
//             console.error("No active session");
//             return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
//         }

//         const userId = session.user.id; // Get the user ID

//         const { error } = await supabase
//             .from('upcoming_events')
//             .insert([{ title, description, user_id: userId }]);

//         if (error) {
//             console.error('Supabase insert error:', error);
//             throw error;
//         }

//         return NextResponse.json({ message: 'Event uploaded successfully!' });
//     } catch (error) {
//         console.error('Error uploading event:', error);
//         return NextResponse.json({ message: 'Failed to upload event' }, { status: 500 });
//     }
// }
