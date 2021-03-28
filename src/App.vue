<template>
  <div id="app">
    <h1>Search PokeAPI</h1>

      <div class="search-box">
        <input 
          type="text" 
          placeholder="Search..."
          v-model="query"
          @keypress="fetchPokemon"
          :class="[query.length < 1 || query.length > 3 ? 'red' : 'green']"
        />
      </div>

      <div class="pokemon-wrap" v-if="typeof pokemon.name != 'undefined' ">
        <div class="pokemon-box">
          <div class="name">
            {{ pokemon.name }}
          </div>
          <div class="type1">
            {{ pokemon.types[0].type.name }}
          </div>
          <div class="type2" v-if="typeof pokemon.types[1] != 'undefined' ">
            {{ pokemon.types[1].type.name}}
          </div>
          <div class="abilities" >
            <ul>
              <li v-for="(el, index) in pokemon.abilities" :key="index" >
                {{ el.ability.name }}</li>
            </ul>
          </div>
        </div>
      </div>

    <div>
      <input v-model="email">
      <button onclick="alert('sign up')" :disabled="email.length<4" >submit</button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      url_base: 'https://pokeapi.co/api/v2/pokemon/',
      query: '',
      pokemon: {},
      pokemondata: {},
      abilies: [],
      email: ''
    }
  },
  methods: {
    fetchPokemon (e) {
      if (e.key == "Enter") {
        fetch(`${this.url_base}${this.query}?j=extra`)
          .then(res => {
            return res.json();
          }).then(this.setResults);
      }
    },
    setResults (results) {
      console.log(results);
      this.pokemon = results;
    },
    async onFormSubmit() {
      try {
        this.pokemondata = await fetch(`${this.url_base}${this.query}?j=extra`);
        // success
      } catch (error) {
        // error
      }
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.red{
  border: 2px solid red;
}
.green{
  border: 2px solid green;
}
</style>
