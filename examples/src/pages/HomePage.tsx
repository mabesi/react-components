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
                <Link to="/accordion" className="card">
                    <div className="card-icon">📂</div>
                    <h2 className="card-title">Accordion</h2>
                    <p className="card-description">Expandable content sections.</p>
                    <ul className="card-features">
                        <li>Allow Multiple</li>
                        <li>Accessible</li>
                        <li>Smooth Animation</li>
                        <li>Customizable</li>
                    </ul>
                    <span className="card-link">View Examples →</span>
                </Link>

                <Link to="/alert" className="card">
                    <div className="card-icon">⚠️</div>
                    <h2 className="card-title">Alert</h2>
                    <p className="card-description">Feedback messages.</p>
                    <ul className="card-features">
                        <li>4 Semantic Variants</li>
                        <li>Dismissible</li>
                        <li>Custom Icons</li>
                        <li>Titles</li>
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

                <Link to="/breadcrumb" className="card">
                    <div className="card-icon">🥖</div>
                    <h2 className="card-title">Breadcrumb</h2>
                    <p className="card-description">Navigation hierarchy.</p>
                    <ul className="card-features">
                        <li>Auto Separators</li>
                        <li>Active State</li>
                        <li>Accessible</li>
                        <li>Customizable</li>
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

                <Link to="/checkbox" className="card">
                    <div className="card-icon">☑️</div>
                    <h2 className="card-title">Checkbox</h2>
                    <p className="card-description">Boolean selections.</p>
                    <ul className="card-features">
                        <li>Indeterminate</li>
                        <li>Error States</li>
                        <li>Custom SVG</li>
                        <li>Fully Accessible</li>
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

                <Link to="/drawer" className="card">
                    <div className="card-icon">🚪</div>
                    <h2 className="card-title">Drawer</h2>
                    <p className="card-description">Sliding side panels.</p>
                    <ul className="card-features">
                        <li>4 Placements</li>
                        <li>Backdrop Support</li>
                        <li>Sizes</li>
                        <li>Focus Trap</li>
                    </ul>
                    <span className="card-link">View Examples →</span>
                </Link>

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

                <Link to="/input" className="card">
                    <div className="card-icon">⌨️</div>
                    <h2 className="card-title">Input</h2>
                    <p className="card-description">Text fields & entries.</p>
                    <ul className="card-features">
                        <li>Labels & Helpers</li>
                        <li>Validation States</li>
                        <li>Adornments</li>
                        <li>Sizes</li>
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

                <Link to="/select" className="card">
                    <div className="card-icon">🔽</div>
                    <h2 className="card-title">Select</h2>
                    <p className="card-description">Dropdown menus.</p>
                    <ul className="card-features">
                        <li>Native Controls</li>
                        <li>Custom Styling</li>
                        <li>Option Arrays</li>
                        <li>Validation</li>
                    </ul>
                    <span className="card-link">View Examples →</span>
                </Link>



                <Link to="/skeleton" className="card">
                    <div className="card-icon">💀</div>
                    <h2 className="card-title">Skeleton</h2>
                    <p className="card-description">Loading placeholders.</p>
                    <ul className="card-features">
                        <li>Text & Shapes</li>
                        <li>Animations</li>
                        <li>Responsive</li>
                        <li>Themable</li>
                    </ul>
                    <span className="card-link">View Examples →</span>
                </Link>

                <Link to="/spinner" className="card">
                    <div className="card-icon">↻</div>
                    <h2 className="card-title">Spinner</h2>
                    <p className="card-description">Loading indicators.</p>
                    <ul className="card-features">
                        <li>Sizes</li>
                        <li>Color Variants</li>
                        <li>Customizable</li>
                        <li>Lightweight</li>
                    </ul>
                    <span className="card-link">View Examples →</span>
                </Link>

                <Link to="/switch" className="card">
                    <div className="card-icon">🔛</div>
                    <h2 className="card-title">Switch</h2>
                    <p className="card-description">Toggle switches.</p>
                    <ul className="card-features">
                        <li>Sizes</li>
                        <li>Colors</li>
                        <li>Labels</li>
                        <li>States</li>
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

                <Link to="/toast" className="card">
                    <div className="card-icon">🍞</div>
                    <h2 className="card-title">Toast</h2>
                    <p className="card-description">Notification messages.</p>
                    <ul className="card-features">
                        <li>Auto Dismiss</li>
                        <li>Variants</li>
                        <li>Positioning</li>
                        <li>Global Hook</li>
                    </ul>
                    <span className="card-link">View Examples →</span>
                </Link>

                <Link to="/tooltip" className="card">
                    <div className="card-icon">💬</div>
                    <h2 className="card-title">Tooltip</h2>
                    <p className="card-description">Floating contextual info.</p>
                    <ul className="card-features">
                        <li>4 Positions</li>
                        <li>Custom Delays</li>
                        <li>Keyboard Access</li>
                        <li>Rich Content</li>
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
