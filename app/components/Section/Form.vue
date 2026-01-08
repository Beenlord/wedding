<template>
  <Section class="SectionForm">
    <div class="SectionForm__inner">
      <Input
          class="SectionForm__field"
          label="Ваши имя и фамилия"
          placeholder="Хвостик Лохматов"
          v-model="test"
      />
      <Radio
          class="SectionForm__field"
          label="Сможете ли вы присутствовать на свадьбе?"
          v-model="radio"
      >
        <RadioButton :value="0">Я приду</RadioButton>
        <RadioButton :value="1">Я не приду</RadioButton>
        <RadioButton :value="2">Я сок</RadioButton>
      </Radio>
      <Input
          class="SectionForm__field"
          label="Имя Вашей пары (при наличии)"
          v-model="radio"
      />
      <Input
          class="SectionForm__field"
          label="Ваш любтимый трек"
          v-model="test"
      />
    </div>
  </Section>
</template>

<script>

export default {
  data() {
    return {
      test: '',
      radio: 0,
    };
  },
};
</script>

<style scoped>

.SectionForm__inner {
  display: flex;
  flex-direction: column;
  row-gap: 3rem;
}
</style>
