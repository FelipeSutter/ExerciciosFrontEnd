console.log("olá");

async function getGatinho() {
  const url = "https://api.thecatapi.com/v1/images/search";

  //   fetch(url)
  //     .then((response) => response.json())
  //     .then((dados) => console.log(dados[0].url));

  const response = await fetch(url);
  const gatinho = await response.json();
  return gatinho[0];
}

async function mostrarGatinho() {
  const gato = await getGatinho();
  const container = document.querySelector("#container-gato");
  const img = document.createElement("img");
  img.src = gato.url;
  img.width = gato.width;
  img.height = gato.height;
  container.appendChild(img);
  //console.log(gato);
}
