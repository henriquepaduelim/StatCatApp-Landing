
import { content } from '@/content';

const TrustedBy = () => {
    return (
      <section className="py-12 bg-navy">
        <div className="container mx-auto px-6">
          <h3 className="text-center text-warm-gray-400 font-semibold uppercase tracking-wider mb-8">
            {content.trustedBy.title}
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
            {content.trustedBy.logos.map((logo, index) => (
              <div key={index} className="text-warm-gray-500 font-medium text-lg opacity-60">
                [ {logo} ]
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default TrustedBy;
  