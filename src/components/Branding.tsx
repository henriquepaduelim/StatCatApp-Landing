
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPalette } from '@fortawesome/free-solid-svg-icons';
import { content } from '@/content';

const Branding = () => {
  return (
    <section className="py-20 bg-navy">
      <div className="container mx-auto px-6 text-center">
        <FontAwesomeIcon icon={faPalette} className="text-teal mb-4" size="3x" />
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          {content.branding.title}
        </h2>
        <p className="text-lg text-warm-gray-400 max-w-2xl mx-auto mt-4 mb-8">
          {content.branding.subtitle}
        </p>
        <div className="max-w-3xl mx-auto bg-warm-gray-900 border-2 border-warm-gray-800 rounded-xl p-8 flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/2">
                <h4 className="font-bold text-white text-lg">{content.branding.defaultTheme.title}</h4>
                <div className="mt-4 h-48 rounded-lg bg-navy flex items-center justify-center text-warm-gray-500">{content.branding.defaultTheme.placeholder}</div>
            </div>
            <div className="w-full md:w-1/2">
                <h4 className="font-bold text-teal text-lg">{content.branding.customTheme.title}</h4>
                <div className="mt-4 h-48 rounded-lg bg-red-900 border-2 border-red-700 flex items-center justify-center text-red-300">{content.branding.customTheme.placeholder}</div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Branding;
