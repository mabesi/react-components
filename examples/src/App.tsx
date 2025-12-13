import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider, I18nProvider, ToastProvider } from '@mabesi/react-components';
import HomePage from './pages/HomePage';
import DynamicFormPage from './pages/DynamicFormPage';
import DataTablePage from './pages/DataTablePage';
import ModalPage from './pages/ModalPage';
import { ButtonPage } from './pages/ButtonPage';
import { TabsPage } from './pages/TabsPage';
import { CardPage } from './pages/CardPage';
import { BadgePage } from './pages/BadgePage';
import { AvatarPage } from './pages/AvatarPage';
import { TooltipPage } from './pages/TooltipPage';
import { AlertPage } from './pages/AlertPage';
import { InputPage } from './pages/InputPage';
import { SelectPage } from './pages/SelectPage';
import { CheckboxPage } from './pages/CheckboxPage';
import { SpinnerPage } from './pages/SpinnerPage';
import { AccordionPage } from './pages/AccordionPage';
import { ToastPage } from './pages/ToastPage';
import './App.css';

function App() {
    return (
        <BrowserRouter>
            <ThemeProvider defaultTheme="modern">
                <I18nProvider defaultLocale="en">
                    <ToastProvider>
                        <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/dynamicform" element={<DynamicFormPage />} />
                            <Route path="/datatable" element={<DataTablePage />} />
                            <Route path="/modal" element={<ModalPage />} />
                            <Route path="/button" element={<ButtonPage />} />
                            <Route path="/card" element={<CardPage />} />
                            <Route path="/tabs" element={<TabsPage />} />
                            <Route path="/badge" element={<BadgePage />} />
                            <Route path="/avatar" element={<AvatarPage />} />
                            <Route path="/tooltip" element={<TooltipPage />} />
                            <Route path="/alert" element={<AlertPage />} />
                            <Route path="/input" element={<InputPage />} />
                            <Route path="/select" element={<SelectPage />} />
                            <Route path="/checkbox" element={<CheckboxPage />} />
                            <Route path="/spinner" element={<SpinnerPage />} />
                            <Route path="/accordion" element={<AccordionPage />} />
                            <Route path="/toast" element={<ToastPage />} />
                        </Routes>
                    </ToastProvider>
                </I18nProvider>
            </ThemeProvider>
        </BrowserRouter>
    );
}

export default App;
