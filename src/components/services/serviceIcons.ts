import { createElement } from "react";
import type { IconType } from "react-icons";
import {
  FaHandsHelping,
  FaRunning,
  FaSnowflake,
  FaBrain,
  FaBone,
  FaChild,
  FaSyringe,
  FaStethoscope,
} from "react-icons/fa";

const serviceIconMap: Record<string, IconType> = {
  FaHandsHelping,
  FaRunning,
  FaSnowflake,
  FaBrain,
  FaBone,
  FaChild,
  FaSyringe,
};

/** Resolve a service's icon name to a component, with a safe fallback. */
export const getServiceIcon = (icon?: string): IconType =>
  (icon && serviceIconMap[icon]) || FaStethoscope;

/**
 * Renders a service icon by name.
 *
 * Built with `createElement` rather than aliasing the resolved component to a
 * capitalised local and rendering `<Icon />`: that pattern re-creates a
 * component on every render, which React's lint rules (correctly) reject.
 */
export function ServiceIcon({
  name,
  className,
}: {
  name?: string;
  className?: string;
}) {
  return createElement(getServiceIcon(name), {
    className,
    "aria-hidden": true,
  });
}
