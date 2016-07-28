const trackRows = document.getElementsByClassName('track');

const addTrackToPlaylist = function() {
  const xhr = new XMLHttpRequest();
  xhr.open('POST', )
  console.log(this.id);
};

const addClickEvents = (element) => {
  element.addEventListener('click', addTrackToPlaylist.bind(element));
};

[].forEach.call(trackRows, addClickEvents);
