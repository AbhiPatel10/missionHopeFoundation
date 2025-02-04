import Image from 'next/image'
import React from 'react'

const HeroSection = () => {
  return (
    <div className="bg-[#fdf7f2]  pl-8 pr-8 min-h-[calc(100vh-500px)] max-h-[100vh] mt-10 px-4 md:px-8 lg:px-16 py-8 md:py-12">
      <div className="max-w-7xl mx-auto">

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                    <Image
                      src={`/images/volunteer-${i}.jpg`}
                      alt={`Volunteer ${i}`}
                      width={40}
                      height={40}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <span className="text-xl font-medium">300+ Volunteers</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight">
              Together, We Have the Power to Change Lives.
            </h1>
            <p className="text-gray-600 text-lg max-w-xl">
              Join us in bringing hope, compassion, and opportunity to those who need it most. Together, we can create
              brighter futures, transform communities, and make a lasting difference in the world.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-6 py-3 bg-[#a7e22c] text-black rounded-full font-medium flex items-center gap-2 hover:bg-[#96cc28] transition-colors">
                Donate Now

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                </svg>

              </button>
              <button className="px-6 py-3 border-2 border-black rounded-full font-medium hover:bg-black hover:text-white transition-colors">
                Contact Us
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-8 right-0 bg-[#0d3311] text-white px-4 py-2 rounded-lg z-10">
              <div className="text-sm mb-1">Total Donation</div>
              <div className="w-48 h-2 bg-[#1a5721] rounded-full">
                <div className="w-1/4 h-full bg-white rounded-full"></div>
              </div>
              <div className="flex justify-between text-xs mt-1">
                <span>0</span>
                <span>100k</span>
              </div>
            </div>

            <div className="relative">
              <div className="w-full aspect-square rounded-full overflow-hidden border-8 border-white">
                <Image
                  src="/images/PoorChildren.jpg"
                  alt="Happy child beneficiary"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-4 right-4 bg-[#0d3311] text-white px-4 py-2 rounded-lg">
                <span className="font-bold">5000+</span> <span className="text-sm">Charity Doners</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection