// Blog articles. Each one answers a common question and links to the
// matching condition or service page.

export interface ArticleSection {
  heading: string;
  paragraphs?: string[];
  list?: string[];
  /** Ordered list (steps) instead of bullets. */
  ordered?: boolean;
}

export interface Article {
  slug: string;
  title: string;
  metaDescription: string;
  excerpt: string;
  image: string;
  datePublished: string;
  readMinutes: number;
  intro: string[];
  sections: ArticleSection[];
  /** Condition/service pages to link at the end: [label, path]. */
  related: [string, string][];
}

export const articles: Article[] = [
  {
    slug: 'exercises-for-lower-back-pain',
    title: '7 Safe Exercises for Lower Back Pain You Can Do at Home',
    metaDescription:
      'Seven gentle, physiotherapist-recommended exercises for lower back pain, with tips on how often to do them and when to see a physiotherapist in Abuja.',
    excerpt: 'Gentle movements that help most people with everyday back pain, and the signs that mean you should get checked.',
    image: '/therapy-opt.webp',
    datePublished: '2026-11-14',
    readMinutes: 5,
    intro: [
      'Most lower back pain is not caused by serious damage, and staying active is one of the best things you can do. These seven gentle exercises are commonly used by physiotherapists to ease stiffness and help the back move more comfortably.',
      'Move slowly and within comfort. Mild discomfort is fine, but stop any exercise that causes sharp pain or makes pain spread down your leg.',
    ],
    sections: [
      {
        heading: 'The exercises',
        ordered: true,
        list: [
          'Knee-to-chest stretch: lie on your back with knees bent. Gently bring one knee towards your chest, hold for 20–30 seconds, then switch. Repeat 3 times each side.',
          'Pelvic tilts: lie on your back with knees bent. Gently flatten your lower back into the floor by tightening your tummy, hold for 5 seconds, then relax. Repeat 10 times.',
          'Knee rolls: lie on your back with knees bent and together. Slowly roll both knees to one side, then the other, keeping your shoulders on the floor. Repeat 10 times each way.',
          'Cat–camel: on hands and knees, slowly arch your back up towards the ceiling, then let it gently dip down. Move within comfort. Repeat 10 times.',
          'Bridge: lie on your back with knees bent. Squeeze your buttocks and lift your hips until your body forms a straight line from shoulders to knees. Hold for 5 seconds. Repeat 10 times.',
          'Bird-dog: on hands and knees, slowly stretch one arm forward and the opposite leg back, keeping your back level. Hold for 5 seconds, then switch. Repeat 8 times each side.',
          'Walking: a short, comfortable walk once or twice a day is one of the best exercises for back pain. Build up the time gradually.',
        ],
      },
      {
        heading: 'How often should I do them?',
        paragraphs: [
          'Try the exercises once or twice a day. Little and often works better than one long session. As your back improves, you can increase the repetitions and the length of your walks.',
        ],
      },
      {
        heading: 'Everyday tips that help',
        list: [
          'Get up and move every 30–45 minutes if you sit for work.',
          'Use heat to ease muscle spasm.',
          'Avoid bed rest: gentle activity helps most back pain recover faster.',
          'Lift with your knees bent and the load close to your body.',
        ],
      },
      {
        heading: 'When to see a physiotherapist',
        paragraphs: [
          'If your pain is not improving after a couple of weeks, keeps coming back, or stops you working or sleeping, a physiotherapy assessment can find what is driving it and give you a targeted plan.',
          'Seek urgent medical help if you have numbness around the groin or buttocks, new difficulty controlling your bladder or bowels, worsening leg weakness, or back pain with fever or unexplained weight loss.',
        ],
      },
    ],
    related: [
      ['Back pain treatment in Abuja', '/conditions/low-back-pain'],
      ['Sciatica treatment in Abuja', '/conditions/sciatica'],
      ['Lumbar spondylosis treatment', '/conditions/lumbar-spondylosis'],
    ],
  },
  {
    slug: 'how-many-physiotherapy-sessions-do-i-need',
    title: 'How Many Physiotherapy Sessions Will I Need?',
    metaDescription:
      'How many physiotherapy sessions you are likely to need depends on your condition, how long you have had it and your goals. Here is what to expect.',
    excerpt: 'What affects the number of sessions, what a typical course looks like, and how to get the most from each visit.',
    image: '/physiooffice.webp',
    datePublished: '2026-11-14',
    readMinutes: 4,
    intro: [
      'It is one of the first questions patients ask, and a fair one. The honest answer is that it depends. But there are clear factors that affect it, and your physiotherapist should give you an idea after your first assessment.',
    ],
    sections: [
      {
        heading: 'What affects the number of sessions',
        list: [
          'Your condition: a recent ankle sprain usually needs fewer sessions than recovery from a stroke or major surgery.',
          'How long you have had the problem: long-standing pain often takes longer to settle than a recent injury.',
          'Your goals: getting back to walking comfortably is different from returning to competitive football.',
          'Your general health, sleep, stress and activity levels.',
          'How consistently you do your home exercises between sessions.',
        ],
      },
      {
        heading: 'What a typical course looks like',
        paragraphs: [
          'Many common problems such as back pain, neck pain or a sprain improve noticeably over a few sessions, often spread over several weeks. Sessions are usually closer together at the start and further apart as you become more independent with your exercises.',
          'Neurological conditions like stroke, and rehabilitation after major surgery, usually need a longer programme with regular reviews of progress and goals.',
        ],
      },
      {
        heading: 'How to get the most from physiotherapy',
        list: [
          'Do your home exercises: they are where most of the progress happens.',
          'Tell your physiotherapist what you want to get back to doing.',
          'Ask questions until you understand your condition and plan.',
          'Report how you felt after each session, good or bad, so treatment can be adjusted.',
        ],
      },
      {
        heading: 'Our approach',
        paragraphs: [
          'At Adidian Physiotherapy Clinic, we agree goals with you at your first visit, review your progress regularly and aim to make you independent as soon as possible, not to keep you coming back longer than you need.',
        ],
      },
    ],
    related: [
      ['Our physiotherapy services', '/services'],
      ['Conditions we treat', '/conditions'],
      ['Home physiotherapy in Abuja', '/home-physiotherapy-abuja'],
    ],
  },
  {
    slug: 'physiotherapist-or-chiropractor',
    title: 'Physiotherapist or Chiropractor: Which Do I Need?',
    metaDescription:
      'What is the difference between a physiotherapist and a chiropractor? How each works, which conditions they treat and how to choose for back, neck and joint pain.',
    excerpt: 'Both treat back and neck pain, but their training and approach differ. Here is how to choose.',
    image: '/blackphysio.webp',
    datePublished: '2026-11-14',
    readMinutes: 4,
    intro: [
      'If you have back or neck pain, you may wonder whether to see a physiotherapist or a chiropractor. Both can help with musculoskeletal pain, but they differ in training, approach and the range of problems they treat.',
    ],
    sections: [
      {
        heading: 'What physiotherapists do',
        paragraphs: [
          'Physiotherapists are trained to assess and treat problems with movement and function across the whole body. As well as back and neck pain, physiotherapy covers sports injuries, rehabilitation after surgery and fractures, stroke and other neurological conditions, children’s development, women’s health and older adults.',
          'Treatment centres on exercise and active rehabilitation, supported by hands-on techniques, education and advice, so you can manage your condition yourself in the long term.',
        ],
      },
      {
        heading: 'What chiropractors do',
        paragraphs: [
          'Chiropractors focus mainly on the spine and joints, and spinal manipulation (“adjustments”) is a central part of their treatment. Many also give exercise and lifestyle advice.',
        ],
      },
      {
        heading: 'How to choose',
        list: [
          'For back or neck pain, both may help; look for a practitioner who assesses you properly and includes exercise in your plan.',
          'For rehabilitation after surgery, fractures, stroke, sports injuries, pelvic floor problems or children’s movement difficulties, a physiotherapist is usually the right choice.',
          'If you prefer an active, exercise-based approach that teaches you to manage your condition yourself, physiotherapy is a good fit.',
        ],
      },
      {
        heading: 'Questions to ask any practitioner',
        list: [
          'What do you think is causing my pain?',
          'What is the plan, and how many sessions do you expect?',
          'What can I do at home to help myself?',
          'Are there any warning signs I should look out for?',
        ],
      },
    ],
    related: [
      ['Back pain treatment in Abuja', '/conditions/low-back-pain'],
      ['Neck pain treatment in Abuja', '/conditions/neck-pain'],
      ['Slipped disc treatment', '/conditions/slipped-disc'],
    ],
  },
  {
    slug: 'desk-setup-tips-office-workers-abuja',
    title: 'Desk Set-Up Tips for Office Workers in Abuja',
    metaDescription:
      'Simple ergonomic desk set-up tips to prevent neck pain, back pain and wrist strain for office workers, from the physiotherapists at Adidian Physiotherapy Clinic.',
    excerpt: 'Small changes to your chair, screen and habits that reduce neck and back pain at work.',
    image: '/ergonomics.webp',
    datePublished: '2026-11-14',
    readMinutes: 4,
    intro: [
      'Many office workers in Abuja’s business districts spend eight hours or more at a desk, often with a long drive either side. Neck pain, back pain and tension headaches are the result for many. A few simple changes to your workstation and habits can make a real difference.',
    ],
    sections: [
      {
        heading: 'Set up your workstation',
        list: [
          'Screen: put the top of the screen at about eye level and an arm’s length away. If you use a laptop, raise it on a stand or books and use a separate keyboard and mouse.',
          'Chair: sit with your back supported, feet flat on the floor or a footrest, and knees roughly level with your hips.',
          'Keyboard and mouse: keep them close, with elbows bent at about 90 degrees and shoulders relaxed.',
          'Phone: use a headset or speaker for long calls rather than holding the phone between your ear and shoulder.',
          'Documents: use a document holder next to your screen instead of laying papers flat on the desk.',
        ],
      },
      {
        heading: 'Build movement into your day',
        list: [
          'Stand up and move every 30–45 minutes, even for a minute or two.',
          'Take phone calls standing or walking where possible.',
          'Do gentle neck and shoulder rolls during the day.',
          'Use your lunch break for a short walk.',
        ],
      },
      {
        heading: 'Commuting',
        paragraphs: [
          'Long drives add to the strain. Adjust your car seat so your back is supported and you can reach the pedals without stretching. On long journeys, take breaks when it is safe to do so.',
        ],
      },
      {
        heading: 'When to get help',
        paragraphs: [
          'If you have neck, back or wrist pain that keeps returning despite these changes, a physiotherapist can assess you and give you targeted treatment and advice. Our team includes an ergonomist and can advise individuals and workplaces.',
        ],
      },
    ],
    related: [
      ['Neck pain treatment in Abuja', '/conditions/neck-pain'],
      ['Cervical spondylosis treatment', '/conditions/cervical-spondylosis'],
      ['Occupational therapy & ergonomics', '/services/occupational-therapy'],
    ],
  },
  {
    slug: 'recovering-from-stroke-at-home-guide-for-families',
    title: 'Recovering From a Stroke at Home: A Guide for Families',
    metaDescription:
      'Practical guidance for families caring for a loved one at home after a stroke: safety, daily practice, preventing complications and when to get help, from Abuja physiotherapists.',
    excerpt: 'How families can support recovery safely at home after a stroke, and the warning signs to watch for.',
    image: '/neurological.webp',
    datePublished: '2026-11-14',
    readMinutes: 6,
    intro: [
      'Coming home from hospital after a stroke is a big step for the whole family. Recovery often continues for many months, and what happens at home every day makes a real difference. This guide covers practical ways families can help.',
      'Every person’s stroke is different, so use this alongside the advice of their doctors and physiotherapist.',
    ],
    sections: [
      {
        heading: 'Make the home safe',
        list: [
          'Clear walkways and remove loose rugs and trip hazards.',
          'Put frequently used items within easy reach.',
          'Use good lighting, including at night between the bedroom and toilet.',
          'Consider grab rails near the toilet and in the bathroom, and a sturdy chair with armrests.',
        ],
      },
      {
        heading: 'Practise every day',
        paragraphs: [
          'Recovery after a stroke depends on repeated practice. Short, frequent sessions of the exercises and tasks the physiotherapist has given are more effective than occasional long sessions.',
          'Encourage your loved one to do as much as they safely can for themselves, such as dressing, eating, standing up and walking, even if it takes longer. Doing things for them can slow their progress.',
        ],
      },
      {
        heading: 'Help prevent complications',
        list: [
          'Support the weak arm on a pillow when sitting, and avoid pulling on it when helping them move.',
          'Change position regularly if they spend a lot of time in bed or a chair.',
          'Encourage drinking enough fluids and eating well.',
          'Make sure prescribed medicines are taken as directed to reduce the risk of another stroke.',
        ],
      },
      {
        heading: 'Look after the carer too',
        paragraphs: [
          'Caring for someone after a stroke can be exhausting. Share the load with other family members, take breaks, and ask for help. Low mood is common after a stroke for both patients and carers; talk to a doctor if it persists.',
        ],
      },
      {
        heading: 'Warning signs: act F.A.S.T.',
        paragraphs: [
          'Face drooping, Arm weakness, Speech difficulty: Time to go to hospital immediately. Also seek urgent help for a sudden severe headache, a fall with a head injury, or chest pain or sudden breathlessness.',
        ],
      },
      {
        heading: 'How physiotherapy at home helps',
        paragraphs: [
          'Home physiotherapy lets us train the real tasks your loved one needs in their own environment, and teach family members safe ways to help. We offer stroke rehabilitation at our Garki clinic and through home visits across Abuja.',
        ],
      },
    ],
    related: [
      ['Stroke rehabilitation in Abuja', '/conditions/stroke-rehabilitation'],
      ['Home physiotherapy in Abuja', '/home-physiotherapy-abuja'],
      ['Neurological rehabilitation', '/services/neurological-rehabilitation'],
    ],
  },
];

export const articleBySlug = Object.fromEntries(articles.map((a) => [a.slug, a]));
