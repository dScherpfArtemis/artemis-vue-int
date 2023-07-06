# Session 03 - Move Recipe Form to Dialog Component

## Task - Move our recipe form to a dialog component

### Description

With most of our recipe form finished, we can now move it to a more suitable place on our site. In this session we'll create a modal that contains our form component and opens from the header. Additionally, move the recipe object into the Pinia store.

### Requirements/Recommendations

General setup:

-   Replace the recipe object in RecipeForm.vue with a Pinia object

    -   Use StoreToRefs() to make the pinia object reactive

-   Create a reusable dialog component using the Vuetify dialog component. The component should:
    -   Set button text via prop
    -   Include a slot to allow content or a component to be passed into the body of the dialog
    -   Include a close button that clears the form on close (via pinia action)

### Vue principles used in this session:

-   Reactivity (ref, reactive)
-   Data binding
-   Props (and component nesting)
-   v-if
-   v-for
-   Component Events (emit)
-   Watchers
-   Component slots
-   State management with Pinia

### Resources

-   [Vue 3 docs](https://vuejs.org/guide/introduction.html)
-   [Vuetify](https://vuetifyjs.com/en/)
-   [Pinia](https://pinia.vuejs.org/)
-   [Pinia StoreToRefs()](https://pinia.vuejs.org/api/modules/pinia.html#Functions-storeToRefs)

#### Vuetify components used in this session

-   [App Bar](https://vuetifyjs.com/en/components/app-bars/)
-   [Buttons](https://vuetifyjs.com/en/components/buttons/)
-   [Dialogs](https://vuetifyjs.com/en/components/dialogs/)
