<template>
  <div>
    <FormRenderer :formConfiguration="formData" v-model="formInputData" />
    {{ formInputData }}
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
      formData: {
        formConfig: { headline: "", subHeadline: "", isShowHeadline: false },
        sections: {
          "section-c29fc0d9-5da9-4565-b2df-bd62b9169520": {
            uniqueId: "section-c29fc0d9-5da9-4565-b2df-bd62b9169520",
            headline: "Choosing classes",
            subHeadline: "Form for choosing classes",
            isShowHeadline: true,
            sortOrder: 1,
            type: "normal",
            rows: [],
            controls: [
              "control-30cf5c62-bbfe-4946-9ba0-a1d71a476e97",
              "control-e19410e3-5d0f-40fa-a54b-af6df362406a",
              "control-f465bdf5-5074-438f-8b0b-f471c5c67c3b",
              "control-06213e9c-a83e-49ac-810d-cce8fe9ee84a",
              "control-30d9e15d-9390-41e5-ab93-32a6d61d99b6",
            ],
          },
        },
        rows: {},
        controls: {
          "control-30cf5c62-bbfe-4946-9ba0-a1d71a476e97": {
            uniqueId: "control-30cf5c62-bbfe-4946-9ba0-a1d71a476e97",
            type: "input",
            name: "Name",
            label: "Name",
            isShowLabel: true,
            placeholderText: "Your name",
            containerClass: "col-md-6 md-layout-item md-size-50",
            defaultValue: "Marko Cunj",
            defaultValueForAutocomplete: [],
            rows: [],
            validations: [
              {
                ruleType: "required",
                errorMessage: "This field is required",
                additionalValue: "",
              },
            ],
            autocompleteLink: "",
            autocomplete: [],
          },
          "control-e19410e3-5d0f-40fa-a54b-af6df362406a": {
            uniqueId: "control-e19410e3-5d0f-40fa-a54b-af6df362406a",
            type: "input",
            name: "Address",
            label: "Address",
            isShowLabel: true,
            placeholderText: "Your address",
            containerClass: "col-md-6 md-layout-item md-size-50",
            defaultValue: "Istarska 21",
            defaultValueForAutocomplete: [],
            rows: [],
            validations: [
              {
                ruleType: "required",
                errorMessage: "This field is required",
                additionalValue: "",
              },
            ],
            autocompleteLink: "",
            autocomplete: [],
          },
          "control-f465bdf5-5074-438f-8b0b-f471c5c67c3b": {
            uniqueId: "control-f465bdf5-5074-438f-8b0b-f471c5c67c3b",
            type: "input",
            name: "Country",
            label: "Country",
            isShowLabel: true,
            placeholderText: "Choose your country",
            containerClass: "col-md-6 md-layout-item md-size-50",
            defaultValue: "",
            defaultValueForAutocomplete: ["Croatia"],
            rows: [],
            validations: [],
            autocompleteLink:
              "https://b9f24f43-3508-4bc3-8c09-f3a0b91e9ad1.mock.pstmn.io/Test",
            autocomplete: [],
          },
          "control-06213e9c-a83e-49ac-810d-cce8fe9ee84a": {
            uniqueId: "control-06213e9c-a83e-49ac-810d-cce8fe9ee84a",
            type: "input",
            name: "Classes",
            label: "Choose classes",
            isShowLabel: true,
            placeholderText: "",
            containerClass: "col-md-4 md-layout-item md-size-33",
            defaultValue: "",
            defaultValueForAutocomplete: ["WA", "ICT"],
            rows: [],
            validations: [],
            autocompleteLink: "",
            autocomplete: ["ITR", "WA", "ICT", "PI", "MA"],
          },
          "control-30d9e15d-9390-41e5-ab93-32a6d61d99b6": {
            uniqueId: "control-30d9e15d-9390-41e5-ab93-32a6d61d99b6",
            type: "button",
            name: "submit",
            label: "Submit",
            isShowLabel: false,
            placeholderText: "",
            containerClass: "col-md-4 md-layout-item md-size-33",
            defaultValue: "",
            defaultValueForAutocomplete: [],
            rows: [],
            validations: [],
            autocompleteLink: "",
            autocomplete: [],
            buttonClass:
              "btn btn-success md-button md-raised md-success md-theme-default",
            buttonType: "submit",
            postLink: "https://jsonplaceholder.typicode.com/posts",
            emitEventCode: "",
            emitEventData: "",
            isRunValidation: true,
          },
        },
      },
      formInputData: null,
      data: null,
    };
  },

  methods: {
    getFormData() {},
  },

  created() {
    this.getFormData();
  },
};
</script>

<style></style>
