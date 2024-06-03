function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
var magicians_names = ['hurry porter', 'rayyan', 'rashid'];
var copy_magicians_name = magicians_names.slice();
var copy_great_magicians = make_great(copy_magicians_name);
console.log("Original Array\n");
show_magicians(magicians_names);
console.log("\n Copied array\n");
show_magicians(copy_great_magicians);
