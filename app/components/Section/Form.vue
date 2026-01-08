<template>
  <Section class="SectionForm">
    <Input
        class="SectionForm__field"
        label="Ваши имя и фамилия"
        placeholder="Хвостик Лохматов"
        v-model="test"
    />
    <Input
        class="SectionForm__field"
        label="Имя Вашей пары (при наличии)"
        v-model="test"
    />
    <Input
        class="SectionForm__field"
        label="Ваш любтимый трек"
        v-model="test"
    />
  </Section>
</template>

<script>

export default {
  data() {
    return {
      test: '',
    };
  },
};
</script>

<style scoped>

.SectionForm__field:not(:last-child) {
  margin-bottom: 3rem;
}
</style>
