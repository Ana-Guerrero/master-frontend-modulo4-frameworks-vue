<template>
  <v-form ref="form" v-model="isFormValid">
    <form-recipe-name-component
      field="time"
      v-bind="{ onUpdateRecipe, resultRecipeFieldError, recipe }"
    />
    <form-recipe-ingredients-component
      v-bind="{
        recipe,
        ingredient,
        recipeError,
        handleAddIngredient,
        onRemoveItemFromArray,
        handleItemValue,
      }"
    />
    <form-recipe-description-component
      v-bind="{ onUpdateRecipe, resultRecipeFieldError, recipe }"
    />
    <form-recipe-buttons-component v-bind="{ handleOnSave, navigateBack }" />
  </v-form>
</template>

<script lang="ts">
import Vue, { VueConstructor, PropOptions } from "vue";
import { baseRoutes } from "../../../router";
import { Recipe } from "../../../common/model";
import {
  FormRecipeNameComponent,
  FormRecipeIngredientsComponent,
  FormRecipeDescriptionComponent,
  FormRecipeButtonsComponent,
} from "../../../common/components";
import { RecipeError } from "../viewModel";

interface Refs {
  $refs: {
    form: HTMLFormElement;
  };
}

export interface Props {
  recipe: PropOptions<Recipe>;
  recipeError: PropOptions<RecipeError>;
  onUpdateRecipe: PropOptions<(field: string, value: string) => void>;
  onSave: PropOptions<() => void>;
  onRemoveItemFromArray: PropOptions<(value: string, field: string) => void>;
  onAddItemToArray: PropOptions<(value: string, field: string) => void>;
  navigateBack: PropOptions<() => void>;
}

export default (Vue as VueConstructor<Vue & Refs>).extend({
  name: "FormComponent",
  components: {
    FormRecipeNameComponent,
    FormRecipeIngredientsComponent,
    FormRecipeDescriptionComponent,
    FormRecipeButtonsComponent,
  },
  props: {
    recipe: { required: true },
    recipeError: { required: true },
    onUpdateRecipe: { required: true },
    onSave: { required: true },
    onRemoveItemFromArray: { required: true },
    onAddItemToArray: { required: true },
    navigateBack: { required: true },
  } as Props,
  data() {
    return {
      isFormValid: false,
      ingredient: "",
      step: "",
    };
  },
  methods: {
    handleAddIngredient(ingredient: string): void {
      if (this.checkIfItemIsValid("ingredient")) {
        this.onAddItemToArray(ingredient, "ingredients");
        this.ingredient = "";
      }
    },
    handleItemValue(value: string, field: string): void {
      this[field] = value;
    },
    checkIfItemIsValid(field: string): boolean {
      return this[field] === "" ||
        this[field] === undefined ||
        this[field] === null
        ? false
        : true;
    },
    resultRecipeFieldError(field: string): boolean | string {
      return (
        this.recipeError[field].succeeded || this.recipeError[field].message
      );
    },
    handleOnSave(): void {
      this.$refs.form.validate();
      this.onSave();
    },
  },
});
</script>

<style scoped></style>
