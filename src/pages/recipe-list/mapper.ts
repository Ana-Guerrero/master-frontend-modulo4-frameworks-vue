import * as model from "../../rest-api/model";
import * as vm from "../../common/model";

const mapRecipeModelToVm = (recipe: model.Recipe): vm.Recipe => ({
  ...recipe,
});

export const mapRecipeListModelToVm = (recipes: model.Recipe[]): vm.Recipe[] =>
  recipes.map(mapRecipeModelToVm);
