<template>
    <v-row justify="center">
        <v-dialog v-model="dialog" persistent width="750">
            <v-btn
                icon="mdi-close"
                color="teal-lighten-2"
                class="close-btn"
                size="small"
                @click="dialog = false"
            ></v-btn>
            <template v-slot:activator="{ props }">
                <v-btn color="teal-lighten-2" variant="flat" v-bind="props">
                    {{ buttonText }}
                </v-btn>
            </template>
            <v-card>
                <v-card-text class="pb-6">
                    <slot :dialog-status="dialog"></slot>
                </v-card-text>
            </v-card>
        </v-dialog>
    </v-row>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
    buttonText: {
        type: String,
        required: true,
    },
});

const dialog = ref(false);
</script>

<style lang="scss" scoped>
.close-btn {
    position: absolute;
    top: 25px;
    right: 25px;
    z-index: 10;
}
.v-card-text {
    padding-bottom: 24px;
}
</style>
