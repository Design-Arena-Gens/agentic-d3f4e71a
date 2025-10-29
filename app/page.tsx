import { BlogSection } from "@/components/BlogSection";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { IngredientsSection } from "@/components/IngredientsSection";
import { Navbar } from "@/components/Navbar";
import { ProductShowcase } from "@/components/ProductShowcase";
import { StorySection } from "@/components/StorySection";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main
        style={{
          marginTop: "var(--nav-height)",
          display: "flex",
          flexDirection: "column",
          gap: "0",
        }}
      >
        <Hero />
        <ProductShowcase />
        <StorySection />
        <IngredientsSection />
        <BlogSection />
      </main>
      <Footer />
    </>
  );
}
