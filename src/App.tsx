import { Routes, Route, Navigate, useParams } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import WhatsAppButton from './components/WhatsAppButton';
import MobileActionBar from './components/MobileActionBar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Team from './pages/Team';
import Testimonials from './pages/Testimonials';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import BlogPostDetails from './pages/BlogPostDetails';
import NotFound from './pages/NotFound';
import Conditions from './pages/Conditions';
import ConditionDetail from './pages/ConditionDetail';
import HomePhysiotherapy from './pages/HomePhysiotherapy';
import { Privacy, Terms, PatientConfidentiality } from './pages/Legal';

// Old service URLs lived under /blog/:id. Netlify 301s them too (public/_redirects).
const LegacyBlogRedirect = () => {
  const { serviceId } = useParams();
  return <Navigate to={`/services/${serviceId}`} replace />;
};

// Router-agnostic so the same tree is used by the browser (BrowserRouter)
// and by the build-time prerender (StaticRouter).
function App() {
  return (
    <div className="min-h-screen bg-white pb-16 lg:pb-0">
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:serviceId" element={<BlogPostDetails />} />
          <Route path="/conditions" element={<Conditions />} />
          <Route path="/conditions/:slug" element={<ConditionDetail />} />
          <Route path="/home-physiotherapy-abuja" element={<HomePhysiotherapy />} />
          <Route path="/team" element={<Team />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/patient-confidentiality" element={<PatientConfidentiality />} />
          <Route path="/hipaa" element={<Navigate to="/patient-confidentiality" replace />} />
          <Route path="/blog/:serviceId" element={<LegacyBlogRedirect />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
      <MobileActionBar />
    </div>
  );
}

export default App;
