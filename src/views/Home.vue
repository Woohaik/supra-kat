<script lang="ts">
import { defineComponent } from "vue";
import KatBlock from "@/components/KatBlock.vue";

export default defineComponent({
  name: "Home",
  components: {
    KatBlock,
  },
});
</script>

<template>
  <div>
    <KatBlock :favs="false" />
  </div>
</template>