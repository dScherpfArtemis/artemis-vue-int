<template>
    <span>{{ ratingDesc }}</span>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
    rating: {
        type: Number,
        required: true,
    },
});

const ratingDesc = computed(() => {
    switch (props.rating) {
        case '1':
            return "Won't make again";
        case '2':
            return 'Needs some work';
        case '3':
            return 'Make it again';
        default:
            return 'All time favorite';
    }
});
</script>

<style lang="scss" scoped></style>
