<template>
  <app-layout>
    <card-component v-bind="{ recipe, navigateToEdit, navigateBack }" />
  </app-layout>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";
import { AppLayout } from "../../common/layouts";
import { Recipe } from "../../common/model";
import { CardComponent } from "./components";

interface Props {
  recipe: PropOptions<Recipe>;
  navigateToEdit: PropOptions<(id: number) => void>;
  navigateBack: PropOptions<() => void>;
}

export default Vue.extend({
  name: "RecipeDetailPage",
  components: { AppLayout, CardComponent },
  props: {
    recipe: { require: true },
    navigateToEdit: { required: true },
    navigateBack: { required: true },
  } as Props,
});
</script>
