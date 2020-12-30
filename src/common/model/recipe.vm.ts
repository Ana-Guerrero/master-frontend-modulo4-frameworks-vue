import { ValidationResult } from "@lemoncode/fonk";

export interface Recipe {
  id: number;
  name: string;
  imgUrl: string;
  description: string;
  ingredients: string[];
}

export interface RecipeError {
  imgUrl: ValidationResult;
  name: ValidationResult;
  ingredients: ValidationResult;
  description: ValidationResult;
}
