import { Recipe } from "../model";

export const checkInLocalStorage = (key: string): boolean =>
  localStorage.getItem(key) !== null;

export const saveInLocalStorage = (key: string, value: any): void => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getFromLocalStorage = (key: string): any =>
  JSON.parse(localStorage.getItem(key) as string);

export const deleteFromLocalStorage = (key: string): void => {
  localStorage.removeItem(key);
};

export const getRecipeById = (
  recipes: Recipe[],
  id: number
): Promise<Recipe> => {
  const recipe = recipes.find((x) => x.id === id);
  return Promise.resolve(recipe as Recipe);
};
