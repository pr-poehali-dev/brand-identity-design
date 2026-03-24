import { useEffect, useState } from "react";
import { BrandNav, BrandHero } from "@/components/brand/BrandHeroNav";
import {
  SectionManifest,
  SectionCollection,
  SectionMaterials,
  SectionPalette,
  SectionPosters,
  SectionProcess,
} from "@/components/brand/BrandSections";
import BrandFooter from "@/components/brand/BrandFooter";

export default function Index() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div style={{ backgroundColor: "var(--ivory)" }}>
      <BrandNav scrolled={scrolled} onNavClick={scrollTo} />
      <BrandHero />
      <SectionManifest />
      <SectionCollection />
      <SectionMaterials />
      <SectionPalette />
      <SectionPosters />
      <SectionProcess />
      <BrandFooter />
    </div>
  );
}
