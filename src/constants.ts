export interface Subject {
  id: string;
  name: string;
  part?: string;
  semester?: string;
  paper: string;
  icon: string;
  description: string;
  bareActId?: string;
}

export interface BareAct {
  id: string;
  title: string;
  year: string;
  description: string;
  sections: { id: string; title: string; content: string }[];
  pdfUrl?: string;
}

export const OUTLINES = [
  {
    id: "semester-2025",
    title: "Semester System Outline (2025)",
    description: "The latest switch-over from Annual to Semester system as per 2024 notification.",
    year: "2025",
    type: "Semester",
    url: "https://pu.edu.pk/images/image/syllabus/LLB-5-Years-Semester-System-2025.pdf"
  },
  {
    id: "annual-2022",
    title: "Annual System Outline (2022)",
    description: "The 5-year annual program outline started from the 2022-2023 session.",
    year: "2022",
    type: "Annual",
    url: "https://pu.edu.pk/images/image/syllabus/LLB-5-Years-Annual-System-2022.pdf"
  },
  {
    id: "annual-old",
    title: "Oldest Annual System Outline",
    description: "The traditional 5-year annual program syllabus used previously.",
    year: "Legacy",
    type: "Annual",
    url: "https://pu.edu.pk/images/image/syllabus/LLB-5-Years-Old-Outline.pdf"
  }
];

