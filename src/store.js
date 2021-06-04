export default {
  transfer: {},
  premadeForm: {
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
          "control-6d8970e6-def0-4440-8401-0f2f4b050ec2",
          "control-78202606-1073-45c6-b30e-815e8c88f451",
          "control-9ade26c8-3d81-453a-b990-7b1cd2cd1859",
          "control-22537cee-20a7-4a12-9a8e-137e4d3f1fea",
          "control-a135963a-9253-45dd-ac42-8ce4049f3653",
          "control-795e4645-99d2-4142-ba97-b3ae29c14120",
          "control-ee1461f9-9ac9-40e5-a8c6-abeddcfceb54",
          "control-b718fc1b-88df-4270-9c9f-88cd360efec5",
          "control-23c2ea5d-82a3-41c6-ad9d-30cf64925356",
          "control-719cbcf8-7664-4292-845a-6ec3f46acbe9",
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
        additionalLabelClass: "pt-3",
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
        autocomplete: [
          "Lang Cato",
          "Jerold Swager",
          "Katrina Roloff",
          "Sunshine Test",
          "Heike Dacruz",
          "Federico Mccully",
          "Lindsey Pedrick",
          "Riva Duty",
          "Lauri Noon",
          "Tamatha Hallowell",
          "Lanora Boydston",
          "Alvin Hixon",
          "Sybil Crouch",
          "Annetta Laclair",
          "Wonda Wiersma",
          "Cuc Kinne",
          "Felipe Ryce",
          "Deborah Witten",
          "Lucie Mckeel",
          "Genevive Bibb",
          "Marcene Durazo",
          "Stan Mey",
          "Stephenie Shaul",
          "Kiera Olenick",
          "Aurelio Brundage",
          "Waldo Taube",
          "Meaghan Coyle",
          "Kristeen Brower",
          "Emmett Bisson",
          "Alina Shiner",
          "Jose Cronan",
          "Tatyana Knorr",
          "Maryln Carrero",
          "Alica Navarro",
          "Kelley Brousseau",
          "Brant Fenner",
          "August Evitt",
          "Tonda Caruthers",
          "Vinita Demaio",
          "Randall Brode",
          "Elois Desrochers",
          "Basil Peck",
          "Clelia Daniel",
          "Jacquetta Neagle",
          "Tommye Silverman",
          "Ona Delpino",
          "Lucilla Kohan",
          "Les Rorick",
          "Jesenia Speir",
          "Cortez Shimek",
        ],
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
        additionalLabelClass: "pt-3",
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
        additionalLabelClass: "pt-3",
        defaultValue: "marko.cunj@gmail.com",
        defaultValueForAutocomplete: [],
        rows: [],
        validations: [
          {
            ruleType: "required",
            errorMessage: "This field is required",
            additionalValue: "",
          },
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
        subLabel: "Iz liste odaberite predmet za kojega prijavljuete projekt",
        isShowLabel: true,
        placeholderText: "Izaberite predmet",
        containerClass: "col-md-12 md-layout-item md-size-100",
        additionalLabelClass: "pt-3",
        defaultValue: "",
        defaultValueForAutocomplete: ["WA", "ICT"],
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
        multiple: true,
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
        additionalLabelClass: "pt-3",
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
        autocomplete: [
          "Afghanistan",
          "Albania",
          "Algeria",
          "Andorra",
          "Angola",
          "Anguilla",
          "Antigua &amp; Barbuda",
          "Argentina",
          "Armenia",
          "Aruba",
          "Australia",
          "Austria",
          "Azerbaijan",
          "Bahamas",
          "Bahrain",
          "Bangladesh",
          "Barbados",
          "Belarus",
          "Belgium",
          "Belize",
          "Benin",
          "Bermuda",
          "Bhutan",
          "Bolivia",
          "Bosnia &amp; Herzegovina",
          "Botswana",
          "Brazil",
          "British Virgin Islands",
          "Brunei",
          "Bulgaria",
          "Burkina Faso",
          "Burundi",
          "Cambodia",
          "Cameroon",
          "Cape Verde",
          "Cayman Islands",
          "Chad",
          "Chile",
          "China",
          "Colombia",
          "Congo",
          "Cook Islands",
          "Costa Rica",
          "Cote D Ivoire",
          "Croatia",
          "Cruise Ship",
          "Cuba",
          "Cyprus",
          "Czech Republic",
          "Denmark",
          "Djibouti",
          "Dominica",
          "Dominican Republic",
          "Ecuador",
          "Egypt",
          "El Salvador",
          "Equatorial Guinea",
          "Estonia",
          "Ethiopia",
          "Falkland Islands",
          "Faroe Islands",
          "Fiji",
          "Finland",
          "France",
          "French Polynesia",
          "French West Indies",
          "Gabon",
          "Gambia",
          "Georgia",
          "Germany",
          "Ghana",
          "Gibraltar",
          "Greece",
          "Greenland",
          "Grenada",
          "Guam",
          "Guatemala",
          "Guernsey",
          "Guinea",
          "Guinea Bissau",
          "Guyana",
          "Haiti",
          "Honduras",
          "Hong Kong",
          "Hungary",
          "Iceland",
          "India",
          "Indonesia",
          "Iran",
          "Iraq",
          "Ireland",
          "Isle of Man",
          "Israel",
          "Italy",
          "Jamaica",
          "Japan",
          "Jersey",
          "Jordan",
          "Kazakhstan",
          "Kenya",
          "Kuwait",
          "Kyrgyz Republic",
          "Laos",
          "Latvia",
          "Lebanon",
          "Lesotho",
          "Liberia",
          "Libya",
          "Liechtenstein",
          "Lithuania",
          "Luxembourg",
          "Macau",
          "Macedonia",
          "Madagascar",
          "Malawi",
          "Malaysia",
          "Maldives",
          "Mali",
          "Malta",
          "Mauritania",
          "Mauritius",
          "Mexico",
          "Moldova",
          "Monaco",
          "Mongolia",
          "Montenegro",
          "Montserrat",
          "Morocco",
          "Mozambique",
          "Namibia",
          "Nepal",
          "Netherlands",
          "Netherlands Antilles",
          "New Caledonia",
          "New Zealand",
          "Nicaragua",
          "Niger",
          "Nigeria",
          "Norway",
          "Oman",
          "Pakistan",
          "Palestine",
          "Panama",
          "Papua New Guinea",
          "Paraguay",
          "Peru",
          "Philippines",
          "Poland",
          "Portugal",
          "Puerto Rico",
          "Qatar",
          "Reunion",
          "Romania",
          "Russia",
          "Rwanda",
          "Saint Pierre &amp; Miquelon",
          "Samoa",
          "San Marino",
          "Satellite",
          "Saudi Arabia",
          "Senegal",
          "Serbia",
          "Seychelles",
          "Sierra Leone",
          "Singapore",
          "Slovakia",
          "Slovenia",
          "South Africa",
          "South Korea",
          "Spain",
          "Sri Lanka",
          "St Kitts &amp; Nevis",
          "St Lucia",
          "St Vincent",
          "St. Lucia",
          "Sudan",
          "Suriname",
          "Swaziland",
          "Sweden",
          "Switzerland",
          "Syria",
          "Taiwan",
          "Tajikistan",
          "Tanzania",
          "Thailand",
          "Timor L'Este",
          "Togo",
          "Tonga",
          "Trinidad &amp; Tobago",
          "Tunisia",
          "Turkey",
          "Turkmenistan",
          "Turks &amp; Caicos",
          "Uganda",
          "Ukraine",
          "United Arab Emirates",
          "United Kingdom",
          "Uruguay",
          "Uzbekistan",
          "Venezuela",
          "Vietnam",
          "Virgin Islands (US)",
          "Yemen",
          "Zambia",
          "Zimbabwe",
        ],
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
        additionalLabelClass: "pt-3",
        defaultValue: "",
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
        postActionURL: "https://httpbin.org/post",
        extensions: ".gif,.png,.jpg,.jpeg",
        maxSize: 1000,
        isMultiple: false,
        maximumFiles: 1,
        defaultDropzoneMessage: "&#9729; Drop your files here",
        buttonLabel: "Select File",
        buttonClasses: "btn btn-primary",
        accept: "image/gif,image/jpeg,image/png",
        headers: [],
        postData: [],
      },
      "control-be8836c2-7743-4719-88c4-1a5d44e824a9": {
        uniqueId: "control-be8836c2-7743-4719-88c4-1a5d44e824a9",
        type: "button",
        name: "Submit",
        label: "Predaj",
        subLabel: "",
        isShowLabel: false,
        placeholderText: "",
        containerClass: "col-md-12 md-layout-item md-size-100",
        additionalLabelClass: "pt-3",
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
      "control-a135963a-9253-45dd-ac42-8ce4049f3653": {
        uniqueId: "control-a135963a-9253-45dd-ac42-8ce4049f3653",
        type: "number",
        name: "number",
        label: "Broj",
        subLabel: "Broj projekata koje ste do sad napravili",
        isShowLabel: true,
        placeholderText: "",
        containerClass: "col-md-12 md-layout-item md-size-100",
        additionalLabelClass: "pt-3",
        defaultValue: "",
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
        isReal: false,
        decimalPlace: 1,
      },
      "control-795e4645-99d2-4142-ba97-b3ae29c14120": {
        uniqueId: "control-795e4645-99d2-4142-ba97-b3ae29c14120",
        type: "date",
        name: "datum",
        label: "Datum",
        subLabel:
          "Ovdje unesite od kada do kada ste u mogućnosti raditi ovaj projekt",
        isShowLabel: true,
        placeholderText: "",
        containerClass: "col-md-12 md-layout-item md-size-100",
        additionalLabelClass: "pt-3",
        defaultValue: "",
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
        format: "DD/MM/YYYY",
        firstDay: 1,
        numberOfMonths: 1,
        numberOfColumns: 1,
        minDate: null,
        maxDate: null,
        singleMode: false,
        minDays: 1,
        maxDays: 100,
        returnType: "format",
      },
      "control-b718fc1b-88df-4270-9c9f-88cd360efec5": {
        uniqueId: "control-b718fc1b-88df-4270-9c9f-88cd360efec5",
        type: "radio",
        name: "acceptance",
        label: "Shvaćate li pravila projekta?",
        subLabel: "",
        isShowLabel: true,
        placeholderText: "",
        containerClass: "col-md-12 md-layout-item md-size-100",
        additionalLabelClass: "pt-3",
        defaultValue: "",
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
        displayMode: "line",
        position: "left",
        items: [
          { value: "Positive", text: "Shvaćam." },
          { value: "Un-positive", text: "Ne, shvaćam." },
        ],
      },
      "control-23c2ea5d-82a3-41c6-ad9d-30cf64925356": {
        uniqueId: "control-23c2ea5d-82a3-41c6-ad9d-30cf64925356",
        type: "dropDown",
        name: "smjer",
        label: "Smjer",
        subLabel: "Naziv smjera koji na faksu studirate",
        isShowLabel: true,
        placeholderText: "Izaberite..",
        containerClass: "col-md-12 md-layout-item md-size-100",
        additionalLabelClass: "pt-3",
        defaultValue: "",
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
        dataMode: "list",
        items: [
          { value: "Smjer1", text: "Smjer1" },
          { value: "Smjer2", text: "Smjer2" },
          { value: "Smjer3", text: "Smjer3" },
          { value: "Smjer4", text: "Smjer4" },
        ],
        apiURL: "",
        apiTextKey: "text",
        apiValueKey: "value",
      },
      "control-719cbcf8-7664-4292-845a-6ec3f46acbe9": {
        uniqueId: "control-719cbcf8-7664-4292-845a-6ec3f46acbe9",
        type: "checkbox",
        name: "položeniPredmeti",
        label: "Položeni predmeti",
        subLabel: "Odaberite koje ste sve predmete položili",
        isShowLabel: true,
        placeholderText: "",
        containerClass: "col-md-12 md-layout-item md-size-100",
        additionalLabelClass: "pt-3",
        defaultValue: "",
        defaultValueForAutocomplete: [],
        rows: [],
        validations: [],
        autocompleteLink: "",
        autocomplete: [],
        multiple: false,
        displayMode: "line",
        position: "left",
        items: [
          { value: "ICT", text: "ICT" },
          { value: "WA", text: "WA" },
          { value: "MIS", text: "MIS" },
          { value: "PIS", text: "PIS" },
        ],
      },
      "control-6d8970e6-def0-4440-8401-0f2f4b050ec2": {
        uniqueId: "control-6d8970e6-def0-4440-8401-0f2f4b050ec2",
        type: "text",
        name: "motivacija",
        label: "Motivacija",
        subLabel: "Opišite zašto bi htjeli raditi ovaj projekt",
        isShowLabel: true,
        placeholderText: "Tell us!",
        containerClass: "col-md-12 md-layout-item md-size-100",
        additionalLabelClass: "pt-3",
        defaultValue: "",
        defaultValueForAutocomplete: [],
        rows: 5,
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
      "control-ee1461f9-9ac9-40e5-a8c6-abeddcfceb54": {
        uniqueId: "control-ee1461f9-9ac9-40e5-a8c6-abeddcfceb54",
        type: "textBlock",
        name: "Pravila",
        label: "Pravila",
        subLabel: "",
        isShowLabel: true,
        placeholderText: "",
        containerClass: "col-md-12 md-layout-item md-size-100",
        additionalLabelClass: "pt-3",
        defaultValue: "",
        defaultValueForAutocomplete: [],
        rows: [],
        validations: [],
        autocompleteLink: "",
        autocomplete: [],
        multiple: false,
        text:
          "Pravila projekta su takva da svaki student je obvezan posvetiti svoje vrijeme na ispunjenje uvjeta ovog projekta, i bez ispunjenja uvjeta nema ni prolaza projekta kao ni kolegija.",
      },
    },
  },
};
