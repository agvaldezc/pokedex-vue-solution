<script setup>
defineProps({
  pokemon: Object,
  error: Object
})
</script>

<template>
  <div className="pokemon-card">
    <section v-if="pokemon">
      <h3>{{ pokemon.name }}</h3>
      <img loading="lazy" className="pokemon-sprite" :src="pokemon.sprites.front_default" :alt="pokemon.name" />
      <article className="pokemon-data">
        <details>
          <summary>ID</summary>
          <p>{{ pokemon.id }}</p>
        </details>
        <details>
          <summary>Types</summary>
          <a v-for="(entry, index) in pokemon.types" :href="entry.type.url">{{`${index} - ${entry.type.name}`}}</a>
        </details>
        <details>
          <summary>Abilities</summary>
          <a v-for="(entry, index) in pokemon.abilities" :href="entry.ability.url">{{`${index} - ${entry.ability.name}`}}</a>
        </details>
        <details>
          <summary>Moves</summary>
          <a v-for="(entry, index) in pokemon.moves" :href="entry.move.url">{{`${index} - ${entry.move.name}`}}</a>
        </details>
      </article>
    </section>
    <h3 v-if="error" className="pokemon-error">ERROR: {{JSON.stringify(error)}}</h3>
  </div>
</template>

<style scoped>
.pokemon-card {
  display: flex;
  flex-flow: column;
  border: 1px solid gray;
  border-radius: 8px;
  padding: 16px;
  margin-top: 16px;
}

.pokemon-data details {
  margin-top: 16px;
  display: flex;
  flex-flow: column;
  gap: 8px;
}

.pokemon-sprite {
  width: 128px;
  height: 128px;
}

.pokemon-error {
  color: red;
}
</style>
