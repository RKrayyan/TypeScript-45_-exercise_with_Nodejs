function make_album(artist_name, album_title, tracks) {
    var album = {
        artist: artist_name,
        title: album_title
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
var album1 = make_album("Rayyan", "album title 1");
console.log(album1);
var album2 = make_album("Rahid", "album_title 2");
console.log(album2);
var album3 = make_album("ali", "album_title 3", 56);
console.log(album3);