export const SEMESTER_CURRICULUM: Record<string, Subject[]> = {
  "Semester-I": [
    { id: "s1-eng", name: "English-I", semester: "1", paper: "Law 111", icon: "BookOpen", description: "Grammar (Parts of Speech, Articles, Narration), Technical Writing, and Stories of Ourselves." },
    { id: "s1-pol", name: "Political Science-I", semester: "1", paper: "Law 112", icon: "Gavel", description: "Introduction to Political Science, Basic Concepts (Power, Authority, Legitimacy), and Foundations of Government." },
    { id: "s1-soc", name: "Sociology-I", semester: "1", paper: "Law 113", icon: "Users", description: "Defining Sociology, Culture, Socialization, and Social Interaction." },
    { id: "s1-phi", name: "Intro to Philosophy of Law", semester: "1", paper: "Law 114", icon: "Scale", description: "Meaning of Law, Sources of Law, Classification of Law, and Legal Rights & Duties." },
    { id: "s1-isl", name: "Islamic Studies / Ethics", semester: "1", paper: "Law 115", icon: "Book", description: "Quranic Studies, Sunnah, Seerat of Holy Prophet (SAW), and Islamic History." },
  ],
  "Semester-II": [
    { id: "s2-eng", name: "English-II", semester: "2", paper: "Law 121", icon: "BookOpen", description: "Conditional Grammar, Common Errors, Punctuation, and Technical Writing (Applications, Memos)." },
    { id: "s2-pol", name: "Political Science-II", semester: "2", paper: "Law 122", icon: "Gavel", description: "Political Systems, Parties, Interest Groups, Public Opinion, and Political Ideologies." },
    { id: "s2-soc", name: "Sociology-II", semester: "2", paper: "Law 123", icon: "Users", description: "Social Stratification, Social Institutions, Social Change, and Sociological Debates." },
    { id: "s2-pak", name: "Pakistan Studies", semester: "2", paper: "Law 124", icon: "Flag", description: "Ideology of Pakistan, Freedom Movement, and Constitutional History." },
    { id: "s2-wls", name: "Intro to World Legal Systems", semester: "2", paper: "Law 125", icon: "Globe", description: "Civil Law, Common Law, Socialist, and Islamic Legal Systems." },
  ],
  "Semester-III": [
    { id: "s3-eng", name: "English-III", semester: "3", paper: "Law 211", icon: "BookOpen", description: "Paragraph and Essay Writing, Comprehension Practices, and Summary Writing." },
    { id: "s3-ej1", name: "English Jurisprudence-I", semester: "3", paper: "Law 212", icon: "Scale", description: "Science of Jurisprudence, Nature of Law, Administration of Justice, and Sources of Law." },
    { id: "s3-ij1", name: "Islamic Jurisprudence-I", semester: "3", paper: "Law 213", icon: "Book", description: "History of Muslim Legal System, Schools of Thought, and Sources of Islamic Law." },
    { id: "s3-adr", name: "Alternative Dispute Resolution", semester: "3", paper: "Law 214", icon: "Handshake", description: "Negotiation, Mediation, Conciliation, and Arbitration Mechanisms." },
    { id: "s3-bc", name: "Principles of British Constitution", semester: "3", paper: "Law 215", icon: "Landmark", description: "Salient Features, Rule of Law, Parliamentary Supremacy, and Constitutional Conventions." },
  ],
  "Semester-IV": [
    { id: "s4-sd", name: "Skills Development", semester: "4", paper: "Law 221", icon: "Cpu", description: "I.T. Skills (MS Office, Internet), Communication Skills, and Library Skills." },
    { id: "s4-ej2", name: "English Jurisprudence-II", semester: "4", paper: "Law 222", icon: "Scale", description: "Ownership, Possession, Persons, Titles, and Law of Property/Obligation." },
    { id: "s4-ij2", name: "Islamic Jurisprudence-II", semester: "4", paper: "Law 223", icon: "Book", description: "Legal Capacity, Ownership in Islam, Torts, Crimes, and Punishments." },
    { id: "s4-hr", name: "Human Rights Law", semester: "4", paper: "Law 224", icon: "Shield", description: "International Bill of Rights, UN Role, Women's Rights, and Minority Rights." },
    { id: "s4-usc", name: "US Constitution", semester: "4", paper: "Law 225", icon: "Landmark", description: "Federal System, Congress, Senate, President, and Judicial Review." },
  ],
  "Semester-V": [
    { id: "s5-chp", name: "Constitutional History of Pakistan", semester: "5", paper: "Law 311", icon: "History", description: "Govt of India Act 1935, Objectives Resolution, and Constitutions of 1956, 1962, 1973." },
    { id: "s5-mpl1", name: "Muslim Personal Law-I", semester: "5", paper: "Law 312", icon: "Users", description: "Marriage, Dower, Maintenance, Dissolution of Marriage, and Guardianship." },
    { id: "s5-lc1", name: "Law of Contract-I", semester: "5", paper: "Law 313", icon: "FileSignature", description: "Formation of Contract, Free Consent, Consideration, and Breach of Contract." },
    { id: "s5-lt1", name: "Law of Torts-I", semester: "5", paper: "Law 314", icon: "Gavel", description: "Introduction to Torts, Vicarious Liability, Strict Liability, and Defamation." },
    { id: "s5-cl1", name: "Criminal Law-I", semester: "5", paper: "Law 315", icon: "Skull", description: "Definition of Crime, Actus Reus, Mens Rea, and Pakistan Penal Code (Offences against Body)." },
    { id: "s5-pil1", name: "Public International Law-I", semester: "5", paper: "Law 316", icon: "Globe", description: "Nature and Sources of International Law, Recognition, and State Jurisdiction." },
  ],
  "Semester-VI": [
    { id: "s6-cp", name: "Constitution of Pakistan", semester: "6", paper: "Law 321", icon: "Landmark", description: "Fundamental Rights, Principles of Policy, Federation, Parliament, and The Courts." },
    { id: "s6-mpl2", name: "Muslim Personal Law-II", semester: "6", paper: "Law 322", icon: "Users", description: "Inheritance (Sunni & Shia), Will, Hiba (Gift), and Waqf." },
    { id: "s6-lc2", name: "Law of Contract-II", semester: "6", paper: "Law 323", icon: "FileSignature", description: "Sales of Goods Act 1930 and Negotiable Instruments Act 1881." },
    { id: "s6-lt2", name: "Law of Torts-II", semester: "6", paper: "Law 324", icon: "Gavel", description: "Malicious Prosecution, Negligence, Nuisance, and Easement Act 1882." },
    { id: "s6-cl2", name: "Criminal Law-II", semester: "6", paper: "Law 325", icon: "Skull", description: "Criminal Law in Islam (Hudood, Tazir, Qisas) and PPC Offences against Property." },
    { id: "s6-pil2", name: "Public International Law-II", semester: "6", paper: "Law 326", icon: "Globe", description: "Law of Treaties, International Institutions (ICC), and Settlement of Disputes." },
  ],
  "Semester-VII": [
    { id: "s7-eq1", name: "Equity-I", semester: "7", paper: "Law 411", icon: "Balance", description: "Maxims of Equity and The Trust Act 1882." },
    { id: "s7-tpa1", name: "Law of Transfer of Property-I", semester: "7", paper: "Law 412", icon: "Home", description: "Transfer of Property Act 1882 (Sale, Mortgage, Lease)." },
    { id: "s7-ml1", name: "Mercantile Law-I", semester: "7", paper: "Law 413", icon: "Briefcase", description: "Companies Act 2017 (Incorporation, Management, Winding up)." },
    { id: "s7-sll1", name: "Special & Local Laws-I", semester: "7", paper: "Law 414", icon: "Map", description: "Land Revenue Act 1967 (Assessment, Recovery, Partition)." },
    { id: "s7-env", name: "Environmental Laws", semester: "7", paper: "Law 415", icon: "Leaf", description: "National and International Environmental Legislation and Case Laws." },
    { id: "s7-rmp", name: "Research Methodology and Project", semester: "7", paper: "Law 416", icon: "FileSearch", description: "Scientific Research, Legal Research Process, and Research Project." },
  ],
  "Semester-VIII": [
    { id: "s8-eq2", name: "Equity-II", semester: "8", paper: "Law 421", icon: "Balance", description: "Specific Relief Act 1877 (Specific Performance, Injunctions)." },
    { id: "s8-tpa2", name: "Law of Transfer of Property-II", semester: "8", paper: "Law 422", icon: "Home", description: "Registration Act 1908, Succession Act 1925, and Land Acquisition Act 1894." },
    { id: "s8-ml2", name: "Mercantile Law-II", semester: "8", paper: "Law 423", icon: "Briefcase", description: "Partnership Act 1932 and Limited Liability Partnership Act 2017." },
    { id: "s8-sll2", name: "Special & Local laws-II", semester: "8", paper: "Law 424", icon: "Map", description: "Pre-emption Law 1991 and Punjab Tenancy Act 1887." },
    { id: "s8-cyb", name: "Cyber Laws", semester: "8", paper: "Law 425", icon: "ShieldAlert", description: "Cyber Crimes, Data Protection, and Electronic Transactions Ordinance." },
    { id: "s8-mpe", name: "Moot Cases and Professional Ethics", semester: "8", paper: "Law 426", icon: "Mic2", description: "Legal Ethics, Bar Council Rules, and Moot Court Case Analysis." },
  ],
  "Semester-IX": [
    { id: "s9-cpc1", name: "Civil Procedure-I", semester: "9", paper: "Law 511", icon: "Building", description: "Suits in General, Jurisdiction, Summons, Judgment & Decrees, and Execution." },
    { id: "s9-crpc1", name: "Criminal Procedure-I", semester: "9", paper: "Law 512", icon: "Search", description: "Constitution of Criminal Courts, Powers, Arrest, Summons, and Trials." },
    { id: "s9-evid1", name: "Law of Evidence-I", semester: "9", paper: "Law 513", icon: "FileText", description: "Competency of Witnesses, Relevancy of Facts, Admissions, and Confessions." },
    { id: "s9-asl", name: "Administrative Law and Service Laws", semester: "9", paper: "Law 514", icon: "Briefcase", description: "Principles of Administrative Law, Judicial Review, and Service Laws (Federal & Punjab)." },
    { id: "s9-ltl", name: "Labour and Taxation Laws", semester: "9", paper: "Law 515", icon: "Coins", description: "Punjab Industrial Relations Act, Workmen's Compensation, and Income Tax Ordinance." },
  ],
  "Semester-X": [
    { id: "s10-cpc2", name: "Civil Procedure-II", semester: "10", paper: "Law 521", icon: "Building", description: "Framing of Suit, Pleadings, Discovery, Trial, and Limitation Act 1908." },
    { id: "s10-crpc2", name: "Criminal Procedure-II", semester: "10", paper: "Law 522", icon: "Search", description: "Bail, Habeas Corpus, Public Prosecutor, and Medical Jurisprudence." },
    { id: "s10-evid2", name: "Law of Evidence-II", semester: "10", paper: "Law 523", icon: "FileText", description: "Burden of Proof, Estoppel, Examination of Witnesses, and Modern Devices." },
    { id: "s10-ldi", name: "Legal Drafting and Interpretation of Statutes", semester: "10", paper: "Law 524", icon: "PenTool", description: "Conveyancing, Pleadings, and Interpretation of Statutes (GCA 1897)." },
    { id: "s10-ma", name: "Minor Acts", semester: "10", paper: "Law 525", icon: "FileText", description: "Stamp Act 1899, Suit Valuation Act 1887, Court Fees Act 1870, and Arbitration Act 1940." },
  ]
};

