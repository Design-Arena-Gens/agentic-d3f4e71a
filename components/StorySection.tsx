import Image from "next/image";

export function StorySection() {
  return (
    <section
      id="story"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: "3.5rem",
        alignItems: "center",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          paddingBottom: "120%",
          borderRadius: "36px",
          overflow: "hidden",
          boxShadow: "0 28px 68px rgba(35, 26, 64, 0.18)",
        }}
      >
        <Image
          src="https://images.unsplash.com/photo-1520854221050-0f4caff449fb?auto=format&fit=crop&w=1400&q=80"
          alt="H&H founders in fragrance atelier"
          fill
          sizes="(min-width: 1200px) 45vw, 90vw"
          style={{ objectFit: "cover" }}
        />
        <div
          style={{
            position: "absolute",
            inset: "auto 24px 24px 24px",
            padding: "1.6rem",
            borderRadius: "24px",
            background: "rgba(17, 15, 23, 0.75)",
            color: "#ffffff",
            fontSize: "0.9rem",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
          }}
        >
          Est. 1989 — Grasse &amp; Paris
        </div>
      </div>
      <div>
        <h2 className="section-heading">Our Story</h2>
        <p className="section-subheading">
          Founded by haute-couture artisans Hélène and Hugo Montclair, H&amp;H
          Fragrances fuses French perfumery heritage with contemporary artistry.
          Each parfum is composed in our Maison de Parfum in Grasse before being
          hand-finished in Paris.
        </p>
        <div
          style={{
            display: "grid",
            gap: "1.8rem",
          }}
        >
          <StoryHighlight
            title="Craftsmanship"
            description="Our atelier blends cold enfleurage, brass maceration, and modern micro-distillation to capture the rarest botanicals without compromise."
          />
          <StoryHighlight
            title="Sustainable Sourcing"
            description="We partner with regenerative farms across Madagascar, Morocco, and Sicily to ensure traceable, ethical sourcing of every essence."
          />
          <StoryHighlight
            title="Bespoke Engraving"
            description="Complimentary engraving and velvet encasement allow every bottle of H&H to become an heirloom object."
          />
        </div>
      </div>
    </section>
  );
}

function StoryHighlight({ title, description }: { title: string; description: string }) {
  return (
    <div
      style={{
        borderLeft: "3px solid rgba(103,58,183,0.4)",
        paddingLeft: "1.4rem",
      }}
    >
      <h3
        style={{
          fontSize: "1.5rem",
          marginBottom: "0.6rem",
        }}
      >
        {title}
      </h3>
      <p style={{ color: "#4a4a4a", fontSize: "1rem" }}>{description}</p>
    </div>
  );
}
