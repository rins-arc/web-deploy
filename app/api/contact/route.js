// 'use client';
// import nodemailer from 'nodemailer';

// export async function POST(req) {
//   const { name, email, phone, message, categories } = await req.json();

//   if (!name || !email || !phone || !message || !categories) {
//     return new Response(JSON.stringify({ error: 'All fields are required.' }), {
//       status: 400,
//     });
//   }

//   try {
//     // Buat transporter untuk mengirim email (misalnya menggunakan Gmail)
//     const transporter = nodemailer.createTransport({
//       service: 'gmail', // Ganti dengan service email yang Anda gunakan
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//       },
//     });

//     // Buat pesan email
//     const mailOptions = {
//       from: process.env.EMAIL_USER,
//       to: process.env.BUSINESS_EMAIL,
//       subject: 'Pesan Baru dari Form Kontak',
//       text: `
//         Anda telah menerima pesan baru dari form kontak:

//         Nama: ${name}
//         Email: ${email}
//         No. HP: ${phone}
//         Kategori: ${Object.keys(categories).filter(key => categories[key]).join(", ")}
//         Pesan: ${message}
//       `,
//     }

//     // Kirim email
//     await transporter.sendMail(mailOptions);

//     return new Response(
//       JSON.stringify({ message: 'Email berhasil dikirim!' }),
//       { status: 200 }
//     );
//   } catch (error) {
//     return new Response(
//       JSON.stringify({ error: 'Gagal mengirim email.' }),
//       { status: 500 }
//     );
//   }
// }
