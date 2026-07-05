import OrderTodaySection from '../../components/OrderTodaySection/OrderTodaySection';
import AboutSection from '../../components/AboutSection/AboutSection';
import SkillsSection from '../../components/SkillsSection/SkillsSection';
import BestMenus from '../../components/BestMenus/BestMenus';
import Gallery from '../../components/Gallery/Gallery';
import './HomePage.css';

export default function HomePage() {
  return (
    <main className="home-page">
      {/* Imaginea 1: Order Today + About + Skills + Best Menus */}
      <OrderTodaySection />
      <AboutSection />
      <SkillsSection />
      <BestMenus variant="tan" />

      {/* Imaginea 2: Galerie (Footer-ul e randat global în App.tsx) */}
      <div id="gallery">
        <Gallery />
      </div>
    </main>
  );
}
