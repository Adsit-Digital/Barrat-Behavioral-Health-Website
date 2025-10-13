import { OptimizedVideo } from "@/components/OptimizedVideo";

export function ServiceAreaSection() {
  const states = ["Virginia", "Washington D.C.", "Maryland", "Delaware", "West Virginia"];
  return (
    <section className="bg-light-gray">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900">Serving Our Community</h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
          We provide telehealth services to clients located in the following states:
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {states.map((state) => (
            <div key={state} className="bg-white py-2 px-6 rounded-full shadow-md text-gray-700 font-medium">
              {state}
            </div>
          ))}
        </div>
        
        {/* Video Section */}
        <div className="mt-12 max-w-4xl mx-auto">
          <OptimizedVideo
            src="https://media.inboundwizard.com/Rediscover_Wellness.mp4"
            className="w-full h-auto rounded-lg shadow-lg"
            controls={true}
            preload="metadata"
            priority={false}
          />
        </div>
      </div>
    </section>
  );
}