
const testimonials = [
    {
      quote: "StatCat transformed our combine process. What used to take weeks of paperwork now takes a few hours. The report cards are a game-changer for player feedback.",
      name: 'John Smith',
      role: 'Head Coach, Ontario Prospects'
    },
    {
      quote: "The athlete onboarding is incredibly efficient. We approved our entire U18 roster in two days. The platform is intuitive and saves our admin staff a ton of time.",
      name: 'Emily Williams',
      role: 'Club Administrator, GTA Football'
    },
    {
        quote: "As a data-driven coach, having all our performance metrics in one place is invaluable. The leaderboards have sparked a new level of competition in practice.",
        name: 'Michael Brown',
        role: 'Performance Coach, Northern Lights Academy'
    }
  ];
  
  const Testimonials = () => {
    return (
      <section id="testimonials" className="py-20 bg-navy">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Don't Just Take Our Word For It
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/5 p-8 rounded-xl border border-warm-gray-800 flex flex-col">
                <p className="text-warm-gray-300 flex-grow">“{testimonial.quote}”</p>
                <div className="mt-6">
                  <p className="font-bold text-white">{testimonial.name}</p>
                  <p className="text-sm text-warm-gray-400">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Testimonials;
  