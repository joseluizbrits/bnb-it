import Contact from "@/sections/Contact";
import Hero from "@/sections/Hero";
import Services from "@/sections/Services";

export default function Home() {
  return (
    <main className="container">
      <Hero />
      <Services />
      <Contact />
    </main>
  );
}
