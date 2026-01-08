<template>
  <Section class="SectionForm">
    <form class="SectionForm__inner" @submit.prevent="onSubmit">
      <Input
          class="SectionForm__field"
          label="Ваши имя и фамилия"
          placeholder="Хвостик Лохматов"
          v-model="formData.name"
      />
      <Radio
          class="SectionForm__field"
          label="Сможете ли вы присутствовать на свадьбе?"
          v-model="formData.can"
      >
        <RadioButton :value="1">Приду с удовольствием</RadioButton>
        <RadioButton :value="2">Буду с парой</RadioButton>
        <RadioButton :value="0">Не смогу присутствовать</RadioButton>
        <RadioButton :value="3">Сообщу позже</RadioButton>
      </Radio>
      <Input
          class="SectionForm__field"
          label="Имя Вашей пары (при наличии)"
          v-model="formData.sputnik"
      />
      <Input
          class="SectionForm__field"
          label="Ваш любтимый трек"
          v-model="formData.track"
      />
      {{ formData }}
      <Submit />
    </form>
  </Section>
</template>

<script>

export default {
  data() {
    return {
      formData: {
        name: '',
        can: null,
        sputnik: '',
        track: '',
      },
    };
  },
  methods: {
    onSubmit() {
      alert(JSON.stringify(this.formData));
    },
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
