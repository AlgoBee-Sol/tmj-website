import {
  FiUser,
  FiActivity,
  FiClipboard,
  FiAward,
  FiRepeat,
  FiShield,
} from "react-icons/fi";
import Button from "@/components/ui/Button";
import { FiArrowRight } from "react-icons/fi";

const reasons = [
  {
    Icon: FiUser,
    title: "The same therapist, start to finish",
    desc: "You are not handed between staff each visit. One clinician owns your case, so nothing gets re-explained and nothing gets lost.",
  },
  {
    Icon: FiClipboard,
    title: "Assessment before treatment — always",
    desc: "No one gets put on a machine before we know what is wrong. Every plan follows a full physical assessment, and we tell you what we found.",
  },
  {
    Icon: FiActivity,
    title: "Hands-on work and exercise together",
    desc: "Manual therapy opens the window; loading keeps it open. Passive treatment alone gets you relief that fades by the next morning.",
  },
  {
    Icon: FiRepeat,
    title: "Re-measured, not guessed",
    desc: "Range, strength and function are re-tested through the course. If the numbers stop moving, we change the plan rather than repeating it.",
  },
  {
    Icon: FiAward,
    title: "Clinicians who teach clinicians",
    desc: "Dr. Syed Mozaffar runs certified dry needling, Mulligan, HVLA and cupping workshops for practising physiotherapists across Pakistan.",
  },
  {
    Icon: FiShield,
    title: "Discharge is the goal",
    desc: "You get an honest estimate of how many sessions you need, and a maintenance plan at the end. We are not trying to keep you on the books.",
  },
];

export default function WhyUs({
  /** Hidden on /about, where the link would point at the current page. */
  showCta = true,
}: {
  showCta?: boolean;
}) {
  return (
    <section className="section">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Sticky column keeps the argument in view while the list scrolls */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <span className="eyebrow">Why The Muscular Junction</span>
              <h2 className="display-2 mt-4 text-balance text-foreground">
                Evidence-based is a standard, not a slogan
              </h2>
              <p className="lead mt-5 text-muted-foreground">
                Plenty of clinics use the phrase. In practice it means six
                specific things about how we work — and you should hold us to
                every one of them.
              </p>

              {showCta && (
                <Button
                  href="/about"
                  variant="secondary"
                  size="lg"
                  className="mt-7"
                >
                  More about our approach
                  <FiArrowRight className="h-4 w-4" aria-hidden="true" />
                </Button>
              )}
            </div>
          </div>

          <ul className="grid gap-5 sm:grid-cols-2 lg:col-span-8">
            {reasons.map(({ Icon, title, desc }) => (
              <li key={title} className="card-surface card-hover p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-soft text-lg text-teal">
                  <Icon aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-display text-base font-bold text-foreground">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {desc}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
