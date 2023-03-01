<template>
    <v-row>
        <v-col cols="12" class="flex text-center">
            <h1>Products</h1>
        </v-col>
    </v-row>
    <v-row>
        <CardProduct v-for="product in products" :key="product.id" :product="product"/>
    </v-row>
</template>

<script>
import {ref, onMounted, onUnmounted } from 'vue'
import CardProduct from '@/components/CardProduct'

export default {
    setup() {
        const products = ref([]);
        onMounted(async () => {
            const res = await fetch("https://dummyjson.com/products").then(result => result.json());
            products.value = res.products;
        });
        onUnmounted(() => {
            localStorage.removeItem('isAuth');
        });

        return {
            products,
        };
    },
    components: {
        CardProduct
    }

}
</script>