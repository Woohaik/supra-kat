<script lang="ts">
import { useStore } from "vuex";
import { computed, defineComponent } from "vue";
import { Store } from "@/types";

import KatSquare from "./KatSquare.vue";

export default defineComponent({
  name: "Kat Square Block",
  props: {
    favs: {
      type: Boolean,
      required: true,
    },
  },

  components: {
    KatSquare,
  },
  setup(props) {
    const store: Store = useStore();
    const getFavKats = computed(() => store.getters.getFavKats);
    const getAllKats = computed(() => store.getters.getKats);

    const katsToShow = props.favs ? getFavKats : getAllKats;
    return { katsToShow };
  },
});
</script>

<template>
  <div class="cat-block">
    <KatSquare :catInfo="kat" v-for="(kat, index) in katsToShow" :key="index" />
  </div>
</template>
