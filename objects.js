var playlist = {
  Slowdive: 'Alison'
};
function updatePlaylist(playlist, artistName, songName){
return Object.assign(playlist, artistName, songName);
}
function removeFromPlaylist(playlist, artistName){
  return Object.assign(playlist, artistName);
}