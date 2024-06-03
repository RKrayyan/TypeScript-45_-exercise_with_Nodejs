var guest_list = ["armas", "sufiyan", "ambani", "sharukh"];
var not_present = "sufiyan";
var new_guest = "babar azam";
guest_list[1] = new_guest;
//for(let i=0; i<guest_list.length; i++){
//  console.log('Respected Sir/Madam\n' + guest_list[i] + ",\n\n we invited you on  dinner tomorrow.\nThank You\n");}
guest_list.unshift("rizwan", "kholi", "cummins");
//for(let i=0; i<guest_list.length; i++){
//  console.log('Respected Sir/Madam\n' + guest_list[i] + ",\n\n we invited you on  dinner tomorrow. we found big table so we decide to invite 3 more guest\nThank You\n");
//}
console.log("\nunfortunately we can not arrange big table , Only two people allow.");
while (guest_list.length > 2) {
    var remove_guset = guest_list.pop();
    console.log("Sorry Sir/Madam. ".concat(remove_guset, " you are not invited for dinner."));
}
for (var i = 0; i < guest_list.length; i++) {
    console.log('Respected Sir/Madam\n' + guest_list[i] + ",\nYes you are still invited on tomorrow dinner\nThank You\n");
}
guest_list.splice(0, 2);
console.log(guest_list);
