<script lang="ts">
import { defineComponent } from "vue";
import KatBlock from "@/components/KatBlock.vue";

export default defineComponent({
  name: "Favorites",
  components: {
    KatBlock,
  },
});
</script>

<template>
  <div class="home">
    <KatBlock :favs="true" />
  </div>
</template>