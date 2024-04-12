import About from "@/sections/About";
import Hero from "@/sections/Hero";
import Solutions from "@/sections/Solutions";

export default function Home() {
  return (
    <main className="container">
      <Hero />
      <Solutions />
      <About />
    </main>
  );
}
