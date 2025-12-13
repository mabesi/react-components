import { Link } from 'react-router-dom';
import './HomePage.css';

export default function HomePage() {
    return (
        <div className="home-page">
            <header>
                <h1>📦 Mabesi React Components</h1>
                <p className="subtitle">Interactive Examples & Demonstrations</p>
            </header>

            <div className="cards-grid">
                <Link to="/dynamicform" className="card">
                    <div className="card-icon">📝</div>
                    <h2 className="card-title">DynamicForm</h2>
                    <p className="card-description">
                        Build complex forms from simple JSON configurations with automatic validation and i18n support.
                    </p>
                    <ul className="card-features">
                        <li>30+ Field Presets</li>
                        <li>Auto-Translation</li>
                        <li>Collapsible Sections</li>
                        <li>Custom Validation</li>
                    </ul>
                    <span className="card-link">View Examples →</span>
                </Link>

                <Link to="/datatable" className="card">
                    <div className="card-icon">📊</div>
                    <h2 className="card-title">DataTable</h2>
                    <p className="card-description">
                        Display and interact with tabular data featuring sorting, pagination, and responsive design.
                    </p>
                    <ul className="card-features">
                        <li>Sortable Columns</li>
                        <li>Pagination Controls</li>
                        <li>Row Selection</li>
                        <li>Mobile Responsive</li>
                    </ul>
                    <span className="card-link">View Examples →</span>
                </Link>

                <Link to="/modal" className="card">
                    <div className="card-icon">🪟</div>
                    <h2 className="card-title">Modal</h2>
                    <p className="card-description">
                        Accessible dialogs, popups, and actionable overlays.
                    </p>
                    <ul className="card-features">
                        <li>Keyboard Navigation</li>
                        <li>Focus Trapping</li>
                        <li>Customizable Content</li>
                        <li>Stackable</li>
                    </ul>
                    <span className="card-link">View Examples →</span>
                </Link>

                <Link to="/button" className="card">
                    <div className="card-icon">🔘</div>
                    <h2 className="card-title">Button</h2>
                    <p className="card-description">Standardized, theme-aware buttons.</p>
                    <ul className="card-features">
                        <li>Multiple Variants</li>
                        <li>Size Options</li>
                        <li>Icon Support</li>
                        <li>Loading State</li>
                    </ul>
                    <span className="card-link">View Examples →</span>
                </Link>

                <Link to="/card" className="card">
                    <div className="card-icon">🎴</div>
                    <h2 className="card-title">Card</h2>
                    <p className="card-description">Flexible content containers.</p>
                    <ul className="card-features">
                        <li>Headers & Footers</li>
                        <li>Image Support</li>
                        <li>Theme Aware</li>
                        <li>Interactive</li>
                    </ul>
                    <span className="card-link">View Examples →</span>
                </Link>

                <Link to="/tabs" className="card">
                    <div className="card-icon">📑</div>
                    <h2 className="card-title">Tabs</h2>
                    <p className="card-description">Organize content into sections.</p>
                    <ul className="card-features">
                        <li>Theme Variants</li>
                        <li>Controlled Mode</li>
                        <li>Accessible</li>
                        <li>Responsive</li>
                    </ul>
                    <span className="card-link">View Examples →</span>
                </Link>

                <Link to="/badge" className="card">
                    <div className="card-icon">📛</div>
                    <h2 className="card-title">Badge</h2>
                    <p className="card-description">Status indicators.</p>
                    <ul className="card-features">
                        <li>Colors & Variants</li>
                        <li>Outlined Mode</li>
                        <li>Dot Mode</li>
                        <li>Sizes</li>
                    </ul>
                    <span className="card-link">View Examples →</span>
                </Link>

                <Link to="/avatar" className="card">
                    <div className="card-icon">👤</div>
                    <h2 className="card-title">Avatar</h2>
                    <p className="card-description">User profile images.</p>
                    <ul className="card-features">
                        <li>Image/Initials</li>
                        <li>Status Dots</li>
                        <li>Shapes</li>
                        <li>Sizes</li>
                    </ul>
                    <span className="card-link">View Examples →</span>
                </Link>
            </div>

            <footer>
                <p>
                    <strong>Mabesi React Components</strong> v0.1.0<br />
                    <a href="https://github.com/mabesi/react-components" target="_blank" rel="noopener noreferrer">
                        GitHub
                    </a>
                </p>
            </footer>
        </div >
    );
}
