<template>
  <login-page
    v-bind="{
      login,
      loginRequest,
      loginError,
      updateLogin,
      snackbarText,
      snackbarColor,
      snackbarState,
      closeSnackbar,
    }"
  />
</template>

<script lang="ts">
import Vue from "vue";
import { loginRequest } from "../../rest-api/api/login";
import { baseRoutes } from "../../router";
import { createEmptyLogin, Login, createEmptyLoginError } from "./viewModel";
import { mapLoginVMToModel } from "./mapper";
import { formValidation } from "./validations";
import LoginPage from "./Page.vue";

export default Vue.extend({
  name: "PageLoginContainer",
  components: { LoginPage },
  data() {
    return {
      login: createEmptyLogin(),
      loginError: createEmptyLoginError(),
      snackbarState: false,
      snackbarColor: "",
      snackbarText: "",
    };
  },
  methods: {
    updateLogin(field: string, value: string): void {
      this.login = {
        ...this.login,
        [field]: value,
      };
      formValidation.validateField(field, value).then((result) => {
        this.loginError = {
          ...this.loginError,
          [field]: result,
        };
      });
    },
    loginRequest(): void {
      formValidation.validateForm(this.login).then((result) => {
        if (result.succeeded) {
          const loginModel = mapLoginVMToModel(this.login);
          loginRequest(loginModel)
            .then(() => {
              localStorage.setItem("login", JSON.stringify(this.login));
              this.$router.push(baseRoutes.recipe);
            })
            .catch((error) => {
              this.showSnackbarError();
            });
        } else {
          this.loginError = {
            ...this.loginError,
            ...result.fieldErrors,
          };
        }
      });
    },
    showSnackbarError() {
      this.snackbarColor = "error";
      this.snackbarText = "Invalid username or password";
      this.snackbarState = true;
      setTimeout(() => {
        this.snackbarState = false;
      }, 5000);
    },
    closeSnackbar(value: boolean): void {
      this.snackbarState = value;
    },
  },
});
</script>
