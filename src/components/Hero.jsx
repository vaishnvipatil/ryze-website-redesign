export default function Hero() {
  return (
    <section className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-24 text-center">
        {/* Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
          Grow Faster with AI-Powered Sales & Marketing Automation
        </h1>

        {/* Subtext */}
        <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
          Ryze helps businesses automate outreach, analyze customer behavior,
          and increase conversions using smart AI-driven tools — all from one platform.
        </p>

        {/* Call-to-Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 shadow">
            Get Started
          </button>
          <button className="border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-100">
            Book a Demo
          </button>
        </div>
      </div>
    </section>
  );
}
