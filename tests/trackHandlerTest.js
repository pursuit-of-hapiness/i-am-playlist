const tape = require('tape');
const trackObjectHandler = require('../src/helpers/trackObjectHandler.js').trackObjectHandler;
const fakeTrackArray = require('./fakeTrackArray');


tape('should convert array of track objects into playlist to present array', t => {
  trackObjectHandler(fakeTrackArray);
  const expectedResult = [{ trackName: 'Friends',
    albumName: 'Project Black & Red (Deluxe)',
    artistNames: ['Yungen', 'Konan', 'DVS'],
    trackId: '2hT1k1sldZk5XqdRjwJ63o' },
  { trackName: 'Gas Pipe',
    albumName: 'Gas Pipe',
    artistNames: ['Show n Prove', 'Big Narstie'],
    trackId: '1CR0p3VS8ym54tWWC7fGMm' }];
  t.deepEqual(trackObjectHandler(fakeTrackArray), expectedResult,
  'converts spotify\'s track object into a filteredTrackArray');
  t.end();
});
