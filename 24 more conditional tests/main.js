var name_1 = "Rayyan";
var name_2 = "Rayyan Khan";
var name_3 = "Rayyan Adam";
if (name_1 == name_3) {
    console.log("names are equal");
}
else {
    console.log("names are not equal");
}
if (name_1 != name_2) {
    console.log("names are equal");
}
else {
    console.log("names are not equal");
}
if (name_1 != name_3) {
    console.log("names are equal");
}
else {
    console.log("names are not equal");
}
var age_1 = 34;
var age_2 = 23;
if (age_1 == 34) {
    console.log("eligible for vote");
}
if (age_1 != 23) {
    console.log("eligible for vote in order category");
}
if (age_1 >= age_2) { //greater
    console.log("older");
}
if (age_2 <= age_1) { //less
    console.log("younger");
}
if (age_1 == 34 && age_2 == 23) {
    console.log("person is eligible for vote");
}
if (age_1 == 56 || age_2 == 23) {
    console.log("person is eligible for vote");
}
var country = ['pakistan', 'indai', 'china', 'japan'];
if (country.includes("pakistan")) {
    console.log("pakistan is in country list");
}
if (!country.includes("america")) {
    console.log("america is not include is an array");
}
