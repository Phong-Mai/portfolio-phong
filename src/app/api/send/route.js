import { NextResponse } from "next/server";
// import { Resend } from "resend";
import emailjs from '@emailjs/browser';
// const resend = new Resend(process.env.RESEND_API_KEY);
// const fromEmail = process.env.FROM_EMAIL;

export async function POST(req, res) {
  const { email, subject, message } = await req.json();
  console.log(email, subject, message);
  const serviceId = 'service_e66oqvm';
  const templateId='template_4oiej0a';
  const publicKey = '3RMZUbgcrSsiw0Fuk';
  const templateParams = {
    form_email : email,
    to_name: 'Phong',
    message: message,
  }
    try {
      const response = await emailjs.send(serviceId, templateId, templateParams,publicKey);
      return NextResponse.json(response);
    } catch (error) {
      return NextResponse.json({ error });
    }
}




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