<template>
  <label
    :class="['RadioButton', {
      'RadioButton_active': checked,
    }]"
  >
    <input type="radio" :checked="checked" @change="onChange" />
    <span class="RadioButton__checkbox" />
    <span>
      <slot />
    </span>
  </label>
</template>

<script>

export default {
  name: 'RadioButton',
  inject: [
    'radio',
  ],
  props: {
    value: {
      required: true,
    },
  },
  computed: {
    checked() {
      return this.radio.getValue() === this.value;
    },
  },
  methods: {
    onChange() {
      this.radio.setValue(this.value);
    },
  },
};
</script>

<style scoped>

.RadioButton {
  padding: 2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 2rem;

  border: var(--border);

  input {
    display: none;
  }
}
.RadioButton__checkbox {
  width: 1em;
  height: 1em;

  position: relative;

  border: var(--border);

  overflow: hidden;

  &:after {
    content: '';
    width: calc(1em - 6px);
    height: calc(1em - 6px);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--txt-color-first);
    animation-duration: 0.4s;
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    animation-fill-mode: forwards;
  }
}
.RadioButton.RadioButton_active .RadioButton__checkbox:after {
  animation-name: radio-enter;
}
.RadioButton:not(.RadioButton_active) .RadioButton__checkbox:after {
  animation-name: radio-leave;
}
@keyframes radio-enter {
  from {
    transform: translate(-50%, -120%);
  }
  to {
    transform: translate(-50%, -50%);
  }
}

@keyframes radio-leave {
  from {
    transform: translate(-50%, -50%);

  }
  to {
    transform: translate(-50%, 120%);
  }
}
</style>
