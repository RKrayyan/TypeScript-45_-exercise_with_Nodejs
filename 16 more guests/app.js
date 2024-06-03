var guest_list = ["armas", "sufiyan", "ambani", "sharukh"];
var not_present = "sufiyan";
var new_guest = "babar azam";
guest_list[1] = new_guest;
for (var i = 0; i < guest_list.length; i++) {
    console.log('Respected Sir/Madam\n' + guest_list[i] + ",\n\n we invited you on  dinner tomorrow.\nThank You\n");
}
guest_list.unshift("rizwan", "kholi", "cummins");
for (var i = 0; i < guest_list.length; i++) {
    console.log('Respected Sir/Madam\n' + guest_list[i] + ",\n\n we invited you on  dinner tomorrow. we found big table so we decide to invite 3 more guest\nThank You\n");
}
