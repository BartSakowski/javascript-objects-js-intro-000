var playlist = {}

var playlist = {
  Periphery: "Scarlet",
  afterImage: "Lumiere",
  Menzingers: "After The Party"
}
function updatePlaylist(obj, key, value) {
  obj[key] = value
  return obj
}
var playlist = {
  Periphery: "Scarlet",
  afterimage: "Lumiere",
  Menzingers: "After The Party"
};

function removeFromPlaylist(playlist, artist) {
  delete playlist[artist];
};
