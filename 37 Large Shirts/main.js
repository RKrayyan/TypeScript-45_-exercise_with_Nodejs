function make_shirt(size, printMessage) {
    if (size === void 0) { size = "Large"; }
    if (printMessage === void 0) { printMessage = "I Love Typescript"; }
    console.log("Creatinng a ".concat(size, " shirt with the  ").concat(printMessage, " print the shirt"));
}
make_shirt();
make_shirt("Medium");
make_shirt("Small", "I Love javascript");
