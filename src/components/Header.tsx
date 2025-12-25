'use client';

import React, { useState } from 'react';
import { ShimmerButton } from './ui/shimmer-button';
import { Club, XIcon } from 'lucide-react';
import NextLink from 'next/link'; // ✅ کامپوننت ناوبری Next.js

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeModal = () => setIsMenuOpen(false);

  // لینک‌ها با مسیرهای صحیح
  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Resume', href: '/resume' },
    { label: 'Work', href: '/work' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <header className="relative">
      <div className="container font-embed bg-transparent text-white">
        <section className="flex items-center py-3 justify-between">
          <div>
            <h2 className="flex items-center gap-1.5 text-2xl">
              LUMORA <span className="text-green-400">.</span>
            </h2>
          </div>
          <div className="flex items-center gap-4 font-medium">
            {/* منوی دسکتاپ */}
            <ul className="lg:flex items-center hidden gap-4 *:hover:text-green-400 *:transition-colors *:duration-200">
              {navLinks.map(({ label, href }) => (
                <li key={href}>
                  <NextLink href={href} className="block">
                    {label}
                  </NextLink>
                </li>
              ))}
            </ul>

            {/* دکمه Hire Me — دسکتاپ */}
            <NextLink href="/contact" passHref>
              <button
                type="button"
                className="bg-green-400 hidden lg:block text-black rounded-full py-1.5 px-4 hover:bg-green-500 transition-colors"
                aria-label="Hire me"
              >
                Hire me
              </button>
            </NextLink>

            {/* دکمه باز کردن منوی موبایل */}
            <ShimmerButton
              onClick={toggleMenu}
              className="shadow-2xl py-2 text-black lg:hidden"
              background="#05df72"
            >
              <span className="text-center text-sm font-medium tracking-tight whitespace-nowrap">
                Open Menu
              </span>
            </ShimmerButton>
          </div>
        </section>
      </div>

      {/* منوی موبایل — فقط در موبایل و وقتی باز است */}
      {isMenuOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/50 lg:hidden"
            onClick={closeModal}
            aria-hidden="true"
          />
          <div
            className="fixed left-0 top-0 h-screen w-[300px] z-50 lg:hidden
               backdrop-blur-xl text-white p-6 flex flex-col
              transition-all duration-300"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
          >
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-xl font-bold">Menu</h3>
              <button
                onClick={closeModal}
                aria-label="Close menu"
                className="p-2 rounded-full hover:bg-white/10 transition-colors"
              >
                <XIcon className="w-5 h-5" />
              </button>
            </div>

            <nav className="flex flex-col gap-5 mb-8">
              {navLinks.map(({ label, href }) => (
                <NextLink
                  key={href}
                  href={href}
                  onClick={closeModal}
                  className="flex items-center gap-1.5 hover:text-green-400 transition-colors
                    transform hover:translate-x-3 transition-transform duration-300"
                >
                  <Club className="w-4 h-4" />
                  {label}
                </NextLink>
              ))}
            </nav>

            {/* دکمه Hire Me — موبایل */}
            <NextLink href="/contact" passHref>
              <button
                type="button"
                onClick={closeModal}
                className="bg-green-400 text-black rounded-full py-2 px-4 font-medium 
                  hover:bg-green-500 transition-colors self-start"
                aria-label="Hire me"
              >
                Hire me
              </button>
            </NextLink>
          </div>
        </>
      )}
    </header>
  );
}

export default Header;