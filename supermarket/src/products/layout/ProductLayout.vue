<template>
    <NavbarProduct />
    <RouterView />
    <FooterOsak />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavbarProduct from '../components/NavbarProduct.vue'
import FooterOsak from '@/shared/components/FooterOsak.vue'
</script>

<style scoped></style>
