<template>
    <v-col md="4" sm="12" xs="12">
        <v-card
            class="mx-auto"
            min-height="400"
        >
            <v-img
                class="align-end justify-end text-white"
                height="200"
                :src="product.thumbnail"
                cover
            />
            <v-card-title>{{ product.title }}</v-card-title>
            <v-card-subtitle class="pt-4">${{ product.price }}</v-card-subtitle>
            <v-card-text>{{ product.description }}</v-card-text>
        </v-card>
    </v-col>    
</template>

<script>
export default {
    props: ['product']
}
</script>
