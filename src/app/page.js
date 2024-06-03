export default function Home() {
  return (
    <header className="bg-cornsilk font-bold font-ibmPlexMono py-2 text-darkmossgreen uppercase">
      <nav>
        <ul className="flex justify-around justify-center">
          <li className="active:underline hover:text-pakistangreen inline-block text-center">
            <a href="#">Fotografías</a>
          </li>
          <li className="active:underline hover:text-pakistangreen inline-block text-center">
            <a href="#">Poemas</a>
          </li>
          <li className="inline-block text-center">Logo</li>
          <li className="active:underline hover:text-pakistangreen inline-block text-center">
            <a href="#">Sobre mí</a>
          </li>
          <li className="active:underline hover:text-pakistangreen inline-block text-center">
            <a href="#">Contacto</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
