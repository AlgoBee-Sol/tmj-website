import Image from "next/image";
import Link from "next/link";
import doctors from "@/data/doctors.json";
export default function DoctorFeature() {
  const d = doctors[0];
  return (
    <section className="section doctor-feature">
      <div className="container-page doctor-feature-grid">
        <div className="doctor-photo">
          <Image
            src={d.image}
            width={600}
            height={750}
            alt={`${d.name}, founder and lead physiotherapist`}
            className="object-cover"
          />
        </div>
        <div>
          <p className="eyebrow">Meet your lead physiotherapist</p>
          <h2 className="display-2 mt-4">{d.name}</h2>
          <p className="doctor-role">
            {d.credentials} · {d.clinicalTitle}
          </p>
          <p className="lead mt-6">
            An assessment first.
            <br />A plan that makes sense to you.
          </p>
          <p className="mt-5 text-muted-foreground">
            {d.bio}
          </p>
          <ul className="expertise-tags">
            {d.specializations.slice(0, 3).map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
          <Link href="/doctors/dr-syed-mozaffar" className="text-link mt-7">
            Meet Dr. Mozaffar ↗
          </Link>
          <Link href="/doctors" className="text-link mt-4">
            Meet the whole team →
          </Link>
        </div>
      </div>
    </section>
  );
}
