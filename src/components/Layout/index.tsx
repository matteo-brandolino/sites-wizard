type Props = {
    header: JSX.Element,
    hero: JSX.Element,
}

export function Layout({header, hero}: Props) {
  return (
    <main>
        <section id="header">
          {header}
        </section>
        <section id="hero">
          {hero}
        </section>
        <section id="section-3">
          <h1>Section 3</h1>
          <p>Soluta quibusdam ad nostrum vel voluptate delectus sequi dolores quia quaerat officia corrupti, aperiam fugit facere debitis repudiandae praesentium sapiente inventore repellendus, nemo commodi alias!</p>
        </section>
        <section id="section-4">
          <h1>Section 4</h1>
          <p>Aliquid aliquam magnam ducimus similique obcaecati, unde exercitationem laborum incidunt, quas in ipsum inventore nostrum? Blanditiis optio cumque earum iste odio! Alias sint accusamus repudiandae.</p>
        </section>
        <section id="section-5">
          <h1>Section 5</h1>
          <p>Officia ipsum fugit iure eaque quisquam error tempore earum enim illum, delectus officiis incidunt corrupti aliquid nam quas perspiciatis eveniet doloremque quod labore? Doloremque, ipsum?</p>
        </section>
        <section id="section-6">
          <h1>Section 6</h1>
          <p>Aperiam repellat dignissimos fugiat possimus esse, suscipit neque nisi libero alias obcaecati ipsam, porro illo corrupti nostrum reprehenderit unde, illum in laudantium impedit. Modi, veniam.</p>
        </section>
        <section id="section-7">
          <h1>Section 7</h1>
          <p>Cum asperiores temporibus itaque consequatur quod inventore, quia quis explicabo dicta esse minus voluptatem reiciendis eveniet animi, necessitatibus illum dolorem doloremque repellat placeat, dolores eaque.</p>
        </section>
        <section id="section-8">
          <h1>Section 8</h1>
          <p>Optio qui, omnis itaque rerum iusto molestiae necessitatibus deleniti quod tenetur id perspiciatis voluptatum dolorum quisquam eius ipsum non architecto labore! Distinctio, tenetur. Officiis, necessitatibus?</p>
        </section>
        <section id="section-9">
          <h1>Section 9</h1>
          <p>Rem iste iure blanditiis excepturi esse nisi corrupti sequi, illo, laborum quo quis quaerat assumenda perspiciatis quod fuga vel laudantium doloribus architecto tempora omnis earum!</p>
        </section>
      </main>
  )
}