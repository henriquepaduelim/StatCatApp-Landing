
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faChartLine, faFileSignature } from '@fortawesome/free-solid-svg-icons';
import { content } from '@/content';

// Match icons to the content by order.
const icons = [faFileSignature, faUsers, faChartLine];

const featureCards = content.highlights.cards.map((card, index) => ({
  ...card,
  icon: icons[index]
}));  

const Highlights = () => {
  return (
    <section id="features" className="py-20 bg-warm-gray-300">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-warm-gray-900">
            {content.highlights.title}
          </h2>
          <p className="text-lg text-warm-gray-700 max-w-2xl mx-auto mt-4">
            {content.highlights.subtitle}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featureCards.map((card, index) => (
            <div key={index} className="bg-navy/60 p-8 rounded-xl border border-warm-gray-800 transition-transform hover:scale-105 hover:border-teal">
              <FontAwesomeIcon icon={card.icon} className="text-teal mb-4" size="2x" />
              <h3 className="text-xl font-bold text-white mb-3">{card.title}</h3>
              <p className="text-white">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
