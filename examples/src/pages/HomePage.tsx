import { Link } from 'react-router-dom';
import { useLanguage, type Language } from '../contexts/LanguageContext';
import './Pages.css';

export default function HomePage() {
    const { language, setLanguage, t } = useLanguage();

    const handleLanguageChange = (lang: Language) => {
        setLanguage(lang);
    };

    return (
        <div className="home-page">
            {/* Header with Logo and Links */}
            <header className="page-header">
                <div>
                    <div className="header-left">
                        <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Mabesi React Components" className="header-logo" />
                        <h1 className="header-title">{t('header.title')}</h1>
                    </div>
                    <div className="header-right">
                        <a href="https://github.com/mabesi/react-components" target="_blank" rel="noopener noreferrer" className="header-link">
                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                            </svg>
                            <span>{t('header.github')}</span>
                        </a>
                        <a href="https://www.npmjs.com/package/@mabesi/react-components" target="_blank" rel="noopener noreferrer" className="header-link npm-link">
                            <img src={`${import.meta.env.BASE_URL}npm-icon.png`} alt="NPM" />
                            <span>{t('header.npm')}</span>
                        </a>
                        <div className="language-switcher">
                            <button
                                className={`lang-button ${language === 'pt' ? 'active' : ''}`}
                                onClick={() => handleLanguageChange('pt')}
                                title="Português"
                            >
                                <img src={`${import.meta.env.BASE_URL}flag-pt.png`} alt="PT" />
                            </button>
                            <button
                                className={`lang-button ${language === 'en' ? 'active' : ''}`}
                                onClick={() => handleLanguageChange('en')}
                                title="English"
                            >
                                <img src={`${import.meta.env.BASE_URL}flag-en.png`} alt="EN" />
                            </button>
                            <button
                                className={`lang-button ${language === 'es' ? 'active' : ''}`}
                                onClick={() => handleLanguageChange('es')}
                                title="Español"
                            >
                                <img src={`${import.meta.env.BASE_URL}flag-es.png`} alt="ES" />
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Library Description */}
            <section className="library-description">
                <p>{t('library.description')}</p>
            </section>

            {/* Features Section */}
            <section className="features-section">
                <div className="features-grid">
                    <div className="feature-card">
                        <img src={`${import.meta.env.BASE_URL}icon-components.png`} alt="Modern Components" className="feature-icon" />
                        <h3>{t('features.modern.title')}</h3>
                        <ul>
                            <li>{t('features.modern.item1')}</li>
                            <li>{t('features.modern.item2')}</li>
                            <li>{t('features.modern.item3')}</li>
                            <li>{t('features.modern.item4')}</li>
                        </ul>
                    </div>
                    <div className="feature-card">
                        <img src={`${import.meta.env.BASE_URL}icon-typescript.png`} alt="TypeScript First" className="feature-icon" />
                        <h3>{t('features.typescript.title')}</h3>
                        <ul>
                            <li>{t('features.typescript.item1')}</li>
                            <li>{t('features.typescript.item2')}</li>
                            <li>{t('features.typescript.item3')}</li>
                            <li>{t('features.typescript.item4')}</li>
                        </ul>
                    </div>
                    <div className="feature-card">
                        <img src={`${import.meta.env.BASE_URL}icon-themes.png`} alt="Customizable Themes" className="feature-icon" />
                        <h3>{t('features.themes.title')}</h3>
                        <ul>
                            <li>{t('features.themes.item1')}</li>
                            <li>{t('features.themes.item2')}</li>
                            <li>{t('features.themes.item3')}</li>
                            <li>{t('features.themes.item4')}</li>
                        </ul>
                    </div>
                    <div className="feature-card">
                        <img src={`${import.meta.env.BASE_URL}icon-i18n.png`} alt="Internationalization" className="feature-icon" />
                        <h3>{t('features.i18n.title')}</h3>
                        <ul>
                            <li>{t('features.i18n.item1')}</li>
                            <li>{t('features.i18n.item2')}</li>
                            <li>{t('features.i18n.item3')}</li>
                            <li>{t('features.i18n.item4')}</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Components Gallery */}
            <section className="gallery-section">
                <h2 className="section-title">{t('gallery.title')}</h2>
                <p style={{ textAlign: 'center', marginTop: '-10px', marginBottom: '30px' }}>
                    <a
                        href="https://github.com/mabesi/react-components/tree/main/docs"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            color: '#0066cc',
                            textDecoration: 'none',
                            fontSize: '0.95rem',
                            fontWeight: '500'
                        }}
                    >
                        📚 {language === 'pt' ? 'Documentação Completa' : language === 'es' ? 'Documentación Completa' : 'Complete Documentation'} →
                    </a>
                </p>
                <div className="cards-grid">
                    <Link to="/accordion" className="card">
                        <div className="card-icon">📂</div>
                        <h2 className="card-title">Accordion</h2>
                        <p className="card-description">{t('component.accordion.description')}</p>
                        <ul className="card-features">
                            <li>{t('component.accordion.feature1')}</li>
                            <li>{t('component.accordion.feature2')}</li>
                            <li>{t('component.accordion.feature3')}</li>
                            <li>{t('component.accordion.feature4')}</li>
                        </ul>
                        <span className="card-link">{t('gallery.viewExamples')}</span>
                    </Link>

                    <Link to="/alert" className="card">
                        <div className="card-icon">⚠️</div>
                        <h2 className="card-title">Alert</h2>
                        <p className="card-description">{t('component.alert.description')}</p>
                        <ul className="card-features">
                            <li>{t('component.alert.feature1')}</li>
                            <li>{t('component.alert.feature2')}</li>
                            <li>{t('component.alert.feature3')}</li>
                            <li>{t('component.alert.feature4')}</li>
                        </ul>
                        <span className="card-link">{t('gallery.viewExamples')}</span>
                    </Link>

                    <Link to="/avatar" className="card">
                        <div className="card-icon">👤</div>
                        <h2 className="card-title">Avatar</h2>
                        <p className="card-description">{t('component.avatar.description')}</p>
                        <ul className="card-features">
                            <li>{t('component.avatar.feature1')}</li>
                            <li>{t('component.avatar.feature2')}</li>
                            <li>{t('component.avatar.feature3')}</li>
                            <li>{t('component.avatar.feature4')}</li>
                        </ul>
                        <span className="card-link">{t('gallery.viewExamples')}</span>
                    </Link>

                    <Link to="/badge" className="card">
                        <div className="card-icon">📛</div>
                        <h2 className="card-title">Badge</h2>
                        <p className="card-description">{t('component.badge.description')}</p>
                        <ul className="card-features">
                            <li>{t('component.badge.feature1')}</li>
                            <li>{t('component.badge.feature2')}</li>
                            <li>{t('component.badge.feature3')}</li>
                            <li>{t('component.badge.feature4')}</li>
                        </ul>
                        <span className="card-link">{t('gallery.viewExamples')}</span>
                    </Link>

                    <Link to="/breadcrumb" className="card">
                        <div className="card-icon">🥖</div>
                        <h2 className="card-title">Breadcrumb</h2>
                        <p className="card-description">{t('component.breadcrumb.description')}</p>
                        <ul className="card-features">
                            <li>{t('component.breadcrumb.feature1')}</li>
                            <li>{t('component.breadcrumb.feature2')}</li>
                            <li>{t('component.breadcrumb.feature3')}</li>
                            <li>{t('component.breadcrumb.feature4')}</li>
                        </ul>
                        <span className="card-link">{t('gallery.viewExamples')}</span>
                    </Link>

                    <Link to="/button" className="card">
                        <div className="card-icon">🔘</div>
                        <h2 className="card-title">Button</h2>
                        <p className="card-description">{t('component.button.description')}</p>
                        <ul className="card-features">
                            <li>{t('component.button.feature1')}</li>
                            <li>{t('component.button.feature2')}</li>
                            <li>{t('component.button.feature3')}</li>
                            <li>{t('component.button.feature4')}</li>
                        </ul>
                        <span className="card-link">{t('gallery.viewExamples')}</span>
                    </Link>

                    <Link to="/card" className="card">
                        <div className="card-icon">🎴</div>
                        <h2 className="card-title">Card</h2>
                        <p className="card-description">{t('component.card.description')}</p>
                        <ul className="card-features">
                            <li>{t('component.card.feature1')}</li>
                            <li>{t('component.card.feature2')}</li>
                            <li>{t('component.card.feature3')}</li>
                            <li>{t('component.card.feature4')}</li>
                        </ul>
                        <span className="card-link">{t('gallery.viewExamples')}</span>
                    </Link>

                    <Link to="/checkbox" className="card">
                        <div className="card-icon">☑️</div>
                        <h2 className="card-title">Checkbox</h2>
                        <p className="card-description">{t('component.checkbox.description')}</p>
                        <ul className="card-features">
                            <li>{t('component.checkbox.feature1')}</li>
                            <li>{t('component.checkbox.feature2')}</li>
                            <li>{t('component.checkbox.feature3')}</li>
                            <li>{t('component.checkbox.feature4')}</li>
                        </ul>
                        <span className="card-link">{t('gallery.viewExamples')}</span>
                    </Link>

                    <Link to="/datatable" className="card">
                        <div className="card-icon">📊</div>
                        <h2 className="card-title">DataTable</h2>
                        <p className="card-description">{t('component.datatable.description')}</p>
                        <ul className="card-features">
                            <li>{t('component.datatable.feature1')}</li>
                            <li>{t('component.datatable.feature2')}</li>
                            <li>{t('component.datatable.feature3')}</li>
                            <li>{t('component.datatable.feature4')}</li>
                        </ul>
                        <span className="card-link">{t('gallery.viewExamples')}</span>
                    </Link>

                    <Link to="/drawer" className="card">
                        <div className="card-icon">🚪</div>
                        <h2 className="card-title">Drawer</h2>
                        <p className="card-description">{t('component.drawer.description')}</p>
                        <ul className="card-features">
                            <li>{t('component.drawer.feature1')}</li>
                            <li>{t('component.drawer.feature2')}</li>
                            <li>{t('component.drawer.feature3')}</li>
                            <li>{t('component.drawer.feature4')}</li>
                        </ul>
                        <span className="card-link">{t('gallery.viewExamples')}</span>
                    </Link>

                    <Link to="/dynamicform" className="card">
                        <div className="card-icon">📝</div>
                        <h2 className="card-title">DynamicForm</h2>
                        <p className="card-description">{t('component.dynamicform.description')}</p>
                        <ul className="card-features">
                            <li>{t('component.dynamicform.feature1')}</li>
                            <li>{t('component.dynamicform.feature2')}</li>
                            <li>{t('component.dynamicform.feature3')}</li>
                            <li>{t('component.dynamicform.feature4')}</li>
                        </ul>
                        <span className="card-link">{t('gallery.viewExamples')}</span>
                    </Link>

                    <Link to="/input" className="card">
                        <div className="card-icon">⌨️</div>
                        <h2 className="card-title">Input</h2>
                        <p className="card-description">{t('component.input.description')}</p>
                        <ul className="card-features">
                            <li>{t('component.input.feature1')}</li>
                            <li>{t('component.input.feature2')}</li>
                            <li>{t('component.input.feature3')}</li>
                            <li>{t('component.input.feature4')}</li>
                        </ul>
                        <span className="card-link">{t('gallery.viewExamples')}</span>
                    </Link>

                    <Link to="/modal" className="card">
                        <div className="card-icon">🪟</div>
                        <h2 className="card-title">Modal</h2>
                        <p className="card-description">{t('component.modal.description')}</p>
                        <ul className="card-features">
                            <li>{t('component.modal.feature1')}</li>
                            <li>{t('component.modal.feature2')}</li>
                            <li>{t('component.modal.feature3')}</li>
                            <li>{t('component.modal.feature4')}</li>
                        </ul>
                        <span className="card-link">{t('gallery.viewExamples')}</span>
                    </Link>

                    <Link to="/progress" className="card">
                        <div className="card-icon">🔋</div>
                        <h2 className="card-title">ProgressBar</h2>
                        <p className="card-description">{t('component.progress.description')}</p>
                        <ul className="card-features">
                            <li>{t('component.progress.feature1')}</li>
                            <li>{t('component.progress.feature2')}</li>
                            <li>{t('component.progress.feature3')}</li>
                            <li>{t('component.progress.feature4')}</li>
                        </ul>
                        <span className="card-link">{t('gallery.viewExamples')}</span>
                    </Link>

                    <Link to="/select" className="card">
                        <div className="card-icon">🔽</div>
                        <h2 className="card-title">Select</h2>
                        <p className="card-description">{t('component.select.description')}</p>
                        <ul className="card-features">
                            <li>{t('component.select.feature1')}</li>
                            <li>{t('component.select.feature2')}</li>
                            <li>{t('component.select.feature3')}</li>
                            <li>{t('component.select.feature4')}</li>
                        </ul>
                        <span className="card-link">{t('gallery.viewExamples')}</span>
                    </Link>

                    <Link to="/skeleton" className="card">
                        <div className="card-icon">💀</div>
                        <h2 className="card-title">Skeleton</h2>
                        <p className="card-description">{t('component.skeleton.description')}</p>
                        <ul className="card-features">
                            <li>{t('component.skeleton.feature1')}</li>
                            <li>{t('component.skeleton.feature2')}</li>
                            <li>{t('component.skeleton.feature3')}</li>
                            <li>{t('component.skeleton.feature4')}</li>
                        </ul>
                        <span className="card-link">{t('gallery.viewExamples')}</span>
                    </Link>

                    <Link to="/spinner" className="card">
                        <div className="card-icon">↻</div>
                        <h2 className="card-title">Spinner</h2>
                        <p className="card-description">{t('component.spinner.description')}</p>
                        <ul className="card-features">
                            <li>{t('component.spinner.feature1')}</li>
                            <li>{t('component.spinner.feature2')}</li>
                            <li>{t('component.spinner.feature3')}</li>
                            <li>{t('component.spinner.feature4')}</li>
                        </ul>
                        <span className="card-link">{t('gallery.viewExamples')}</span>
                    </Link>

                    <Link to="/switch" className="card">
                        <div className="card-icon">🔛</div>
                        <h2 className="card-title">Switch</h2>
                        <p className="card-description">{t('component.switch.description')}</p>
                        <ul className="card-features">
                            <li>{t('component.switch.feature1')}</li>
                            <li>{t('component.switch.feature2')}</li>
                            <li>{t('component.switch.feature3')}</li>
                            <li>{t('component.switch.feature4')}</li>
                        </ul>
                        <span className="card-link">{t('gallery.viewExamples')}</span>
                    </Link>

                    <Link to="/tabs" className="card">
                        <div className="card-icon">📑</div>
                        <h2 className="card-title">Tabs</h2>
                        <p className="card-description">{t('component.tabs.description')}</p>
                        <ul className="card-features">
                            <li>{t('component.tabs.feature1')}</li>
                            <li>{t('component.tabs.feature2')}</li>
                            <li>{t('component.tabs.feature3')}</li>
                            <li>{t('component.tabs.feature4')}</li>
                        </ul>
                        <span className="card-link">{t('gallery.viewExamples')}</span>
                    </Link>

                    <Link to="/toast" className="card">
                        <div className="card-icon">🍞</div>
                        <h2 className="card-title">Toast</h2>
                        <p className="card-description">{t('component.toast.description')}</p>
                        <ul className="card-features">
                            <li>{t('component.toast.feature1')}</li>
                            <li>{t('component.toast.feature2')}</li>
                            <li>{t('component.toast.feature3')}</li>
                            <li>{t('component.toast.feature4')}</li>
                        </ul>
                        <span className="card-link">{t('gallery.viewExamples')}</span>
                    </Link>

                    <Link to="/tooltip" className="card">
                        <div className="card-icon">💬</div>
                        <h2 className="card-title">Tooltip</h2>
                        <p className="card-description">{t('component.tooltip.description')}</p>
                        <ul className="card-features">
                            <li>{t('component.tooltip.feature1')}</li>
                            <li>{t('component.tooltip.feature2')}</li>
                            <li>{t('component.tooltip.feature3')}</li>
                            <li>{t('component.tooltip.feature4')}</li>
                        </ul>
                        <span className="card-link">{t('gallery.viewExamples')}</span>
                    </Link>
                </div>
            </section>

            {/* Footer */}
            <footer className="page-footer">
                <div className="footer-links">
                    <a href="https://apps.mabesi.dev/donate" target="_blank" rel="noopener noreferrer">
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
                        </svg>
                        <span>{t('footer.support')}</span>
                    </a>
                    <a href="https://github.com/mabesi" target="_blank" rel="noopener noreferrer">
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                        </svg>
                        <span>{t('header.github')}</span>
                    </a>
                    <a href="mailto:mabesiapps@gmail.com">
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path>
                        </svg>
                        <span>{t('footer.contact')}</span>
                    </a>
                </div>
                <div className="footer-info">
                    <p>
                        {t('footer.madeWith')} ❤️ {t('footer.by')}{' '}
                        <a href="https://apps.mabesi.dev" target="_blank" rel="noopener noreferrer">
                            Mabesi Apps
                        </a>
                    </p>
                    <p style={{ marginTop: '0.5rem', fontSize: '0.9rem' }}>
                        © 2025 Mabesi Apps. {t('footer.license')}{' '}
                        <a href="https://opensource.org/license/MIT" target="_blank" rel="noopener noreferrer">
                            MIT License
                        </a>
                        .
                    </p>
                </div>
            </footer>
        </div >
    );
}
