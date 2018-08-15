var playlist = {
  Slowdive: 'Alison',
  My Bloody Valentine: 'Sometimes',
  Phil Ochs: "Here's to the State of Mississippi"
};
function updatePlaylist(obj, key, value){
return Object.assign({}, obj, {[key]: value})
}