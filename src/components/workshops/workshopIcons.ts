import { createElement } from "react";
import type { IconType } from "react-icons";
import {
  FaSyringe,
  FaBandAid,
  FaHandsHelping,
  FaBone,
  FaFireAlt,
  FaDumbbell,
  FaChalkboardTeacher,
} from "react-icons/fa";

const workshopIconMap: Record<string, IconType> = {
  FaSyringe,
  FaBandAid,
  FaHandsHelping,
  FaBone,
  FaFireAlt,
  FaDumbbell,
};

/** Resolve a workshop's icon name to a component, with a safe fallback. */
export const getWorkshopIcon = (icon?: string): IconType =>
  (icon && workshopIconMap[icon]) || FaChalkboardTeacher;

/** Renders a workshop icon by name. See `ServiceIcon` for why not `<Icon />`. */
export function WorkshopIcon({
  name,
  className,
}: {
  name?: string;
  className?: string;
}) {
  return createElement(getWorkshopIcon(name), {
    className,
    "aria-hidden": true,
  });
}
