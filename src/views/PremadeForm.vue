<template>
  <div>
    <FormRenderer :formConfiguration="formData" v-model="formInputData" />
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
          "section-da042614-690f-4dfb-bafa-8daa02562893": {
            uniqueId: "section-da042614-690f-4dfb-bafa-8daa02562893",
            headline: "Prijava projekta",
            subHeadline: "Forma za prijavu projekta.",
            isShowHeadline: true,
            sortOrder: 1,
            type: "normal",
            rows: [],
            controls: [
              "control-43d88980-3168-4388-9539-c8b9714a2b17",
              "control-444fbcc3-57d9-47e5-ba92-48c71dbd1ef4",
              "control-f1590b76-8c04-4126-a17b-9ae3b5909f2f",
              "control-78202606-1073-45c6-b30e-815e8c88f451",
              "control-9ade26c8-3d81-453a-b990-7b1cd2cd1859",
              "control-22537cee-20a7-4a12-9a8e-137e4d3f1fea",
              "control-be8836c2-7743-4719-88c4-1a5d44e824a9",
            ],
          },
        },
        rows: {},
        controls: {
          "control-43d88980-3168-4388-9539-c8b9714a2b17": {
            uniqueId: "control-43d88980-3168-4388-9539-c8b9714a2b17",
            type: "input",
            name: "Name",
            label: "Ime",
            subLabel: "Ovdje odabirete svoje ime",
            isShowLabel: true,
            placeholderText: "Izaberite ime sa liste",
            containerClass: "col-md-12 md-layout-item md-size-100",
            defaultValue: "",
            defaultValueForAutocomplete: [],
            rows: [],
            validations: [
              {
                ruleType: "required",
                errorMessage: "This field is required.",
                additionalValue: "",
              },
            ],
            autocompleteLink:
              "https://b9f24f43-3508-4bc3-8c09-f3a0b91e9ad1.mock.pstmn.io/Names",
            autocomplete: [],
            multiple: false,
          },
          "control-444fbcc3-57d9-47e5-ba92-48c71dbd1ef4": {
            uniqueId: "control-444fbcc3-57d9-47e5-ba92-48c71dbd1ef4",
            type: "input",
            name: "Adresa",
            label: "Adresa",
            subLabel: "Ovdje upisujete svoju adresu",
            isShowLabel: true,
            placeholderText: "Vaša adresa",
            containerClass: "col-md-12 md-layout-item md-size-100",
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
            multiple: false,
          },
          "control-78202606-1073-45c6-b30e-815e8c88f451": {
            uniqueId: "control-78202606-1073-45c6-b30e-815e8c88f451",
            type: "input",
            name: "Email",
            label: "E-mail",
            subLabel: "Ovdje upisujete svoju e-mail adresu",
            isShowLabel: true,
            placeholderText: "Vaš e-mail",
            containerClass: "col-md-12 md-layout-item md-size-100",
            defaultValue: "marko.cunj@gmail.com",
            defaultValueForAutocomplete: [],
            rows: [],
            validations: [
              {
                ruleType: "isEmail",
                errorMessage: "Wrong email address format",
                additionalValue: "",
              },
            ],
            autocompleteLink: "",
            autocomplete: [],
            multiple: false,
          },
          "control-9ade26c8-3d81-453a-b990-7b1cd2cd1859": {
            uniqueId: "control-9ade26c8-3d81-453a-b990-7b1cd2cd1859",
            type: "input",
            name: "Predmet",
            label: "Predmet iz kojeg prijavljujete",
            subLabel:
              "Iz liste odaberite predmet za kojega prijavljuete projekt",
            isShowLabel: true,
            placeholderText: "Izaberite predmet",
            containerClass: "col-md-12 md-layout-item md-size-100",
            defaultValue: "",
            defaultValueForAutocomplete: ["WA"],
            rows: [],
            validations: [
              {
                ruleType: "required",
                errorMessage: "This field is required",
                additionalValue: "",
              },
            ],
            autocompleteLink: "",
            autocomplete: ["WA", "IT", "ICT", "MIS", "PIS", "IKT"],
            multiple: false,
          },
          "control-f1590b76-8c04-4126-a17b-9ae3b5909f2f": {
            uniqueId: "control-f1590b76-8c04-4126-a17b-9ae3b5909f2f",
            type: "input",
            name: "Drzava",
            label: "Drzava",
            subLabel: "Iz listi država izaberite državu iz koje jeste",
            isShowLabel: true,
            placeholderText: "Izaberite drzavu sa liste",
            containerClass: "col-md-12 md-layout-item md-size-100",
            defaultValue: "",
            defaultValueForAutocomplete: ["Croatia"],
            rows: [],
            validations: [
              {
                ruleType: "required",
                errorMessage: "This field is required",
                additionalValue: "",
              },
            ],
            autocompleteLink:
              "https://b9f24f43-3508-4bc3-8c09-f3a0b91e9ad1.mock.pstmn.io/Country",
            autocomplete: [],
            multiple: false,
          },
          "control-22537cee-20a7-4a12-9a8e-137e4d3f1fea": {
            uniqueId: "control-22537cee-20a7-4a12-9a8e-137e4d3f1fea",
            type: "fileUploader",
            name: "",
            label: "Ovdje upload prijavnice..",
            subLabel: "Za upload dozvoljeno samo .jpg, .png",
            isShowLabel: true,
            placeholderText: "",
            containerClass: "col-md-12 md-layout-item md-size-100",
            defaultValue: "",
            defaultValueForAutocomplete: [],
            rows: [],
            validations: [],
            autocompleteLink: "",
            autocomplete: [],
            multiple: false,
            buttonLabel: "Select File",
            buttonClasses: "btn btn-primary",
            postActionURL: "/your-api-post-url-to-upload",
            extensions: ".gif,.png,.jpg,.jpeg",
            accept: "image/gif,image/jpeg,image/png",
            maxSize: 1000,
            isMultiple: false,
            maximumFiles: 1,
            headers: [],
            postData: [],
          },
          "control-be8836c2-7743-4719-88c4-1a5d44e824a9": {
            uniqueId: "control-be8836c2-7743-4719-88c4-1a5d44e824a9",
            type: "button",
            name: "Submit",
            label: "Predaj",
            isShowLabel: false,
            placeholderText: "",
            containerClass: "col-md-12 md-layout-item md-size-100",
            defaultValue: "",
            defaultValueForAutocomplete: [],
            rows: [],
            validations: [],
            autocompleteLink: "",
            autocomplete: [],
            multiple: false,
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
