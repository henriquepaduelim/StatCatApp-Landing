
const metricTiles = ['40-Yard Dash', 'Yo-Yo Test', 'Broad Jump', 'Vertical Jump', '3-Cone Drill', 'Shuttle Run'];

const Analytics = () => {
  return (
    <section className="py-20 bg-navy">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="lg:pr-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Unlock Performance with Powerful Analytics
            </h2>
            <p className="text-lg text-warm-gray-400 mt-4 mb-8">
              Go beyond simple times and scores. StatCat provides a dedicated combine and reporting runway to track, analyze, and visualize athlete performance over time.
            </p>
            <div className="flex flex-wrap gap-3">
              {metricTiles.map((tile) => (
                <div key={tile} className="bg-warm-gray-900 border border-warm-gray-800 text-white rounded-lg px-4 py-2">
                  {tile}
                </div>
              ))}
            </div>
            <a href="#cta" className="bg-teal text-white font-bold py-3 px-6 rounded-lg hover:bg-teal/90 transition-colors mt-8 inline-block">
              Explore Analytics
            </a>
          </div>
          <div className="bg-warm-gray-900 border-2 border-warm-gray-800 rounded-xl p-4 h-96 flex items-center justify-center">
             <div className="text-center">
                <p className="text-warm-gray-500">[ Dashboard Screenshot Placeholder ]</p>
                <p className="text-sm text-warm-gray-600 mt-2">A clean visual of the analytics dashboard showing leaderboards and player report cards.</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Analytics;
