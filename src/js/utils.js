function toTitleCase(text) {
  return text.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

function toMiles(km){
  return (km * 0.621371).toFixed(1);
}

export { toTitleCase, toMiles };
