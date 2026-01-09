const steps = [
  { title: "Connect Your Data", desc: "Integrate your sales and marketing tools quickly and easily." },
  { title: "Let AI Analyze", desc: "Ryze identifies patterns, insights, and opportunities automatically." },
  { title: "Grow Your Business", desc: "Automate actions and increase conversions with minimal effort." }
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900">How It Works</h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
              <p className="mt-3 text-gray-600">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
