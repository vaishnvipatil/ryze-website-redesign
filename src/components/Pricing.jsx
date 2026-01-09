const plans = [
  { name: "Starter", price: "$29/mo", desc: "For small teams" },
  { name: "Pro", price: "$79/mo", desc: "For growing businesses" },
  { name: "Enterprise", price: "Custom", desc: "Custom solutions" }
];

export default function Pricing() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900">Pricing</h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className="border p-6 rounded-xl text-center hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-gray-900">{plan.name}</h3>
              <p className="mt-2 text-gray-600">{plan.desc}</p>
              <p className="mt-4 text-2xl font-bold text-gray-900">{plan.price}</p>
              <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
