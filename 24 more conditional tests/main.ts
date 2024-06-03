let name_1 : string ="Rayyan"
let name_2 : string ="Rayyan Khan"
let name_3 : string ="Rayyan Adam"
if(name_1 == name_3){
    console.log("names are equal")
} else{
    console.log("names are not equal")
}

if(name_1 != name_2){
    console.log("names are equal")
} else{
    console.log("names are not equal")
}
if(name_1 != name_3){
    console.log("names are equal")
} else{
    console.log("names are not equal")
}

let age_1: number = 34
let age_2: number = 23
if(age_1 == 34){
    console.log("eligible for vote")
}

if(age_1 != 23){
    console.log("eligible for vote in order category")
}

if (age_1 >= age_2){ //greater
    console.log("older")
}

if (age_2 <= age_1){ //less
    console.log("younger")
}

if(age_1 == 34 && age_2 == 23){
    console.log("person is eligible for vote")
}
if(age_1 == 56 || age_2 == 23){
    console.log("person is eligible for vote")
}

let country : string[] = ['pakistan','indai','china','japan']
if(country.includes ("pakistan")){
    console.log("pakistan is in country list")
}
if (!country.includes("america")){
    console.log("america is not include is an array")
}