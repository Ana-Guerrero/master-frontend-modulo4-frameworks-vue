import { Recipe } from "../../model";

// Images imports
const simpleCrepes = require("./mock-img/crepes.png");
const cheeseCake = require("./mock-img/cheesecake.png");
const omelet = require("./mock-img/omelet.png");
const lentils = require("./mock-img/lentils.png");

export const mockRecipes: Recipe[] = [
  {
    id: 1,
    name: "Simple crepes",
    imgUrl: simpleCrepes,
    description:
      "Prepare the dough. Put the two eggs in a bowl add the milk and flour. Beat the ingredients with an arm mixer so that there are no lumps. You can also beat with a few rods or a fork. The consistency of the dough is quite liquid. Spread a little butter on the base and blot the excess with a paper towel. Pour in a little batter when the pan is hot. When the dough begins to peel off the walls and the surface has set, turn. Remove them to a plate when they are golden brown on both sides. Repeat the process until you finish with all the dough.",
    ingredients: [
      "wheat flour",
      "eggs",
      "butter",
      "salt",
      "milk",
    ],
  },
  {
    id: 2,
    name: "Cheesecake",
    imgUrl: cheeseCake,
    description:
      "Cream cheese cake with biscuit base and strawberry jam topping. In a removable mold we put a base of biscuit powder mixed with a little melted butter and cover the base of the mold. In a saucepan we heat milk, cream cheese, curd, sugar and cream and when the mixture is homogeneous, pour it over the cookie. We put the cake for 6 hours in the refrigerator, unmold and pour the jam on top.",
    ingredients: [
      "milk",
      "sugar",
      "cream",
      "cream cheese",
      "cookies",
      "butter",
      "strawberry jam",
      "curd",
    ],
  },
  {
    id: 3,
    name: "Omelet",
    imgUrl: omelet,
    description:
      "In a bowl, break two eggs, with a rod or a fork, beat the eggs well with two tablespoons of milk, this way you will get a fluffier result. In a frying pan put a little oil and when the edges are lightly cooked, lift the omelette on one side with a spatula allowing the egg that is still liquid to go to the edges and cook. Flip when it's almost ready, wait a few seconds and take it out.",
    ingredients: [
      "eggs", 
      "milk", 
      "salt", 
    ],
  },
  {
    id: 4,
    name: "Lentils",
    imgUrl: lentils,
    description:
      "We put the lentils in a large colander and wash them under the tap. Cut the potatoes and carrots into small pieces, and the chorizo into slices. In a large pot we put the washed lentils, the chorizo, the unpeeled garlic cloves, the potatoes and the carrots. We cover with water. If we like them thicker, we cover everything about three fingers above the ingredients, if we prefer them lighter, we add more water. We light the fire to the maximum, and when the stew begins to boil we lower the heat and let it cook uncovered. In a frying pan, poach an onion cut into small pieces, add the paprika, and when the onion is golden brown, add it to the lentils, add salt to taste, stir from time to time, and cook for 45 minutes over low heat.",
    ingredients: [
      "lentils",
      "chorizo",
      "onion",
      "potatoes",
      "carrots",
      "garlic",
      "water",
      "oil",
      "salt",
      "pepper",
    ],
  },
];
