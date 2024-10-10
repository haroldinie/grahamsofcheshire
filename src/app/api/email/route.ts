import { type NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, message, recaptchaToken } = await request.json();

    // Verify reCAPTCHA token with Google's API
    const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY; // Set this in your .env file
    const verificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${recaptchaSecret}&response=${recaptchaToken}`;

    const recaptchaResponse = await fetch(verificationUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    });

    const recaptchaData = await recaptchaResponse.json();

    if (!recaptchaData.success) {
      return NextResponse.json({ error: 'reCAPTCHA verification failed' }, { status: 400 });
    }

    // Proceed with sending the email if reCAPTCHA was verified
    const transport = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.MY_EMAIL,
        pass: process.env.MY_PASSWORD,
      },
    });

    const mailOptions: Mail.Options = {
      from: process.env.MY_EMAIL,
      to: process.env.MY_EMAIL,
      subject: `Message from ${name} (${email}) (${phone})`,
      text: message,
    };

    const sendMailPromise = () =>
      new Promise<string>((resolve, reject) => {
        transport.sendMail(mailOptions, function (err) {
          if (!err) {
            resolve('Email sent');
          } else {
            reject(err.message);
          }
        });
      });

    await sendMailPromise();
    return NextResponse.json({ message: 'Email sent successfully' });

  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
}


// import { type NextRequest, NextResponse } from 'next/server';
// import nodemailer from 'nodemailer';
// import Mail from 'nodemailer/lib/mailer';

// export async function POST(request: NextRequest) {
//   const { name, email, phone, message } = await request.json();

//   const transport = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: process.env.MY_EMAIL,
//       pass: process.env.MY_PASSWORD,
//     },
//   });

//   const mailOptions: Mail.Options = {
//     from: process.env.MY_EMAIL,
//     to: process.env.MY_EMAIL,
//     // cc: email, (uncomment this line if you want to send a copy to the sender)
//     subject: `Message from ${name} (${email}) (${phone})`,
//     text: message,
//   };

//   const sendMailPromise = () =>
//     new Promise<string>((resolve, reject) => {
//       transport.sendMail(mailOptions, function (err) {
//         if (!err) {
//           resolve('Email sent');
//         } else {
//           reject(err.message);
//         }
//       });
//     });

//   try {
//     await sendMailPromise();
//     return NextResponse.json({ message: 'Email sent' });
//   } catch (err) {
//     return NextResponse.json({ error: err }, { status: 500 });
//   }
// }