
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarCheck, faUsers } from '@fortawesome/free-solid-svg-icons';

const TeamEvents = () => {
  return (
    <section className="py-20 bg-warm-gray-900">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-warm-gray-900 border-2 border-warm-gray-800 rounded-xl p-4 h-96 flex items-center justify-center order-last lg:order-first">
                <div className="text-center">
                    <p className="text-warm-gray-500">[ Team Roster & Calendar UI Placeholder ]</p>
                    <p className="text-sm text-warm-gray-600 mt-2">A mock-up showing a drag-and-drop roster and an event with RSVP status.</p>
                </div>
            </div>
            <div className="lg:pl-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                    Keep Everyone In Sync, Effortlessly
                </h2>
                <p className="text-lg text-warm-gray-400 mt-4 mb-8">
                    Manage rosters, communicate with your team, and schedule events all in one place. Automated notifications and availability tracking mean no one misses a beat.
                </p>
                <ul className="space-y-4">
                    <li className="flex items-start">
                        <FontAwesomeIcon icon={faUsers} className="text-teal mt-1 mr-4" />
                        <div>
                            <h4 className="font-semibold text-white">Drag-and-Drop Rosters</h4>
                            <p className="text-warm-gray-400">Easily move players between teams and age groups.</p>
                        </div>
                    </li>
                    <li className="flex items-start">
                        <FontAwesomeIcon icon={faCalendarCheck} className="text-teal mt-1 mr-4" />
                        <div>
                            <h4 className="font-semibold text-white">Automated RSVP & Availability</h4>
                            <p className="text-warm-gray-400">Schedule events and know instantly who can attend.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
      </div>
    </section>
  );
};

export default TeamEvents;
