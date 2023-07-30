<script setup>
import { computed } from "vue";
import store from "../store";

const meals = computed(() => store.state.meals);
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
</script>

<template>
  <div class="flex p-8 justify-center">
    <input
      type="text"
      class="rounded border-2 border-gray-200 w-full"
      placeholder="Search for Meals"
    />
  </div>
  <div class="flex gap-2 justify-center mt-2">
    <router-link
      :to="{ name: 'byLetter', params: { letter } }"
      v-for="letter of letters"
      :key="letter"
    >
      {{ letter }}
    </router-link>
  </div>
</template>
