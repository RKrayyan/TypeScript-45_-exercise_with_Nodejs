function Sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\nMaking a sandwich with the following item:\n");
    items.forEach(function (singleItems) { return console.log(singleItems); });
    console.log("Enjoy the sandwich");
}
Sandwich("cheese", "chicken", "mayo");
Sandwich("bread", "butter", "egg");
Sandwich("cheese", "chicken", "mayo", "bread", "butter", "egg");
