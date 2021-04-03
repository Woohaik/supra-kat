<script lang="ts">
import { useStore } from "vuex";
import { computed, defineComponent, PropType } from "vue";
import KatSquare from "./KatSquare.vue";
import { Store } from "@/store";

export default defineComponent({
  name: "Kat Square Block",
  props: {
    catInfoArray: {
      type: Object as PropType<{ url: string; alt: string }[]>,
      required: true,
    },
  },
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
  <div class="cat-block wrapper">
    <KatSquare :catInfo="kat" v-for="(kat, index) in getAllKats" :key="index" />
  </div>
</template>
