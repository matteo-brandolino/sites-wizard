export const getIdFromProp = (
  section: string | JSX.Element
): string | undefined => {
  if (typeof section !== "string") {
    section = section.type.name;
  }
  const regExp = new RegExp("Custom(.*)Wrapper", "g");
  const match = regExp.exec(section as string);
  if (match) {
    return match[1].toLowerCase();
  }
};
