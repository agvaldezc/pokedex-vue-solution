<script setup>
import PokemonCard from './PokemonCard.vue';
import { getPokemon } from '@/services/pokedex.service';
import { computed, ref } from 'vue';

const pokemon = ref(null);
const error = ref(null);
const query = ref('');

const isValidQuery = computed(() => /^[a-zA-z0-9]+$/.test(query.value));

function searchPokemon() {
  getPokemon(query.value)
    .then((res) => {
      pokemon.value = res;
      error.value = null;
    })
    .catch((err) => {
      error.value = err;
      pokemon.value = null;
    });
}
</script>

<template>
  <section className="pokedex">
    <form @submit.prevent="searchPokemon" className="pokedex-search-form">
      <h2>Pokedex Component</h2>
      <fieldset>
        <input v-model="query" name="query" type="text" placeholder="Pokemon name or ID" />
        <button :disabled="!isValidQuery" type="submit">Search Pokemon</button>
      </fieldset>
    </form>
    <article className="pokedex-container">
      <PokemonCard :pokemon="pokemon" :error="error" />
    </article>
  </section>
</template>

<style scoped>
fieldset {
  border: none;
}

.pokedex {
  display: flex;
  flex-flow: column;
}

.pokedex-search-form {
  display: flex;
  flex-flow: column;
  gap: 16px;
}
</style>
