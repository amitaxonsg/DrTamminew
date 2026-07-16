export type Concern = {
  slug: string;
  title: string;
  searchTitle: string;
  summary: string;
  overview: string;
  signs: string[];
  support: string[];
  questions: Array<{ question: string; answer: string }>;
};

export const SITE = {
  name: 'Dr Tammi Quek',
  legalName: 'Dr Tammi Quek Developmental and Behavioural Paediatrics Clinic Pte Ltd',
  specialty: 'Developmental and Behavioural Paediatrics',
  phone: '+65 6397 6637',
  phoneHref: 'tel:+6563976637',
  whatsapp: '+65 9627 4893',
  whatsappHref: 'https://wa.me/6596274893',
  email: 'admin@drtammiquek.com',
  emailHref: 'mailto:admin@drtammiquek.com',
  addressLine1: '10 Sinaran Drive, #10-12',
  addressLine2: 'Novena Medical Center, Singapore 307506',
  logoUrl:
    'https://drtammiquek.com/paediatrics-clinic/wp-content/uploads/2021/07/dr-tammi-logo-new.png',
  productionUrl: 'https://drtammiquek.com/paediatrics-clinic',
  previewUrl: 'https://new.drtammiquek.com',
  kimiUrl: process.env.NEXT_PUBLIC_KIMI_URL ?? 'https://www.kimi.com/',
  enquiryUrl:
    process.env.NEXT_PUBLIC_ENQUIRY_URL ??
    'https://drtammiquek.com/paediatrics-clinic/contact/',
};

export const primaryNavigation = [
  {
    label: 'About',
    items: [
      { label: 'Dr Tammi Quek', href: '/about/' },
      { label: 'Clinic & Approach', href: '/clinic/' },
    ],
  },
  {
    label: 'Care & Support',
    items: [
      { label: 'Services', href: '/services/' },
      { label: 'Concerns We Support', href: '/concerns/' },
    ],
  },
  {
    label: 'For Families',
    items: [
      { label: 'International Families', href: '/international-families/' },
      { label: 'Resources', href: '/resources/' },
      { label: 'Frequently Asked Questions', href: '/faq/' },
    ],
  },
  {
    label: 'Schools & Professionals',
    href: '/schools-professionals/',
  },
  {
    label: 'AI Guidance',
    href: '/ai-guidance/',
  },
  {
    label: 'Contact',
    href: '/contact/',
  },
];

