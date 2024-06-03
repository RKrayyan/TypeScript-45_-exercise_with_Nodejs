function make_album(artist_name:string, album_title:string, tracks?: number){
    let album: {artist:string, title:string, tracks?:number} ={
        artist: artist_name,
        title: album_title
    }
    if(tracks !== undefined){
        album.tracks = tracks
    }
    return album
}
let album1 =make_album("Rayyan","album title 1");
console.log(album1);

let album2 = make_album("Rahid","album_title 2");
console.log(album2);


let album3 = make_album("ali", "album_title 3", 56);
console.log(album3)

