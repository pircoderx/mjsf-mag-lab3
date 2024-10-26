<script setup lang="ts">

import {onMounted, ref} from "vue";
import type {Category} from "@/types";
import serviceProvider from "@/services";

const products = ref<Category[]>([]);
const loading = ref<boolean>(false);
const fetchCategories = async () => {
    try {
        loading.value = true;
        products.value = await serviceProvider.getProductsService().get({limit: 8, offset: 0});
    } catch (e) {
        console.error(e);
    } finally {
        loading.value = false;
    }
};
onMounted(() => {
    fetchCategories();
})
</script>

<template>
    <main class="container mx-auto">
        <h1 class="text-center font-semibold p-8"> My Shop Products </h1>
        <div v-if="!loading" v-for="product in products">
          {{ product.title }}
        </div>
        <div v-if="loading">
          Loading...
        </div>
    </main>
</template>
