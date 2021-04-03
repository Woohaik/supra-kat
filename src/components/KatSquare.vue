<template>
  <div class="cat-square" :class="[loading ? 'loading' : '']">
    <img @load="onImgLoad" :src="catInfo.url" :alt="`cat-${catInfo.id}`" />
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 512.001 512.001"
      xml:space="preserve"
    >
      <g>
        <path
          fill="white"
          d="M368.459,20.727c-44.919,0-85.82,20.784-112.458,54.367c-26.583-33.509-67.448-54.367-112.459-54.367
			C64.392,20.727,0,85.119,0,164.267c0,91.398,58.04,172.206,124.794,234.054c60.426,55.986,120.038,89.32,122.546,90.711
			c2.693,1.495,5.677,2.242,8.661,2.242c2.983,0,5.968-0.747,8.661-2.242c2.508-1.391,62.121-34.727,122.546-90.711
			c66.784-61.878,124.793-142.68,124.793-234.054C512,85.119,447.608,20.727,368.459,20.727z"
        />
        <path
          style="transform: scale(0.8) translateX(12.5%) translateY(12.5%)"
          fill="red"
          d="M368.459,20.727c-44.919,0-85.82,20.784-112.458,54.367c-26.583-33.509-67.448-54.367-112.459-54.367
			C64.392,20.727,0,85.119,0,164.267c0,91.398,58.04,172.206,124.794,234.054c60.426,55.986,120.038,89.32,122.546,90.711
			c2.693,1.495,5.677,2.242,8.661,2.242c2.983,0,5.968-0.747,8.661-2.242c2.508-1.391,62.121-34.727,122.546-90.711
			c66.784-61.878,124.793-142.68,124.793-234.054C512,85.119,447.608,20.727,368.459,20.727z"
        />
      </g>
    </svg>
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