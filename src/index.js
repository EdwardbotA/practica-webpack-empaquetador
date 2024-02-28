const $links = document.getElementById("links");
const $name = document.querySelector("h1");

const data = {
  name: "Edward Enrique Botello Aroca",
  nickname: "Dr4wd3",
  description: "Colombiano, actualmente estudiando desarrollo web en Platzi y Alura Latam, Trabaje como asistente de cocina y asesor al cliente en club de la fuerza aerea y teleperformance, empresas que me ayudaron a desarrollamer como persona y a mejorar mi segunda lengua, el ingles.",
  avatar: "https://avatars.githubusercontent.com/u/118316144?s=96&v=4",
  social: [
    {
      name: "twitter",
      url: "https://twitter.com/",
      username: "",
    },
    {
      name: "instagram",
      url: "https://www.instagram.com/ebotelloaroca00/",
      username: "",
    },
  ],
  links: [
    {
      name: "blog",
      url: "https://example.com/",
      color: "red",
      emoji: "📖",
    },
    {
      name: "podcast",
      url: "https://example.com/",
      color: "yellow",
      emoji: "💬",
    },
  ],
  footer: "Made with Love on Colombia",
};

const main = () => {
  let name = document.createTextNode(data?.name)
  let links = data?.links?.map(link => {
    return `<div class="bg-${link.color}-200 px-4 py-5 w-full flex justify-between">
        <a class"text-sm font-bold text-${link.color}-600 text-center hover:text-${link.color}-800 cursor-pointer" href="${link.url}" target="_blank">
        ${link.name}
        </a>
        <span>${link.emoji}</span>
      </div>`
  }).join('')

  let newItem = document.createElement('section')
  newItem.innerHTML = links
  $links.appendChild(newItem)
  $name.appendChild(name)
}

main()