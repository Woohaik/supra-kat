
<script>
import { defineComponent } from "vue";
export default defineComponent({});
</script>
<template>
  <div id="nav">
    <h1>Supra Kat</h1>
    <div class="buttons">
      <router-link to="/"> <div class="item">Home</div> </router-link>
      <router-link to="/favorites">
        <div class="item">Favorites (1000)</div>
      </router-link>
    </div>
  </div>
</template>
