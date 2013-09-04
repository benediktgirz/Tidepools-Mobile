
//this is the "center" of your community or event, for mapping purposes
var global_mapCenter = {
    lat: 13.4202,
    lng: 52.5126,
    zoom: 13
};

// //AN EXAMPLE using local AMC2013 map
// var global_mapCenter = {
//     lat: 42.356886,
//     lng: -83.069523,
//     zoom: 14
// };

/*var globalIcon = L.icon;
var book_p = new globalIcon({iconUrl: 'img/book_p.svg'});
var film_p = new globalIcon({iconUrl: 'img/film_p.svg'});
var meet_p = new globalIcon({iconUrl: 'img/meet_p.svg'});
var info_p = new globalIcon({iconUrl: 'img/info_p.svg'});
var speak_p = new globalIcon({iconUrl: 'img/speak_p.svg'});
var present_p = new globalIcon({iconUrl: 'img/present_p.svg'});
var hack = new globalIcon({iconUrl: 'img/hack_r.svg'});
var meet = new globalIcon({iconUrl: 'img/meet_r.svg'});
var eat = new globalIcon({iconUrl: 'img/fork_r.svg'});
*/
//one or more hashtags for base twitter gathering 
var global_hashtag = "#is4cwn";
//can also be multiple:
//var global_hashtag = '#lol,#what,#soitgoes';

var globalEditLoc = {}; //this is a temp variable for an issue with angular leaflet directive in landmark-edit

//parsing node.js usage of file
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined'){
    module.exports.hashtag = global_hashtag;
}