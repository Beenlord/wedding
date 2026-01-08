<template>
  <div class="Input">
    <label v-if="label" :for="uid">{{ label }}</label>
    <input
        :value="value"
        type="text"
        :name="uid"
        :id="uid"
        :placeholder="placeholder"
        @input="onInput"
    />
  </div>
</template>

<script>

export default {
  props: {
    value: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: null,
    },
    placeholder: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      uid: '',
      modelValue: '',
    };
  },
  mounted() {
    this.uid = `Input${this._uid}`;
  },
  methods: {
    onInput(event) {
      this.$emit('input', event.target.value);
    },
  },
};
</script>

<style scoped>

.Input {
  width: 100%;
  display: grid;
  grid-template-rows: auto 1fr;

  label {
    padding: 0 0 1.5rem;
    font-size: var(--fs-l);
    color: var(--txt-color-first);
  }

  input {
    padding: 2rem;
    font-size: var(--fs-l);

    background: var(--bg-color);


    border: var(--border);
    box-shadow: var(--shadow);

    &::placeholder {
      color: var(--txt-color-second);
    }

    &:focus {
      outline: var(--outline);
    }
  }
}
</style>
