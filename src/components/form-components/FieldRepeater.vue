<template>
    <h3 v-if="props.title" class="mb-5">
        {{ props.title }} {{ activeStep.index }}
    </h3>

    <v-timeline side="end" align="start" truncate-line="both" class="mb-10">
        <v-timeline-item
            v-for="(step, i) in steps"
            :key="i"
            :icon="i"
            dot-color="teal-lighten-3"
            @dblclick="setStep(i, step)"
            width="100%"
        >
            <template v-slot:icon>
                {{ i + 1 }}
            </template>
            <v-alert v-if="activeStep.index !== i" :value="true">
                <div class="printed-step">
                    {{ step }}
                </div>
            </v-alert>
            <div v-else class="edit-step d-flex flex-column align-start">
                <v-textarea
                    v-model="activeStep.content"
                    :label="`Edit step ${i + 1}`"
                    clearable
                ></v-textarea>
                <div class="btn-row">
                    <v-btn variant="outlined" color="grey" @click="clearEdit"
                        >Cancel</v-btn
                    >
                    <v-btn
                        variant="outlined"
                        color="teal-lighten-1"
                        @click="saveEdit"
                        >Save</v-btn
                    >
                    <v-spacer></v-spacer>
                    <v-btn
                        density="comfortable"
                        icon="mdi-arrow-down"
                        @click="moveStep('down')"
                        :disabled="i + 1 === steps.length"
                    ></v-btn>
                    <v-btn
                        :disabled="i + 1 === 1"
                        density="comfortable"
                        icon="mdi-arrow-up"
                        @click="moveStep('up')"
                    ></v-btn>
                </div>
                <v-btn-toggle variant="outlined"> </v-btn-toggle>
            </div>
        </v-timeline-item>

        <v-timeline-item
            icon="mdi-plus"
            dot-color="teal-lighten-3"
            width="100%"
        >
            <div class="d-flex flex-column align-start">
                <v-textarea
                    class="edit-step"
                    v-model="newStep"
                    label="Add new step"
                    clearable
                    ref="add"
                ></v-textarea>
                <div class="btn-row">
                    <v-btn
                        variant="outlined"
                        color="teal-lighten-1"
                        @click="addStep(newStep)"
                        >Add</v-btn
                    >
                </div>
            </div>
        </v-timeline-item>
    </v-timeline>
</template>

<script setup>
import { ref, reactive } from 'vue';
const props = defineProps({
    title: {
        type: String,
        required: false,
        default: '',
    },
});

const steps = ref([
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ',
]);
const newStep = ref('');
const add = ref(null);
const activeStep = reactive({ index: null, content: '' });

// form actions
const addStep = (text) => {
    steps.value.push(text);
    newStep.value = '';
    add.value.focus();
};
const setStep = (num, text) => {
    activeStep.index = num;
    activeStep.content = text;
};
const clearEdit = () => {
    activeStep.index = null;
    activeStep.content = '';
};
const saveEdit = () => {
    if (activeStep.content === '') {
        steps.value.splice(activeStep.index, 1);
    } else {
        steps.value[activeStep.index] = activeStep.content;
    }
    clearEdit();
};
const moveStep = (direction) => {
    let fromIndex = activeStep.index;
    let toIndex = direction === 'up' ? fromIndex - 1 : fromIndex + 1;
    steps.value.splice(fromIndex, 1);
    steps.value.splice(toIndex, 0, activeStep.content);
    activeStep.index = toIndex;
};
</script>

<style lang="scss" scoped>
.btn-row {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    width: 100%;
    padding-right: 5px;
}
.v-input {
    width: 100%;
}
</style>
