<template>
  <FormBuilder v-model="configuration"></FormBuilder>
</template>

<script>
import { FormBuilder } from "v-form-builder";
export default {
  components: { FormBuilder },
  data: () => ({
    configuration: null,
  }),
};
</script>
