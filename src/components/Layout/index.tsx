import { getIdFromProp } from "../../helpers"
import { JSXElementArray } from "../../types"

export function Layout({components}: JSXElementArray) {
  return (
    <main>
      {components.length > 0 && components.map(component => (
        <section key={component.type.name} id={getIdFromProp(component.type.name)}>
          {component}
        </section>
      ))}
    </main>
  )
}