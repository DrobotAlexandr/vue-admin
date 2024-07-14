<template>
  <div class="SubmitButton" v-bind:class="{ 'SubmitButton--disabled' : loading }">
    <button type="submit" class="SubmitButton__button btn btn-primary">
      <span v-if="!loading">
        <slot/>
      </span>
      <span v-else>
        <span class="SubmitButton__loader spinner-border text-white"></span>
      </span>
    </button>
  </div>
</template>
<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'SubmitButton',
  props: ['loading']
});
</script>
<style>
.SubmitButton__button {
  width: 100%;
  margin-bottom: 8px;
}

.SubmitButton__loader {
  width: 20px !important;
  height: 20px !important;
}

.SubmitButton--disabled {
  pointer-events: none;
}
</style>
