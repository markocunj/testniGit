<template>
  <div>
    <div class="text-center">
      {{ getListOfForms }}
      <table
        class="table table-dark mx-auto"
        style="max-width: 700px; margin-top: 10px;"
      >
        <thead>
          <tr>
            <th scope="col">Form name</th>
            <th scope="col">Options</th>
            <th scope="col">Remove</th>
          </tr>
        </thead>
        <tbody v-for="(formDataInput, index) in formDataArray" :key="index">
          <tr>
            <td>{{ formDataInput }}</td>
            <td>
              <button
                type="button"
                class="btn btn-outline-light btn-sm"
                style="margin-left: 5px;"
                @click="getFormData(formDataInput)"
              >
                Test
              </button>
              <button
                type="button"
                class="btn btn-outline-light btn-sm"
                style="margin-left: 5px;"
                @click="editData(formDataInput)"
              >
                Edit
              </button>
            </td>
            <td>
              <button
                v-if="formDataInput != 'premadeForm'"
                type="button"
                class="btn btn-outline-danger btn-sm"
                style="margin-left: 5px;"
                @click="remove(index, formDataInput)"
              >
                &#10005;
              </button>
              <div v-else>
                Unable to remove.
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <br />
      <div v-if="failed">
        <br />
        <div class="alert alert-danger" style="">
          <strong>Error!</strong> Your form doesn't exist
        </div>
      </div>
    </div>
    <div v-if="test">
      <FormRenderer :formConfiguration="formData" v-model="formInputData" />
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
    editData(ime) {
      store.transfer = {
        name: ime,
        formData: JSON.parse(localStorage.getItem(ime)),
      };
      this.$router.push({ name: "FormBuilder" });
    },
    getFormData(formIme) {
      if (!JSON.parse(localStorage.getItem(formIme))) {
        this.failed = true;
      } else {
        this.formData = JSON.parse(localStorage.getItem(formIme));
        this.formDataArray = [];
        this.test = true;
        this.failed = false;
      }
    },
    remove(index, name) {
      localStorage.removeItem(name);
      for (let i = 0; i < this.formDataArray.length; i++) {
        if (index == this.formDataArray.indexOf(this.formDataArray[i])) {
          this.formDataArray.splice(index, 1);
        }
      }
    },
  },
  computed: {
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
  },
  created() {
    if (localStorage.getItem("premadeForm")) {
      this.formDataArray.push("premadeForm");
    } else {
      this.formDataArray.push("premadeForm");
      localStorage.setItem("premadeForm", JSON.stringify(store.premadeForm));
    }
  },
};
</script>
