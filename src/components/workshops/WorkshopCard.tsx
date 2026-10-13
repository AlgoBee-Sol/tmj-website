import Link from "next/link";
import { workshopDate, workshopStatus } from "@/lib/workshops.mjs";
export default function WorkshopCard({
  workshop,
}: {
  workshop: {
    id: string;
    title: string;
    shortDesc: string;
    startDate: string | null;
    endDate: string | null;
    status: string;
    time: string;
  };
}) {
  const status = workshopStatus(workshop);
  return (
    <article className="workshop-card">
      <span className="event-badge">
        {status === "upcoming"
          ? "Upcoming workshop"
          : status === "in-progress"
            ? "Today’s workshop"
            : status === "past"
              ? "Past event"
              : "Programme archive"}
      </span>
      <h3>{workshop.title}</h3>
      <p>{workshop.shortDesc}</p>
      {workshop.startDate && (
        <p className="mt-4 font-semibold">
          {workshopDate(workshop.startDate)}
          <br />
          {workshop.time} · Pakistan time
        </p>
      )}
      <Link className="text-link" href={`/workshops/${workshop.id}`}>
        {status === "upcoming" ? "Details & registration" : "Explore programme"}{" "}
        ↗
      </Link>
    </article>
  );
}
