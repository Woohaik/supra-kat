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
  <div class="home">
    <KatBlock
      :catInfoArray="[
        {
          url:
            'https://www.soydecampo.com/12562-large_default/aceite-sdf-utto-en-5-litros.jpg',
          alt: 'image1',
        },
      ]"
    />
  </div>
</template>