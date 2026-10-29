/**
 * Education, certificates and languages.
 *
 * Every figure is read from the original document: grades from the board
 * certificates and the university's verified transcript, the OTH programme and
 * semester from its admission letter, dates from each certificate. Transcripts
 * themselves are not published — they carry ID numbers and a date of birth —
 * only the results are.
 */

export type Stage = {
  period: string;
  award: string;
  school: string;
  place: string;
  /** Results and context, each a short fact. */
  facts: string[];
  /** Courses worth naming, where a transcript lists them. */
  courses?: string[];
  current?: boolean;
};

export const education: Stage[] = [
  {
    period: "2026 — 2029",
    award: "B.Sc. International Computer Science",
    school: "OTH Regensburg",
    place: "Regensburg, Germany",
    facts: ["Admitted straight into the second semester on credits from MAJU", "Expected 2029"],
    current: true,
  },
  {
    period: "2024 — 2025",
    award: "BS Software Engineering",
    school: "Mohammad Ali Jinnah University",
    place: "Karachi, Pakistan",
    facts: [
      "CGPA 3.80 / 4.00 over three semesters",
      "GPA 4.00 in Spring 2024 — Chancellor's Honour Roll",
      "Continued at OTH Regensburg, with credits transferred",
    ],
    courses: [
      "Data Structures & Algorithms",
      "Software Engineering",
      "Object-Oriented Programming",
      "Discrete Structures",
      "Linear Algebra",
      "Probability & Statistics",
    ],
  },
  {
    period: "2021 — 2023",
    award: "Intermediate (HSSC), Science",
    school: "Govt. National College",
    place: "Karachi, Pakistan",
    facts: ["Grade A — Board of Intermediate Education, Karachi"],
  },
  {
    period: "2021",
    award: "Matriculation (SSC), Science",
    school: "The Educators",
    place: "Karachi, Pakistan",
    facts: ["Grade A-One — 746 / 850 marks", "Mathematics, Computer Studies, Physics, Chemistry"],
  },
];

export type Certificate = {
  title: string;
  issuer: string;
  /** Omitted where the certificate itself carries no date. */
  date?: string;
  detail: string;
  kind: "Work" | "Academic" | "Community" | "Course";
  image: { src: string; width: number; height: number; alt: string };
};

export const certificates: Certificate[] = [
  {
    title: "Flutter Developer Intern",
    issuer: "Softex Solution",
    date: "25 Nov 2025 — 25 Feb 2026",
    detail: "Certificate of internship for completing it with dedication and outstanding performance.",
    kind: "Work",
    image: {
      src: "/credentials/softex-internship.jpg",
      width: 1600,
      height: 1143,
      alt: "Softex Solution certificate of internship: Muhammad Ghazi, Flutter Developer Intern, 25 November 2025 to 25 February 2026",
    },
  },
  {
    title: "Chancellor's Honour Roll, Spring 2024",
    issuer: "Mohammad Ali Jinnah University",
    detail: "Certificate of achievement for outstanding academic performance — a 4.00 semester.",
    kind: "Academic",
    image: {
      src: "/credentials/maju-honour-roll.jpg",
      width: 1600,
      height: 1138,
      alt: "Mohammad Ali Jinnah University certificate of achievement naming Muhammad Ghazi to the Chancellor's Honour Roll for Spring 2024",
    },
  },
  {
    title: "DSA Fundamentals Bootcamp",
    issuer: "Microsoft Learn Student Ambassadors, MAJU",
    detail: "Completed the bootcamp and its practice sets in data structures and algorithms.",
    kind: "Course",
    image: {
      src: "/credentials/mlsa-dsa-bootcamp.jpg",
      width: 1600,
      height: 1254,
      alt: "Microsoft Learn Student Ambassador certificate of appreciation for attending the DSA Fundamentals Bootcamp",
    },
  },
  {
    title: "Jinnah League '24 — ACM-MAJU team",
    issuer: "ACM-MAJU",
    date: "14–15 Dec 2024",
    detail: "Certificate of appreciation for contribution and dedication as an ACM-MAJU team member at Jinnah League '24.",
    kind: "Community",
    image: {
      src: "/credentials/acm-jinnah-league.jpg",
      width: 1600,
      height: 1202,
      alt: "ACM-MAJU certificate of appreciation for M. Ghazi as a team member in Jinnah League '24, December 14 and 15, 2024",
    },
  },
  {
    title: "2022 Complete Python Bootcamp: From Zero to Hero",
    issuer: "Udemy — Jose Portilla",
    date: "30 Nov 2022",
    detail: "22 hours of Python, completed in 2022 — before university.",
    kind: "Course",
    image: {
      src: "/credentials/udemy-python.jpg",
      width: 1600,
      height: 1190,
      alt: "Udemy certificate of completion: 2022 Complete Python Bootcamp From Zero to Hero in Python, Muhammad Ghazi Zaidi, 30 November 2022, 22 total hours",
    },
  },
];

/** The experience letter, quoted rather than shown: it carries a signature. */
export const letter = {
  from: "DevsquarePK",
  date: "21 Apr 2025",
  quote:
    "His most notable achievement so far has been leading the frontend development of our Restaurant Management System Suite.",
};

/** CEFR levels, as listed on LinkedIn. */
export const LEVELS = ["A1", "A2", "B1", "B2", "C1", "C2"] as const;
export const languages: { name: string; level: (typeof LEVELS)[number]; note?: string }[] = [
  { name: "Urdu", level: "C2", note: "native" },
  { name: "English", level: "B2" },
  { name: "German", level: "A1", note: "learning" },
];
