
const metrics = [
    {
      value: '5x',
      label: 'Faster Athlete Approval',
      description: 'Cut down on administrative overhead and get players on the field sooner.'
    },
    {
      value: '80%',
      label: 'More Feed Engagement',
      description: 'Keep teams, coaches, and parents connected with a single, central communication hub.'
    },
    {
      value: '50+',
      label: 'Hours Saved Per Season',
      description: 'Eliminate spreadsheets and manual data entry, freeing up time for coaching.'
    },
  ];
  
  const Metrics = () => {
    return (
      <section className="py-20 bg-warm-gray-900">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {metrics.map((metric, index) => (
              <div key={index} className="p-8">
                <p className="text-5xl md:text-6xl font-bold text-teal font-grotesk">{metric.value}</p>
                <h3 className="text-xl font-semibold text-white mt-4 mb-2">{metric.label}</h3>
                <p className="text-warm-gray-400">{metric.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Metrics;
  