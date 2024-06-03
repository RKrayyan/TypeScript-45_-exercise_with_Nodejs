let guest_list:string[]= ["armas","sufiyan","ambani","sharukh"];{
    for(let i=0; i<guest_list.length; i++){
        console.log('Respected Sir/Madam\n' + guest_list[i] + ",\n\n we invited you on  dinner tomorrow.\nThank You\n");
    }
}
let not_present:string ="sufiyan";
let new_guest:string = "babar azam";
guest_list[1] = new_guest
for(let i=0; i<guest_list.length; i++){
    console.log('Respected Sir/Madam\n' + guest_list[i] + ",\n\n we invited you on  dinner tomorrow.\nThank You\n");
}
console.log(`Mr.${not_present} will not coming tomorrow dinner`);
