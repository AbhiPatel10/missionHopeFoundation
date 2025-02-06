'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function CharitySection() {

  return (
    <section className="flex flex-col md:flex-row items-center justify-between p-10 bg-[#FFF7F3]">
      {/* Left Section with Image */}
      <div className="relative w-full md:w-1/2 p-5">
        <div className="relative overflow-hidden">
          <Image
            src="/images/AboutUs.jpg"
            width={600}
            height={700}
            alt="Happy child playing with autumn leaves"
            className="rounded-[5%]"
          />
        </div>
      </div>

      {/* Right Section with Text */}
      <div className="w-full md:w-1/2 space-y-6 p-5">
        <h4 className="text-orange-500 font-bold">About Us</h4>
        <h2 className="text-3xl font-extrabold text-gray-900">
          We Can Save More Lives With Your Helping Hand.
        </h2>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <ul className="space-y-2 text-gray-600">
          <li>✔️ The standard chunk of Lorem Ipsum used since.</li>
          <li>✔️ Randomised words which don't look even slightly believable.</li>
          <li>✔️ Making this the first true generator on the Internet.</li>
        </ul>
        <button className="bg-teal-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-teal-600 transition">
          More About
        </button>
      </div>
    </section>
  );
}
