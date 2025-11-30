
import { content } from '@/content';
import Image from 'next/image';

const Analytics = () => {
  return (
    <section className="py-20 bg-navy">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="lg:pr-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black">
              {content.analytics.title}
            </h2>
            <p className="text-lg text-warm-gray-900 mt-4 mb-8">
              {content.analytics.subtitle}
            </p>
            <div className="grid grid-cols-3 gap-2 ">
              {content.analytics.metricTiles.map((tile) => (
                <div key={tile} className="bg-warm-gray-900 border border-warm-gray-800 text-white rounded-lg px-4 py-3 flex items-center justify-center text-center text-sm">
                  {tile}
                </div>
              ))}
            </div>

                   {/* Container para centralizar o botão */}
  <div className="flex justify-center mt-8">
   <a href="#cta" className="bg-teal text-white font-bold py-3 px-6 rounded-lg hover:bg-teal/90 transition-colors">
    {content.analytics.cta}
   </a>
   </div>
          </div>
          <div className="bg-warm-gray-900 border-2 border-hidden rounded-xl p-4 h-96 flex items-center justify-center relative overflow-hidden">
            <Image
              src={content.analytics.placeholder.imageSrc}
              alt={content.analytics.placeholder.imageAlt}
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Analytics;
