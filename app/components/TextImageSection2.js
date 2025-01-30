import Image from 'next/image';

export default function TextImageSection2({ overline, title, description, image, buttonText1, buttonText2, feature1Icon, feature1Title, feature1Description, feature2Icon, feature2Title, feature2Description }) {

  return (
    <section className="bg-[#0C0D1E] py-12 px-6 relative">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">

      <div className="md:w-1/2 relative flex justify-end">
            <Image src={image} alt={title} width={600} height={400} style={{zIndex: 1}}/>
          </div>

        
        <div className="md:w-1/2 text-white">
            <p className="uppercase text-xs text-gray-400 mb-2">{overline}</p>
            <h2 className="text-4xl font-bold mb-4 leading-tight">{title}</h2>
            <p className="text-sm text-gray-400 mb-6">{description}</p>
          
          <div className="flex flex-row justify-between mb-6">
            <div className='w-1/2 flex flex-col items-start mr-2'>
                <Image src={feature1Icon} alt={feature1Title} width={24} height={24} className='mb-2'/>
                 <h3 className="text-sm font-bold mb-1">{feature1Title}</h3>
                <p className="text-xs text-gray-400">{feature1Description}</p>
            </div>
              <div className='w-1/2 flex flex-col items-start ml-2'>
                 <Image src={feature2Icon} alt={feature2Title} width={24} height={24} className='mb-2'/>
                <h3 className="text-sm font-bold mb-1">{feature2Title}</h3>
                  <p className="text-xs text-gray-400">{feature2Description}</p>
              </div>
          </div>

            <div className="flex space-x-4">
              <button className="bg-gradient-to-r from-[#6648EB] to-[#9820E2] text-white font-bold py-2 px-6 rounded-md">Get Started</button>
              <button className="text-gray-400 font-bold py-2 px-6 rounded-md border border-gray-600">Learn more</button>
            </div>
        </div>
        
        
      </div>
    </section>
  );
}