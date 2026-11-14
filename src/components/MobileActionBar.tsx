import { Link } from 'react-router-dom';
import { Calendar, MessageCircle, Phone } from 'lucide-react';
import { whatsappLink } from '../seo/site';

// Fixed bottom bar on phones: the three things a mobile visitor wants.
export default function MobileActionBar() {
  const item = 'flex flex-1 flex-col items-center justify-center gap-0.5 py-2 text-xs font-semibold';
  return (
    <nav
      aria-label="Quick contact"
      className="lg:hidden fixed bottom-0 inset-x-0 z-50 flex bg-white border-t border-gray-200 shadow-[0_-2px_10px_rgba(0,0,0,0.08)] pb-[env(safe-area-inset-bottom)]"
    >
      <a href="tel:+2347065873379" className={`${item} text-blue-600`}>
        <Phone size={20} /> Call
      </a>
      <a
        href={whatsappLink('Hello Adidian Physiotherapy Clinic, I would like to book an appointment.')}
        target="_blank"
        rel="noopener noreferrer"
        className={`${item} text-[#128C7E]`}
      >
        <MessageCircle size={20} /> WhatsApp
      </a>
      <Link to="/contact" className={`${item} bg-blue-600 text-white`}>
        <Calendar size={20} /> Book
      </Link>
    </nav>
  );
}
