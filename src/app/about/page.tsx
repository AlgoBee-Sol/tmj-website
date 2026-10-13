import Image from "next/image";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import PageHero from "@/components/layout/PageHero";
import WhyUs from "@/components/home/WhyUs";
import Process from "@/components/home/Process";
import CtaBand from "@/components/ui/CtaBand";
export const metadata = pageMetadata(
  "About The Muscular Junction",
  "Meet The Muscular Junction, a physiotherapy and clinical rehabilitation center in River Gardens, Islamabad, founded by Dr. Syed Mozaffar.",
  "/about",
);
export default function Page() {
  return (
    <>
      <Breadcrumbs items={[{ name: "About", path: "/about" }]} />
      <PageHero
        eyebrow="The Muscular Junction"
        title="Helping you move towards what matters."
        subtitle="A physiotherapy and clinical rehabilitation center in River Gardens, Islamabad, built around assessment, practical rehabilitation and a clear conversation about your care."
      />
      <section className="section">
        <div className="container-page doctor-feature-grid">
          <Image
            src="/images/clinic-interior-1024.webp"
            width={1024}
            height={551}
            alt="Inside The Muscular Junction physiotherapy clinic"
            className="rounded w-full h-auto"
          />
          <div className="prose-content">
            <h2>A local clinic. An individual approach.</h2>
            <p>
              Founded by{" "}
              <Link href="/doctors/dr-syed-mozaffar">Dr. Syed Mozaffar</Link>,
              The Muscular Junction brings together clinicians working across
              musculoskeletal, sports, orthopedic, neurological and pediatric
              physiotherapy.
            </p>
            <p>
              People come to us with different priorities: getting through a
              working day, returning to sport or rebuilding independence. We
              start by understanding those priorities and the movement
              difficulties behind them.
            </p>
            <p>
              We also host <Link href="/workshops">professional workshops</Link>{" "}
              that support discussion and practical learning among
              physiotherapists. Clinical care and education both depend on sound
              assessment and thoughtful decision-making.
            </p>
          </div>
        </div>
      </section>
      <WhyUs showCta={false} />
      <Process />
      <CtaBand />
    </>
  );
}
