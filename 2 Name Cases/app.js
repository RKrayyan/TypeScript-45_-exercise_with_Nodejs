// ex 2
var personName = "Rayyan";
console.log("lowercase:", personName.toLocaleLowerCase());
console.log("uppercase:", personName.toLocaleUpperCase());
console.log("titlecase:", personName.replace(/\bw /g, function (c) { return c.toLocaleUpperCase(); }));
