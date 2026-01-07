<template>
  <Section class="Calendar">
    <div class="Calendar__header">
      <div class="Calendar__month">АВГУСТ</div>
      <div class="Calendar__year">2026</div>
    </div>
    <div class="Calendar__body">
      <div class="Calendar__cell">Пн</div>
      <div class="Calendar__cell">Вт</div>
      <div class="Calendar__cell">Ср</div>
      <div class="Calendar__cell">Чт</div>
      <div class="Calendar__cell">Пт</div>
      <div class="Calendar__cell">Сб</div>
      <div class="Calendar__cell">Вс</div>
      <div class="Calendar__cell Calendar__cell_empty">27</div>
      <div class="Calendar__cell Calendar__cell_empty">28</div>
      <div class="Calendar__cell Calendar__cell_empty">29</div>
      <div class="Calendar__cell Calendar__cell_empty">30</div>
      <div class="Calendar__cell Calendar__cell_empty">31</div>
      <div class="Calendar__cell">1</div>
      <div class="Calendar__cell">2</div>
      <div class="Calendar__cell">3</div>
      <div class="Calendar__cell">4</div>
      <div class="Calendar__cell">5</div>
      <div class="Calendar__cell">6</div>
      <div class="Calendar__cell">7</div>
      <div class="Calendar__cell">8</div>
      <div class="Calendar__cell">9</div>
      <div class="Calendar__cell">10</div>
      <div class="Calendar__cell">11</div>
      <div class="Calendar__cell">12</div>
      <div class="Calendar__cell Calendar__cell_start">13</div>
      <div class="Calendar__cell Calendar__cell_duration">14</div>
      <div class="Calendar__cell Calendar__cell_duration">15</div>
      <div class="Calendar__cell">16</div>
      <div class="Calendar__cell">17</div>
      <div class="Calendar__cell">18</div>
      <div class="Calendar__cell">19</div>
      <div class="Calendar__cell">20</div>
      <div class="Calendar__cell">21</div>
      <div class="Calendar__cell">22</div>
      <div class="Calendar__cell">23</div>
      <div class="Calendar__cell">24</div>
      <div class="Calendar__cell">25</div>
      <div class="Calendar__cell">26</div>
      <div class="Calendar__cell">27</div>
      <div class="Calendar__cell">28</div>
      <div class="Calendar__cell">29</div>
      <div class="Calendar__cell">30</div>
      <div class="Calendar__cell">31</div>
      <div class="Calendar__cell Calendar__cell_empty">1</div>
      <div class="Calendar__cell Calendar__cell_empty">2</div>
      <div class="Calendar__cell Calendar__cell_empty">3</div>
      <div class="Calendar__cell Calendar__cell_empty">4</div>
      <div class="Calendar__cell Calendar__cell_empty">5</div>
      <div class="Calendar__cell Calendar__cell_empty">6</div>
    </div>
  </Section>
</template>

<script>

export default {
};
</script>

<style scoped>

.Calendar {
  --padding: 0.6rem;
  font-size: 2.4rem;
}

.Calendar__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 3.2rem;
}

.Calendar__month,
.Calendar__year {
  padding: 0 var(--padding) var(--padding);
  text-transform: uppercase;
}

.Calendar__body {
  display: grid;
  grid-template-columns: repeat(7, min-content);
  justify-content: space-between;
}

.Calendar__cell {
  padding: var(--padding);
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  aspect-ratio: 4/3;

  &.Calendar__cell_start {
    color: red;
    font-size: 3.2rem;
  }

  &.Calendar__cell_duration {
    color: lightcoral;
  }

  &.Calendar__cell_empty {
    opacity: 0.4;
  }
}
</style>
