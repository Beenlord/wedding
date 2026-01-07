<template>
  <div class="Section">
    <div class="Section__inner">
      <slot />
    </div>
    <img
        v-if="bgImage"
        class="Section__background"
        :src="bgImage"
    />
  </div>
</template>

<script>

export default {
  props: {
    bgImage: {
      type: String,
      default: null,
    },
  },
};
</script>

<style>

.Section {
  position: relative;

  .Section__inner {
    padding: 20px 0;
    position: relative;
    z-index: 1;
  }

  .Section__background {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0; left: 0;
    object-fit: cover;
  }
}
</style>
