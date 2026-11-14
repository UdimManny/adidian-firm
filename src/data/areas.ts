// Neighbourhood landing pages ("physiotherapy in Wuse", etc.). Each page needs
// genuinely local content; keep claims about home-visit coverage general
// ("contact us to confirm") unless the clinic confirms specific areas.

export interface Area {
  slug: string;
  path: string;
  name: string;
  title: string;
  metaDescription: string;
  h1: string;
  intro: string[];
  whoWeSee: string[];
  gettingHere: string;
  homeVisits: string;
  featuredConditions: string[];
  faqs: { question: string; answer: string }[];
  image: string;
}

const area = (a: Omit<Area, 'path'>): Area => ({ ...a, path: `/physiotherapy-abuja/${a.slug}` });

export const areas: Area[] = [
  area({
    slug: 'wuse',
    name: 'Wuse',
    title: 'Physiotherapy in Wuse, Abuja | Physiotherapist Near Wuse 2',
    metaDescription:
      'Looking for a physiotherapist near Wuse or Wuse 2, Abuja? Adidian Physiotherapy Clinic treats back and neck pain, sports injuries and more, a short drive away in Garki, or at home.',
    h1: 'Physiotherapy for Wuse & Wuse 2 Residents',
    intro: [
      'Wuse and Wuse 2 are among Abuja’s busiest districts, full of offices, banks, shops and markets. Long hours at a desk, standing behind a counter or driving through traffic all take a toll on the back, neck and joints.',
      'Adidian Physiotherapy Clinic in Area 11, Garki is a short drive from Wuse. We see office workers, traders and families from across Wuse for personalised, evidence-based physiotherapy, and we can also come to you.',
    ],
    whoWeSee: [
      'Office workers with neck pain, back pain and tension headaches',
      'Traders and shop workers with back, knee and foot pain from long hours standing',
      'People with sciatica or a slipped disc',
      'Gym-goers and five-a-side players with sports injuries',
    ],
    gettingHere:
      'Our clinic is at No 32 Lord Lugard Street, Area 11, Garki, beside Efab Properties Ltd. From Wuse it is a short drive south through the city centre. Call us if you need directions.',
    homeVisits:
      'Prefer not to travel? We offer home physiotherapy visits in Wuse and Wuse 2. Contact us to arrange a time.',
    featuredConditions: ['neck-pain', 'low-back-pain', 'slipped-disc', 'sports-injuries'],
    faqs: [
      { question: 'Is there a physiotherapist near Wuse 2?', answer: 'Yes. Our clinic in Area 11, Garki is a short drive from Wuse 2, and we also offer home visits in Wuse.' },
      { question: 'Can you help with neck pain from office work?', answer: 'Yes. We treat desk-related neck and back pain and give practical ergonomic advice for your workstation. Our team includes an ergonomist.' },
      { question: 'Can I book an appointment around work hours?', answer: 'We are open Monday to Friday 8am–6pm and Saturday 9am–4pm. Call or WhatsApp us to find a time that suits you.' },
    ],
    image: '/image_six.webp',
  }),
  area({
    slug: 'maitama',
    name: 'Maitama',
    title: 'Physiotherapy in Maitama, Abuja | Physiotherapist & Home Visits',
    metaDescription:
      'Physiotherapy for Maitama residents: clinic appointments in nearby Garki or private home physiotherapy visits. Back pain, arthritis, stroke rehab and post-surgery care.',
    h1: 'Physiotherapy for Maitama Residents',
    intro: [
      'Maitama is home to many families, senior professionals, diplomats and retirees. We see Maitama patients for everything from desk-related back pain to rehabilitation after surgery or stroke.',
      'Many of our Maitama patients value discreet, one-to-one care. You can visit our private clinic in Area 11, Garki, or have a physiotherapist come to your home.',
    ],
    whoWeSee: [
      'Professionals with back, neck and shoulder pain',
      'Older adults with arthritis, balance problems or a risk of falls',
      'Patients recovering from knee or hip replacement and other surgery',
      'Stroke survivors and their families',
    ],
    gettingHere:
      'Our clinic is at No 32 Lord Lugard Street, Area 11, Garki. From Maitama it is a short drive south. Call us for directions or to arrange a home visit instead.',
    homeVisits:
      'Home physiotherapy is popular with our Maitama patients, particularly after surgery, after a stroke, and for older adults. Contact us to arrange a visit.',
    featuredConditions: ['arthritis', 'fracture-post-surgery-rehab', 'stroke-rehabilitation', 'frozen-shoulder'],
    faqs: [
      { question: 'Do you offer home physiotherapy in Maitama?', answer: 'Yes. We offer home visits in Maitama. Call or WhatsApp us with your location to arrange a time.' },
      { question: 'Are sessions private?', answer: 'Yes. We see one patient at a time and keep all information confidential. At home, treatment takes place wherever you are most comfortable.' },
      { question: 'Do you accept HMO and insurance?', answer: 'Yes, we accept HMO and insurance referrals. Contact us with your plan details to confirm cover.' },
    ],
    image: '/image_ten.webp',
  }),
  area({
    slug: 'asokoro',
    name: 'Asokoro',
    title: 'Physiotherapy Near Asokoro, Abuja | Clinic Next Door in Garki',
    metaDescription:
      'A physiotherapy clinic right next to Asokoro: Adidian Physiotherapy Clinic in Area 11, Garki. Back pain, sports injuries, arthritis and home visits for Asokoro residents.',
    h1: 'Physiotherapy Close to Asokoro',
    intro: [
      'Asokoro sits right beside Area 11, Garki, which makes Adidian Physiotherapy Clinic one of the most convenient physiotherapy clinics for Asokoro residents.',
      'Whether you need treatment for back pain, a sports injury, arthritis or rehabilitation after an operation, you can be at our clinic within minutes, or we can come to your home.',
    ],
    whoWeSee: [
      'Residents with back, neck and joint pain',
      'Older adults with arthritis or after a fall',
      'Patients recovering from surgery or a fracture',
      'Active people with running and gym injuries',
    ],
    gettingHere:
      'Our clinic is at No 32 Lord Lugard Street, Area 11, Garki, beside Efab Properties Ltd, just next to Asokoro. Call us if you need directions.',
    homeVisits:
      'We also offer home physiotherapy visits in Asokoro for patients who find travelling difficult. Contact us to arrange a time.',
    featuredConditions: ['low-back-pain', 'arthritis', 'fracture-post-surgery-rehab', 'knee-pain'],
    faqs: [
      { question: 'How close is your clinic to Asokoro?', answer: 'Very close. Our clinic is in Area 11, Garki, which borders Asokoro.' },
      { question: 'Can I walk in without an appointment?', answer: 'We recommend booking so we can give you our full attention, but call us and we will do our best to see you quickly.' },
      { question: 'Do you treat elderly patients at home in Asokoro?', answer: 'Yes. We offer home physiotherapy, which is often ideal for older adults and people with limited mobility.' },
    ],
    image: '/image_four.webp',
  }),
  area({
    slug: 'gwarinpa',
    name: 'Gwarinpa',
    title: 'Physiotherapy in Gwarinpa, Abuja | Home Physiotherapy Visits',
    metaDescription:
      'Physiotherapy for Gwarinpa residents: home physiotherapy visits for back pain, stroke rehab, children and postnatal care, or appointments at our Garki clinic.',
    h1: 'Physiotherapy for Gwarinpa Families',
    intro: [
      'Gwarinpa is one of Abuja’s largest residential areas, home to many young families, professionals and older relatives. Travelling into the city centre for regular treatment is not always practical, especially when you are in pain.',
      'That is why many Gwarinpa patients choose home physiotherapy with Adidian. We bring the same assessment, treatment and exercise guidance as our Garki clinic to your home.',
    ],
    whoWeSee: [
      'New mothers needing postnatal and pelvic floor physiotherapy',
      'Children with developmental delay or cerebral palsy',
      'Stroke survivors and older adults who find travelling difficult',
      'Commuters with back and neck pain',
    ],
    gettingHere:
      'Gwarinpa is north-west of the city centre. If you prefer to visit our clinic at No 32 Lord Lugard Street, Area 11, Garki, call us to book a time that avoids peak traffic.',
    homeVisits:
      'Home visits are often the easiest option for Gwarinpa patients, particularly for children, older adults and after surgery or stroke. Contact us to arrange a visit.',
    featuredConditions: ['postnatal-physiotherapy', 'cerebral-palsy', 'stroke-rehabilitation', 'low-back-pain'],
    faqs: [
      { question: 'Do you do home physiotherapy in Gwarinpa?', answer: 'Yes. Call or WhatsApp us with your location in Gwarinpa and we will arrange a suitable time.' },
      { question: 'Can a physiotherapist visit my child at home?', answer: 'Yes. Paediatric physiotherapy at home is often easier for children and lets us work with your family on daily routines.' },
      { question: 'Do you offer postnatal physiotherapy at home?', answer: 'Yes. We can see you at home after childbirth for pelvic floor, tummy gap and back pain recovery.' },
    ],
    image: '/image_ten_one.webp',
  }),
  area({
    slug: 'kubwa',
    name: 'Kubwa',
    title: 'Physiotherapy in Kubwa, Abuja | Physiotherapist Home Visits',
    metaDescription:
      'Physiotherapy for Kubwa residents: home physiotherapy visits or appointments at our Garki clinic. Back pain, sciatica, stroke rehab and arthritis treatment.',
    h1: 'Physiotherapy for Kubwa Residents',
    intro: [
      'Kubwa is a large, fast-growing satellite town, and many residents commute into the city every day along the Kubwa Expressway. Long drives and long days often lead to back pain, sciatica and neck pain.',
      'Adidian Physiotherapy Clinic offers home physiotherapy for Kubwa residents who would rather not add another trip into town, as well as appointments at our clinic in Area 11, Garki.',
    ],
    whoWeSee: [
      'Daily commuters with back pain, sciatica and neck pain',
      'Older adults with arthritis or after a fall',
      'Stroke survivors who need regular rehabilitation',
      'Patients recovering from surgery or fractures',
    ],
    gettingHere:
      'If you work in the city centre, you may find it convenient to visit our clinic at No 32 Lord Lugard Street, Area 11, Garki before or after work. Call us to book.',
    homeVisits:
      'For many Kubwa patients, home visits save a long journey, especially after surgery or a stroke. Contact us to check availability for your part of Kubwa.',
    featuredConditions: ['sciatica', 'low-back-pain', 'stroke-rehabilitation', 'arthritis'],
    faqs: [
      { question: 'Do you offer home physiotherapy in Kubwa?', answer: 'Yes. Contact us with your location in Kubwa to confirm availability and arrange a visit.' },
      { question: 'Can physiotherapy help back pain from long drives?', answer: 'Yes. We treat the pain and give practical advice on car seat set-up, breaks and exercises to protect your back.' },
      { question: 'How often will the physiotherapist visit?', answer: 'That depends on your condition and goals. We agree a plan with you at the first visit and give you exercises to do between sessions.' },
    ],
    image: '/image_nine.webp',
  }),
  area({
    slug: 'jabi-utako',
    name: 'Jabi & Utako',
    title: 'Physiotherapy in Jabi & Utako, Abuja | Sports & Pain Physiotherapy',
    metaDescription:
      'Physiotherapy for Jabi and Utako: sports injury rehab for runners and gym-goers, back and neck pain treatment for office workers. Clinic in Garki or home visits.',
    h1: 'Physiotherapy for Jabi & Utako',
    intro: [
      'Jabi and Utako combine busy offices, markets and some of Abuja’s favourite places to exercise, including the paths around Jabi Lake. That mix means we see plenty of running and gym injuries alongside desk-related back and neck pain.',
      'Adidian Physiotherapy Clinic offers sports rehabilitation and pain management for Jabi and Utako residents and workers, at our Garki clinic or at home.',
    ],
    whoWeSee: [
      'Runners with knee pain, shin splints and Achilles problems',
      'Gym-goers and footballers with sprains and strains',
      'Office workers with neck pain, back pain and headaches',
      'Traders with back and knee pain from long hours on their feet',
    ],
    gettingHere:
      'Our clinic is at No 32 Lord Lugard Street, Area 11, Garki, beside Efab Properties Ltd. Call us for directions from Jabi or Utako.',
    homeVisits:
      'We also offer home physiotherapy visits in Jabi and Utako. Contact us to arrange a time.',
    featuredConditions: ['sports-injuries', 'knee-pain', 'neck-pain', 'cervical-spondylosis'],
    faqs: [
      { question: 'Do you treat running injuries?', answer: 'Yes. We assess your running and strength, treat the injury and guide you back to running safely.' },
      { question: 'Can you help me return to the gym after an injury?', answer: 'Yes. Our sports rehabilitation programmes take you from early recovery to full training.' },
      { question: 'Do you offer home visits in Jabi?', answer: 'Yes. Call or WhatsApp us with your location to arrange a visit.' },
    ],
    image: '/image_five.webp',
  }),
  area({
    slug: 'lugbe',
    name: 'Lugbe',
    title: 'Physiotherapy in Lugbe, Abuja | Home Physiotherapy Visits',
    metaDescription:
      'Physiotherapy for Lugbe residents along the Airport Road: home physiotherapy visits or appointments at our Garki clinic for back pain, stroke, children and postnatal care.',
    h1: 'Physiotherapy for Lugbe Residents',
    intro: [
      'Lugbe, along the Airport Road, has grown rapidly into one of Abuja’s busiest residential areas. Many residents commute into the city, and many households include young children and older relatives.',
      'Adidian Physiotherapy Clinic offers home physiotherapy for Lugbe families, as well as appointments at our clinic in Area 11, Garki.',
    ],
    whoWeSee: [
      'Commuters with back pain, neck pain and sciatica',
      'New mothers after pregnancy and childbirth',
      'Children with developmental and movement difficulties',
      'Older adults and stroke survivors who find travel difficult',
    ],
    gettingHere:
      'If you travel into the city for work, our clinic at No 32 Lord Lugard Street, Area 11, Garki may be convenient before or after work. Call us to book a time.',
    homeVisits:
      'Home visits save Lugbe patients a long journey, especially after surgery, after a stroke, or with young children. Contact us to check availability for your area.',
    featuredConditions: ['low-back-pain', 'postnatal-physiotherapy', 'cerebral-palsy', 'stroke-rehabilitation'],
    faqs: [
      { question: 'Do you offer home physiotherapy in Lugbe?', answer: 'Yes. Contact us with your location in Lugbe to confirm availability and arrange a visit.' },
      { question: 'Do you treat children at home?', answer: 'Yes. Paediatric physiotherapy at home is often easier for children and their families.' },
      { question: 'Do you accept HMO for home visits?', answer: 'We accept HMO and insurance referrals. Contact us with your plan details so we can confirm what is covered.' },
    ],
    image: '/image_one.webp',
  }),
];

export const areaBySlug = Object.fromEntries(areas.map((a) => [a.slug, a]));
