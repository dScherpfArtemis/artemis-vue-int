<template>
    <v-dialog v-model="dialog" persistent width="750">
        <v-btn
            icon="mdi-close"
            color="teal-lighten-2"
            class="close-btn"
            size="small"
            @click="dialog = false"
        >
        </v-btn>

        <template v-slot:activator="{ props }">
            <v-btn
                v-if="buttonIcon"
                :icon="buttonIcon"
                :aria-label="buttonText"
                variant="tonal"
                v-bind="props"
            >
            </v-btn>
            <v-btn v-else color="teal-lighten-2" variant="flat" v-bind="props">
                {{ buttonText }}
            </v-btn>
        </template>
        <v-card>
            <v-card-text class="pb-6">
                <slot :dialog-status="dialog"></slot>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
    buttonText: {
        type: String,
        required: true,
    },
    buttonIcon: {
        type: String,
        required: false,
        default: null,
    },
});

const dialog = ref(false);
</script>

<style lang="scss" scoped>
.close-btn {
    position: absolute;
    top: 13px;
    right: 25px;
    z-index: 10;
}
.v-card-text {
    padding-bottom: 24px;
}
</style>
