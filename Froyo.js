const userInputString = prompt(

)
const stringArray = userInputString.split(",");

console.log("An array of your flavors: ", stringArray)

const flavors = {
    
};
   
stringArray.forEach(menuOrd => {
    if (flavors[menuOrd]) {
        flavors[menuOrd]++;
    } else {
        flavors[menuOrd] = 1;
    }
});
console.table(flavors)
