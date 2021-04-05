<script lang="ts">
import KatBlock from "@/components/KatBlock.vue";
import { useStore } from "vuex";
import { computed, defineComponent } from "vue";
import { Store } from "@/types";

export default defineComponent({
  name: "Favorites",
  components: {
    KatBlock,
  },
  setup() {
    const store: Store = useStore();
    const getFavKats = computed(() => store.getters.getFavKats);
    return { getFavKats };
  },
});
</script>

<template>
  <div class="home">
    <KatBlock :favs="true" />

    <img
      v-if="getFavKats.length === 0"
      class="no-kats"
      src="@/assets/sad.png"
      alt="sad-kat"
    />
  </div>
</template>