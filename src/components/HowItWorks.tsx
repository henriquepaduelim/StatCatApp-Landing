
const HowItWorks = () => {
    const steps = [
      {
        number: '01',
        title: 'Onboard Athletes Seamlessly',
        description: 'Invite players and parents to a branded portal to complete paperwork, upload documents, and get approved.',
      },
      {
        number: '02',
        title: 'Manage Teams & Events',
        description: 'Build rosters, schedule practices or combines, and track availability with automated RSVPs.',
      },
      {
        number: '03',
        title: 'Track Metrics & Performance',
        description: 'Input combine data, monitor team leaderboards, and identify top performers with powerful analytics.',
      },
      {
        number: '04',
        title: 'Deliver Reports & Feedback',
        description: 'Generate professional athlete report cards and share performance insights with players and staff.',
      },
    ];
  
    return (
      <section className="py-20 bg-navy">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Get Up and Running in Minutes</h2>
            <p className="text-lg text-warm-gray-400 max-w-2xl mx-auto mt-4">
              Our intuitive platform makes it simple to centralize your entire club workflow.
            </p>
          </div>
          <div className="relative">
            {/* Dotted line for desktop */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-warm-gray-800"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
              {steps.map((step) => (
                <div key={step.number} className="relative text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start">
                    <div className="w-12 h-12 flex items-center justify-center bg-warm-gray-900 border-2 border-warm-gray-800 rounded-full text-teal font-bold text-lg z-10">
                      {step.number}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mt-6 mb-2">{step.title}</h3>
                  <p className="text-warm-gray-400">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default HowItWorks;
  