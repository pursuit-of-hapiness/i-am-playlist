const trackRows = document.getElementsByClassName('track');

const addTrackToPlaylist = function() {
  console.log(this.id);
};

const addClickEvents = (element) => {
  element.addEventListener('click', addTrackToPlaylist.bind(element));
};

[].forEach.call(trackRows, addClickEvents);
