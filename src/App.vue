<script setup lang="ts">
import { SpeedInsights } from '@vercel/speed-insights/vue'
</script>

<template>
    <main>
        <RouterView />
    </main>
    <SpeedInsights />
</template>
