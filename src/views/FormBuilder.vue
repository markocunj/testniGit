<template>
  <FormBuilder v-bind:info="transfer" v-model="configuration"></FormBuilder>
</template>

<script>
import { FormBuilder } from "v-form-builder";
import store from "@/store";
export default {
  components: { FormBuilder },
  data: () => ({
    configuration: null,
    store,
    transfer: {},
  }),
  props: {
    info: {
      type: Object,
    },
  },
  created() {
    if (store.transfer) {
      this.transfer = store.transfer;
      store.transfer = {};
    }
  },
};
</script>
