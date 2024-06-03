// ex 3
let personName:string = "Rayyan"
console.log("lowercase:", personName.toLocaleLowerCase());
console.log("uppercase:", personName.toLocaleUpperCase());
console.log("titlecase:", personName.replace(/\bw /g, c => c.toLocaleUpperCase()));