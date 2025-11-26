
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const tiers = [
    {
      name: 'Pro',
      price: '$99',
      frequency: '/ per club / month',
      description: 'For growing clubs that need a powerful, centralized solution.',
      features: [
        'Up to 250 Athletes',
        'Full Athlete Onboarding',
        'Team & Event Management',
        'Combine & Analytics',
        'Standard Support',
      ],
      cta: 'Start Pro Trial',
      isFeatured: false,
    },
    {
      name: 'Elite',
      price: '$199',
      frequency: '/ per club / month',
      description: 'For established clubs demanding advanced features and customization.',
      features: [
        'Unlimited Athletes',
        'Everything in Pro',
        'White-Label Branding',
        'Advanced Reporting',
        'Priority Support',
      ],
      cta: 'Book an Elite Demo',
      isFeatured: true,
    },
  ];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-warm-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-warm-gray-400 max-w-2xl mx-auto mt-4">
            Choose the plan that fits your club's needs. No hidden fees.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-stretch gap-8 max-w-4xl mx-auto">
          {tiers.map((tier) => (
            <div key={tier.name} className={`w-full lg:w-1/2 p-8 rounded-xl border-2 flex flex-col ${tier.isFeatured ? 'border-teal' : 'border-warm-gray-800 bg-navy'}`}>
                {tier.isFeatured && <p className="text-center bg-teal text-white font-bold py-1 px-4 rounded-full -mt-12 mx-auto">Most Popular</p>}
                <h3 className="text-2xl font-bold text-white text-center mt-4">{tier.name}</h3>
                <p className="text-warm-gray-400 text-center mt-2">{tier.description}</p>
                <div className="text-center my-8">
                    <span className="text-5xl font-bold text-white font-grotesk">{tier.price}</span>
                    <span className="text-warm-gray-400">{tier.frequency}</span>
                </div>
                <ul className="space-y-4 mb-8 flex-grow">
                    {tier.features.map((feature) => (
                        <li key={feature} className="flex items-center">
                            <FontAwesomeIcon icon={faCheck} className="text-teal mr-3" />
                            <span className="text-white">{feature}</span>
                        </li>
                    ))}
                </ul>
                <a href="#cta" className={`w-full text-center font-bold py-3 px-6 rounded-lg transition-colors ${tier.isFeatured ? 'bg-teal text-white hover:bg-teal/90' : 'bg-white/10 text-white hover:bg-white/20'}`}>
                    {tier.cta}
                </a>
            </div>
          ))}
        </div>
        <p className="text-center text-warm-gray-400 mt-8">
            Need a solution for a large league or organization? <a href="#cta" className="text-teal font-semibold hover:underline">Contact us for enterprise pricing</a>.
        </p>
      </div>
    </section>
  );
};

export default Pricing;
