<template>
  <div class="LoginPage">
    <login-form></login-form>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import LoginForm from '@/modules/Passport/components/login-form/login-form.vue';
import '@/views/pages/Login/LoginPage.css';

export default defineComponent({
  name: 'LoginPage',
  components: {
    LoginForm
  },
  data() {
    return {}
  },
  methods: {}
});
</script>
