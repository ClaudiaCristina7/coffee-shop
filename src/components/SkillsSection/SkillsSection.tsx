import './SkillsSection.css';

const stats = [
  { value: '400', label: 'Online Store' },
  { value: '80', label: 'Product Types' },
  { value: '400', label: 'Happy Customers' },
  { value: '10', label: 'Years Experience' },
];

export default function SkillsSection() {
  return (
    <section className="skills-section">
      <div className="skills-section__overlay" />
      <div className="skills-section__inner">
        <h2 className="skills-section__title">Our Skills</h2>
        <div className="skills-section__grid">
          {stats.map((stat) => (
            <div className="skills-section__box" key={stat.label}>
              <span className="skills-section__value">{stat.value}</span>
              <span className="skills-section__label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
