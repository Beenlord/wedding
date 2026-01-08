<template>
  <div class="Radio">
    <label>{{ label }}</label>
    <div class="Radio__inner">
      <slot />
    </div>
  </div>
</template>

<script>

export default {
  name: 'Radio',

  props: {
    value: {
      required: true,
    },
    label: {
      type: String,
      default: '',
    },
  },

  provide() {
    return {
      radio: {
        getValue: () => this.value,
        setValue: this.setValue,
      },
    };
  },

  methods: {
    setValue(value) {
      this.$emit('input', value);
    },
  },
};
</script>

<style scoped>

.Radio {
  width: 100%;
  display: grid;
  grid-template-rows: auto 1fr;

  & > label {
    padding: 0 0 1.5rem;
    font-size: var(--fs-l);
    color: var(--txt-color-first);
  }
}

.Radio__inner {
  display: flex;
  gap: 1rem;

  flex-direction: column;
}
</style>
