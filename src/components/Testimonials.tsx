
import { content } from '@/content';

const Testimonials = () => {
    return (
      <section id="testimonials" className="py-20 bg-navy">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              {content.testimonials.title}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.testimonials.items.map((testimonial, index) => (
              <div key={index} className="bg-white/5 p-8 rounded-xl border border-warm-gray-800 flex flex-col">
                <p className="text-white flex-grow">“{testimonial.quote}”</p>
                <div className="mt-6">
                  <p className="font-bold text-white">{testimonial.name}</p>
                  <p className="text-sm text-warm-gray-400">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Testimonials;
  