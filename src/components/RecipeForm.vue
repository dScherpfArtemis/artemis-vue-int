<template>
    <v-sheet width="600" class="mx-auto">
        <h2 class="pb-5">Enter a new recipe</h2>
        <v-form @submit.prevent ref="recipeForm">
            <v-window v-model="step">
                <v-window-item :value="1">
                    <h3 class="mb-5">General Info</h3>
                    <v-text-field
                        id="step-1-title"
                        v-model="newRecipe.title"
                        label="Title"
                        :rules="[rules.required]"
                    ></v-text-field>
                    <v-text-field
                        id="step-1-cuisine"
                        v-model="newRecipe.cuisine"
                        label="Cuisine"
                        :rules="[rules.required]"
                    ></v-text-field>
                    <v-text-field
                        id="step-1-source"
                        v-model="newRecipe.source"
                        label="Source"
                        :rules="[rules.required]"
                    ></v-text-field>
                    <v-container>
                        <v-row>
                            <v-col>
                                <h3>Meal</h3>
                                <v-checkbox
                                    v-for="(meal, i) in meals"
                                    :key="i"
                                    v-model="newRecipe.meal"
                                    :label="meal"
                                    :value="meal"
                                    hide-details
                                ></v-checkbox>
                            </v-col>
                            <v-col>
                                <h3>Rating</h3>
                                <v-radio-group :rules="[rules.required]">
                                    <v-radio
                                        class="py-2"
                                        v-for="(rating, i) in ratings"
                                        :label="rating"
                                        :value="i"
                                        :key="i"
                                    ></v-radio>
                                </v-radio-group>
                            </v-col>
                        </v-row>
                    </v-container>

                    <v-checkbox
                        label="I've made this"
                        v-model="newRecipe.haveMade"
                    ></v-checkbox>
                </v-window-item>
                <v-window-item :value="2">
                    <h3 class="mb-5">Add Ingredients</h3>
                    <v-container>
                        <v-row>
                            <v-col cols="12" md="5">
                                <v-text-field
                                    label="Amount"
                                    type="number"
                                    variant="underlined"
                                    v-model="ingredient.amount"
                                ></v-text-field>
                                <v-select
                                    label="Measurement type"
                                    :items="measurements"
                                    variant="underlined"
                                    item-title="name"
                                    item-value="abbr"
                                    v-model="ingredient.measurement"
                                ></v-select>
                            </v-col>
                            <v-col cols="12" md="7">
                                <v-text-field
                                    :append-icon="'mdi-plus'"
                                    label="Ingredient"
                                    v-model="ingredient.name"
                                    @click:append="addIngredient()"
                                    variant="underlined"
                                ></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col>
                                <v-list>
                                    <v-list-item
                                        v-for="(
                                            ing, i
                                        ) in newRecipe.ingredients"
                                        :key="i"
                                    >
                                        <template v-slot:prepend>
                                            <v-btn
                                                icon="mdi-minus"
                                                size="x-small"
                                                class="mr-3"
                                                @click="removeIngredient(i)"
                                            ></v-btn>
                                        </template>
                                        <v-list-item-title>
                                            {{ ing.amount }}
                                            {{ ing.measurement }}
                                            {{ ing.name }}
                                        </v-list-item-title>
                                    </v-list-item>
                                </v-list>
                                <v-alert
                                    v-if="ingredientError"
                                    density="compact"
                                    type="error"
                                    closable
                                    v-model="ingredientError"
                                    variant="outlined"
                                    :text="ingredientError"
                                ></v-alert>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-window-item>
                <v-window-item :value="3">
                    <field-repeater
                        title="Add Steps"
                        descriptor="step"
                        @steps-update="updateSteps"
                    />
                    <v-alert
                        v-if="stepError"
                        density="compact"
                        type="error"
                        closable
                        v-model="stepError"
                        variant="outlined"
                        :text="stepError"
                        class="mb-5"
                    ></v-alert>
                </v-window-item>
                <v-window-item :value="4">
                    <field-repeater
                        title="Add Notes"
                        descriptor="note"
                        @steps-update="updateNotes"
                    />
                </v-window-item>
            </v-window>
            <v-spacer></v-spacer>
            <div class="form-controls d-flex flex-row justify-space-between">
                <v-btn v-if="step > 1" variant="text" @click="step--">
                    Back
                </v-btn>
                <v-spacer></v-spacer>
                <!-- <v-pagination
                    v-model="step"
                    :length="4"
                    rounded="circle"
                    density="compact"
                    total-visible="4"
                >
                    <template v-slot:item>
                        <v-icon icon="mdi-alert-circle" color="error"></v-icon>
                    </template>
                </v-pagination> -->
                <v-btn
                    v-if="step < 4"
                    color="teal-lighten-2"
                    variant="flat"
                    @click="step++"
                >
                    Next
                </v-btn>
                <v-btn
                    v-if="step === 4"
                    type="submit"
                    color="teal-lighten-2"
                    variant="flat"
                    @click="validate"
                    >Submit</v-btn
                >
            </div>
        </v-form>
    </v-sheet>
</template>

<script setup>
import { ref } from 'vue';
import FieldRepeater from './form-components/FieldRepeater.vue';
import { useAppStore } from '@/store/app.js';
import { storeToRefs } from 'pinia';
import { watch } from 'vue';

const appStore = useAppStore();
const { newRecipe } = storeToRefs(appStore);

const props = defineProps({
    dialogStatus: {
        type: Boolean,
        required: true,
    },
});

const recipeForm = ref();
const step = ref(0);
const meals = ['breakfast', 'brunch', 'lunch', 'snack', 'dinner', 'dessert'];
const ratings = [
    "Won't make again",
    'Needs some work',
    'Make it again',
    'All time favorite',
];

// ingredient list
const ingredient = ref({
    name: '',
    amount: '',
    measurement: '',
});

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

const addIngredient = () => {
    newRecipe.value.ingredients.push(ingredient.value);
    ingredient.value = {
        name: '',
        amount: '',
        measurement: '',
    };
    return;
};
const removeIngredient = (index) => {
    return newRecipe.value.ingredients.splice(index, 1);
};

const updateSteps = (update) => {
    newRecipe.value.steps = update;
};
const updateNotes = (update) => {
    newRecipe.value.notes = update;
};

watch(props, () => {
    // If recipe dialog is closed, clear out the new recipe entry
    if (props.dialogStatus === false) {
        appStore.RESET_RECIPE();
    }
});

// validation
const rules = {
    required: (value) => !!value || 'Field is required',
};
let errors = {};
const ingredientError = ref('');
const stepError = ref('');

const validate = async () => {
    // Use Vuetify's validate() to check form elements with rules
    const { valid } = await recipeForm.value.validate();
    console.log('Valid', valid, recipeForm.value.errors);

    if (recipeForm.value.errors) {
        errors = recipeForm.value.errors.map((el) => {
            let info = el.id.split('-');
            return { step: info[1], field: info[2] };
        });
    }
    // check newRecipe object for missing ingredients and steps
    if (newRecipe.value.ingredients.length === 0) {
        errors.push({
            step: 2,
            field: 'ingredient',
        });
        ingredientError.value = 'Recipe must include at least one ingredient';
    } else {
        ingredientError.value = '';
    }
    if (newRecipe.value.steps.length === 0) {
        errors.push({
            step: 3,
            field: 'steps',
        });
        stepError.value = 'Recipe must include at least one step';
    } else {
        stepError.value = '';
    }

    if (valid) console.log('Form is valid');
};
</script>

<style lang="scss" scoped></style>
