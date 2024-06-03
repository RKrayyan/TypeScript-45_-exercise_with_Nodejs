let users:string[] =["rayyan",'rashid','fiza','faiza','admin']
for(let user of users){
    if(user === "admin"){
        console.log("Hello admin, would you like to see a status report?")
    } else{
        console.log(`hello ${user}, thank you for logging again.`)
    }
}
