<template>
  <div class="cat-square" :class="[loading ? 'loading' : '']">
    <img @load="onImgLoad" :src="catInfo.url" :alt="`cat-${catInfo.id}`" />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from "vue";
export default defineComponent({
  name: "Kat Square",
  props: {
    catInfo: {
      type: Object as PropType<{ url: string; id: string }>,
      required: true,
    },
  },
  setup() {
    const loading = ref(true);
    const onImgLoad = () => (loading.value = false);
    return { onImgLoad, loading };
  },
});
</script>