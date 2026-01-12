import PropertyCard from "./PropertyCard";

export default function TrendingProperties({ properties = [] }) {
  if (!properties.length) {
    return null; // nothing to show
  }

  return (
    <section className="mt-10">
      <h2 className="text-2xl font-bold mb-6 text-sky-700">
        🔥 Trending Properties
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {properties.map((item) => (
          <PropertyCard key={item.slug} data={item} trending />
        ))}
      </div>
    </section>
  );
}