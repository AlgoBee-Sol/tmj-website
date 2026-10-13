import { site } from "./site";
export type Faq = { q: string; a: string };
export const clinicFaqs: Faq[] = [
  {
    q: "Where is the clinic?",
    a: `${site.name} is in ${site.contact.address}, Pakistan. Use the directions link for the clinic map pin or call us before travelling.`,
  },
  {
    q: "Do I need a referral?",
    a: "You can request an appointment directly. Bring relevant reports and any surgeon’s instructions. Some symptoms need medical assessment before physiotherapy; we will discuss this with you.",
  },
  {
    q: "What happens at the first appointment?",
    a: "We discuss your symptoms, medical history and goals, assess relevant movement and function, and explain our clinical impression. We agree a plan with you and discuss whether further medical assessment is needed.",
  },
  {
    q: "How many sessions will I need?",
    a: "The number of visits depends on your condition, goals and response to treatment. We review progress and adjust the plan. No fixed number of sessions can guarantee recovery.",
  },
  {
    q: "Can I book with a female physiotherapist?",
    a: "Yes. Dr. Ulfat Zahra, Dr. Eman Fatima and Dr. Ayesha see female patients. Please mention your preference when booking; the clinic will confirm availability.",
  },
  {
    q: "What are your opening hours?",
    a: `${site.hours.summary}. Please request an appointment so the clinic can confirm a suitable time.`,
  },
  {
    q: "How much will my appointment cost?",
    a: "Please call or message the clinic for the current consultation fee and any treatment charges before booking.",
  },
];
