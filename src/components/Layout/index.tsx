import { getIdFromProp } from "../../helpers/helpers"

type LayoutProps = {
  sections: JSX.Element[]
}
export function Layout({sections}: LayoutProps) {
  return (
    <main>
      {sections.length > 0 && sections.map(section => (
        <section key={section.type.name} id={getIdFromProp(section.type.name)}>
          {section}
        </section>
      ))}
    </main>
  )
}