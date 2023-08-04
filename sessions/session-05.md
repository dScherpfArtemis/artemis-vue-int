# Session 05

## Task - Add validation to the recipe form

### Description

Now that we've got our form set up and in place, we need to validate the entries before submitting the recipe. Since we're using a mix of form elements and custom elements in our form, we'll need to do some custom validation.

### Requirements/Recommendations

-   Validate inputs, check boxes, radio buttons, etc. with Vuetify's validate().
-   For the ingredients and steps sections of the form:
    -   Create custom error alerts to be displayed when validation finds an error
    -   Create custom validation to check the newRecipe store object for the needed data
-   Trigger validation on submit
