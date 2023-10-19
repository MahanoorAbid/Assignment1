type Album = {
  artist: string;
  title: string;
  // Optional property for the number of tracks
  tracks?: number; 
};

function make_album(artist: string, title: string, tracks?: number): Album {
  const album: Album = {
    artist: artist,
    title: title,
  };

  if (tracks !== undefined) {
    album.tracks = tracks;
  }

  return album;
}

// Making three dictionaries representing different albums
let album1 = make_album("Artist 1", "Album 1");
let album2 = make_album("Artist 2", "Album 2", 12);
let album3 = make_album("Artist 3", "Album 3", 8);


// Printing each return value to show that the objects are storing the album information correctly
console.log(album1);
console.log(album2);
console.log(album3);
