# Session 01 - Recipe Form

## Task - Build a multi-stepped recipe form

### Begin building a form that allows the user to enter a recipe

In this session we will build the first two sections of the form - basic info and ingredients. You can build the form however you like so long as the inputs are reactive and allow the user to enter the relevant information for a recipe (see our [data](../src/assets/data.json)). For now, this recipe form can be placed on the home page below our featured recipe cards.

#### Basic Info

The Basic Info section should allow the user to enter a title, cuisine, source, rating, and select which meal the recipe is for, and whether or not the user has made the recipe. You can use input fields, checkboxes, and radio buttons for this section or choose other components from Vuetify as you see fit.

#### Ingredients

In the Ingredients section, the user will need to be able to enter an ingredient, it's amount, and it's measurement type. Additionally, the user should be able to add and remove ingredients from their recipe and see a display of what they've entered so far.

To save you a little time:

```
const meals = ['breakfast', 'brunch', 'lunch', 'snack', 'dinner', 'dessert'];
```

```
const ratings = [
    "Won't make again",
    'Needs some work',
    'Make it again',
    'All time favorite',
];
```

```
const measurements = [
    { name: 'none', abbr: '' },
    { name: 'tablespoon', abbr: 'tbsp' },
    { name: 'teaspoon', abbr: 'tsp' },
    { name: 'ounce', abbr: 'oz' },
    { name: 'fluid ounce', abbr: 'fl. oz' },
    { name: 'cup', abbr: 'c' },
    { name: 'quart', abbr: 'qt' },
    { name: 'pint', abbr: 'pt' },
    { name: 'gallon', abbr: 'gal' },
    { name: 'pound', abbr: 'lb' },
    { name: 'milliliter', abbr: 'mL' },
    { name: 'grams', abbr: 'g' },
    { name: 'kilograms', abbr: 'kg' },
    { name: 'liter', abbr: 'l' },
    { name: 'units', abbr: 'units' },
];
```

### Vue principles used in this session:

-   Reactivity (ref)
-   Attribute binding
-   Props (and component nesting)
-   Composition API
-   v-if (conditional rendering)
-   v-for (list rendering)

### Resources

-   [Vue 3 docs](https://vuejs.org/guide/introduction.html)
-   [Vuetify information card](https://next.vuetifyjs.com/en/components/cards/#information-card)
-   [Vuetify grid system](https://next.vuetifyjs.com/en/components/grids/)

#### Vuetify components used in this session

-   [Checkboxes](https://vuetifyjs.com/en/components/checkboxes/)
-   [Radio Buttons](https://vuetifyjs.com/en/components/radio-buttons/)
-   [Spacing](https://vuetifyjs.com/en/styles/spacing/)
-   [Spacer Component](https://vuetifyjs.com/en/components/grids/#v-spacer)
-   [Selects](https://vuetifyjs.com/en/components/selects/#multiple)
-   [Text Fields](https://vuetifyjs.com/en/components/text-fields/)
-   [Text Fields with icons](https://vuetifyjs.com/en/components/text-fields/#icon-events)
-   [Windows](https://vuetifyjs.com/en/components/windows/#account-creation)
