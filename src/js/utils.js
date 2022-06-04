import { images, imageData} from './data-management.js';

function toTitleCase(text) {
  return text.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

function toMiles(km){
  return (km * 0.621371).toFixed(1);
}

function getImage(icon){
  return images[imageData.find(image => image.icon === icon).img];
}
function getIcon(icon){
  return imageData.find(image => image.icon === icon).newIcon;
}
function getCredit(icon){
  return imageData.find(image => image.icon === icon).credit;
}


export { toTitleCase, toMiles, getImage, getIcon, getCredit };
