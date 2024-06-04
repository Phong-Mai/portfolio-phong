// import { NextResponse } from "next/server";
// // import { Resend } from "resend";
// import emailjs from '@emailjs/browser';
// // const resend = new Resend(process.env.RESEND_API_KEY);
// // const fromEmail = process.env.FROM_EMAIL;

// export async function POST(req, res) {
//   const { email, subject, message } = await req.json();
//   console.log(email, subject, message);
  
//     const template = {
//       to_name: "Phong",
//       from_email: email,
//       message : message,
//       subject : subject,
//     }
//    try {
//     await emailjs.init({
//       publicKey: '3RMZUbgcrSsiw0Fuk',
//       // Do not allow headless browsers
//       blockHeadless: true,
//       blockList: {
//         // Block the suspended emails
//         list: ['phongmhp@gmail.com','phongmai722@gmail.com'],
//         // The variable contains the email address
//         watchVariable: 'userEmail',
//       },
//       limitRate: {
//         // Set the limit rate for the application
//         id: 'app',
//         // Allow 1 request per 10s
//         throttle: 10000,
//       },
//     });
//     const data = await emailjs.send('service_e66oqvm', 'template_4oiej0a', template)
//     console.log(data)
//     return NextResponse.json(data);
//    } catch (error) {
//     return NextResponse.json(error);
//    }
     
// }




// try {
//   const data = await resend.emails.send({
//     from: fromEmail,
//     to: [fromEmail, email],
//     subject: subject,
//     react: (
//       <>
//         <h1>{subject}</h1>
//         <p>Cảm ơn bạn đã liên lạc tôi!</p>
//         <p>Tin nhắn mới được gửi:</p>
//         <p>{message}</p>
//       </>
//     ),
//   });
//   return NextResponse.json(data);
// } catch (error) {
//   return NextResponse.json({ error });
// }