export const CURRICULUM: Record<string, Subject[]> = {
  "Part-I": [
    { id: "eng-1", name: "English-I", part: "Part-I", paper: "Paper-I", icon: "BookOpen", description: "Basic English grammar and legal writing." },
    { id: "pol-sci", name: "Political Science", part: "Part-I", paper: "Paper-II", icon: "Gavel", description: "Introduction to political systems and theories." },
    { id: "soc", name: "Sociology", part: "Part-I", paper: "Paper-III", icon: "Users", description: "Study of social behavior and legal sociology." },
  ],
  "Part-V": [
    { id: "minor-acts", name: "Minor Acts", part: "Part-V", paper: "Paper-VI", icon: "FileText", description: "Arbitration, Rented Premises, Court Fees, and Stamp Acts." },
    { id: "labour-tax", name: "Labour and Taxation Laws", part: "Part-V", paper: "Paper-VII", icon: "Coins", description: "Industrial Relations and Income Tax Ordinance." },
    { id: "admin-law", name: "Administrative Law", part: "Part-V", paper: "Paper-V", icon: "Briefcase", description: "Principles of Administrative Law and Service Tribunals." },
  ]
};

export const PAST_PAPERS = [
  {
    subject: "English-I",
    part: "Part-I",
    years: [
      { year: "2023", url: "https://pu.edu.pk/images/image/past_papers/LLB/Part-I/English-I-2023.pdf", type: "Annual" },
      { year: "2022", url: "https://pu.edu.pk/images/image/past_papers/LLB/Part-I/English-I-2022.pdf", type: "Annual" },
      { year: "2021", url: "https://pu.edu.pk/images/image/past_papers/LLB/Part-I/English-I-2021.pdf", type: "Annual" }
    ]
  },
  {
    subject: "Political Science-I",
    part: "Part-I",
    years: [
      { year: "2023", url: "https://pu.edu.pk/images/image/past_papers/LLB/Part-I/Pol-Sci-I-2023.pdf", type: "Annual" },
      { year: "2022", url: "https://pu.edu.pk/images/image/past_papers/LLB/Part-I/Pol-Sci-I-2022.pdf", type: "Annual" }
    ]
  },
  {
    subject: "Contract Act",
    part: "Part-III",
    years: [
      { year: "2023", url: "https://pu.edu.pk/images/image/past_papers/LLB/Part-III/Contract-Act-2023.pdf", type: "Annual" },
      { year: "2022", url: "https://pu.edu.pk/images/image/past_papers/LLB/Part-III/Contract-Act-2022.pdf", type: "Annual" },
      { year: "2021", url: "https://pu.edu.pk/images/image/past_papers/LLB/Part-III/Contract-Act-2021.pdf", type: "Annual" }
    ]
  },
  {
    subject: "Law of Torts",
    part: "Part-III",
    years: [
      { year: "2023", url: "https://pu.edu.pk/images/image/past_papers/LLB/Part-III/Law-of-Torts-2023.pdf", type: "Annual" },
      { year: "2022", url: "https://pu.edu.pk/images/image/past_papers/LLB/Part-III/Law-of-Torts-2022.pdf", type: "Annual" }
    ]
  },
  {
    subject: "Minor Acts",
    part: "Part-V",
    years: [
      { year: "2023", url: "https://pu.edu.pk/images/image/past_papers/LLB/Part-V/Minor-Acts-2023.pdf", type: "Annual" },
      { year: "2022", url: "https://pu.edu.pk/images/image/past_papers/LLB/Part-V/Minor-Acts-2022.pdf", type: "Annual" },
      { year: "2021", url: "https://pu.edu.pk/images/image/past_papers/LLB/Part-V/Minor-Acts-2021.pdf", type: "Annual" }
    ]
  },
  {
    subject: "Labour and Taxation Laws",
    part: "Part-V",
    years: [
      { year: "2023", url: "https://pu.edu.pk/images/image/past_papers/LLB/Part-V/Labour-Taxation-2023.pdf", type: "Annual" },
      { year: "2022", url: "https://pu.edu.pk/images/image/past_papers/LLB/Part-V/Labour-Taxation-2022.pdf", type: "Annual" },
      { year: "2021", url: "https://pu.edu.pk/images/image/past_papers/LLB/Part-V/Labour-Taxation-2021.pdf", type: "Annual" }
    ]
  },
  {
    subject: "Administrative Law",
    part: "Part-V",
    years: [
      { year: "2023", url: "https://pu.edu.pk/images/image/past_papers/LLB/Part-V/Admin-Law-2023.pdf", type: "Annual" },
      { year: "2022", url: "https://pu.edu.pk/images/image/past_papers/LLB/Part-V/Admin-Law-2022.pdf", type: "Annual" },
      { year: "2021", url: "https://pu.edu.pk/images/image/past_papers/LLB/Part-V/Admin-Law-2021.pdf", type: "Annual" }
    ]
  },
  {
    subject: "Civil Procedure Code",
    part: "Part-V",
    years: [
      { year: "2023", url: "https://pu.edu.pk/images/image/past_papers/LLB/Part-V/CPC-2023.pdf", type: "Annual" },
      { year: "2022", url: "https://pu.edu.pk/images/image/past_papers/LLB/Part-V/CPC-2022.pdf", type: "Annual" },
      { year: "2021", url: "https://pu.edu.pk/images/image/past_papers/LLB/Part-V/CPC-2021.pdf", type: "Annual" }
    ]
  },
  {
    subject: "Law of Evidence",
    part: "Part-V",
    years: [
      { year: "2023", url: "https://pu.edu.pk/images/image/past_papers/LLB/Part-V/Law-of-Evidence-2023.pdf", type: "Annual" },
      { year: "2022", url: "https://pu.edu.pk/images/image/past_papers/LLB/Part-V/Law-of-Evidence-2022.pdf", type: "Annual" },
      { year: "2021", url: "https://pu.edu.pk/images/image/past_papers/LLB/Part-V/Law-of-Evidence-2021.pdf", type: "Annual" }
    ]
  }
];

