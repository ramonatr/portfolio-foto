import { useLanguage } from '../i18n/LanguageContext';
import SnakeGame from './SnakeGame';

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="contact">
      <h2 className="section__title">{t.contact.sectionTitle}</h2>
      <p className="contact__desc">{t.contact.description}</p>
      <div className="contact__buttons">
        <a
          href="mailto:ramona.treittinger@web.de"
          className="contact__btn contact__btn--primary"
        >
          ✉ {t.contact.email}
        </a>
      </div>
      <SnakeGame />
    </section>
  );
}
