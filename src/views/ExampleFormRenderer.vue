<template>
  <div>
    <div v-if="!formData" style="text-align:center">No form selected</div>
    <div v-else>
      <FormRenderer :formConfiguration="formData" v-model="formInputData" />
    </div>
  </div>
</template>
<script>
import { FormRenderer } from "v-form-builder";
export default {
  components: {
    FormRenderer,
  },

  data() {
    return {
      formData: Object,
      formInputData: null,
      data: null,
    };
  },
  methods: {
    getFormData() {
      this.formData = JSON.parse(localStorage.getItem("formData"));
      localStorage.clear();
    },
  },

  created() {
    this.getFormData();
  },
};
</script>
