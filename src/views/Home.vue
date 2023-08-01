<script setup>
import { computed, onMounted, ref } from "vue";
import store from "../store";
import axiosClient from "../axiosClient";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const ingredients = ref([]);

onMounted(async () => {
  const response = await axiosClient.get("/list.php?i=list");
  ingredients.value = response.data;
});
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
  <div class="mt-2">
    <pre>{{ ingredients }}</pre>
  </div>
</template>
