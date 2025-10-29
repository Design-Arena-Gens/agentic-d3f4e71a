"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

type Product = {
  id: string;
  name: string;
  price: string;
  image: string;
  description: string;
  notes: string[];
  intensity: string;
  collection: string;
  accords: string[];
  lifestyleImage: string;
  frames: string[];
};

type FacetKey = "notes" | "intensity" | "collection";

const facetDefinitions: Record<
  FacetKey,
  { title: string; options: string[] }
> = {
  notes: {
    title: "Notes",
    options: ["Floral", "Woody", "Amber", "Citrus", "Spice", "Musk", "Gourmand"],
  },
  intensity: {
    title: "Intensity",
    options: ["Diurne", "Crepuscule", "Nocturne"],
  },
  collection: {
    title: "Collection",
    options: ["Signature", "Atelier", "Private Reserve"],
  },
};

const products: Product[] = [
  {
    id: "etoile-noire",
    name: "Étoile Noire",
    price: "$240",
    image:
      "https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&w=900&q=80",
    description:
      "Midnight jasmine embraces smoked oud and Madagascan vanilla for a velveteen trail.",
    notes: ["Floral", "Woody", "Amber"],
    intensity: "Nocturne",
    collection: "Signature",
    accords: ["Smoked Oud", "Night Jasmine", "Black Vanilla Bean"],
    lifestyleImage:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1600&q=80",
    frames: [
      "https://images.unsplash.com/photo-1585386959984-a4155223f572?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1576013551627-0cc20b96c23c?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1563170351-be82bc888aa4?auto=format&fit=crop&w=900&q=80",
    ],
  },
  {
    id: "aurora-saffron",
    name: "Aurora Saffron",
    price: "$320",
    image:
      "https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=900&q=80",
    description:
      "Radiant saffron, pink pepper, and sun-warmed neroli create a golden hour aura.",
    notes: ["Spice", "Citrus", "Floral"],
    intensity: "Diurne",
    collection: "Private Reserve",
    accords: ["Persian Saffron", "Pink Pepper", "Neroli Blossom"],
    lifestyleImage:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1600&q=80",
    frames: [
      "https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1585386959984-a4155223f572?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1618568949779-5e47773b53a1?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&w=900&q=80",
    ],
  },
  {
    id: "lune-blanche",
    name: "Lune Blanche",
    price: "$280",
    image:
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80",
    description:
      "Exquisite white musk illuminated by pear blossom and frosted iris for a soft radiance.",
    notes: ["Musk", "Floral"],
    intensity: "Crepuscule",
    collection: "Signature",
    accords: ["Iris Pallida", "White Musk", "Pear Blossom"],
    lifestyleImage:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1600&q=80",
    frames: [
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1592945403244-3e4bba8fe6fc?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?auto=format&fit=crop&w=900&q=80",
    ],
  },
  {
    id: "velvet-atlas",
    name: "Velvet Atlas",
    price: "$295",
    image:
      "https://images.unsplash.com/photo-1528715471579-d1bcf0ba5e83?auto=format&fit=crop&w=900&q=80",
    description:
      "Moroccan cedar meets velvet plum and tonka bean for a sumptuous, travel-inspired trail.",
    notes: ["Woody", "Gourmand", "Spice"],
    intensity: "Nocturne",
    collection: "Atelier",
    accords: ["Atlas Cedar", "Velvet Plum", "Roasted Tonka"],
    lifestyleImage:
      "https://images.unsplash.com/photo-1531256456869-ce942a665e80?auto=format&fit=crop&w=1600&q=80",
    frames: [
      "https://images.unsplash.com/photo-1556228453-efd6c1ff04de?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1585386959984-a4155223f572?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1576013551627-0cc20b96c23c?auto=format&fit=crop&w=900&q=80",
    ],
  },
  {
    id: "jardin-celeste",
    name: "Jardin Céleste",
    price: "$210",
    image:
      "https://images.unsplash.com/photo-1590156328425-23df6985c08a?auto=format&fit=crop&w=900&q=80",
    description:
      "A breath of morning dew with sparkling yuzu, blue lotus, and sheer bamboo leaves.",
    notes: ["Citrus", "Floral", "Musk"],
    intensity: "Diurne",
    collection: "Atelier",
    accords: ["Yuzu Zest", "Blue Lotus", "Bamboo Leaf"],
    lifestyleImage:
      "https://images.unsplash.com/photo-1514996937319-344454492b37?auto=format&fit=crop&w=1600&q=80",
    frames: [
      "https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1618568949779-5e47773b53a1?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=900&q=80",
    ],
  },
  {
    id: "noir-absolu",
    name: "Noir Absolu",
    price: "$360",
    image:
      "https://images.unsplash.com/photo-1585386959984-a4155223f572?auto=format&fit=crop&w=900&q=80",
    description:
      "Dark cacao, black truffle, and aged patchouli entwine for an intoxicating crescendo.",
    notes: ["Amber", "Gourmand", "Woody"],
    intensity: "Nocturne",
    collection: "Private Reserve",
    accords: ["Black Truffle", "Dark Cacao", "Aged Patchouli"],
    lifestyleImage:
      "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1600&q=80",
    frames: [
      "https://images.unsplash.com/photo-1576013551627-0cc20b96c23c?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1563170351-be82bc888aa4?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1556228453-efd6c1ff04de?auto=format&fit=crop&w=900&q=80",
    ],
  },
];

