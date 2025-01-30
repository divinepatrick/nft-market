import Image from 'next/image';

export default function TextImageSection({ overline, title, description, image, buttonText1, buttonText2 }) {

  return (
    <section className="bg-[#0C0D1E] py-12 px-6 relative">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
        
        <div className="md:w-1/2 text-white">
          <p className="uppercase text-xs text-gray-400 mb-2">{overline}</p>
            <h2 className="text-4xl font-bold mb-4 leading-tight">{title}</h2>
            <p className="text-sm text-gray-400 mb-6">{description}</p>
            <div className="flex space-x-4">
              <button className="bg-gradient-to-r from-[#6648EB] to-[#9820E2]  text-white font-bold py-2 px-6 rounded-md">Get Started</button>
              <button className="text-gray-400 font-bold py-2 px-6 rounded-md border border-gray-600">Learn more</button>
            </div>
        </div>
         <div className="md:w-1/2 relative flex justify-end">
            <Image src={image} alt={title} width={600} height={400} style={{zIndex: 1}}/>
          </div>
      </div>
    </section>
  );
}