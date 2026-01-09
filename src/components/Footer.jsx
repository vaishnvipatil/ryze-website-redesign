export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-white text-xl font-bold">Ryze</h2>
        <p className="mt-3 text-sm">
          © {new Date().getFullYear()} Ryze. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
