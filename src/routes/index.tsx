import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Essence } from "@/components/site/Essence";
import { Services } from "@/components/site/Services";
import { Chromo } from "@/components/site/Chromo";
import { Gallery } from "@/components/site/Gallery";
import { Location } from "@/components/site/Location";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { WhatsFab } from "@/components/site/WhatsFab";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen relative">
      <Header />
      <main>
        <Hero />
        <Essence />
        <Services />
        <Chromo />
        <Gallery />
        <Location />
        <Contact />
      </main>
      <Footer />
      <WhatsFab />
    </div>
  );
}
