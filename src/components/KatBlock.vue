<script lang="ts">
import { useStore } from "vuex";
import { computed, defineComponent } from "vue";
import KatSquare from "./KatSquare.vue";
import { Store } from "@/types";

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
    const getAllKats = computed(() => store.getters.getKats);
    const getFavKats = computed(() => store.getters.getFavKats);
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
