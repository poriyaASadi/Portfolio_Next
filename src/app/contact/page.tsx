'use client';

import React from 'react';

export default function ContactPage() {
  // تابع کپی شماره
  const copyPhone = () => {
    const phone = "09391521440";
    navigator.clipboard.writeText(phone).then(() => {
      // نشانه‌ای کوچک: مثلاً تغییر متن به "کپی شد!" برای چند ثانیه
      const originalText = document.getElementById('phone-text')?.textContent;
      if (originalText) {
        document.getElementById('phone-text')!.textContent = "copied";
        setTimeout(() => {
          document.getElementById('phone-text')!.textContent = originalText;
        }, 1500);
      }
    });
  };

  // تابع باز کردن Gmail
  const openGmail = () => {
    const email = "pooruiasadi85@gmail.com";
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`, '_blank');
  };

  return (
    <div className="bg-[#121212] text-white py-16 px-4 font-embed">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-green-400 mb-8">Let's work together</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* فرم تماس */}
          <div className="bg-[#1e1e1e] p-6 rounded-xl shadow-lg">
            <p className="text-gray-300 mb-6">
              I would be happy to contact you for collaboration or any other matter.
            </p>

            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Firstname"
                  className="bg-[#242424] text-white ring-0 outline-transparent border-none px-4 py-2 rounded focus:outline-none "
                />
                <input
                  type="text"
                  placeholder="Lastname"
                  className="bg-[#242424] text-white ring-0 outline-transparent border-none px-4 py-2 rounded focus:outline-none "
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="email"
                  placeholder="Email address"
                  className="bg-[#242424] text-white ring-0 outline-transparent border-none px-4 py-2 rounded focus:outline-none "
                />
                <input
                  type="tel"
                  placeholder="Phone number"
                  className="bg-[#242424] text-white ring-0 outline-transparent border-none px-4 py-2 rounded focus:outline-none "
                />
              </div>

              <select
                className="w-full bg-[#242424] text-white ring-0 outline-transparent border-none px-4 py-2 rounded focus:outline-none "
              >
                <option>Select a service</option>
                <option>Web Development</option>
                <option>Mobile App</option>
                <option>UI/UX Design</option>
              </select>

              <textarea
                rows={5}
                placeholder="Type your message here."
                className="w-full bg-[#242424] text-white ring-0 outline-transparent border-none px-4 py-2 rounded focus:outline-none "
              />

              <button
                type="submit"
                className="mt-4 w-full bg-green-400 hover:bg-green-500 text-black font-medium py-2 rounded transition-colors"
              >
                Send message
              </button>
            </form>
          </div>

          {/* اطلاعات تماس */}
          <div className="space-y-8">
            {/* شماره تماس — قابل کلیک برای کپی */}
            <div className="flex items-start space-x-4 cursor-pointer" onClick={copyPhone}>
              <div className="bg-green-400 p-2 rounded">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-black" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.964.774l2.4 6A2 2 0 0112 13v4a1 1 0 01-1 1h-6a1 1 0 01-1-1v-6a1 1 0 01.28-.75L8 6z" />
                </svg>
              </div>
              <div>
                <h3 className="text-sm text-gray-400">Phone</h3>
                <p id="phone-text" className="text-lg">09391521440</p>
              </div>
            </div>

            {/* ایمیل — قابل کلیک برای ارسال از Gmail */}
            <div className="flex items-start space-x-4 cursor-pointer" onClick={openGmail}>
              <div className="bg-green-400 p-2 rounded">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-black" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0018 10v4a2 2 0 002 2h4v2H4V4h2v2.884zM10 18v-8l-8 4v8l8-4zm0-8v8l8 4v-8l-8-4z" />
                </svg>
              </div>
              <div>
                <h3 className="text-sm text-gray-400">Email</h3>
                <p className="text-lg">pooruiasadi85@gmail.com</p>
              </div>
            </div>

            {/* آدرس */}
            <div className="flex items-start space-x-4">
              <div className="bg-green-400 p-2 rounded">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-black" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9l-4.95-4.95a2 2 0 00-2.83-2.83l-4.95-4.95z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="text-sm text-gray-400">Address</h3>
                <p className="text-lg">iran abadan amire shapor...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}