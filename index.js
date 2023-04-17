const form = document.querySelector('#playlist-form')
const playlist = document.querySelector('#playlist')
const player = document.querySelector('#player')
form.addEventListener("submit", function(e) {
  e.preventDefault()
  const songName = document.querySelector('#song').value
  const artistName = document.querySelector('#artist').value
  const youtubeID = document.querySelector('#youtubeID').value
  displayPlaylist({songName, artistName, youtubeID})
  form.reset()
})
function addingEventListener() {
  const input = document.getElementById("button")
  input.addEventListener('click', () => console.log('Button clicked!'))
}
function displayPlaylist(songObj) {
  playlist.appendChild(document.createElement('li')).textContent =
    `${songObj.songName} - ${songObj.artistName}`
}