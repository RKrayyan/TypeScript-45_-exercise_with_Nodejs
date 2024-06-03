var current_users = ["Rayyan", "Rashid", "armas", "fiza", "noman"];
var new_users = ["Sufiyan", "Khalid", "Rayyan", "Armas", "RASHID"];
new_users.forEach(function (new_one_user) {
    var our_condition = current_users.some(function (current_one_user) { return current_one_user.toLocaleLowerCase() === new_one_user.toLocaleLowerCase(); });
    if (our_condition) {
        console.log("Sorry ".concat(new_one_user, " is already taken!"));
    }
    else {
        console.log("This username ".concat(new_one_user, " is available"));
    }
});
var pakistanPlayer = ['babar', 'Afridi', 'Kholi', 'amir', 'imran'];
var indaiPlayer = ['Dhoni', 'kholi', 'rohit', 'afridi', 'bumrah'];
indaiPlayer.forEach(function (indai_famous_player) {
    var worldcupPlayer = pakistanPlayer.some(function (pakistan_famous_player) { return pakistan_famous_player.toLocaleLowerCase() === indai_famous_player.toLocaleLowerCase(); });
    if (worldcupPlayer) {
        console.log("Sorry ".concat(indai_famous_player, " is already taken!"));
    }
    else {
        console.log("this is ".concat(indai_famous_player, " is available"));
    }
});