export const concerns: Concern[] = [
  {
    slug: 'autism-social-communication',
    title: 'Autism & Social Communication',
    searchTitle: 'Autism and Social Communication Assessment in Singapore',
    summary:
      'Developmental paediatric review for children with differences in communication, interaction, flexibility, play or sensory responses.',
    overview:
      'Families may notice differences in how a child communicates, connects with others, adapts to change, plays or responds to sensory experiences. A developmental consultation considers the child as a whole rather than relying on one behaviour or checklist.',
    signs: [
      'Differences in social communication or reciprocal interaction',
      'Restricted or repetitive patterns of play or behaviour',
      'Strong preferences for routines or difficulty with transitions',
      'Sensory sensitivities or sensory-seeking behaviours',
      'Concerns raised by parents, teachers or therapists',
    ],
    support: [
      'Review of developmental history, strengths and current concerns',
      'Consideration of communication, learning, behaviour and emotional needs',
      'Discussion of whether further assessment is appropriate',
      'Practical guidance for families and coordination with relevant professionals',
    ],
    questions: [
      {
        question: 'Does one sign mean that my child has autism?',
        answer:
          'No. Individual behaviours can occur for many reasons. A diagnosis cannot be made from one sign or an online checklist and requires an appropriate clinical assessment.',
      },
      {
        question: 'Can school feedback be useful?',
        answer:
          'Yes. Information from school can help the clinic understand how the child functions across settings, with parent or guardian consent.',
      },
    ],
  },
  {
    slug: 'adhd-attention-executive-function',
    title: 'ADHD, Attention & Executive Function',
    searchTitle: 'ADHD Assessment for Children and Teens in Singapore',
    summary:
      'Holistic evaluation of attention, activity level, impulse control, organisation, learning and emotional wellbeing.',
    overview:
      'Attention and self-regulation concerns can affect learning, relationships and daily routines. A developmental paediatric review considers behaviour across home, school and other settings, as well as sleep, learning, emotional and medical factors.',
    signs: [
      'Persistent difficulty sustaining attention',
      'High activity level or impulsive behaviour',
      'Difficulty organising work, belongings or routines',
      'Inconsistent school performance despite effort or ability',
      'Emotional frustration related to attention or task demands',
    ],
    support: [
      'Clinical review of developmental, medical and learning history',
      'Information from parents, school and prior reports where available',
      'Consideration of overlapping learning, sleep or emotional concerns',
      'Individualised recommendations and follow-up planning',
    ],
    questions: [
      {
        question: 'Is an online ADHD test enough?',
        answer:
          'No. Online tools may help families organise observations, but they cannot diagnose ADHD. A proper assessment considers development, functioning across settings and alternative explanations.',
      },
      {
        question: 'Do you need information from school?',
        answer:
          'School information is often helpful because attention and executive-function demands vary across environments. The clinic team will advise what is needed for each child.',
      },
    ],
  },
  {
    slug: 'developmental-delay',
    title: 'Developmental Delay',
    searchTitle: 'Developmental Delay Consultation in Singapore',
    summary:
      'Evaluation of concerns involving movement, communication, learning, play, independence or overall developmental progress.',
    overview:
      'Children develop at different rates, but parents may sometimes notice that progress is slower or uneven in one or more areas. A developmental consultation reviews the child’s history, current abilities, strengths and support needs.',
    signs: [
      'Delayed milestones in movement, language or self-care',
      'Loss of previously acquired skills',
      'Uneven development across different areas',
      'Difficulty learning age-appropriate routines or play skills',
      'Ongoing concerns raised by caregivers or professionals',
    ],
    support: [
      'Developmental and medical history review',
      'Assessment of strengths, needs and functional impact',
      'Review of existing therapy, school or medical reports',
      'Recommendations for further evaluation or support when needed',
    ],
    questions: [
      {
        question: 'Should I wait and see?',
        answer:
          'Some variations are temporary, while others benefit from earlier review. Families who remain concerned can seek a professional consultation rather than relying only on comparison with other children.',
      },
      {
        question: 'Can previous reports be reviewed?',
        answer:
          'Yes. Existing developmental, therapy, psychological, school or medical reports can help the clinic understand what has already been assessed.',
      },
    ],
  },
  {
    slug: 'speech-language-development',
    title: 'Speech & Language Development',
    searchTitle: 'Speech and Language Developmental Review in Singapore',
    summary:
      'Developmental paediatric evaluation when speech, language, communication or understanding is a concern.',
    overview:
      'Communication involves more than the number of words a child uses. The clinic considers understanding, expression, social communication, play, hearing and the broader developmental picture.',
    signs: [
      'Limited spoken language for age',
      'Difficulty understanding instructions or questions',
      'Unclear speech that significantly affects communication',
      'Difficulty using language socially',
      'A plateau or loss of communication skills',
    ],
    support: [
      'Review of speech, language and overall development',
      'Consideration of hearing, learning and social communication',
      'Review of speech-therapy or school information',
      'Guidance about appropriate next steps and referrals',
    ],
    questions: [
      {
        question: 'Is speech delay always an isolated issue?',
        answer:
          'No. Speech or language delay may occur on its own or alongside other developmental concerns. A broader developmental review can help clarify the context.',
      },
      {
        question: 'Should we bring speech-therapy reports?',
        answer:
          'Yes. Recent reports and examples of communication across settings can be useful for planning the consultation.',
      },
    ],
  },
  {
    slug: 'learning-school-concerns',
    title: 'Learning & School Concerns',
    searchTitle: 'Learning Difficulties and School Concerns in Singapore',
    summary:
      'Holistic review of learning progress, classroom functioning, attention, language, emotional wellbeing and developmental needs.',
    overview:
      'Learning difficulties may involve reading, writing, mathematics, language, attention, memory, organisation or a combination of factors. The clinic considers both the child’s challenges and the strengths that can support progress.',
    signs: [
      'Persistent difficulty acquiring academic skills',
      'A gap between apparent ability and school performance',
      'High effort, distress or avoidance around schoolwork',
      'Teacher concerns about learning, attention or classroom participation',
      'Multiple assessments without a clear integrated plan',
    ],
    support: [
      'Review of school history, reports and prior assessments',
      'Consideration of developmental, attention and emotional factors',
      'Identification of strengths as well as areas of need',
      'Recommendations that can be discussed with school and relevant professionals',
    ],
    questions: [
      {
        question: 'Do you replace an educational psychologist?',
        answer:
          'No. Different professionals answer different questions. A developmental paediatrician can help integrate medical, developmental, behavioural and learning information and advise whether further specialist assessment is needed.',
      },
      {
        question: 'Can the clinic communicate with school?',
        answer:
          'Where appropriate and with consent, the clinic can consider information from school and discuss coordination needs. School visits depend on location and clinical requirements.',
      },
    ],
  },
  {
    slug: 'behaviour-emotional-wellbeing',
    title: 'Behaviour & Emotional Wellbeing',
    searchTitle: 'Child Behaviour and Emotional Wellbeing Consultation Singapore',
    summary:
      'Developmental paediatric support for persistent behavioural, emotional, regulation or anxiety-related concerns.',
    overview:
      'Behaviour communicates a child’s needs, skills, stress and environment. A holistic evaluation considers development, communication, learning, relationships, sleep, health and emotional wellbeing rather than viewing behaviour in isolation.',
    signs: [
      'Persistent meltdowns, aggression or oppositional behaviour',
      'Anxiety, avoidance or difficulty coping with change',
      'Emotional responses that interfere with daily life',
      'Behavioural concerns across home and school',
      'Family stress related to ongoing regulation difficulties',
    ],
    support: [
      'Review of triggers, patterns and functional impact',
      'Consideration of developmental, learning and communication needs',
      'Practical parent guidance and individualised planning',
      'Referral or coordination with other professionals when appropriate',
    ],
    questions: [
      {
        question: 'Does challenging behaviour always mean a behavioural disorder?',
        answer:
          'No. Behaviour may reflect communication difficulties, developmental differences, anxiety, learning demands, sleep problems or other factors. Assessment should consider the wider context.',
      },
      {
        question: 'Can an AI chatbot advise us in a crisis?',
        answer:
          'No. AI tools on this website are only for general educational guidance and enquiry preparation. Urgent safety, psychiatric or medical concerns require appropriate professional or emergency support.',
      },
    ],
  },
];

