
<script lang="ts">
import { Store } from "@/types";
import { defineComponent } from "vue";
import { useStore } from "vuex";
import { ActionTypes } from "./types";
import NavButtons from "@/components/NavButtons.vue";
import TopArrow from "@/components/ToTop.vue";
export default defineComponent({
  components: {
    NavButtons,
    TopArrow,
  },
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
  <NavButtons />
  <router-view />
  <TopArrow />
</template>
