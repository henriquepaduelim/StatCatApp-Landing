
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldAlt, faLock, faUserShield } from '@fortawesome/free-solid-svg-icons';

const securityFeatures = [
  {
    icon: faUserShield,
    title: 'Role-Based Access Control (RBAC)',
    description: 'Ensure users only see what they need to, from club admins to individual athletes.'
  },
  {
    icon: faLock,
    title: 'Data Encryption',
    description: 'All data, including document uploads and athlete information, is encrypted at rest and in transit.'
  },
  {
    icon: faShieldAlt,
    title: 'Secure Infrastructure',
    description: 'Built on enterprise-grade infrastructure to ensure reliability, performance, and security.'
  }
];

const Security = () => {
  return (
    <section className="py-20 bg-warm-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Security and Trust You Can Rely On
          </h2>
          <p className="text-lg text-warm-gray-400 max-w-2xl mx-auto mt-4">
            We take data security seriously, so you can focus on what matters most.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {securityFeatures.map((feature, index) => (
            <div key={index} className="text-center p-6">
              <FontAwesomeIcon icon={feature.icon} className="text-teal mb-4" size="2x" />
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-warm-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Security;
