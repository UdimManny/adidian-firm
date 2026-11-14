// Condition / topic landing pages. Each targets a local search such as
// "back pain treatment Abuja". Keep clinic facts consistent with the FAQ and
// contact pages; keep medical content general and evidence-based.

export interface ConditionFAQ {
  question: string;
  answer: string;
}

export interface Condition {
  slug: string;
  /** Route path, e.g. /conditions/low-back-pain */
  path: string;
  name: string;
  /** <title> */
  title: string;
  metaDescription: string;
  h1: string;
  tagline: string;
  image: string;
  intro: string[];
  symptomsHeading: string;
  symptoms: string[];
  causesHeading: string;
  causes: string[];
  treatment: { title: string; text: string }[];
  selfCare: string[];
  redFlags: string[];
  faqs: ConditionFAQ[];
  relatedServices: string[];
  relatedConditions: string[];
}

const CALL = 'Call 070-6587-3379 to book.';

export const conditions: Condition[] = [
  {
    slug: 'low-back-pain',
    path: '/conditions/low-back-pain',
    name: 'Low Back Pain',
    title: 'Back Pain Treatment in Abuja | Physiotherapy for Low Back Pain',
    metaDescription: `Physiotherapy for low back pain at our clinic in Area 11, Garki, Abuja. Assessment, hands-on treatment and a home exercise plan to get you moving again. ${CALL}`,
    h1: 'Back Pain Treatment in Abuja',
    tagline: 'Find out what is driving your back pain and get a clear plan to move comfortably again.',
    image: '/back-pain.jpg',
    intro: [
      'Low back pain is one of the most common reasons people see a physiotherapist. Long hours at a desk, long drives across Abuja, lifting at home or work, and simply not moving enough can all play a part.',
      'The good news is that most back pain is not caused by serious damage, and the right exercise and advice usually help a great deal. At Adidian Physiotherapy Clinic in Area 11, Garki, we assess your back properly, explain what is going on in plain language and build a treatment plan around your daily life.',
    ],
    symptomsHeading: 'Common symptoms',
    symptoms: [
      'Aching or stiffness across the lower back',
      'Pain that is worse after sitting, standing or bending for a long time',
      'Muscle spasm or a "locked" feeling, especially in the morning',
      'Pain that spreads into the buttock or thigh',
      'Difficulty getting out of a chair or car',
    ],
    causesHeading: 'What commonly causes it',
    causes: [
      'Prolonged sitting and poor workstation set-up',
      'Lifting, twisting or a sudden awkward movement',
      'Weak or deconditioned back and hip muscles',
      'Age-related changes in the spine (very common and often painless)',
      'Pregnancy and the months after childbirth',
      'Stress, poor sleep and low activity levels, which can all increase pain',
    ],
    treatment: [
      { title: 'Thorough assessment', text: 'We take a full history, examine how you move and check for anything that needs a doctor’s review, so your treatment is based on what is actually going on.' },
      { title: 'Hands-on treatment', text: 'Joint mobilisation and soft-tissue techniques can ease pain and stiffness in the short term and make it easier to start exercising.' },
      { title: 'Targeted exercise', text: 'A progressive programme to strengthen and restore movement in your back, hips and core. This is the part of treatment with the strongest evidence for lasting results.' },
      { title: 'Advice for work and home', text: 'Practical changes to how you sit, lift, sleep and stay active, including ergonomic advice for office workers.' },
      { title: 'Pain-relief modalities where helpful', text: 'Heat or electrotherapy such as TENS may be used alongside exercise for short-term relief.' },
    ],
    selfCare: [
      'Keep moving. Gentle walking and normal activity are usually better than bed rest.',
      'Change position often. Get up from your desk at least every 30–45 minutes.',
      'Use heat (a warm pack or shower) to ease muscle spasm.',
      'Avoid heavy lifting while pain is severe, then build back up gradually.',
    ],
    redFlags: [
      'Numbness around the groin, buttocks or genitals',
      'New difficulty passing urine or controlling your bladder or bowels',
      'Weakness in one or both legs that is getting worse',
      'Back pain with fever, unexplained weight loss or a history of cancer',
      'Back pain after a significant fall or accident',
    ],
    faqs: [
      { question: 'Do I need a doctor’s referral to see a physiotherapist for back pain?', answer: 'No. You can book directly with our Abuja clinic. If your assessment shows anything that needs a doctor’s input, we will tell you and refer you on.' },
      { question: 'How many physiotherapy sessions will I need for back pain?', answer: 'It depends on how long you have had the pain and how it affects you. Many people notice improvement within the first few sessions; we review your progress regularly and focus on getting you independent with your exercises.' },
      { question: 'Should I rest my back completely?', answer: 'Usually not. Staying gently active helps most back pain recover faster than bed rest. Your physiotherapist will show you which movements are safe to do.' },
      { question: 'Can you treat back pain at home?', answer: 'Yes. We offer home physiotherapy visits across Abuja for people who find it hard to travel to the clinic.' },
    ],
    relatedServices: ['pain-management', 'occupational-therapy'],
    relatedConditions: ['sciatica', 'neck-pain'],
  },
  {
    slug: 'sciatica',
    path: '/conditions/sciatica',
    name: 'Sciatica',
    title: 'Sciatica Treatment in Abuja | Physiotherapy for Leg & Nerve Pain',
    metaDescription: `Physiotherapy for sciatica and nerve pain down the leg at our clinic in Garki, Abuja. Assessment, exercise and pain-relief treatment. ${CALL}`,
    h1: 'Sciatica Treatment in Abuja',
    tagline: 'Relief for pain, tingling and numbness that travels from your back down your leg.',
    image: '/therapy.jpg',
    intro: [
      'Sciatica is pain that runs from the lower back or buttock down the back of the leg, sometimes as far as the foot. It happens when the sciatic nerve, or one of the nerve roots that form it, becomes irritated or compressed.',
      'Sciatica can be very painful, but most cases settle with the right care. Our physiotherapists in Area 11, Garki assess what is irritating the nerve and guide you through treatment and exercises to calm it down and restore movement.',
    ],
    symptomsHeading: 'Common symptoms',
    symptoms: [
      'Sharp, burning or shooting pain down one leg',
      'Leg pain that is often worse than the back pain',
      'Tingling, pins and needles or numbness in the leg or foot',
      'Pain that is worse when sitting, coughing or sneezing',
      'A feeling of weakness in the leg or foot',
    ],
    causesHeading: 'What commonly causes it',
    causes: [
      'A bulging or herniated (slipped) disc pressing on a nerve root',
      'Narrowing of the spaces around the nerves (spinal stenosis), more common with age',
      'Muscle tightness in the buttock (sometimes called piriformis syndrome)',
      'Pregnancy, due to posture changes and pressure',
    ],
    treatment: [
      { title: 'Nerve and spine assessment', text: 'We test strength, sensation and reflexes and look at how your back moves, to understand which nerve is involved and how irritated it is.' },
      { title: 'Calming the nerve', text: 'Positions, gentle movements and nerve-gliding exercises that reduce irritation and ease leg pain.' },
      { title: 'Manual therapy', text: 'Hands-on techniques to reduce muscle spasm and stiffness around the back and hip.' },
      { title: 'Strength and recovery', text: 'As pain settles, a progressive programme for your back, hips and legs to help prevent flare-ups.' },
      { title: 'Advice and pacing', text: 'How to sit, sleep, work and stay active without aggravating the nerve.' },
    ],
    selfCare: [
      'Stay as active as you comfortably can; short, frequent walks often help.',
      'Avoid sitting for long periods. Stand up and move regularly.',
      'Try lying on your back with your knees bent or legs supported on a chair.',
      'Avoid stretches that make the leg pain sharper or spread further down the leg.',
    ],
    redFlags: [
      'Numbness around the groin, buttocks or genitals',
      'New problems controlling your bladder or bowels',
      'Sciatica in both legs at the same time',
      'Leg or foot weakness that is getting worse, or a foot that drops when you walk',
    ],
    faqs: [
      { question: 'How long does sciatica take to get better?', answer: 'Many people improve within about 4 to 6 weeks, though some cases take longer. Physiotherapy helps you manage the pain and keep moving while the nerve settles.' },
      { question: 'Is walking good for sciatica?', answer: 'For most people, yes. Gentle walking keeps the back moving and can ease nerve irritation. Your physiotherapist will help you find the right amount.' },
      { question: 'Will I need surgery for sciatica?', answer: 'Most people do not. Surgery is usually only considered when symptoms are severe, getting worse or not improving after a period of good conservative care. We will refer you to a specialist if needed.' },
      { question: 'Do you accept HMO and insurance for sciatica treatment?', answer: 'Yes, our clinic accepts insurance and HMO referrals. Contact us with your plan details and we will confirm what is covered.' },
    ],
    relatedServices: ['pain-management', 'neurological-rehabilitation'],
    relatedConditions: ['low-back-pain', 'knee-pain'],
  },
  {
    slug: 'neck-pain',
    path: '/conditions/neck-pain',
    name: 'Neck Pain',
    title: 'Neck Pain Treatment in Abuja | Physiotherapy for Neck & Shoulder Pain',
    metaDescription: `Physiotherapy for neck pain and stiffness in Area 11, Garki, Abuja. Treatment for desk-related neck pain, headaches from the neck and whiplash. ${CALL}`,
    h1: 'Neck Pain Treatment in Abuja',
    tagline: 'Ease neck pain, stiffness and tension headaches, and stop them coming back.',
    image: '/ergonomics.png',
    intro: [
      'Neck pain is especially common in people who spend long hours on laptops and phones, or behind the wheel in Abuja traffic. It often comes with tight shoulders and headaches that start at the base of the skull.',
      'Our physiotherapists find out what is loading your neck, treat the pain and stiffness, and give you simple changes and exercises so it does not keep returning.',
    ],
    symptomsHeading: 'Common symptoms',
    symptoms: [
      'Stiffness and difficulty turning your head',
      'Aching across the neck and tops of the shoulders',
      'Headaches that start at the back of the head',
      'Pain or tingling spreading into the shoulder blade or arm',
      'Waking up with a stiff or "cricked" neck',
    ],
    causesHeading: 'What commonly causes it',
    causes: [
      'Long periods looking down at a laptop or phone',
      'Poor workstation or pillow set-up',
      'Stress and muscle tension',
      'Whiplash from a road traffic accident',
      'Age-related changes in the neck joints',
      'An irritated nerve in the neck (cervical radiculopathy)',
    ],
    treatment: [
      { title: 'Assessment', text: 'We examine your neck, shoulders and upper back, check the nerves to your arms, and look at your posture and work set-up.' },
      { title: 'Manual therapy', text: 'Gentle mobilisation and soft-tissue release to ease pain and restore movement.' },
      { title: 'Exercise programme', text: 'Mobility and strengthening exercises for the neck and upper back, which give the most lasting results.' },
      { title: 'Ergonomic advice', text: 'Practical adjustments to your screen height, chair, phone use and sleeping position.' },
    ],
    selfCare: [
      'Raise your screen so the top is at eye level.',
      'Take a short movement break every 30–45 minutes.',
      'Use a pillow that keeps your neck in line with your spine.',
      'Gentle neck movements within comfort are better than holding your neck still.',
    ],
    redFlags: [
      'Neck pain after a fall, accident or head injury',
      'Weakness, clumsiness or numbness in the arms or legs',
      'Dizziness, blackouts, double vision, or difficulty speaking or swallowing',
      'A severe, sudden headache, or neck stiffness with fever',
    ],
    faqs: [
      { question: 'Can physiotherapy help headaches?', answer: 'Yes, when the headaches come from the neck (cervicogenic headaches) or muscle tension. We assess whether your headaches are likely to be coming from the neck and refer you on if not.' },
      { question: 'Do you treat whiplash after a car accident?', answer: 'Yes. After you have been checked by a doctor, physiotherapy can help restore movement and reduce pain following whiplash.' },
      { question: 'Can you check my office set-up?', answer: 'Yes. Ergonomics is one of our specialties. We can advise on your desk set-up as part of your treatment.' },
    ],
    relatedServices: ['pain-management', 'occupational-therapy'],
    relatedConditions: ['frozen-shoulder', 'low-back-pain'],
  },
  {
    slug: 'knee-pain',
    path: '/conditions/knee-pain',
    name: 'Knee Pain',
    title: 'Knee Pain Treatment in Abuja | Physiotherapy for Arthritis & Injuries',
    metaDescription: `Physiotherapy for knee pain in Abuja: osteoarthritis, sports injuries, ligament and meniscus problems, and rehab after knee surgery. Clinic in Area 11, Garki. ${CALL}`,
    h1: 'Knee Pain Treatment in Abuja',
    tagline: 'From arthritis to sports injuries and surgery, get your knee strong and moving again.',
    image: '/sports.jpg',
    intro: [
      'Knee pain can make walking, climbing stairs, praying, exercising and playing sport difficult. It affects young athletes and older adults alike, for very different reasons.',
      'At our Abuja clinic we diagnose the likely cause of your knee pain, treat it, and take you through a structured strengthening programme. Strong muscles around the knee are one of the best long-term treatments for most knee problems, including arthritis.',
    ],
    symptomsHeading: 'Common symptoms',
    symptoms: [
      'Pain when climbing stairs, squatting or kneeling',
      'Stiffness, especially in the morning or after sitting',
      'Swelling around the knee',
      'Clicking, catching or the knee "giving way"',
      'Pain around or behind the kneecap',
    ],
    causesHeading: 'What commonly causes it',
    causes: [
      'Knee osteoarthritis (wear-and-tear arthritis)',
      'Ligament sprains, including ACL injuries, often from football and other sports',
      'Meniscus (cartilage) tears',
      'Pain around the kneecap (patellofemoral pain) in runners and active people',
      'Tendon problems such as patellar tendinopathy',
      'Recovery after knee surgery, including knee replacement',
    ],
    treatment: [
      { title: 'Diagnosis and assessment', text: 'We examine the knee, hip and foot, test the ligaments and look at how you walk, squat and move.' },
      { title: 'Strengthening programme', text: 'Progressive exercise for the thigh, hip and calf muscles, tailored to your condition and goals.' },
      { title: 'Pain relief', text: 'Manual therapy and, where helpful, modalities such as heat, ice or electrotherapy to ease pain and swelling.' },
      { title: 'Sports and return-to-play rehab', text: 'Balance, agility and sport-specific training so you return to sport safely.' },
      { title: 'Post-surgical rehabilitation', text: 'Structured rehab after ACL reconstruction, meniscus surgery or knee replacement, working with your surgeon’s guidance.' },
    ],
    selfCare: [
      'Keep active. Walking, cycling and swimming are usually kind to sore knees.',
      'Use ice or a cold pack wrapped in a cloth for 15–20 minutes to ease swelling.',
      'Maintain a healthy weight. It reduces the load on your knees.',
      'Wear supportive footwear, especially if you walk or stand a lot.',
    ],
    redFlags: [
      'You cannot put weight on the leg after an injury',
      'The knee is hot, red and swollen and you feel unwell or have a fever',
      'The knee looks deformed or locks so you cannot straighten it',
      'Calf pain and swelling, especially after surgery or a long journey',
    ],
    faqs: [
      { question: 'Can physiotherapy help knee arthritis?', answer: 'Yes. Exercise-based physiotherapy is a first-line treatment for knee osteoarthritis and can reduce pain and improve walking and function.' },
      { question: 'Do I need an MRI before physiotherapy for knee pain?', answer: 'Not usually. A clinical assessment is often enough to start treatment. If we suspect something that needs imaging or a surgeon’s opinion, we will refer you.' },
      { question: 'When should I start physio after knee surgery?', answer: 'Usually within days of surgery, following your surgeon’s instructions. Starting early helps restore movement and strength.' },
    ],
    relatedServices: ['sports-rehabilitation', 'geriatric-care'],
    relatedConditions: ['low-back-pain', 'sciatica'],
  },
  {
    slug: 'frozen-shoulder',
    path: '/conditions/frozen-shoulder',
    name: 'Frozen Shoulder & Shoulder Pain',
    title: 'Frozen Shoulder Treatment in Abuja | Physiotherapy for Shoulder Pain',
    metaDescription: `Physiotherapy for frozen shoulder, rotator cuff problems and shoulder pain at our clinic in Garki, Abuja. Restore movement and reduce pain. ${CALL}`,
    h1: 'Frozen Shoulder & Shoulder Pain Treatment in Abuja',
    tagline: 'Get your arm moving again and reduce pain that disturbs your sleep and daily tasks.',
    image: '/therapy.png',
    intro: [
      'Shoulder pain can make it hard to dress, reach overhead, carry bags or sleep on your side. Two of the most common causes we see are frozen shoulder and rotator cuff problems.',
      'Frozen shoulder (adhesive capsulitis) causes the shoulder joint to become painful and progressively stiff. It is more common between the ages of 40 and 60 and in people with diabetes. Physiotherapy helps manage the pain and restore as much movement as possible through each stage.',
    ],
    symptomsHeading: 'Common symptoms',
    symptoms: [
      'Shoulder pain that is often worse at night',
      'Difficulty lifting your arm, reaching behind your back or fastening clothes',
      'Stiffness that gradually gets worse over weeks or months',
      'Pain when lying on the affected side',
      'Weakness when lifting or reaching',
    ],
    causesHeading: 'What commonly causes it',
    causes: [
      'Frozen shoulder (adhesive capsulitis), often with no clear trigger',
      'Rotator cuff tendon irritation or tears',
      'Diabetes and thyroid conditions, which increase the risk of frozen shoulder',
      'A period of not moving the arm, for example after an injury, surgery or stroke',
      'Repetitive overhead work or sport',
    ],
    treatment: [
      { title: 'Assessment', text: 'We work out whether your pain is from frozen shoulder, the rotator cuff or another cause, and which stage you are in.' },
      { title: 'Pain management', text: 'Advice, manual therapy and modalities to reduce pain, especially at night.' },
      { title: 'Mobility work', text: 'Stage-appropriate stretches and mobilisation to gradually restore range of movement.' },
      { title: 'Strengthening', text: 'Rotator cuff and shoulder blade strengthening to restore function and prevent recurrence.' },
    ],
    selfCare: [
      'Keep the arm gently moving within comfort. Avoid keeping it completely still.',
      'Sleep with a pillow supporting the painful arm.',
      'Use heat before your exercises to ease stiffness.',
      'If you have diabetes, keep your blood sugar well controlled.',
    ],
    redFlags: [
      'Left shoulder or arm pain with chest pain, breathlessness or sweating: call for emergency help',
      'Shoulder pain after a fall with deformity or inability to lift the arm',
      'A hot, red, swollen shoulder with fever',
      'Unexplained weight loss or night pain that does not change with position',
    ],
    faqs: [
      { question: 'How long does frozen shoulder last?', answer: 'Frozen shoulder often goes through painful, stiff and recovery ("thawing") phases and can take one to three years to resolve fully. Physiotherapy helps control pain and improve movement during this time.' },
      { question: 'Should I push through the pain with frozen shoulder?', answer: 'Not in the painful early phase. Exercises should be matched to your stage; your physiotherapist will tell you how far to push.' },
      { question: 'Can I get physiotherapy at home for shoulder pain?', answer: 'Yes, we offer home physiotherapy visits across Abuja.' },
    ],
    relatedServices: ['pain-management', 'geriatric-care'],
    relatedConditions: ['neck-pain', 'stroke-rehabilitation'],
  },
  {
    slug: 'stroke-rehabilitation',
    path: '/conditions/stroke-rehabilitation',
    name: 'Stroke Rehabilitation',
    title: 'Stroke Rehabilitation in Abuja | Physiotherapy After Stroke',
    metaDescription: `Stroke physiotherapy in Abuja at our Garki clinic or in your home. Rehab for walking, balance, arm function and independence after a stroke. ${CALL}`,
    h1: 'Stroke Rehabilitation in Abuja',
    tagline: 'Rebuild movement, balance and independence after a stroke, at our clinic or at home.',
    image: '/neurological.jpg',
    intro: [
      'A stroke can affect walking, balance, arm and hand use, speech and day-to-day independence. Physiotherapy is a central part of recovery, helping the brain and body relearn movement through regular, targeted practice.',
      'Our neurological rehabilitation team works with stroke survivors and their families in Abuja. We see patients at our clinic in Area 11, Garki, and offer home visits for people who find travelling difficult.',
    ],
    symptomsHeading: 'Problems we help with after a stroke',
    symptoms: [
      'Weakness or paralysis on one side of the body',
      'Difficulty walking, standing or getting in and out of bed',
      'Poor balance and fear of falling',
      'Stiffness or tightness (spasticity) in the arm or leg',
      'Reduced use of the arm and hand',
      'Shoulder pain on the affected side',
    ],
    causesHeading: 'Who stroke rehab is for',
    causes: [
      'People recently discharged from hospital after a stroke',
      'Stroke survivors months or years on who want to keep improving',
      'People recovering from other neurological conditions, such as head injury',
      'Families and carers who want to learn how to help safely at home',
    ],
    treatment: [
      { title: 'Full neurological assessment', text: 'We assess movement, strength, sensation, balance and walking, and agree clear, realistic goals with you and your family.' },
      { title: 'Task-specific training', text: 'Repeated practice of real activities such as standing up, walking and reaching, which drives recovery.' },
      { title: 'Balance and walking', text: 'Training to improve stability, walking quality and confidence, and to reduce the risk of falls.' },
      { title: 'Arm and hand rehabilitation', text: 'Exercises to improve control, strength and everyday use of the affected arm.' },
      { title: 'Managing stiffness and pain', text: 'Stretching, positioning and advice to manage spasticity and shoulder pain.' },
      { title: 'Carer training and home programme', text: 'We teach family members safe ways to help and give you exercises to practise between sessions.' },
    ],
    selfCare: [
      'Practise your home exercises every day. Frequent practice matters most.',
      'Remove trip hazards at home and use good lighting at night.',
      'Keep taking any medication your doctor has prescribed to reduce the risk of another stroke.',
      'Stay socially and physically active within your abilities.',
    ],
    redFlags: [
      'Sudden face drooping, arm weakness or slurred speech means another stroke may be happening: go to the hospital immediately (think F.A.S.T.)',
      'A sudden, severe headache unlike any before',
      'A fall with a head injury, especially if you take blood thinners',
      'Calf pain and swelling or sudden breathlessness',
    ],
    faqs: [
      { question: 'When should physiotherapy start after a stroke?', answer: 'As soon as your medical team says it is safe, usually while still in hospital or soon after discharge. Early, regular rehabilitation gives the best chance of recovery.' },
      { question: 'Is it too late for physiotherapy years after a stroke?', answer: 'It is rarely too late. Many people continue to make meaningful gains in strength, walking and independence long after their stroke with the right training.' },
      { question: 'Do you offer stroke physiotherapy at home in Abuja?', answer: 'Yes. Home visits are often ideal for stroke survivors, because we can train real tasks in your own environment and teach your family how to help.' },
      { question: 'How often should stroke rehab sessions be?', answer: 'This depends on your goals and stage of recovery. More frequent practice generally helps, so we combine sessions with a daily home programme.' },
    ],
    relatedServices: ['neurological-rehabilitation', 'geriatric-care'],
    relatedConditions: ['frozen-shoulder', 'knee-pain'],
  },
  {
    slug: 'home-physiotherapy',
    path: '/home-physiotherapy-abuja',
    name: 'Home Physiotherapy',
    title: 'Home Physiotherapy in Abuja | Physiotherapist Home Visits',
    metaDescription: `Physiotherapist home visits across Abuja: Garki, Wuse, Maitama, Asokoro, Gwarinpa and more. Ideal after surgery or stroke, and for older adults. ${CALL}`,
    h1: 'Home Physiotherapy in Abuja',
    tagline: 'Expert physiotherapy in the comfort of your home, anywhere in Abuja.',
    image: '/outpatient.jpeg',
    intro: [
      'Adidian Physiotherapy Clinic started as a home-care physiotherapy service, and home visits are still a core part of what we do. Our physiotherapists come to you, bringing the assessment, treatment and exercise guidance you would get in the clinic.',
      'Home physiotherapy is ideal when travelling is difficult or tiring, and it lets us train the real tasks you need, like getting out of bed, using the stairs or walking around your compound, in your own environment.',
    ],
    symptomsHeading: 'Who home physiotherapy is for',
    symptoms: [
      'Stroke survivors and people with other neurological conditions',
      'Older adults with reduced mobility or a risk of falls',
      'People recovering from surgery such as a hip or knee replacement',
      'Anyone with severe back pain who finds travel painful',
      'New mothers needing postnatal physiotherapy',
      'Busy professionals who prefer treatment at home or work',
    ],
    causesHeading: 'Areas we cover',
    causes: [
      'Garki, Area 11 and surrounding districts',
      'Wuse and Wuse 2',
      'Maitama and Asokoro',
      'Central Business District, Utako and Jabi',
      'Gwarinpa, Life Camp and Kubwa',
      'Lugbe, Apo, Lokogoma and other parts of the FCT, on request',
    ],
    treatment: [
      { title: 'Assessment at home', text: 'A full physiotherapy assessment, plus a look at your home set-up and any hazards that could cause falls.' },
      { title: 'Treatment', text: 'Hands-on therapy, exercise and mobility training, the same evidence-based care offered at our clinic.' },
      { title: 'Practical training', text: 'Practice of everyday tasks: transfers, stairs, walking with or without an aid, and getting up from the floor safely.' },
      { title: 'Family and carer guidance', text: 'We show family members and carers how to support exercises and help safely between visits.' },
    ],
    selfCare: [
      'Clear a space in your home where you can exercise safely.',
      'Have a sturdy chair without wheels available for exercises.',
      'Keep a list of your medications and any hospital discharge notes ready for your first visit.',
      'Wear loose, comfortable clothing and supportive shoes.',
    ],
    redFlags: [
      'Sudden face drooping, arm weakness or slurred speech: go to hospital immediately',
      'Chest pain or sudden breathlessness',
      'A fall with a head injury or inability to get up',
      'Calf pain and swelling after surgery or a long period in bed',
    ],
    faqs: [
      { question: 'Which parts of Abuja do you cover for home physiotherapy?', answer: 'We visit homes across Abuja, including Garki, Wuse, Maitama, Asokoro, the Central Business District, Gwarinpa and Kubwa. Contact us to confirm your area.' },
      { question: 'How do I book a home physiotherapy visit?', answer: 'Call 070-6587-3379 or use our contact page. Tell us your location, the condition and any recent hospital treatment, and we will arrange a suitable time.' },
      { question: 'Do I need special equipment at home?', answer: 'Usually not. Your physiotherapist will bring what is needed for the session and advise if any simple equipment would help.' },
      { question: 'Can a family member be present during home visits?', answer: 'Yes, and it is often helpful. Family members can learn how to support exercises between sessions.' },
    ],
    relatedServices: ['geriatric-care', 'neurological-rehabilitation'],
    relatedConditions: ['stroke-rehabilitation', 'low-back-pain'],
  },
];

export const conditionBySlug = Object.fromEntries(conditions.map((c) => [c.slug, c]));
