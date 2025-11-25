
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPalette } from '@fortawesome/free-solid-svg-icons';

const Branding = () => {
  return (
    <section className="py-20 bg-navy">
      <div className="container mx-auto px-6 text-center">
        <FontAwesomeIcon icon={faPalette} className="text-teal mb-4" size="3x" />
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Your Club, Your Brand
        </h2>
        <p className="text-lg text-warm-gray-400 max-w-2xl mx-auto mt-4 mb-8">
          Reinforce your club's identity with white-label branding. StatCat allows you to customize the platform with your logos and color schemes, providing a professional and unified experience for your athletes and staff.
        </p>
        <div className="max-w-3xl mx-auto bg-warm-gray-900 border-2 border-warm-gray-800 rounded-xl p-8 flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/2">
                <h4 className="font-bold text-white text-lg">Default Theme</h4>
                <div className="mt-4 h-48 rounded-lg bg-navy flex items-center justify-center text-warm-gray-500">[ StatCat App UI ]</div>
            </div>
            <div className="w-full md:w-1/2">
                <h4 className="font-bold text-teal text-lg">Your Club's Theme</h4>
                <div className="mt-4 h-48 rounded-lg bg-red-900 border-2 border-red-700 flex items-center justify-center text-red-300">[ Your Branded App UI ]</div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Branding;
