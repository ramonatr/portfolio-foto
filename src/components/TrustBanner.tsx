import { useLanguage } from '../i18n/LanguageContext';

const SOFTWARE = [
  'Photoshop',
  'Illustrator',
  'InDesign',
  'AfterEffects',
  'Figma',
  'LightroomClassic',
  'Miro',
  'Notion',
  'Framer',
  'Houdini FX',
  'Microsoft Office',
];

const LANGUAGES = [
  'Java',
  'HTML',
  'CSS',
  'JavaScript',
  'PHP',
  'Arduino',
];

export default function TrustBanner() {
  const { language } = useLanguage();
  const softwareLabel = language === 'de' ? 'Übersicht von Software, die ich kann' : 'Overview of software I know';
  const languageLabel = language === 'de' ? 'Übersicht von Programmiersprachen, die ich kenne' : 'Overview of programming languages I know';

  const softwareItems = [...SOFTWARE, ...SOFTWARE, ...SOFTWARE];
  const languageItems = [...LANGUAGES, ...LANGUAGES, ...LANGUAGES];

  return (
    <section className="trust-banner">
      <p className="trust-banner__label">{softwareLabel}</p>
      <div className="trust-banner__track">
        <div className="trust-banner__marquee">
          {softwareItems.map((item, i) => (
            <span key={`software-${i}`} className="trust-banner__item">
              {item}
            </span>
          ))}
        </div>
      </div>
      <p className="trust-banner__label trust-banner__label--second">{languageLabel}</p>
      <div className="trust-banner__track">
        <div className="trust-banner__marquee">
          {languageItems.map((item, i) => (
            <span key={`language-${i}`} className="trust-banner__item">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
