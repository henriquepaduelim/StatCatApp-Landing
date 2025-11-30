
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarCheck, faUsers } from '@fortawesome/free-solid-svg-icons';
import { content } from '@/content';

const icons = [faUsers, faCalendarCheck];

const TeamEvents = () => {
  return (
    <section className="py-20 bg-warm-gray-900">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-warm-gray-900 border-2 border-warm-gray-800 rounded-xl p-4 h-96 flex items-center justify-center order-last lg:order-first">
                <div className="text-center">
                    <p className="text-warm-gray-500">{content.teamEvents.placeholder.title}</p>
                    <p className="text-sm text-warm-gray-600 mt-2">{content.teamEvents.placeholder.subtitle}</p>
                </div>
            </div>
            <div className="lg:pl-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                    {content.teamEvents.title}
                </h2>
                <p className="text-lg text-warm-gray-400 mt-4 mb-8">
                    {content.teamEvents.subtitle}
                </p>
                <ul className="space-y-4">
                    {content.teamEvents.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                            <FontAwesomeIcon icon={icons[index]} className="text-teal mt-1 mr-4" />
                            <div>
                                <h3 className="font-semibold text-white">{feature.title}</h3>
                                <p className="text-warm-gray-400">{feature.description}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
      </div>
    </section>
  );
};

export default TeamEvents;
