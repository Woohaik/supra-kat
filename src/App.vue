
<script lang="ts">
import { Store } from "@/store";
import { defineComponent } from "vue";
import { useStore } from "vuex";
import { ActionTypes } from "./types";

export default defineComponent({
  setup() {
    const store: Store = useStore();
    const fetchKatGroup = () => store.dispatch(ActionTypes.fetchKatGroup);
    const handleScroll = () => {
      if (window.scrollY + window.innerHeight >= document.body.scrollHeight) {
        fetchKatGroup();
      }
    };

    return { fetchKatGroup, handleScroll };
  },
  created() {
    this.fetchKatGroup();
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
});
</script>

<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/favorites">Favorites</router-link>
  </div>
  <router-view />
</template>
