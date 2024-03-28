"use strict";
// Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name 
// and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries
//  representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional 
//  parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number 
//  of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.
Object.defineProperty(exports, "__esModule", { value: true });
// In TypeScript, a class is a blueprint for creating 
// objects with specific properties and methods. It serves as a template to define the structure and behavior of objects.
class Album {
    artist;
    title;
    tracks;
    constructor(artist, title, tracks) {
        this.artist = artist;
        this.title = title;
        this.tracks = tracks;
    }
}
function make_album(artist, title, tracks) {
    return new Album(artist, title, tracks);
}
// Create three different albums
const album1 = make_album('Artist1', 'Album1', 12);
const album2 = make_album('Artist2', 'Album2', 10);
const album3 = make_album('Artist3', 'Album3');
// Print information about each album
console.log(album1); // Album { artist: 'Artist1', title: 'Album1', tracks: 12 }
console.log(album2); // Album { artist: 'Artist2', title: 'Album2', tracks: 10 }
console.log(album3); // Album { artist: 'Artist3', title: 'Album3', tracks: undefined }
