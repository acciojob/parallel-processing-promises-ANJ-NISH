//your JS code here. If required.
const output = document.getElementById("output");
const btn = document.getElementById("download-images-button");

const images = [
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" },
];

let imageUrls=[images[0].url,images[1].url,images[2].url];

function loadImage(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(response => response.blob())
      .then(blob => {
        let img = document.createElement('img');
        img.src = URL.createObjectURL(blob);
        resolve(img);
      })
      .catch(error => reject(`Failed to load image's URL: ${url}`));
  });
}

document.getElementById('download-images-button').addEventListener('click', () => {
  Promise.all(imageUrls.map(url => loadImage(url)))
    .then(images => {
      let output = document.getElementById('output');
      images.forEach(img => output.appendChild(img));
    })
    .catch(error => console.error(error));
});