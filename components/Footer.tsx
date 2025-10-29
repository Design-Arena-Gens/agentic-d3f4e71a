export function Footer() {
  return (
    <footer
      style={{
        background: "#111019",
        color: "#ffffff",
        padding: "80px 6vw",
        marginTop: "6rem",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "2.8rem",
        }}
      >
        <div>
          <h2
            style={{
              fontFamily: "var(--font-playfair-display)",
              fontSize: "2rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
            }}
          >
            H&amp;H Fragrances
          </h2>
          <p
            style={{
              marginTop: "1.2rem",
              color: "rgba(255,255,255,0.7)",
              maxWidth: "320px",
              fontSize: "0.95rem",
            }}
          >
            Maison de parfum crafting couture fragrances since 1989. Haute parfumerie,
            sustainable sourcing, bespoke finishing.
          </p>
        </div>
        <FooterColumn
          title="Explore"
          items={["Shop", "Our Story", "Atelier", "Journal", "Bespoke Services"]}
        />
        <FooterColumn
          title="Customer Care"
          items={["Contact", "Shipping & Returns", "Fragrance Concierge", "Gift Cards"]}
        />
        <div>
          <h3 style={{ fontSize: "1.1rem", textTransform: "uppercase", letterSpacing: "0.12em" }}>
            Join the Maison
          </h3>
          <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.95rem", marginTop: "1rem" }}>
            Receive exclusive previews of atelier releases and invitations to private
            scent salons.
          </p>
          <form
            style={{
              marginTop: "1.4rem",
              display: "grid",
              gridTemplateColumns: "1fr auto",
              borderRadius: "999px",
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.25)",
            }}
          >
            <input
              type="email"
              placeholder="Email address"
              required
              style={{
                background: "transparent",
                border: "none",
                padding: "0.9rem 1.2rem",
                color: "#ffffff",
                fontSize: "0.95rem",
              }}
            />
            <button
              type="submit"
              style={{
                padding: "0 1.6rem",
                background: "linear-gradient(135deg, rgba(103,58,183,0.85), rgba(255,215,0,0.85))",
                border: "none",
                color: "#111019",
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                cursor: "pointer",
              }}
            >
              Join
            </button>
          </form>
        </div>
      </div>
      <div
        style={{
          marginTop: "3rem",
          borderTop: "1px solid rgba(255,255,255,0.1)",
          paddingTop: "1.5rem",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "1rem",
          fontSize: "0.8rem",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.5)",
        }}
      >
        <span>© {new Date().getFullYear()} H&amp;H Fragrances. All rights reserved.</span>
        <span>Crafted in Grasse &amp; Paris</span>
      </div>
    </footer>
  );
}

function FooterColumn({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3
        style={{
          fontSize: "1.1rem",
          textTransform: "uppercase",
          letterSpacing: "0.12em",
          marginBottom: "1.3rem",
        }}
      >
        {title}
      </h3>
      <div
        style={{
          display: "grid",
          gap: "0.75rem",
          color: "rgba(255,255,255,0.7)",
          fontSize: "0.95rem",
        }}
      >
        {items.map((item) => (
          <a href="#" key={item} className="accent-link" style={{ color: "inherit" }}>
            {item}
          </a>
        ))}
      </div>
    </div>
  );
}
