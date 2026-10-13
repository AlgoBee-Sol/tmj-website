import Image from "next/image";
import Link from "next/link";
export default function DoctorCard({
  id,
  name,
  designation,
  credentials,
  bio,
  image,
}: {
  id: string;
  name: string;
  designation: string;
  credentials?: string;
  bio: string;
  image?: string;
  specializations?: string[];
  experienceYears?: number;
  priority?: boolean;
}) {
  return (
    <article className="team-card">
      <div className="team-card-image">
        {image ? (
          <Image
            src={image}
            width={400}
            height={500}
            alt={`${name}, ${designation}`}
          />
        ) : (
          <span aria-hidden="true">
            {name
              .replace(/^Dr\.\s*/, "")
              .split(" ")
              .map((w) => w[0])
              .slice(0, 2)
              .join("")}
          </span>
        )}
      </div>
      <h3>
        {id === "dr-syed-mozaffar" ? (
          <Link href={`/doctors/${id}`}>{name} ↗</Link>
        ) : (
          name
        )}
      </h3>
      <p className="team-role">
        {credentials} · {designation}
      </p>
      <p>{bio}</p>
    </article>
  );
}
