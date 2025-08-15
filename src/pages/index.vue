<template>
  <div>
    <h1 class="text-3xl font-bold underline">Hello world!</h1>
    <h1>Home Page HOme</h1>
    <RouterLink to="/projects">Projects Page</RouterLink>
  </div>
</template>

<script setup lang="ts">
import { usePageStore } from '@/stores/page'
const { pageData } = usePageStore()

pageData.title = 'Home'
</script>
