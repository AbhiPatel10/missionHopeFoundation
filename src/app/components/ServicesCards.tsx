export default function ServiceCards() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Healthy Food Card */}
        <div className="bg-[#e6f7f4] rounded-lg p-6 flex flex-col items-center">
          <div className="bg-white rounded-full p-4 mb-4 shadow-sm">
            <svg
              className="w-8 h-8 text-[#40c7b4]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2M7 2v20M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
            </svg>
          </div>
          <h3 className="text-[#1a237e] text-xl font-semibold">Healthy Food</h3>
        </div>

        {/* Clean Water Card */}
        <div className="bg-[#fdf0f0] rounded-lg p-6 flex flex-col items-center">
          <div className="bg-white rounded-full p-4 mb-4 shadow-sm">
            <svg
              className="w-8 h-8 text-[#ff6b6b]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z" />
            </svg>
          </div>
          <h3 className="text-[#1a237e] text-xl font-semibold">Clean Water</h3>
        </div>

        {/* Medical Care Card */}
        <div className="bg-[#e6f3ff] rounded-lg p-6 flex flex-col items-center">
          <div className="bg-white rounded-full p-4 mb-4 shadow-sm">
            <svg
              className="w-8 h-8 text-[#40a9ff]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m12 2-5.5 3.5-1 10.5 6.5 6 6.5-6-1-10.5L12 2Z" />
              <path d="M12 6.5V16" />
              <path d="M8.5 12H16" />
            </svg>
          </div>
          <h3 className="text-[#1a237e] text-xl font-semibold">Medical Care</h3>
        </div>

        {/* Child Education Card */}
        <div className="bg-[#fff7e6] rounded-lg p-6 flex flex-col items-center">
          <div className="bg-white rounded-full p-4 mb-4 shadow-sm">
            <svg
              className="w-8 h-8 text-[#ffa940]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
              <path d="M6 12v5c3 3 9 3 12 0v-5" />
            </svg>
          </div>
          <h3 className="text-[#1a237e] text-xl font-semibold">Child Education</h3>
        </div>
      </div>
    </div>
  )
}

