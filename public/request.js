const trackRows = document.getElementsByClassName('track');


const addTrackToPlaylist = function() {
  this.childNodes[1].className = 'track-clicked';
  this.childNodes[3].className = 'toggle';

  const xhr = new XMLHttpRequest();
  xhr.open('POST', '/submitPlaylist', true);
  xhr.setRequestHeader('Content-Type', 'text/plain');
  xhr.send(this.id);
};

const addClickEvents = (element) => {
  element.addEventListener('click', addTrackToPlaylist.bind(element));
};

[].forEach.call(trackRows, addClickEvents);
