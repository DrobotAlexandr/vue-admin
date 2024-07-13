<template>
  <div class="LoginPage">
    <div class="container">
      <form @submit.prevent="authorize" class="LoginPage__form">
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
        <button type="submit" class="btn btn-primary">Войти</button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import '@/views/pages/Login/LoginPage.css';

export default defineComponent({
  name: 'LoginPage',
  components: {},
  data() {
    return {
      login: '',
      password: '',
      remember: false
    }
  },
  methods: {
    authorize() {
      alert(this.login)
    }
  }
});
</script>
