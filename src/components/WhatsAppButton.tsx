import { whatsappLink } from '../seo/site';

// Floating "chat on WhatsApp" button shown on every page.
export default function WhatsAppButton() {
  return (
    <a
      href={whatsappLink('Hello Adidian Physiotherapy Clinic, I would like to book an appointment.')}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="hidden lg:flex fixed bottom-5 right-5 z-50 items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-white shadow-lg hover:bg-[#1ebe5b] transition-colors"
    >
      <svg viewBox="0 0 32 32" width="26" height="26" fill="currentColor" aria-hidden="true">
        <path d="M16.04 3C9.4 3 4 8.36 4 14.97c0 2.11.56 4.17 1.62 5.99L4 29l8.26-2.15a12.1 12.1 0 0 0 3.78.6C22.67 27.45 28 22.1 28 15.5 28 8.9 22.67 3 16.04 3Zm0 22.2c-1.2 0-2.38-.2-3.5-.6l-.25-.1-4.9 1.27 1.3-4.75-.17-.27a9.87 9.87 0 0 1-1.53-5.3c0-5.5 4.5-9.97 10.05-9.97 5.52 0 9.82 4.43 9.82 10.02 0 5.5-4.4 9.7-9.82 9.7Zm5.5-7.4c-.3-.15-1.78-.87-2.05-.97-.28-.1-.48-.15-.68.15-.2.3-.78.97-.95 1.17-.18.2-.35.22-.65.07-.3-.15-1.27-.46-2.42-1.48-.9-.8-1.5-1.77-1.67-2.07-.18-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.38-.03-.53-.07-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.5h-.58c-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.5 0 1.47 1.08 2.9 1.23 3.1.15.2 2.12 3.22 5.13 4.52.72.3 1.28.5 1.72.63.72.23 1.38.2 1.9.12.58-.09 1.78-.73 2.03-1.43.25-.7.25-1.3.18-1.43-.08-.13-.28-.2-.58-.35Z" />
      </svg>
      <span className="hidden sm:inline font-semibold">Chat on WhatsApp</span>
    </a>
  );
}
