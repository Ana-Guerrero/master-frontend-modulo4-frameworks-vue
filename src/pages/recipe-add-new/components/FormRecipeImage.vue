<template>
  <div>
    <h3>Select an image for the recipe</h3>
    <div class="form-field">
      <FileUpload mode="basic" name="demo[]" url="./upload.php" accept="image/*" :maxFileSize="1000000" @upload="onUpload" />
      <v-file-input
        filled
        label="Upload image"
        prepend-icon="mdi-camera"
        :rules="[resultRecipeFieldError('imgUrl')]"
        @change="handleFileInput"
      ></v-file-input>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";

export interface Props {
  handleFileInput: PropOptions<(file: File) => void>;
  resultRecipeFieldError: PropOptions<(field: string) => boolean | string>;
}

export default Vue.extend({
  name: "FormRecipeImageComponent",
  props: {
    handleFileInput: { required: true },
    resultRecipeFieldError: { required: true },
  } as Props,
});
</script>

<style scoped>
.form-field {
  border: 1px solid #424242;
  padding: 25px 25px 0 25px;
  margin-bottom: 40px;
}

h3 {
  color: #424242;
}
</style>
