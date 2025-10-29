import Image from "next/image";

const ingredients = [
  {
    name: "Omani Frankincense Tears",
    origin: "Dhofar, Oman",
    description:
      "Harvested by hand at first light, these crystalline tears are distilled within 24 hours to preserve their luminous clarity.",
    image:
      "https://images.unsplash.com/photo-1584118624012-df056829fbd0?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Madagascan Vanilla Orchid",
    origin: "Sava Region, Madagascar",
    description:
      "Sun-cured vanilla orchids aged in bourbon casks for 120 days impart a molten, amber sweetness to our nocturnal blends.",
    image:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Sicilian Bergamot Zest",
    origin: "Calabria, Italy",
    description:
      "Organic bergamot harvested at golden hour for unparalleled brightness, cold-pressed to capture shimmering citrus facets.",
    image:
      "https://images.unsplash.com/photo-1514516430032-7f40ed986c5d?auto=format&fit=crop&w=900&q=80",
  },
];

export function IngredientsSection() {
  return (
    <section
      id="ingredients"
      style={{
        background: "linear-gradient(135deg, #f5f0ff 0%, #f9f5ec 60%, #ffffff 100%)",
        borderRadius: "60px 60px 0 0",
        marginTop: "6rem",
      }}
    >
      <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
        <h2 className="section-heading" style={{ textAlign: "center" }}>
          Ingredients of Distinction
        </h2>
        <p className="section-subheading" style={{ textAlign: "center", marginInline: "auto" }}>
          Our perfumers source rare botanicals in micro-lots, forging relationships that
          protect ecosystems and empower growers. Each ingredient is certified for
          traceability and environmental stewardship.
        </p>
        <div className="ingredient-grid">
          {ingredients.map((ingredient) => (
            <article key={ingredient.name} className="ingredient-card">
              <div className="ingredient-media">
                <Image
                  src={ingredient.image}
                  alt={ingredient.name}
                  fill
                  sizes="(min-width: 1280px) 320px, (min-width: 768px) 45vw, 90vw"
                />
              </div>
              <div className="ingredient-body">
                <div className="ingredient-meta">
                  <span>{ingredient.origin}</span>
                </div>
                <h3>{ingredient.name}</h3>
                <p>{ingredient.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
