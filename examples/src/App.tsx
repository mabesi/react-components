import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider, I18nProvider } from '@mabesi/react-components';
import HomePage from './pages/HomePage';
import DynamicFormPage from './pages/DynamicFormPage';
import DataTablePage from './pages/DataTablePage';
import './App.css';

function App() {
    return (
        <BrowserRouter>
            <ThemeProvider defaultTheme="modern">
                <I18nProvider defaultLocale="en">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/dynamicform" element={<DynamicFormPage />} />
                        <Route path="/datatable" element={<DataTablePage />} />
                    </Routes>
                </I18nProvider>
            </ThemeProvider>
        </BrowserRouter>
    );
}

export default App;
