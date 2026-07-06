import type { IconType } from "react-icons";
import {
  FaHandsHelping,
  FaRunning,
  FaSnowflake,
  FaBrain,
  FaBone,
  FaChild,
  FaStethoscope,
} from "react-icons/fa";

export const serviceIconMap: Record<string, IconType> = {
  FaHandsHelping,
  FaRunning,
  FaSnowflake,
  FaBrain,
  FaBone,
  FaChild,
};

/** Resolve a service's icon name to a component, with a safe fallback. */
export const getServiceIcon = (icon?: string): IconType =>
  (icon && serviceIconMap[icon]) || FaStethoscope;
