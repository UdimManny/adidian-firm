import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { CLINIC } from '../seo/site';

const UPDATED = '14 November 2026';

const LegalLayout = ({
  title,
  h1,
  description,
  path,
  children,
}: {
  title: string;
  h1: string;
  description: string;
  path: string;
  children: ReactNode;
}) => (
  <div>
    <SEO title={title} description={description} breadcrumbs={[{ name: h1, path }]} />
    <section className="bg-gradient-to-br from-blue-50 to-green-50 py-14">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">{h1}</h1>
        <p className="text-gray-600">Last updated: {UPDATED}</p>
      </div>
    </section>
    <section className="py-14 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-gray-700 leading-relaxed space-y-4 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-gray-900 [&_h2]:mt-10 [&_h2]:mb-2 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_a]:text-blue-600 [&_a]:underline">
        {children}
      </div>
    </section>
  </div>
);

const ContactBlock = () => (
  <p>
    {CLINIC.name}
    <br />
    {CLINIC.streetAddress}, {CLINIC.locality}, {CLINIC.region}, Nigeria
    <br />
    Phone: <a href="tel:+2347065873379">{CLINIC.phoneDisplay}</a>
    <br />
    Email: <a href={`mailto:${CLINIC.email}`}>{CLINIC.email}</a>
  </p>
);

export const Privacy = () => (
  <LegalLayout
    title="Privacy Policy | Adidian Physiotherapy Clinic Abuja"
    h1="Privacy Policy"
    description="How Adidian Physiotherapy Clinic in Abuja collects, uses and protects your personal and health information, and your rights under the Nigeria Data Protection Act 2023."
    path="/privacy"
  >
    <p>
      Adidian Physiotherapy Clinic (“we”, “us”) respects your privacy. This policy explains what personal information
      we collect through this website and when you receive care from us, how we use it, and your rights under the
      Nigeria Data Protection Act 2023 (NDPA).
    </p>

    <h2>Who we are</h2>
    <p>
      We are a physiotherapy clinic at {CLINIC.streetAddress}, Abuja. We are responsible for the personal information
      described in this policy. You can contact us using the details at the end of this page.
    </p>

    <h2>Information we collect</h2>
    <ul>
      <li>
        <strong>Enquiries and bookings:</strong> when you use our contact form, call, email or message us, we collect
        your name, phone number, email address, the service you are interested in and anything you tell us in your
        message.
      </li>
      <li>
        <strong>Health information:</strong> when you receive physiotherapy, we keep clinical records such as your
        medical history, assessment findings, treatment notes and progress. This is sensitive personal information and
        we handle it with extra care.
      </li>
      <li>
        <strong>Payment and insurance details:</strong> where you pay for treatment or use an HMO or insurer, we keep the
        details needed to process payment or claims.
      </li>
      <li>
        <strong>Website technical data:</strong> like most websites, our hosting provider automatically records basic
        technical information such as your IP address, browser type and pages visited, for security and to keep the site
        working. We do not use advertising or tracking cookies.
      </li>
    </ul>

    <h2>How we use your information</h2>
    <ul>
      <li>To respond to your enquiry and arrange appointments or home visits.</li>
      <li>To assess, treat and care for you safely, and keep accurate clinical records.</li>
      <li>To process payments and HMO or insurance claims.</li>
      <li>To communicate with you about your appointments and treatment.</li>
      <li>To meet our legal, regulatory and professional obligations.</li>
    </ul>
    <p>
      We rely on your consent, the need to provide the care you have asked for, our legal obligations, and, in an
      emergency, the need to protect your vital interests. We will not use your information for marketing without your
      consent, and we never sell it.
    </p>

    <h2>Who we share it with</h2>
    <p>We only share your information when necessary, and only what is needed:</p>
    <ul>
      <li>With your HMO or insurer, to process claims you ask us to make.</li>
      <li>With doctors or other health professionals involved in your care, with your agreement or where needed for your safety.</li>
      <li>
        With service providers who help us run the clinic and this website (for example, our website host, and FormSubmit,
        which delivers contact-form submissions to our email inbox). They may only use it on our instructions.
      </li>
      <li>Where the law requires it, for example in response to a lawful request from a court or regulator.</li>
    </ul>
    <p>
      Some of our service providers may store data outside Nigeria. Where this happens, we take steps to ensure your
      information remains adequately protected as required by the NDPA.
    </p>

    <h2>How long we keep it</h2>
    <p>
      We keep enquiry details only as long as needed to respond and arrange your care. Clinical records are kept for
      as long as required by medical record-keeping rules and professional guidance, after which they are securely
      destroyed.
    </p>

    <h2>Keeping it secure</h2>
    <p>
      We use appropriate physical, technical and organisational measures to protect your information, and limit access
      to staff who need it to care for you. See also our{' '}
      <Link to="/patient-confidentiality">Patient Confidentiality</Link> page.
    </p>

    <h2>Your rights</h2>
    <p>Under the NDPA you have the right to:</p>
    <ul>
      <li>be informed about how your data is used and to access a copy of it;</li>
      <li>have inaccurate information corrected;</li>
      <li>ask us to delete your information, where we are not required to keep it;</li>
      <li>object to or restrict certain uses of your information;</li>
      <li>withdraw your consent at any time, where we rely on consent;</li>
      <li>receive your information in a portable format, where applicable;</li>
      <li>complain to the Nigeria Data Protection Commission (NDPC) if you are unhappy with how we handle your data.</li>
    </ul>
    <p>To exercise any of these rights, contact us using the details below.</p>

    <h2>Children</h2>
    <p>
      We provide paediatric physiotherapy. Information about children is provided by and discussed with their parent or
      guardian, and is protected in the same way as all patient information.
    </p>

    <h2>Changes to this policy</h2>
    <p>We may update this policy from time to time. The latest version will always be on this page.</p>

    <h2>Contact us</h2>
    <ContactBlock />
  </LegalLayout>
);

