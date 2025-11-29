
import { content } from '@/content';
import Image from 'next/image';

const TrustedBy = () => {
    return (
      <section className="py-12 bg-white border-t border-b border-warm-gray-800">
        <div className="container mx-auto px-6">
          <h3 className="text-center text-warm-gray-900 font-semibold uppercase tracking-wider mb-8">
            {content.trustedBy.title}
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
            {content.trustedBy.logos.map((logo, index) => (
              <div key={index} className="text-warm-gray-900 font-medium text-lg opacity-60 relative h-24 w-36">
                <Image className='opacity-80'
                  src={logo.src}
                  alt={logo.alt}
                  layout="fill"
                  objectFit="contain"
                  
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default TrustedBy;
  