<template>
  <div class="hello">
    <h2>Hello word~</h2>
    
    <p>{{ count }}</p>
    <p>
      <button @click="$store.dispatch('increment')">+</button>
      <button @click="$store.dispatch('decrement')">-</button>
    </p>
  </div>
</template>

<script>
    export default {
        name: 'HelloWorld',
        computed: {
            count() {
                return this.$store.state.count
            }
        }
    }
</script>

<style scoped></style>
