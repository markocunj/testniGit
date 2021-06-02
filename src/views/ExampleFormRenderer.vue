<template>
  <div>
    <div class="text-center">
      <input
        type="text"
        id="text"
        v-model="name"
        placeholder="Enter your form name"
        class="form-control mx-auto"
        style="max-width: 300px;"
      /><br />
      <button type="button" class="btn btn-success" @click="getFormData()">
        Test
      </button>
      <button
        type="button"
        class="btn btn-info"
        style="margin-left: 5px;"
        @click="getListOfForms()"
      >
        List of saved forms
      </button>

      <br />
      <div v-if="failed">
        <br />
        <div class="alert alert-danger" style="">
          <strong>Error!</strong> Your form doesn't exist
        </div>
      </div>
    </div>
    <div class="text-center" v-if="empty">
      <strong
        >There are no saved forms! Go to Form Builder, and make one</strong
      >
    </div>
    <div class="text-center" v-if="formDataArray.length > 0">
      <strong>List of forms:</strong>
      <div v-for="(formDataInput, index) in formDataArray" :key="index">
        {{ formDataInput }}
      </div>
    </div>
    <div v-if="test">
      <FormRenderer :formConfiguration="formData" v-model="formInputData" />
    </div>
    <div v-if="test" class="text-center">
      <hr style="width 70%" />

      <small
        >If you are not satisfied with your form, go back to Form builder and
        edit it!</small
      >
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
      formDataArray: [],
      formInputData: null,
      data: null,
      failed: null,
      test: false,
      empty: false,
      name: "",
    };
  },
  methods: {
    getListOfForms() {
      let keys = Object.keys(localStorage);
      this.formDataArray = [];
      for (let i = 0; i < localStorage.length; i++) {
        if (keys[i] != "loglevel:webpack-dev-server") {
          this.formDataArray.push(keys[i]);
        }
      }
      if (this.formDataArray.length < 1) {
        this.empty = true;
      }
    },
    getFormData() {
      if (!JSON.parse(localStorage.getItem(this.name))) {
        this.failed = true;
      } else {
        this.formData = JSON.parse(localStorage.getItem(this.name));
        this.formDataArray = [];
        this.test = true;
        this.failed = false;
      }
    },
  },
};
</script>
