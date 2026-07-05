import WelcomeIntro from '../../components/WelcomeIntro/WelcomeIntro';
import AboutSection from '../../components/AboutSection/AboutSection';
import BestMenus from '../../components/BestMenus/BestMenus';
import TaglineBanner from '../../components/TaglineBanner/TaglineBanner';
import './AboutPage.css';

const ABOUT_MENU_TABS = ['Coffee', 'Noncoffee', 'Signature', 'Iced Coffee', 'Expresso'];

export default function AboutPage() {
  return (
    <main className="about-page">
      {/* Imaginea 4: textul de bun venit, apare primul */}
      <WelcomeIntro />

      {/* Imaginea 3: About + Best Menus + Cafeteria/Order Today, apare al doilea */}
      <AboutSection />
      <BestMenus variant="dark" tabs={ABOUT_MENU_TABS} />
      <TaglineBanner />
    </main>
  );
}
