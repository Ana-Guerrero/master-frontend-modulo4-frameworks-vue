import * as model from "../../rest-api/model";
import * as vm from "../../common/model";

export const mapRecipeModelToVm = (recipe: model.Recipe): vm.Recipe => ({
  ...recipe,
});

export const mapRecipeVmToModel = (recipe: vm.Recipe): model.Recipe => ({
  id: recipe.id,
  name: recipe.name,
  imgUrl: recipe.imgUrl,
  description: recipe.description,
  ingredients: recipe.ingredients,
});