export const Terms = () => (
  <LegalLayout
    title="Terms of Service | Adidian Physiotherapy Clinic Abuja"
    h1="Terms of Service"
    description="Terms for using the Adidian Physiotherapy Clinic website and booking appointments, including our cancellation and refund policy."
    path="/terms"
  >
    <p>
      These terms apply to your use of this website and to appointments booked with Adidian Physiotherapy Clinic. By
      using the website or booking an appointment, you agree to them.
    </p>

    <h2>Website information is not medical advice</h2>
    <p>
      The information on this website is general and for education only. It is not a diagnosis and does not replace an
      individual assessment by a qualified health professional. If you think you may have a medical emergency, go to the
      nearest hospital or call emergency services immediately.
    </p>

    <h2>Appointments</h2>
    <ul>
      <li>Appointments can be booked by phone, email or through our contact form. A booking is confirmed when we contact you to agree a time.</li>
      <li>Please arrive on time and tell us about any changes to your health before each session.</li>
      <li>For home visits, please make sure there is a safe space for treatment and that someone is available to let the physiotherapist in.</li>
      <li>You may bring a family member or chaperone to your sessions.</li>
    </ul>

    <h2>Cancellations and refunds</h2>
    <p>
      Please give us at least 24 hours’ notice if you need to cancel or reschedule an appointment. If you are not
      satisfied with our services, you may cancel your remaining appointments, and refunds for unused, prepaid sessions
      will be granted. Contact us to discuss cancellations or refunds.
    </p>

    <h2>Fees, HMOs and insurance</h2>
    <p>
      We will tell you about fees before treatment begins. We accept HMO and insurance referrals; any amount not covered
      by your plan remains your responsibility.
    </p>

    <h2>Your health and treatment</h2>
    <p>
      Physiotherapy involves exercise and hands-on treatment. Your physiotherapist will explain the proposed treatment
      and ask for your consent. You may ask questions or stop treatment at any time. Results vary from person to person
      and we cannot guarantee a particular outcome.
    </p>

    <h2>Use of this website</h2>
    <ul>
      <li>Content on this website, including text, logos and images, belongs to us or our licensors and may not be copied for commercial use without permission.</li>
      <li>Links to other websites are provided for convenience; we are not responsible for their content.</li>
      <li>We try to keep the website accurate and available but cannot guarantee it will always be error-free or uninterrupted.</li>
    </ul>

    <h2>Liability</h2>
    <p>
      Nothing in these terms limits any liability that cannot be limited under Nigerian law. Otherwise, we are not
      liable for any loss arising from reliance on general information on this website.
    </p>

    <h2>Governing law</h2>
    <p>These terms are governed by the laws of the Federal Republic of Nigeria.</p>

    <h2>Contact us</h2>
    <ContactBlock />
  </LegalLayout>
);

export const PatientConfidentiality = () => (
  <LegalLayout
    title="Patient Confidentiality | Adidian Physiotherapy Clinic Abuja"
    h1="Patient Confidentiality"
    description="How Adidian Physiotherapy Clinic in Abuja keeps your health information and treatment private and confidential."
    path="/patient-confidentiality"
  >
    <p>
      Your privacy matters to us. Everything you share with us, and everything we learn while caring for you, is kept
      confidential in line with our professional duty of confidentiality and the Nigeria Data Protection Act 2023.
    </p>

    <h2>Private, one-to-one care</h2>
    <ul>
      <li>We see one patient at a time, and treatment takes place in a private setting.</li>
      <li>You are welcome to bring a family member or chaperone into your session (one person in the treatment cubicle).</li>
      <li>Your physiotherapist will always explain what they are doing and ask for your consent before treatment.</li>
    </ul>

    <h2>Your records</h2>
    <ul>
      <li>Clinical records are stored securely and are only accessed by staff involved in your care.</li>
      <li>We do not discuss your care with family, employers or anyone else without your permission, unless the law requires it or it is needed to protect you or others from serious harm.</li>
      <li>With your agreement, we may share relevant information with your doctor, other health professionals involved in your care, or your HMO or insurer for claims.</li>
      <li>You can ask to see your records or request corrections at any time.</li>
    </ul>

    <h2>Children and dependants</h2>
    <p>
      For children, we share information with parents or legal guardians. For adults who need support, we will agree
      with the patient who may be involved in discussions about their care.
    </p>

    <h2>Concerns</h2>
    <p>
      If you have any questions or concerns about confidentiality, please speak to us. You can read more in our{' '}
      <Link to="/privacy">Privacy Policy</Link>.
    </p>
    <ContactBlock />
  </LegalLayout>
);
