import {
  ValidationResult,
  createDefaultValidationResult,
} from "@lemoncode/fonk";
import { Recipe } from "../../common/model";

export const createEmptyRecipe = (): Recipe => ({
  id: 0,
  name: "",
  imgUrl: "",
  description: "",
  ingredients: [],
});

export interface RecipeError {
  name: ValidationResult;
  ingredients: ValidationResult;
  description: ValidationResult;
  imgUrl: ValidationResult;
}

export const createEmptyRecipeError = (): RecipeError => ({
  name: createDefaultValidationResult(),
  ingredients: createDefaultValidationResult(),
  description: createDefaultValidationResult(),
  imgUrl: createDefaultValidationResult(),
});
