<template>
  <div class="LoginForm">
    <div class="container">
      <form @submit.prevent="sendLoginForm" class="LoginForm__form">
        <div class="mb-3">
          <label for="login" class="form-label">Логин</label>
          <input v-model="login" type="text" class="form-control" id="login">
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Пароль</label>
          <input v-model="password" type="password" class="form-control" id="password">
        </div>
        <div class="mb-3 form-check">
          <input v-model="remember" type="checkbox" class="form-check-input" id="remember">
          <label class="form-check-label" for="remember">Запомнить на этом устройстве</label>
        </div>
        <div class="mb-3">
          <error-message :errors="errors"></error-message>
        </div>
        <submit-button>Войти</submit-button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import PassportService from "@/modules/Passport/services/PassportService";
import ErrorMessage from "@/modules/Main/components/helpers/error-message/ErrorMessage.vue";
import SubmitButton from "@/modules/Main/components/ui/button/SubmitButton.vue";

export default defineComponent({
  name: 'LoginForm',
  components: {SubmitButton, ErrorMessage},
  data() {
    return {
      loading: false,
      login: '',
      password: '',
      remember: false,
      errors: false,
      loginSuccess: false
    }
  },
  methods: {
    async sendLoginForm() {

      this.loading = true;
      this.errors = false;

      const res = await PassportService.login(
          {
            login: this.login,
            password: this.password,
            remember: this.remember,
          }
      );

      if (res.status === 'ok') {
        this.loginSuccess = true;
      } else if (res.status === 'error') {
        this.errors = res.errors;
      }

      this.loading = false;

    }
  }
});
</script>
<style scoped>
.LoginForm {
  padding-top: 100px;
}

.LoginForm__form {
  max-width: 400px;
  margin: 0 auto;
  border: 1px solid #eee;
  border-radius: 16px;
  padding: 24px;
}
</style>