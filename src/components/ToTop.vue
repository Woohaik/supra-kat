
<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  setup() {
    const winScroll = ref(0);
    const handleScroll = (): void => {
      winScroll.value = window.scrollY;
    };
    const windowsScrollTo0 = (): void => window.scrollTo(0, 0);
    return { winScroll, handleScroll, windowsScrollTo0 };
  },
});
</script>


<template>
  <div
    @click="windowsScrollTo0"
    class="to-top"
    :style="[winScroll > 50 ? `bottom: -5px` : ``]"
  >
    <svg
      class="arrow"
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon="arrow-up"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      data-fa-i2svg=""
    >
      <path
        fill="black"
        d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"
      ></path>
    </svg>
  </div>
</template>
