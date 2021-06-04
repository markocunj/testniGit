<template>
  <div>
    <FormRenderer :formConfiguration="formData" v-model="formInputData" />
    <div class="text-center">
      <hr style="width 70%" />

      <small style="padding-bottom: 30px;"
        >You can edit this form too! Just go to Chosen forms tab, and edit
        "premadeForm"!</small
      >
    </div>
  </div>
</template>
<script>
import { FormRenderer } from "v-form-builder";
import store from "@/store.js";
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
      if (JSON.parse(localStorage.getItem("premadeForm"))) {
        if (
          store.premadeForm == JSON.parse(localStorage.getItem("premadeForm"))
        ) {
          this.formData = store.premadeForm;
        } else this.formData = JSON.parse(localStorage.getItem("premadeForm"));
      } else {
        this.formData = store.premadeForm;
        localStorage.setItem("premadeForm", JSON.stringify(store.premadeForm));
      }
    },
  },
  created() {
    this.getFormData();
  },
};
</script>
