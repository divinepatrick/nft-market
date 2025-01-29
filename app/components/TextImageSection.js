import Image from 'next/image';

export default function TextImageSection({ title, description, image, buttonText, reverseOrder }) {
  const contentOrderClasses = reverseOrder ? 'md:flex-row-reverse' : 'md:flex-row';

  return (
    <section className="bg-dark-purple py-12 px-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
        {!reverseOrder && (
          <div className="md:w-1/2">
            <Image src={image} alt={title} width={600} height={400} className="rounded-lg" />
          </div>
        )}
        <div className="md:w-1/2 text-white">
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          <p className="text-lg text-gray-300 mb-6">{description}</p>
          <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded-full">
            {buttonText}
          </button>
        </div>
        {reverseOrder && (
          <div className="md:w-1/2">
            <Image src={image} alt={title} width={600} height={400} className="rounded-lg" />
          </div>
        )}
      </div>
    </section>
  );
}