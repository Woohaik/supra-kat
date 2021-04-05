<script lang="ts">
import { useStore } from "vuex";
import { computed, ComputedRef, defineComponent } from "vue";
import { kat, Store } from "@/types";

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
    const getFavKats: ComputedRef<kat[]> = computed(
      () => store.getters.getFavKats
    );
    const getAllKats: ComputedRef<kat[]> = computed(
      () => store.getters.getKats
    );
    const katsToShow: ComputedRef<kat[]> = props.favs ? getFavKats : getAllKats;
    return { katsToShow };
  },
});
</script>

<template>
  <div class="cat-block">
    <KatSquare :catInfo="kat" v-for="(kat, index) in katsToShow" :key="index" />
  </div>
</template>
