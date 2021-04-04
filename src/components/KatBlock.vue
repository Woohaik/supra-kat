<script lang="ts">
import { useStore } from "vuex";
import { computed, defineComponent, PropType } from "vue";
import KatSquare from "./KatSquare.vue";
import { Store } from "@/types";

export default defineComponent({
  name: "Kat Square Block",
  components: {
    KatSquare,
  },
  setup() {
    const store: Store = useStore();

    const getAllKats = computed(() => store.getters.getKats);

    return { getAllKats };
  },
});
</script>

<template>
  <div class="cat-block">
    <KatSquare :catInfo="kat" v-for="(kat, index) in getAllKats" :key="index" />
  </div>
</template>
