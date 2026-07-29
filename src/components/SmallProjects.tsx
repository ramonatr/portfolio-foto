import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import { useInView } from '../hooks/useInView';
import { smallProjects } from '../data/projects';

export default function SmallProjects() {
  const { language, t } = useLanguage();
  const [ref, isVisible] = useInView<HTMLElement>();
  const smallProjectList = smallProjects[language];

  if (smallProjectList.length === 0) {
    return null;
  }

  return (
    <section id="small-projects" className="section" ref={ref}>
      <div className={`fade-in${isVisible ? ' fade-in--visible' : ''}`}>
        <h2 className="section__title">{t.smallProjects.sectionTitle}</h2>
        <p className="section__subtitle">{t.smallProjects.sectionSubtitle}</p>

        <div className="small-projects__grid">
          {smallProjectList.map((project, i) => (
            <Link
              key={project.id}
              to={`/small-project/${project.id}`}
              className={`small-project-card${isVisible ? ' small-project-card--visible' : ''}`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="small-project-card__glow" />
              <div className="small-project-card__thumb">
                {project.thumbnail ? (
                  <img src={project.thumbnail} alt={project.title} className="small-project-card__thumb-img" />
                ) : (
                  <div
                    className="small-project-card__thumb-placeholder"
                    style={{ color: `${project.color}33`, background: `linear-gradient(135deg, ${project.color}15, ${project.color}30)` }}
                  >
                    {project.title.split('—')[0].trim()}
                  </div>
                )}
                <span className="small-project-card__year">{project.year}</span>
              </div>

              <div className="small-project-card__info">
                <p className="small-project-card__category">{project.category}</p>
                <h3 className="small-project-card__title">{project.title}</h3>
                <p className="small-project-card__overview">{project.overview}</p>
                <span className="small-project-card__link">{t.smallProjects.viewProject} →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
