<template>
  <v-form ref="form" v-model="isFormValid">
    <v-text-field
      label="Name"
      :value="login.name"
      :rules="[resultLoginError.name]"
      @input="(name) => updateLogin('name', name)"
      @blur="() => updateLogin('name', login.name)"
    />
    <v-text-field
      label="Password"
      type="password"
      :value="login.password"
      :rules="[resultLoginError.password]"
      @input="(password) => updateLogin('password', password)"
      @blur="() => updateLogin('password', login.password)"
    />
    <div class="btn-container">
      <v-btn type="submit" color="info" @click.prevent="handleOnSave"
        >Login</v-btn
      >
    </div>
  </v-form>
</template>

<script lang="ts">
import Vue, { PropOptions, VueConstructor } from "vue";
import { ResultLoginError, LoginError, Login } from "../viewModel";

interface Refs {
  $refs: {
    form: HTMLFormElement;
  };
}

export interface Props {
  login: PropOptions<Login>;
  loginError: PropOptions<LoginError>;
  updateLogin: PropOptions<(field: string, value: string) => void>;
  loginRequest: PropOptions<() => void>;
}

export default (Vue as VueConstructor<Vue & Refs>).extend({
  name: "FormComponent",
  props: {
    login: { required: true },
    loginError: { required: true },
    updateLogin: { required: true },
    loginRequest: { required: true },
  } as Props,
  data() {
    return {
      isFormValid: true,
    };
  },
  computed: {
    resultLoginError(): ResultLoginError {
      return Object.keys(this.loginError).reduce(
        (acc, item) => ({
          ...acc,
          [item]:
            this.loginError[item as keyof ResultLoginError].succeeded ||
            this.loginError[item as keyof ResultLoginError].message,
        }),
        {} as ResultLoginError
      );
    },
  },
  methods: {
    handleOnSave() {
      this.$refs.form.validate();
      this.loginRequest();
    },
  },
});
</script>

<style scoped>
.btn-container {
  display: flex;
  justify-content: center;
  padding-top: 20px;
}
</style>
