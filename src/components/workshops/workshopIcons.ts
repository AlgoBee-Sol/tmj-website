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

export const workshopIconMap: Record<string, IconType> = {
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
