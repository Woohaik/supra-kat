
<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";
import { Store } from "@/types";
export default defineComponent({
  setup() {
    const store: Store = useStore();
    const favKatsLength = computed(() => store.getters.getFavKats.length);
    return { favKatsLength };
  },
});
</script>
<template>
  <div id="nav">
    <h1>
      Supra Kat
      <img id="supra" src="@/assets/supra.svg" alt="" />
    </h1>

    <div class="buttons">
      <router-link to="/"> <div class="item">Home</div> </router-link>
      <router-link to="/favorites">
        <div class="item">Favorites ({{ favKatsLength }})</div>
      </router-link>
    </div>
  </div>
</template>
