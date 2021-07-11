const path = "https://taisukef.github.io/leaflet.sprite-es/src/";

const css = (string) => {
  const tag = document.createElement('style');
  tag.innerHTML = string;
  document.getElementsByTagName("head")[0].appendChild(tag);
};

const init = (L) => {
  const sources = {
    blank: path + "blank.png",
    sprite: path + "sprite.png",
  };
  
  L.spriteIcon = (color) => {
    color = color || 'blue';
    return L.icon({
      className: "leaflet-sprite leaflet-sprite-" + color,
      iconSize: [24, 41],
      shadowsize: [41, 41],
      iconAnchor: [12, 41],
      popupAnchor: [0, -32],
      iconUrl: sources.blank,
      shadowUrl: path + "marker-shadow.png"
    });
  };
  
  const cssRegular = ".leaflet-sprite{background:url(" + sources.sprite + ") no-repeat top left;}\n.leaflet-sprite-blue{ background-position: 0 -132px; width: 41px; height: 41px; } \n.leaflet-sprite-green{ background-position: 0 -355px; width: 41px; height: 41px; } \n.leaflet-sprite-orange{ background-position: 0 -578px; width: 41px; height: 41px; } \n.leaflet-sprite-purple{ background-position: 0 -801px; width: 41px; height: 41px; } \n.leaflet-sprite-red{ background-position: 0 -1024px; width: 41px; height: 41px; } \n.leaflet-sprite-violet{ background-position: 0 -1247px; width: 41px; height: 41px; } \n.leaflet-sprite-yellow{ background-position: 0 -1470px; width: 41px; height: 41px; } ";
  
  const cssRetina = ".leaflet-sprite{\nbackground:url(" + sources.sprite + ") no-repeat top left;\nbackground-size:41px, 41px\n}\n .leaflet-sprite-blue{ background-position: 0 0; width: 41px; height: 41px; } \n .leaflet-sprite-green{ background-position: 0 -111px; width: 41px; height: 41px; } \n .leaflet-sprite-orange{ background-position: 0 -223px; width: 41px; height: 41px; } \n .leaflet-sprite-purple{ background-position: 0 -334px; width: 41px; height: 41px; } \n .leaflet-sprite-red{ background-position: 0 -446px; width: 41px; height: 41px; } \n .leaflet-sprite-violet{ background-position: 0 -557px; width: 41px; height: 41px; } \n .leaflet-sprite-yellow{ background-position: 0 -669px; width: 41px; height: 41px; } ";
  
  if (L.Browser.retina) {
    css(cssRetina);
  } else {
    css(cssRegular);
  }
};

const colors = ["blue", "green", "orange", "yellow", "red", "purple", "violet"];

const LeafletSprite = { init, colors };
export { LeafletSprite };
