const features = [
  { title: "AI-Driven Insights", desc: "Understand customer behavior with real-time analytics and actionable insights." },
  { title: "Automated Outreach", desc: "Save time by automating emails, follow-ups, and lead engagement." },
  { title: "Smart Lead Management", desc: "Track, organize, and convert leads efficiently in one dashboard." },
  { title: "Performance Analytics", desc: "Measure campaign success and optimize strategies instantly." }
];

export default function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900">Powerful Features to Scale Your Business</h2>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="border p-6 rounded-xl hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
              <p className="mt-3 text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
