
// Mixed selectors

const drinkHead = document.querySelector("#drinkType")
const eventName = document.querySelector("#eventName")
const blurb = document.querySelector("#blurb")




// Google sheeet

let sheetID = "1rwxzzkkLWg8HJgY8tNNf1F_HjNbJXeaXf3NJYiZnS4E";
let sheetTitle = "Drink_Offers";
let sheetRange = "D10:L14";

let fullURL =
  "https://docs.google.com/spreadsheets/d/" +
  sheetID +
  "/gviz/tq?sheet=" +
  sheetTitle +
  "&range=" +
  sheetRange;

fetch(fullURL)
  .then((res) => res.text())
  .then((rep) => {
    const data = JSON.parse(rep.substr(47).slice(0, -2));
    console.log(data);
  });

//   This is still a work in progress. Still testing the GShhets thing


// Cocktail site

let alcoType = "vodka"
const cocktail = fetch (`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${alcoType}`)
cocktail.then((val) => {
  const data = val.json()
  data.then ((post) => 
// console.log(post)
console.log(post.drinks[0].strDrink)

// const firstDrink = post.drinks[0].strDrink
// console.log(firstDrink)
)
  })

  // const data = val.json();
  // data.then ((post)) => {
    // console.log(post)
  // }
  // console.log(cocktail)


  drinkHead.innerHTML = "Gin awesomeness"
  eventName.innerHTML = "Gin Jams"
  blurb.innerHTML = "Come join us on our friday night Gin Jams. Latin chillout live band and all Gin based drinks 10% off."
  

// const mainImage = 

