<template>
    <v-app-bar class="px-4">
        <v-app-bar-title>
            <div class="site-logo">
                <router-link to="/"
                    ><v-icon icon="mdi-hamburger"
                /></router-link>

                <router-link to="/">Whim</router-link>
            </div>
        </v-app-bar-title>
        <template v-slot:append>
            <DialogFrame v-slot="slotProps" button-text="Add recipe">
                <RecipeForm :dialog-status="slotProps.dialogStatus" />
            </DialogFrame>
        </template>
    </v-app-bar>
</template>

<script setup>
import DialogFrame from '@/components/dialogs/DialogFrame.vue';
import RecipeForm from '@/components/RecipeForm.vue';
</script>

<style lang="scss">
.site-logo {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
    line-height: 0;
}
</style>