export const frequentlyAskedQuestions = [
  {
    question: 'What is a developmental paediatric consultation?',
    answer:
      'It is a medical evaluation for developmental, behavioural, attention, learning, communication or social-emotional concerns. The exact consultation structure depends on the child’s needs, history and previous assessments.',
  },
  {
    question: 'Does the clinic provide general paediatric care?',
    answer:
      'No. The clinic focuses on developmental and behavioural paediatrics and does not replace a child’s regular paediatrician for immunisations, routine sick visits or general medical care.',
  },
  {
    question: 'Can I choose an appointment date online?',
    answer:
      'No. Appointment requests are reviewed manually because each child may require a different consultation format, records review, school coordination or sequence of visits. The clinic team will contact the family after screening the enquiry.',
  },
  {
    question: 'What should I include in an enquiry?',
    answer:
      'Briefly describe the main concerns, the child’s age range, country of residence, relevant prior assessments and whether school coordination may be needed. Do not send highly sensitive identifiers through an unsecured channel.',
  },
  {
    question: 'Do you receive enquiries from outside Singapore?',
    answer:
      'Yes. The clinic receives enquiries from families in Singapore and from overseas, including families based in Indonesia and the Philippines. Families from Malaysia and elsewhere in Southeast Asia may also enquire before making travel arrangements.',
  },
  {
    question: 'Can the clinic communicate with schools?',
    answer:
      'Where appropriate and with parent or guardian consent, school information may be reviewed and coordination discussed. School visits depend on location, clinical need and scheduling.',
  },
  {
    question: 'Is the KIMI AI guide an online diagnosis or assessment?',
    answer:
      'No. It is an educational and enquiry-preparation tool only. It does not diagnose, recommend treatment, book appointments or replace a consultation with a qualified professional.',
  },
];
