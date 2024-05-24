<script setup lang="ts">
import { ref } from 'vue'
import locations from '../data/locations.json'

const data: { [key: string]: string[] } = locations
const code = ref('')
const result = ref('')

function getLocation() {
    const input = code.value.toUpperCase().trim()

    const location = Object.keys(data).find((loc) =>
        data[loc].includes(input.substring(0, 2)),
    )

    if (location) {
        result.value = `Η πινακίδα αντιστοιχεί στην περιοχή <b>${location}</b>`
    } else {
        result.value = ''
    }
}
</script>

<template>
    <div
        class="h-screen flex flex-col gap-2 justify-center items-center text-center"
    >
        <h1 class="text-neutral-100 text-lg font-semibold">
            🗺️ Εισαγάγετε το πρόθεμα της πινακίδας του οχήματος
        </h1>

        <input
            type="text"
            class="p-2 bg-transparent border-b-2 border-b-neutral-600 outline-none text-neutral-300 placeholder:text-neutral-400"
            v-model="code"
            placeholder="π.χ ΜΙ, ΙΖ, ΚΥ"
            maxlength="2"
            @input="getLocation"
        />

        <div
            v-if="result"
            class="py-2 px-4 bg-green-500 text-neutral-900 text-sm font-bold rounded-lg drop-shadow"
        >
            <p v-html="result" />
        </div>
    </div>
</template>
