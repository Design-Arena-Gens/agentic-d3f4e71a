"use client";

import { useEffect, useState } from "react";

export function Hero() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setOffset(window.scrollY * 0.3);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        height: "100vh",
        padding: 0,
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "url('https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=2000&q=80')",
          backgroundSize: "cover",
          backgroundPosition: `center ${offset * 0.4}px`,
          transition: "background-position 0.1s linear",
          transform: `scale(1.05)`,
          filter: "brightness(0.72)",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(115deg, rgba(18, 18, 18, 0.68) 0%, rgba(18,18,18,0.2) 65%, rgba(18,18,18,0) 100%)",
        }}
      />
      <div
        style={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: "100%",
          padding: "0 10vw",
          color: "#ffffff",
        }}
      >
        <p
          style={{
            letterSpacing: "0.48em",
            textTransform: "uppercase",
            fontSize: "0.95rem",
            marginBottom: "1.5rem",
            color: "rgba(255,255,255,0.8)",
          }}
        >
          Maison de Parfum
        </p>
        <h1
          style={{
            fontSize: "clamp(3rem, 6vw, 4.5rem)",
            maxWidth: "720px",
            lineHeight: 1.1,
            marginBottom: "1.75rem",
            color: "#ffffff",
          }}
        >
          Étoile Noire — a luminous, midnight bouquet for the modern muse.
        </h1>
        <p
          style={{
            fontFamily: "var(--font-lato)",
            fontSize: "1.1rem",
            maxWidth: "560px",
            color: "rgba(255,255,255,0.78)",
            marginBottom: "2.5rem",
          }}
        >
          Crafted with Madagascan vanilla, smoked oud, and Sicilian bergamot, Étoile
          Noire is a nocturnal symphony that lingers like a whispered secret.
        </p>
        <div style={{ display: "flex", gap: "1.2rem" }}>
          <a
            href="#shop"
            style={{
              padding: "0.95rem 2.6rem",
              borderRadius: "999px",
              background:
                "linear-gradient(135deg, rgba(103,58,183,0.85), rgba(255,215,0,0.85))",
              color: "#ffffff",
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              fontSize: "0.78rem",
              fontWeight: 600,
              boxShadow: "0 18px 32px rgba(20, 17, 34, 0.35)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            className="hero-cta"
          >
            Discover the Collection
          </a>
          <a
            href="#story"
            style={{
              padding: "0.95rem 2.6rem",
              borderRadius: "999px",
              border: "1px solid rgba(255,255,255,0.5)",
              color: "#ffffff",
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              fontSize: "0.78rem",
              fontWeight: 600,
              background: "rgba(0,0,0,0.25)",
              backdropFilter: "blur(6px)",
              transition: "transform 0.3s ease, border-color 0.3s ease",
            }}
            className="hero-outline"
          >
            The H&amp;H Ritual
          </a>
        </div>
      </div>
    </section>
  );
}
