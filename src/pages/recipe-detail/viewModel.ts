import { Recipe } from "../../common/model";

export const createEmptyRecipe = (): Recipe => ({
  id: 0,
  name: "",
  imgUrl: "",
  description: "",
  ingredients: [],
});
