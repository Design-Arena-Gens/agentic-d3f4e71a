const articles = [
  {
    title: "The Ceremony of Scent Layering",
    excerpt:
      "Elevate your daily ritual with a three-step scent wardrobe that moves from luminous mornings to seductive evenings.",
    readingTime: "7 min read",
    href: "#",
    category: "Rituals",
    date: "Aug 18, 2024",
  },
  {
    title: "Inside the Atelier: Crafting Étoile Noire",
    excerpt:
      "Go behind the velvet curtain to experience the orchestration of rare absolutes that shape our signature fragrance.",
    readingTime: "5 min read",
    href: "#",
    category: "Maison",
    date: "Jul 02, 2024",
  },
  {
    title: "Sustainable Sourcing with Vanilla Cooperatives",
    excerpt:
      "Meet the farmers redefining ethical perfumery through regenerative agriculture and artisan distillation.",
    readingTime: "6 min read",
    href: "#",
    category: "Sourcing",
    date: "May 26, 2024",
  },
];

export function BlogSection() {
  return (
    <section id="blog">
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <h2 className="section-heading">Journal</h2>
        <p className="section-subheading">
          Discover olfactive stories, artisans of the Maison, and seasonal rituals to
          harmonize scent and space.
        </p>
        <div className="blog-grid">
          {articles.map((article) => (
            <article key={article.title} className="blog-card">
              <div className="blog-meta">
                <span>{article.category}</span>
                <span>{article.date}</span>
              </div>
              <h3>{article.title}</h3>
              <p>{article.excerpt}</p>
              <div className="blog-foot">
                <span>{article.readingTime}</span>
                <a className="accent-link" href={article.href}>
                  Continue reading →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
