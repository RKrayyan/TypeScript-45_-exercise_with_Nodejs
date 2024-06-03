var guest_list = ["armas", "sufiyan", "ambani", "sharukh"];
{
    for (var i = 0; i < guest_list.length; i++) {
        console.log('Respected Sir/Madam\n' + guest_list[i] + ",\n\n we invited you on  dinner tomorrow.\nThank You\n");
    }
}
var not_present = "sufiyan";
var new_guest = "babar azam";
guest_list[1] = new_guest;
for (var i = 0; i < guest_list.length; i++) {
    console.log('Respected Sir/Madam\n' + guest_list[i] + ",\n\n we invited you on  dinner tomorrow.\nThank You\n");
}
console.log("Mr.".concat(not_present, " will not coming tomorrow dinner"));
