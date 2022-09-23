import { links, TablerIcon } from "./../types/index.d";
import { IconLayoutNavbar, IconPolaroid } from "@tabler/icons";

const getLabelIcon = (match: string): TablerIcon => {
  switch (match) {
    case "header":
      return IconLayoutNavbar;
    case "hero":
      return IconPolaroid;
    default:
      return IconPolaroid;
  }
};

const getMatch = (section: string): string | undefined => {
  const regExp = new RegExp("Custom(.*)Wrapper", "g");
  const match = regExp.exec(section as string);
  if (match) {
    return match[1].toLowerCase();
  }
};

export const getIdFromProp = (
  section: string | JSX.Element
): string | undefined => {
  if (typeof section !== "string") {
    section = section.type.name;
  }
  return getMatch(section as string);
};

export const getLinks = (components: JSX.Element[]): links | undefined => {
  if (components instanceof Array) {
    const links = components.map((component) => {
      const match = getMatch(component.type.name);
      if (!match) return;
      return {
        link: `#${match}`,
        label: match.charAt(0).toUpperCase() + match.slice(1),
        icon: getLabelIcon(match),
      };
    });
    return links;
  }
};
