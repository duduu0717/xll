// console.log('esm vite');
const apiKey = import.meta.env.VITE_QWEN_API_KEY;
const root = document.querySelector('#root');

const generateImage = async () => {

}

const renderImage = (imageUrl) => {
  root.innerHTML = `<img src="${imageUrl}" />`
}

generateImage();