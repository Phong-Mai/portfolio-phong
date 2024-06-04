"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import emailjs from '@emailjs/browser';
const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      from_email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    emailjs.init({
      publicKey: '3RMZUbgcrSsiw0Fuk',
      // Do not allow headless browsers
      blockHeadless: true,
      blockList: {
        // Block the suspended emails
        list: ['phongmhp@gmail.com'],
        // The variable contains the email address
        watchVariable: 'userEmail',
      },
      limitRate: {
        // Set the limit rate for the application
        id: 'app',
        // Allow 1 request per 10s
        throttle: 10000,
      },
    });
    emailjs.send('service_e66oqvm', 'template_4oiej0a', data).then(
      (response) => {
        setEmailSubmitted(true);
        console.log('SUCCESS!', response.status, response.text);
      },
      (error) => {
        console.log('FAILED...', error);
      },
    );
    
    
  };
  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          Kết nối
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          Tôi hiện đang tìm kiếm cơ hội mới, hộp thư đến của tôi luôn mở. Cho dù bạn có câu hỏi hay chỉ muốn chào hỏi, tôi sẽ cố gắng hết sức để trả lời bạn!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/Phong-Mai">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/hoangphong-mai/">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
        </div>
      </div>
      <div>
        {emailSubmitted ? (
          <p className="text-green-500 text-sm mt-2">
            Email gửi thành công!
          </p>
        ) : (
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-white block mb-2 text-sm font-medium"
              >
                Email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="abc@google.com"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="text-white block text-sm mb-2 font-medium"
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Just saying hi"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-white block text-sm mb-2 font-medium"
              >
                Tin nhắn
              </label>
              <textarea
                name="message"
                id="message"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Lời nhắn"
              />
            </div>
            <button
              type="submit"
              className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
            >
              Gửi
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailSection;
