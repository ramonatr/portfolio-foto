import { Link, useParams } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import { smallProjects } from '../data/projects';
import Footer from '../components/Footer';
import MasonryGallery from '../components/MasonryGallery';
import { useEffect } from 'react';
import { useInView } from '../hooks/useInView';

export default function SmallProjectPage() {
  const { id } = useParams<{ id: string }>();
  const { language, t } = useLanguage();
  const [ref, isVisible] = useInView<HTMLElement>();
  const project = smallProjects[language].find((item) => item.id === id);
  const nextProject = project?.nextProject
    ? smallProjects[language].find((item) => item.id === project.nextProject)
    : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="project-detail" style={{ textAlign: 'center', padding: '10rem 2rem' }}>
        <h2>Project not found</h2>
        <Link to="/" style={{ color: 'var(--color-accent)', marginTop: '1rem', display: 'inline-block' }}>
          {t.smallProjects.backToProjects}
        </Link>
      </div>
    );
  }

  return (
    <div className="project-detail" ref={ref}>
      <div className={`project-detail__header fade-in${isVisible ? ' fade-in--visible' : ''}`}>
        <Link to="/" className="project-detail__back">
          {t.smallProjects.backToProjects}
        </Link>
        <p className="project-detail__category">{project.category}</p>
        <h1 className="project-detail__title">{project.title}</h1>
        <p className="project-detail__overview">{project.overview}</p>
      </div>

      <div className="project-detail__body">
        <div className={`project-detail__hero-img fade-in${isVisible ? ' fade-in--visible' : ''}`} style={{ transitionDelay: '0.1s' }}>
          {project.thumbnail ? (
            <img src={project.thumbnail} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          ) : (
            <span>{project.title.split('—')[0].trim()}</span>
          )}
        </div>

        <div className={`project-detail__meta fade-in${isVisible ? ' fade-in--visible' : ''}`} style={{ transitionDelay: '0.2s' }}>
          <div className="project-detail__meta-item">
            <h4>{t.smallProjects.overview}</h4>
            <p>{project.description || project.overview}</p>
          </div>
          <div className="project-detail__meta-item">
            <h4>{t.smallProjects.tags}</h4>
            <p>{project.tags?.join(' · ') || '—'}</p>
          </div>
          {project.link && (
            <div className="project-detail__meta-item">
              <h4>{t.smallProjects.link}</h4>
              <p>
                <a href={project.link.url} target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>
                  {project.link.label || project.link.url}
                </a>
              </p>
            </div>
          )}
        </div>

        {project.gallery && project.gallery.length > 0 && (
          <div className={`project-detail__section fade-in${isVisible ? ' fade-in--visible' : ''}`} style={{ transitionDelay: '0.3s' }}>
            <h3>Gallery</h3>
            <MasonryGallery images={project.gallery.map((img) => ({ ...img, category: 'Gallery' }))} categories={['Gallery']} />
          </div>
        )}
      </div>
      
      {nextProject && (
        <div className={`project-detail__next fade-in${isVisible ? ' fade-in--visible' : ''}`} style={{ padding: '3rem 2rem', textAlign: 'center', borderTop: '1px solid var(--color-border)', transitionDelay: '0.6s' }}>
        <p style={{ color: 'var(--color-text-secondary)', marginBottom: '1rem' }}>Next Project</p>
        <Link to={`/small-project/${nextProject.id}`} style={{ display: 'inline-block', color: 'var(--color-accent)', fontSize: '1.25rem', fontWeight: '600' }}>
          {nextProject.title} →
        </Link>
        </div>
      )}

      <Footer />
    </div>
  );
}