export const BARE_ACTS: Record<string, BareAct> = {
  "contract-1872": {
    id: "contract-1872",
    title: "Contract Act, 1872",
    year: "1872",
    description: "The primary law governing contracts and agreements in Pakistan.",
    sections: [{ id: "1", title: "Short title", content: "This Act may be called the Contract Act, 1872..." }],
    pdfUrl: "https://pakistancode.gov.pk/pdffiles/Contract%20Act%201872.pdf"
  },
  "sale-of-goods-1930": {
    id: "sale-of-goods-1930",
    title: "Sale of Goods Act, 1930",
    year: "1930",
    description: "Law relating to the sale of goods.",
    sections: [],
    pdfUrl: "https://pakistancode.gov.pk/pdffiles/Sale%20of%20Goods%20Act%201930.pdf"
  },
  "easements-1882": {
    id: "easements-1882",
    title: "Easements Act, 1882",
    year: "1882",
    description: "Law relating to easements and licenses.",
    sections: [],
    pdfUrl: "https://pakistancode.gov.pk/pdffiles/Easements%20Act%201882.pdf"
  },
  "constitution-1973": {
    id: "constitution-1973",
    title: "Constitution of Pakistan, 1973",
    year: "1973",
    description: "The supreme law of the Islamic Republic of Pakistan.",
    sections: [],
    pdfUrl: "https://pakistancode.gov.pk/pdffiles/Constitution%20of%20Pakistan%201973.pdf"
  },
  "ppc-1860": {
    id: "ppc-1860",
    title: "Pakistan Penal Code, 1860",
    year: "1860",
    description: "The penal code for Pakistan.",
    sections: [],
    pdfUrl: "https://pakistancode.gov.pk/pdffiles/Pakistan%20Penal%20Code%201860.pdf"
  },
  "specific-relief-1877": {
    id: "specific-relief-1877",
    title: "Specific Relief Act, 1877",
    year: "1877",
    description: "Law relating to specific relief.",
    sections: [],
    pdfUrl: "https://pakistancode.gov.pk/pdffiles/Specific%20Relief%20Act%201877.pdf"
  },
  "trusts-1882": {
    id: "trusts-1882",
    title: "Trusts Act, 1882",
    year: "1882",
    description: "Law relating to private trusts and trustees.",
    sections: [],
    pdfUrl: "https://pakistancode.gov.pk/pdffiles/Trust%20Act%201882.pdf"
  },
  "tpa-1882": {
    id: "tpa-1882",
    title: "Transfer of Property Act, 1882",
    year: "1882",
    description: "Law relating to the transfer of property by act of parties.",
    sections: [],
    pdfUrl: "https://pakistancode.gov.pk/pdffiles/Transfer%20of%20Property%20Act%201882.pdf"
  },
  "registration-1908": {
    id: "registration-1908",
    title: "Registration Act, 1908",
    year: "1908",
    description: "Law relating to the registration of documents.",
    sections: [],
    pdfUrl: "https://pakistancode.gov.pk/pdffiles/Registration%20Act%201908.pdf"
  },
  "succession-1925": {
    id: "succession-1925",
    title: "Succession Act, 1925",
    year: "1925",
    description: "Law relating to intestate and testamentary succession.",
    sections: [],
    pdfUrl: "https://pakistancode.gov.pk/pdffiles/Succession%20Act%201925.pdf"
  },
  "land-acquisition-1894": {
    id: "land-acquisition-1894",
    title: "Land Acquisition Act, 1894",
    year: "1894",
    description: "Law for the acquisition of land for public purposes and for Companies.",
    sections: [],
    pdfUrl: "https://pakistancode.gov.pk/pdffiles/Land%20Acquisition%20Act%201894.pdf"
  },
  "companies-2017": {
    id: "companies-2017",
    title: "Companies Act, 2017",
    year: "2017",
    description: "Law relating to companies and for matters connected therewith.",
    sections: [],
    pdfUrl: "https://www.secp.gov.pk/document/the-companies-act-2017/"
  },
  "partnership-1932": {
    id: "partnership-1932",
    title: "Partnership Act, 1932",
    year: "1932",
    description: "Law relating to partnerships.",
    sections: [],
    pdfUrl: "https://pakistancode.gov.pk/pdffiles/Partnership%20Act%201932.pdf"
  },
  "negotiable-instruments-1881": {
    id: "negotiable-instruments-1881",
    title: "Negotiable Instruments Act, 1881",
    year: "1881",
    description: "Law relating to promissory notes, bills of exchange and cheques.",
    sections: [],
    pdfUrl: "https://pakistancode.gov.pk/pdffiles/Negotiable%20Instruments%20Act%201881.pdf"
  },
  "land-revenue-1967": {
    id: "land-revenue-1967",
    title: "Land Revenue Act, 1967",
    year: "1967",
    description: "Law relating to the Land-Revenue in the Province of West Pakistan.",
    sections: [],
    pdfUrl: "https://punjablaws.gov.pk/laws/302.html"
  },
  "punjab-tenancy-1887": {
    id: "punjab-tenancy-1887",
    title: "Punjab Tenancy Act, 1887",
    year: "1887",
    description: "Law relating to the occupancy of land in the Punjab.",
    sections: [],
    pdfUrl: "https://punjablaws.gov.pk/laws/9.html"
  },
  "punjab-preemption-1991": {
    id: "punjab-preemption-1991",
    title: "Punjab Pre-emption Act, 1991",
    year: "1991",
    description: "Law to bring the law relating to pre-emption in conformity with the Injunctions of Islam.",
    sections: [],
    pdfUrl: "https://punjablaws.gov.pk/laws/617.html"
  },
  "cpc-1908": {
    id: "cpc-1908",
    title: "Code of Civil Procedure, 1908",
    year: "1908",
    description: "Law relating to the procedure of the Courts of Civil Judicature.",
    sections: [],
    pdfUrl: "https://pakistancode.gov.pk/pdffiles/Code%20of%20Civil%20Procedure%201908.pdf"
  },
  "limitation-1908": {
    id: "limitation-1908",
    title: "Limitation Act, 1908",
    year: "1908",
    description: "Law relating to the limitation of suits, appeals and certain applications to Courts.",
    sections: [],
    pdfUrl: "https://pakistancode.gov.pk/pdffiles/Limitation%20Act%201908.pdf"
  },
  "crpc-1898": {
    id: "crpc-1898",
    title: "Code of Criminal Procedure, 1898",
    year: "1898",
    description: "Law relating to the procedure of the Courts of Criminal Judicature.",
    sections: [],
    pdfUrl: "https://pakistancode.gov.pk/pdffiles/Code%20of%20Criminal%20Procedure%201898.pdf"
  },
  "qso-1984": {
    id: "qso-1984",
    title: "Qanun-e-Shahadat Order, 1984",
    year: "1984",
    description: "Law relating to the law of evidence in Pakistan.",
    sections: [],
    pdfUrl: "https://pakistancode.gov.pk/pdffiles/Qanun-e-Shahadat%20Order%201984.pdf"
  },
  "dmma-1939": {
    id: "dmma-1939",
    title: "Dissolution of Muslim Marriages Act, 1939",
    year: "1939",
    description: "Law to consolidate and clarify the provisions of Muslim law relating to suits for dissolution of marriage by women.",
    sections: [],
    pdfUrl: "https://pakistancode.gov.pk/pdffiles/Dissolution%20of%20Muslim%20Marriages%20Act%201939.pdf"
  },
  "mflo-1961": {
    id: "mflo-1961",
    title: "Muslim Family Laws Ordinance, 1961",
    year: "1961",
    description: "Ordinance to give effect to certain recommendations of the Commission on Marriage and Family Laws.",
    sections: [],
    pdfUrl: "https://pakistancode.gov.pk/pdffiles/Muslim%20Family%20Laws%20Ordinance%201961.pdf"
  },
  "guardian-wards-1890": {
    id: "guardian-wards-1890",
    title: "Guardian and Wards Act, 1890",
    year: "1890",
    description: "Law relating to Guardian and Ward.",
    sections: [],
    pdfUrl: "https://pakistancode.gov.pk/pdffiles/Guardians%20and%20Wards%20Act%201890.pdf"
  },
  "suit-valuation-1887": {
    id: "suit-valuation-1887",
    title: "Suit Valuation Act, 1887",
    year: "1887",
    description: "Law relating to the valuation of suits for the purpose of determining the jurisdiction of Courts.",
    sections: [],
    pdfUrl: "https://pakistancode.gov.pk/pdffiles/Suit%20Valuation%20Act%201887.pdf"
  },
  "court-fees-1870": {
    id: "court-fees-1870",
    title: "Court Fees Act, 1870",
    year: "1870",
    description: "Law relating to Court-fees and Stamp-duties.",
    sections: [],
    pdfUrl: "https://pakistancode.gov.pk/pdffiles/Court%20Fees%20Act%201870.pdf"
  },
  "stamp-1899": {
    id: "stamp-1899",
    title: "Stamp Act, 1899",
    year: "1899",
    description: "Law relating to Stamps.",
    sections: [],
    pdfUrl: "https://pakistancode.gov.pk/pdffiles/Stamp%20Act%201899.pdf"
  },
  "arbitration-1940": {
    id: "arbitration-1940",
    title: "Arbitration Act, 1940",
    year: "1940",
    description: "Law relating to Arbitration.",
    sections: [],
    pdfUrl: "https://pakistancode.gov.pk/pdffiles/Arbitration%20Act%201940.pdf"
  },
  "punjab-rented-premises-2009": {
    id: "punjab-rented-premises-2009",
    title: "Punjab Rented Premises Act, 2009",
    year: "2009",
    description: "Law to regulate the relationship of landlord and tenant in respect of rented premises.",
    sections: [],
    pdfUrl: "https://punjablaws.gov.pk/laws/546.html"
  },
  "workmen-compensation-1923": {
    id: "workmen-compensation-1923",
    title: "Workmen's Compensation Act, 1923",
    year: "1923",
    description: "Law relating to the payment by certain classes of employers to their workmen of compensation for injury by accident.",
    sections: [],
    pdfUrl: "https://pakistancode.gov.pk/pdffiles/Workmen's%20Compensation%20Act%201923.pdf"
  },
  "income-tax-2001": {
    id: "income-tax-2001",
    title: "Income Tax Ordinance, 2001",
    year: "2001",
    description: "Ordinance to consolidate and amend the law relating to income tax.",
    sections: [],
    pdfUrl: "https://fbr.gov.pk/income-tax-ordinance-2001"
  },
  "sales-tax-1990": {
    id: "sales-tax-1990",
    title: "Sales Tax Act, 1990",
    year: "1990",
    description: "Law relating to the levy of a tax on sales, imports, exports, production, manufacture or consumption of goods.",
    sections: [],
    pdfUrl: "https://pakistancode.gov.pk/pdffiles/Sales%20Tax%20Act%201990.pdf"
  },
  "pepa-1997": {
    id: "pepa-1997",
    title: "Pakistan Environmental Protection Act, 1997",
    year: "1997",
    description: "Law for the protection, conservation, rehabilitation and improvement of the environment.",
    sections: [],
    pdfUrl: "https://pakistancode.gov.pk/pdffiles/Pakistan%20Environmental%20Protection%20Act%201997.pdf"
  },
  "eto-2002": {
    id: "eto-2002",
    title: "Electronic Transactions Ordinance, 2002",
    year: "2002",
    description: "Ordinance to provide for the recognition and facilitation of documents, records, information, communications and transactions in electronic form.",
    sections: [],
    pdfUrl: "https://pakistancode.gov.pk/pdffiles/Electronic%20Transactions%20Ordinance%202002.pdf"
  },
  "peca-2016": {
    id: "peca-2016",
    title: "Prevention of Electronic Crimes Act, 2016",
    year: "2016",
    description: "Law to provide a comprehensive legal framework for prevention of electronic crimes.",
    sections: [],
    pdfUrl: "https://pakistancode.gov.pk/pdffiles/Prevention%20of%20Electronic%20Crimes%20Act%202016.pdf"
  }
};

export const CASE_LAWS = [
  {
    id: "1",
    name: "Lalman Shukla v. Gauri Datt",
    subject: "Contract Act",
    facts: "The defendant's nephew went missing. He sent his servant (plaintiff) to find him. Later, he announced a reward. The servant found the boy without knowing about the reward.",
    issue: "Can a person claim a reward if they perform the act without knowledge of the offer?",
    judgment: "The court held that knowledge of the offer is essential for a valid contract.",
    principle: "Communication of offer is necessary."
  }
];
