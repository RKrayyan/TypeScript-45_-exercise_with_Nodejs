function Sandwich(...items: string[]){
    console.log("\nMaking a sandwich with the following item:\n")
    items.forEach(singleItems => console.log(singleItems))
    console.log("Enjoy the sandwich")
}
Sandwich("cheese", "chicken", "mayo")

Sandwich("bread","butter", "egg")

Sandwich("cheese", "chicken", "mayo", "bread","butter", "egg")