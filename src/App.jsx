// Import Packages
import {Routes, Route, Outlet} from 'react-router-dom';

// Import Pages / Routes
import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import Articles from './pages/Articles.jsx';
import ArticlePage from './pages/ArticlePage.jsx';
import WatchPage from './pages/WatchPage.jsx';

// Import Components
import Navbar from './components/Navbar.jsx';

// Import Styling
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path = "/" element = {<HomePage />} />
        <Route path = "/about" element = {<Outlet />}>
          <Route index element = {<AboutPage />} />
          <Route path = "contact" element = {<ContactPage />} />
        </Route>
        <Route path = "/articles" element = {<Outlet />}>
          <Route index element = {<Articles />} />
          <Route path = ":id" element = {<ArticlePage />} />
        </Route>
        <Route path = "/watch" element = {<WatchPage />} />
      </Routes>
    </>
  )
}

export default App;
