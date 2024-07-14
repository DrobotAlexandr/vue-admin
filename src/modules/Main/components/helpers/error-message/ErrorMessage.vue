<template>
  <div class="ErrorMessage">
    <div class="alert alert-danger" role="alert" v-if="errors">
      <div v-for="error in errors" :key="error.code">
        <span v-html="error.message"></span>
      </div>
    </div>
  </div>
</template>

<script>

import {defineComponent} from "vue";

export default defineComponent({
  name: 'ErrorMessage',
  props: ['errors']
});
</script>
<style scoped>
.ErrorMessage {
  font-size: 12px;
  cursor: default;
}
</style>
