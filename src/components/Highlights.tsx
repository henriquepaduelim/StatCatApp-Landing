
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faChartLine, faFileSignature } from '@fortawesome/free-solid-svg-icons';

const featureCards = [
  {
    icon: faFileSignature,
    title: 'Automated Athlete Onboarding',
    description: 'Capture documents, get approvals, and manage player profiles in one seamless workflow. Approve athletes 5x faster.',
  },
  {
    icon: faUsers,
    title: 'Centralized Team Management',
    description: 'Drag-and-drop rosters, manage coaching staff, and keep everyone synced with a central team feed and calendar.',
  },
  {
    icon: faChartLine,
    title: 'Advanced Combine & Analytics',
    description: 'Enter metrics, track progress with leaderboards, and generate shareable report cards. One combine and reporting runway.',
  },
];

const Highlights = () => {
  return (
    <section id="features" className="py-20 bg-warm-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Everything Your Club Needs. Nothing It Doesn’t.
          </h2>
          <p className="text-lg text-warm-gray-400 max-w-2xl mx-auto mt-4">
            StatCat eliminates fragmented tools and spreadsheets, giving you a single source of truth to run your entire football operation.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featureCards.map((card, index) => (
            <div key={index} className="bg-navy/60 p-8 rounded-xl border border-warm-gray-800 transition-transform hover:scale-105 hover:border-teal">
              <FontAwesomeIcon icon={card.icon} className="text-teal mb-4" size="2x" />
              <h3 className="text-xl font-bold text-white mb-3">{card.title}</h3>
              <p className="text-warm-gray-300">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
