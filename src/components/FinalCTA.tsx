
import { content } from '@/content';

const FinalCTA = () => {
    return (
      <section id="cta" className="py-20 bg-warm-gray-900">
        <div className="container mx-auto px-6">
          <div className="bg-navy rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto border-2 border-teal/30">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              {content.finalCta.title}
            </h2>
            <p className="text-lg text-white max-w-2xl mx-auto mt-4 mb-8">
              {content.finalCta.subtitle}
            </p>
            <form className="flex flex-col md:flex-row justify-center items-center gap-4 max-w-lg mx-auto">
              <input 
                type="email" 
                placeholder={content.finalCta.formPlaceholder} 
                className="w-full md:w-2/3 bg-warm-gray-800 border border-warm-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal"
                required
              />
              <button 
                type="submit" 
                className="w-full md:w-auto bg-teal text-white font-bold py-3 px-8 rounded-lg hover:bg-teal/90 transition-transform hover:scale-105"
              >
                {content.finalCta.cta}
              </button>
            </form>
          </div>
        </div>
      </section>
    );
  };
  
  export default FinalCTA;
  