<template>
    <span>{{ ratingDesc }}</span>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
    rating: {
        type: String,
        required: true,
    },
});

const ratingDesc = computed(() => {
    switch (props.rating) {
        case '0':
            return "Won't make again";
        case '1':
            return 'Needs some work';
        case '2':
            return 'Make it again';
        default:
            return 'All time favorite';
    }
});
</script>

<style lang="scss" scoped></style>
