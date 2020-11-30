// // releasae 0

// class Cookie {

//     constructor(name){
//         this.status = "mentah"
//         this.name = name
//         this.ingredients = []
//     }

//     bake(){
//         this.status = "selesai dimasak"
//     }
// }

// class PeanutButter extends Cookie {

//     constructor(name){
//         super(name)
//         this.peanut_count = 100
//     }
// }

// class ChocolateChip extends Cookie {

//     constructor(name){
//         super(name)
//         this.choc_chip_count = 200
//     }
// }

// class OtherCookie extends Cookie{
//     constructor(name){
//         super(name)
//         this.other_count = 200
//     }
// }

// class CookieFactory {

//     // constructor (){
//     //     this.cookies = []
//     // }

//     static create(cookies){

//         var kukiss = []

//         for (var i = 0; i< cookies.length; i++){

//             switch(cookies[i]){

//                 case "peanut butter":
//                     var kukis = new PeanutButter(cookies[i])
//                     kukiss.push(kukis)
//                     break
//                 case "chocolate chip":
//                     var kukis = new ChocolateChip(cookies[i])
//                     kukiss.push(kukis)
//                     break
//                 default:
//                     var kukis = new OtherCookie("other cookie")
//                     kukiss.push(kukis)
//                     break
//             }
//         }

//         return kukiss

//     }
// }



// kukis = []

// require('fs').readFileSync('kukis/cookies.txt', 'utf-8').split(/\r?\n/).forEach(function(line) {
//     kukis.push(line)
// });

// var batch_of_cookies = CookieFactory.create(kukis)
// console.log(batch_of_cookies)

//end of realease 0 
class Cookie {

    constructor(name, ingrediens){
        this.status = "mentah"
        this.name = name
        this.ingredients = ingrediens
        this.has_sugar = this.isSweet(ingrediens)
    }

    bake(){
        this.status = "selesai dimasak"
    }

    isSweet (ingredients){

        for (var i = 0; i< ingredients.length; i++){
            // console.log(ingredients[i], this.name)
            if (ingredients[i].name == "sugar") return true
        }
        return false
    }
}

class PeanutButter extends Cookie {

    constructor(name, ingredients){
        super(name,ingredients)
        this.peanut_count = 100
    }
}

class ChocolateChip extends Cookie {

    constructor(name,ingredients){
        super(name,ingredients)
        this.choc_chip_count = 200
    }
}

class OtherCookie extends Cookie{
    constructor(name,ingredients){
        super(name,ingredients)
        this.other_count = 200
    }
}

class PeanutButterCrumbled extends Cookie{
    constructor(name,ingredients){
        super(name,ingredients)
        this.other_count = 200
    }
}

class CocolateChipCrumbled extends Cookie{
    constructor(name,ingredients){
        super(name,ingredients)
        this.other_count = 200
    }
}

class Ingredients {
    constructor(amount, name){
        this.name = name
        this.amount = amount
    }
}

class CookieFactory {

    static create(cookies){

        var kukiss = []
        var all_ingredients = this.getIngredients()

        // console.log(all_ingredients)

        for (var i = 0; i< cookies.length; i++){

            switch(cookies[i]){

                case "peanut butter":
                    // var ingredien = null
                    for (var j = 0; j< all_ingredients.length; j++){
                        if (cookies[i] == all_ingredients[j]["name"]) var ingredien = all_ingredients[j]["bahan"]
                    }
                    var kukis = new PeanutButter(cookies[i],ingredien)
                    kukiss.push(kukis)
                    break

                case "chocolate chip":
                    // console.log(cookies[i])
                    for (var j = 0; j< all_ingredients.length; j++){
                        if (cookies[i] == all_ingredients[j]["name"]) var ingredien = all_ingredients[j]["bahan"]
                    }
                    var kukis = new ChocolateChip(cookies[i],ingredien)
                    kukiss.push(kukis)
                    break

                case "other cookies":
                    for (var j = 0; j< all_ingredients.length; j++){
                        if (cookies[i] == all_ingredients[j]["name"]) var ingredien = all_ingredients[j]["bahan"]
                    }
                    var kukis = new OtherCookie(cookies[i],ingredien)
                    kukiss.push(kukis)
                    break

                case "peanut butther crumbled":
                    for (var j = 0; j< all_ingredients.length; j++){
                        if (cookies[i] == all_ingredients[j]["name"]) var ingredien = all_ingredients[j]["bahan"]
                    }
                    var kukis = new PeanutButterCrumbled(cookies[i],ingredien)
                    kukiss.push(kukis)
                    break
                
                case "chocolate chip crumbled":
                    for (var j = 0; j< all_ingredients.length; j++){
                        if (cookies[i] == all_ingredients[j]["name"]) var ingredien = all_ingredients[j]["bahan"]
                    }
                    var kukis = new CocolateChipCrumbled(cookies[i],ingredien)
                    kukiss.push(kukis)
                    break

                default:
                    for (var j = 0; j< all_ingredients.length; j++){
                        if (cookies[i] == all_ingredients[j]["name"]) var ingredien = all_ingredients[j]["bahan"]
                    }
                    var kukis = new OtherCookie("other cookie",ingredien)
                    kukiss.push(kukis)
                    break
            }
        }

        return kukiss

    }

    static getIngredients(day, cookies){

        var all_ingredients = []

        require('fs').readFileSync('kukis/ingredients.txt', 'utf-8').split(/\r?\n/).forEach(function(line) {
            var c_name = line.split("=")[0].trim()
            var ing = line.split("=")[1]
            var bahan = ing.split(",")
            var result = []

            for (var i = 0; i< bahan.length ; i++){
                var i_amount = bahan[i].split(":")[0].trim()
                var i_name = bahan[i].split(":")[1].trim()
                var ingredien = new Ingredients(i_amount, i_name)
                result.push(ingredien)

            }
            all_ingredients.push({name: c_name, bahan:result})
        });

        // console.log(all_ingredients)
        return all_ingredients
    }

    static cookieRecomendation(day, cookies){

        var no_sugar = []
        for (var i = 0; i< cookies.length; i++){
            if(!cookies[i].has_sugar) no_sugar.push(cookies[i])
            
        }

        return no_sugar

    }
}



kukis = []

require('fs').readFileSync('kukis/cookies.txt', 'utf-8').split(/\r?\n/).forEach(function(line) {
    kukis.push(line)
});

var batch_of_cookies = CookieFactory.create(kukis)
console.log(batch_of_cookies)

var sugarfreefoods = CookieFactory.cookieRecomendation("tuesday",batch_of_cookies)
console.log("Sugar Free cakes are :")

for (var i = 0; i< sugarfreefoods.length; i++){
    console.log(sugarfreefoods[i].name + " Cookies is free Sugar")
}