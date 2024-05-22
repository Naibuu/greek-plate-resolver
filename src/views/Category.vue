<script setup lang="ts">
import { ref } from 'vue'
import categories from '../data/categories.json'

const data: { [key: string]: string[] } = categories
const code = ref('')
const result = ref('')

function getCategory() {
    const input = code.value.toUpperCase().trim()

    const category = Object.keys(data).find((cat) => data[cat].includes(input))

    if (category) {
        result.value = `Η πινακίδα αντιστοιχεί σε ειδική κατηγορία πινακίδας <b>${category}</b>`
    } else {
        result.value = ''
    }
}
</script>

<template>
    <div class="h-screen flex flex-col gap-2 justify-center items-center">
        <h1 class="text-neutral-100 text-lg font-semibold">
            Εισαγάγετε την κατηγορία της πινακίδας του οχήματος
        </h1>

        <input
            type="text"
            class="p-2 bg-transparent border-b-2 border-b-neutral-600 outline-none text-neutral-300 placeholder:text-neutral-400"
            v-model="code"
            placeholder="π.χ ΕΣ, ΔΣ, ΤΑ"
            @input="getCategory"
        />

        <div
            v-if="result"
            class="py-2 px-4 bg-green-500 text-neutral-900 text-sm font-bold rounded-lg"
        >
            <p v-html="result" />
        </div>

        <RouterLink class="text-xs underline opacity-60" to="/"
            >Για περιοχές</RouterLink
        >
    </div>
</template>
