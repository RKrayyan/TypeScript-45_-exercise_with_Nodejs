let current_users = ["Rayyan", "Rashid", "armas", "fiza", "noman"]

let new_users = ["Sufiyan", "Khalid", "Rayyan", "Armas", "RASHID"]

new_users.forEach(new_one_user => {
    let our_condition = current_users.some(current_one_user => current_one_user.toLocaleLowerCase() === new_one_user.toLocaleLowerCase());
    if(our_condition){
        console.log(`Sorry ${new_one_user} is already taken!`)
    }else{
        console.log(`This username ${new_one_user} is available`)
    }

})
