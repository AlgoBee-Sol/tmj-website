"use client";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FiMenu, FiX, FiPhone, FiArrowUpRight, FiMapPin, FiClock } from "react-icons/fi";
import nav from "@/data/nav.json";
import { site, telHref, currentDayHours } from "@/lib/site";

function subscribeToClinicDay(refresh: () => void) {
  const timer = window.setInterval(refresh, 60_000);
  document.addEventListener("visibilitychange", refresh);
  return () => {
    window.clearInterval(timer);
    document.removeEventListener("visibilitychange", refresh);
  };
}
const getTodayHours = () => currentDayHours();
const getServerHours = () => site.hours.summary;

export default function Header() {
  const todayHours = useSyncExternalStore(subscribeToClinicDay, getTodayHours, getServerHours);
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (open) {
      dialog.current?.showModal();
      document.body.style.overflow = "hidden";
    } else {
      dialog.current?.close();
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);
  const close = () => {
    setOpen(false);
    trigger.current?.focus();
  };
  const active = (href: string) =>
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(href + "/");
  return (
    <>
      <div className="utility-bar">
        <div className="container-page">
          <a className="utility-address" href={site.contact.mapLink} target="_blank" rel="noopener noreferrer" aria-label={`${site.contact.shortAddress} — get directions (opens in a new tab)`}>
            <FiMapPin aria-hidden="true" />
            {site.contact.shortAddress}
          </a>
          <span className="utility-hours" title="Clinic hours in Pakistan time">
            <FiClock aria-hidden="true" />
            {todayHours}
          </span>
          {site.acceptingNewPatients && <span className="utility-patients">
            <span className="patient-status-dot" aria-hidden="true" />
            Accepting new patients
          </span>}
          <a className="utility-phone" href={telHref}>
            <FiPhone aria-hidden="true" />
            {site.contact.phone}
          </a>
        </div>
      </div>
      <header className="site-header">
        <div className="container-page header-inner">
          <Link
            className="brand"
            href="/"
            aria-label="The Muscular Junction — home"
          >
            <Image src="/images/logo-tmj.webp" width={48} height={48} alt="" />
            <span>
              <strong>The Muscular Junction</strong>
              <small>Physiotherapy & rehabilitation</small>
            </span>
          </Link>
          <nav className="desktop-nav" aria-label="Primary">
            {nav.primary.map((l) => (
              <Link
                href={l.href}
                key={l.href}
                aria-current={active(l.href) ? "page" : undefined}
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <Link href="/appointment" className="header-book">
            Book Appointment <FiArrowUpRight aria-hidden="true" />
          </Link>
          <button
            ref={trigger}
            type="button"
            className="menu-toggle"
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(true)}
          >
            <FiMenu aria-hidden="true" />
          </button>
        </div>
      </header>
      <dialog
        ref={dialog}
        id="mobile-menu"
        className="mobile-dialog"
        aria-labelledby="menu-title"
        onCancel={close}
        onClose={() => setOpen(false)}
      >
        <div className="dialog-top">
          <strong id="menu-title">Explore the clinic</strong>
          <button
            type="button"
            onClick={close}
            aria-label="Close menu"
            autoFocus
          >
            <FiX aria-hidden="true" />
          </button>
        </div>
        <nav aria-label="Mobile">
          {nav.primary.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={close}
              aria-current={active(l.href) ? "page" : undefined}
            >
              {l.label}
              <FiArrowUpRight aria-hidden="true" />
            </Link>
          ))}
        </nav>
        <Link className="dialog-book" onClick={close} href="/appointment">
          Book Appointment
        </Link>
        <a href={telHref} className="dialog-call">
          Call {site.contact.phone}
        </a>
      </dialog>
    </>
  );
}
