<template>
  <header class="flex items-stretch justify-between h-16 bg-white shadow-md">
    <router-link :to="{ name: 'home' }" class="inline-flex items-center pl-5"
      >Home</router-link
    >
    <div class="flex items-center gap-1">
      <router-link
        :to="{ name: 'byName' }"
        class="inline-flex items-center h-full px-2 transition-colors hover:bg-blue-100"
      >
        Search Meals
      </router-link>
      <router-link
        :to="{ name: 'byLetter' }"
        class="inline-flex items-center h-full px-2 transition-colors hover:bg-blue-100"
      >
        Meals By letter
      </router-link>
      <router-link
        :to="{ name: 'byIngredient' }"
        class="inline-flex items-center h-full px-2 transition-colors hover:bg-blue-100"
      >
        Meals By ingredient
      </router-link>
    </div>
  </header>
</template>