export function ProductShowcase() {
  const [filters, setFilters] = useState<Record<FacetKey, Set<string>>>(() => ({
    notes: new Set<string>(),
    intensity: new Set<string>(),
    collection: new Set<string>(),
  }));
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);

  const toggleFacet = (facet: FacetKey, value: string) => {
    setFilters((prev) => {
      const nextEntries = (Object.keys(prev) as FacetKey[]).map((key) => [
        key,
        new Set(prev[key]),
      ]);
      const next = Object.fromEntries(
        nextEntries
      ) as Record<FacetKey, Set<string>>;
      const set = next[facet];
      if (set.has(value)) {
        set.delete(value);
      } else {
        set.add(value);
      }
      return next;
    });
  };

  const clearFilters = () => {
    setFilters({
      notes: new Set<string>(),
      intensity: new Set<string>(),
      collection: new Set<string>(),
    });
  };

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      return (Object.keys(filters) as FacetKey[]).every((facet) => {
        const selections = filters[facet];
        if (!selections.size) return true;
        if (facet === "notes") {
          return product.notes.some((note) => selections.has(note));
        }
        return selections.has(product[facet]);
      });
    });
  }, [filters]);

  const hasActiveFilters = useMemo(
    () => (Object.values(filters) as Set<string>[]).some((set) => set.size > 0),
    [filters]
  );

  return (
    <section id="shop" style={{ backgroundColor: "#f9f7f2" }}>
      <div className="shop-layout">
        <aside className="shop-filters">
          <h2 className="section-heading" style={{ fontSize: "2.2rem" }}>
            Curate Your Aura
          </h2>
          <p
            style={{
              color: "#4e4e4e",
              fontSize: "0.95rem",
              marginBottom: "2.5rem",
            }}
          >
            Filter the collection by olfactive family, intensity, and couture
            capsule lines to discover your signature essence.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            {(Object.entries(facetDefinitions) as [FacetKey, { title: string; options: string[] }][])
              .map(([facet, definition]) => (
                <div key={facet}>
                  <h3
                    style={{
                      fontFamily: "var(--font-playfair-display)",
                      fontSize: "1.2rem",
                      marginBottom: "1rem",
                    }}
                  >
                    {definition.title}
                  </h3>
                  <div className="facet-grid">
                    {definition.options.map((option) => {
                      const isActive = filters[facet].has(option);
                      return (
                        <button
                          key={option}
                          type="button"
                          onClick={() => toggleFacet(facet, option)}
                          className={`facet-chip${isActive ? " is-active" : ""}`}
                        >
                          {option}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
          </div>
          {hasActiveFilters ? (
            <button type="button" className="clear-filters" onClick={clearFilters}>
              Clear filters
            </button>
          ) : null}
        </aside>
        <div className="shop-content">
          <div>
            <h2 className="section-heading" style={{ fontSize: "2.6rem" }}>
              Haute Parfum Collection
            </h2>
            <p className="section-subheading">
              Each fragrance is composed in Grasse by master perfumers, bottled in
              hand-polished crystal, and finished with gilded accents inspired by
              Parisian Art Deco ateliers.
            </p>
            <div className="product-grid">
              {filteredProducts.map((product) => (
                <article key={product.id} className="product-card">
                  <div className="product-media">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(min-width: 1280px) 380px, (min-width: 768px) 45vw, 90vw"
                      priority={product.id === "etoile-noire"}
                    />
                  </div>
                  <div className="product-details">
                    <div>
                      <h3>{product.name}</h3>
                      <p className="product-description">{product.description}</p>
                    </div>
                    <div className="accord-list">
                      {product.accords.map((accord) => (
                        <span key={accord}>{accord}</span>
                      ))}
                    </div>
                    <div className="product-meta">
                      <span className="price-tag">{product.price}</span>
                      <div className="product-tags">
                        <span>{product.collection}</span>
                        <span>{product.intensity}</span>
                      </div>
                    </div>
                    <div className="product-actions">
                      <button type="button" className="primary-button">
                        Add to Ritual
                      </button>
                      <button
                        type="button"
                        className="secondary-button"
                        onClick={() => setActiveProduct(product)}
                      >
                        View 360°
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <div className="lifestyle-panel" id="about">
            <div className="lifestyle-copy">
              <h2>Beyond the Bottle</h2>
              <p>
                H&H Fragrances celebrates the ritual of scent dressing. Each
                composition is paired with artfully styled surroundings, guiding you
                to craft atmospheres as evocative as the perfume itself.
              </p>
              <a className="accent-link" href="#story">
                Explore the H&H manifesto →
              </a>
            </div>
            <div className="lifestyle-images">
              <div className="lifestyle-frame">
                <Image
                  src="https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&w=900&q=80"
                  alt="Luxury vanity with H&H fragrances"
                  fill
                  sizes="(min-width: 1280px) 420px, 60vw"
                />
              </div>
              <div className="lifestyle-frame">
                <Image
                  src="https://images.unsplash.com/photo-1525081905268-fc0b46e9dfee?auto=format&fit=crop&w=900&q=80"
                  alt="Fragrance mood imagery"
                  fill
                  sizes="(min-width: 1280px) 420px, 60vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {activeProduct ? (
        <Product360Modal product={activeProduct} onClose={() => setActiveProduct(null)} />
      ) : null}
    </section>
  );
}

function Product360Modal({
  product,
  onClose,
}: {
  product: Product;
  onClose: () => void;
}) {
  const [frameIndex, setFrameIndex] = useState(0);

  useEffect(() => {
    setFrameIndex(0);
  }, [product]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
      if (event.key === "ArrowRight") {
        setFrameIndex((prev) => (prev + 1) % product.frames.length);
      }
      if (event.key === "ArrowLeft") {
        setFrameIndex((prev) =>
          prev === 0 ? product.frames.length - 1 : prev - 1
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [product, onClose]);

  return (
    <div className="modal-overlay" role="dialog" aria-modal="true">
      <div className="modal-window">
        <button type="button" className="modal-close" onClick={onClose} aria-label="Close">
          ×
        </button>
        <div className="modal-content">
          <div className="modal-media">
            <Image
              key={`${product.id}-frame-${frameIndex}`}
              src={product.frames[frameIndex]}
              alt={`${product.name} angle ${frameIndex + 1}`}
              fill
              sizes="(min-width: 1280px) 520px, 90vw"
            />
          </div>
          <div className="modal-details">
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <div className="modal-progress">
              <span>Rotate</span>
              <input
                type="range"
                min={0}
                max={product.frames.length - 1}
                value={frameIndex}
                onChange={(event) => setFrameIndex(Number(event.target.value))}
              />
            </div>
            <div className="modal-accords">
              {product.accords.map((accord) => (
                <span key={accord}>{accord}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
