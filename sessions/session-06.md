# Session 06

## Task - Improve form validation UI

### Description

At the moment, our form is validating on clicking the submit button on the last page. This isn't ideal as it causes the user to backtrack on the form if any errors arise. To fix this, add pagination and prevent the user from moving on to the next step in the form if they have not filled the required input for the current step.

### Requirements/Recommendations

-   Add pagination. You can use Vuetify's pagination component, or buttons if you would like to add the error icons as shown in the example
-   Prevent the user from moving to the next step with pagination or the next button if they have not entered the required data
-   Prevent the validation check from showing errors on pages that have not been enabled yet.
