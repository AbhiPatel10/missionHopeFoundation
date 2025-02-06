import Image from 'next/image';

export default function DonorSection() {
  return (
    <section className="bg-[#FAF8F1] py-16 px-6 text-center flex flex-col items-center relative">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 absolute top-0 left-0 right-0 mx-auto w-full max-w-5xl -translate-y-20">
        <ImageCard src="/images/image1.jpg" />
        <ImageCard src="/images/image2.jpg" />
        <ImageCard src="/images/image3.jpg" />
        <ImageCard src="/images/image4.jpg" />
      </div>
      <div className="max-w-2xl mt-24">
        <h2 className="text-lg md:text-xl font-medium">
          Join our donor community and help create positive change worldwide. With over:
        </h2>
        <p className="text-5xl md:text-6xl font-bold my-4">125,165+</p>
        <p className="text-gray-700">people have already joined</p>
        <button className="bg-lime-400 hover:bg-lime-500 transition text-black font-semibold py-2 px-6 mt-4 rounded-lg shadow-md">
          Donate Now →
        </button>
      </div>
    </section>
  );
}

function ImageCard({ src }: { src: string }) {
  return (
    <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl overflow-hidden shadow-lg">
      <Image src={src} alt="donor community" width={128} height={128} layout="responsive" />
    </div>
  );
}
