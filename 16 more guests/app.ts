let guest_list:string[]= ["armas","sufiyan","ambani","sharukh"];
let not_present:string ="sufiyan";
let new_guest:string = "babar azam";
guest_list[1] = new_guest
for(let i=0; i<guest_list.length; i++){
    console.log('Respected Sir/Madam\n' + guest_list[i] + ",\n\n we invited you on  dinner tomorrow.\nThank You\n");
}

guest_list.unshift("rizwan","kholi","cummins")
for(let i=0; i<guest_list.length; i++){
    console.log('Respected Sir/Madam\n' + guest_list[i] + ",\n\n we invited you on  dinner tomorrow. we found big table so we decide to invite 3 more guest\nThank You\n");
}



