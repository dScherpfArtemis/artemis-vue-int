# Session 03 - Recipe Form cont.

## Task - Build a repeating step entry component

### Description

Now that we have the intial structure of our form setup, let's continue buidling it out. In this session we're looking to build the third page of the form where the user can enter recipe steps. To that end, create a component with Vuetify's timeline where the user is able to enter, edit, and rearange recipe steps.

### Requirements/Recommendations

General setup:

-   Use the timeline component as the layout
-   Two timeline-items
    -- One that loops over your 'steps' array
    -- Another that just has a text area to input new steps

Steps functionality:

-   Double click a step to swap to an 'edit' view
-   While in edit view:
    -- Show the step content in a clearable text area
    -- Cancel button - closes edit view
    -- Save button - saves the edited content to the 'steps' array and then toggles out of the edit view
    -- Move up/down - moves the step up or down in the timeline. These buttons should be conditionally disabled so that you cannot move the first step up or the last step down. Moving the item should keep the same item in edit mode (moving step 2 to step 1 would show step 1 editable)

Add new functionality:

-   This field should always be present as the last item in the timeline
-   Add button - should be disabled if there is no content entered

Emitting our steps to the parent component:

-   use defineEmits() to tell our parent component what to look out for
-   use watch() to emit our 'steps' array any time it changes
-   in the parent component, add a function that updates the recipe object with our steps each time new data is emitted from the child component

### Vue principles used in this session:

-   Reactivity (ref, reactive)
-   Data binding
-   Props (and component nesting)
-   v-if
-   v-for
-   Component Events (emit)
-   Watchers
-   Component slots

### Resources

-   [Vue 3 docs](https://vuejs.org/guide/introduction.html)
-   [Vuetify information card](https://next.vuetifyjs.com/en/components/cards/#information-card)
-   [Vuetify grid system](https://next.vuetifyjs.com/en/components/grids/)

#### Vuetify components used in this session

-   [Alerts](https://vuetifyjs.com/en/components/alerts/)
-   [Buttons](https://vuetifyjs.com/en/components/buttons/)
-   [Text Area](https://vuetifyjs.com/en/components/textareas/)
-   [Timelines](https://vuetifyjs.com/en/components/timelines/)
