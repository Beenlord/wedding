<template>
  <Section class="SectionCalendar">
    <div class="SectionCalendar__inner">
      <div class="SectionCalendar__header">
        <div class="SectionCalendar__month">АВГУСТ</div>
        <div class="SectionCalendar__year">2026</div>
      </div>
      <div class="SectionCalendar__body">
        <div class="SectionCalendar__cell SectionCalendar__cell_head">Пн</div>
        <div class="SectionCalendar__cell SectionCalendar__cell_head">Вт</div>
        <div class="SectionCalendar__cell SectionCalendar__cell_head">Ср</div>
        <div class="SectionCalendar__cell SectionCalendar__cell_head">Чт</div>
        <div class="SectionCalendar__cell SectionCalendar__cell_head">Пт</div>
        <div class="SectionCalendar__cell SectionCalendar__cell_head SectionCalendar__cell_weekend">Сб</div>
        <div class="SectionCalendar__cell SectionCalendar__cell_head SectionCalendar__cell_weekend">Вс</div>
        <div class="SectionCalendar__cell SectionCalendar__cell_empty">27</div>
        <div class="SectionCalendar__cell SectionCalendar__cell_empty">28</div>
        <div class="SectionCalendar__cell SectionCalendar__cell_empty">29</div>
        <div class="SectionCalendar__cell SectionCalendar__cell_empty">30</div>
        <div class="SectionCalendar__cell SectionCalendar__cell_empty">31</div>
        <div class="SectionCalendar__cell">1</div>
        <div class="SectionCalendar__cell">2</div>
        <div class="SectionCalendar__cell">3</div>
        <div class="SectionCalendar__cell">4</div>
        <div class="SectionCalendar__cell">5</div>
        <div class="SectionCalendar__cell">6</div>
        <div class="SectionCalendar__cell">7</div>
        <div class="SectionCalendar__cell">8</div>
        <div class="SectionCalendar__cell">9</div>
        <div class="SectionCalendar__cell">10</div>
        <div class="SectionCalendar__cell">11</div>
        <div class="SectionCalendar__cell">12</div>
        <div class="SectionCalendar__cell SectionCalendar__cell_start">13</div>
        <div class="SectionCalendar__cell SectionCalendar__cell_duration">14</div>
        <div class="SectionCalendar__cell SectionCalendar__cell_duration">15</div>
        <div class="SectionCalendar__cell">16</div>
        <div class="SectionCalendar__cell">17</div>
        <div class="SectionCalendar__cell">18</div>
        <div class="SectionCalendar__cell">19</div>
        <div class="SectionCalendar__cell">20</div>
        <div class="SectionCalendar__cell">21</div>
        <div class="SectionCalendar__cell">22</div>
        <div class="SectionCalendar__cell">23</div>
        <div class="SectionCalendar__cell">24</div>
        <div class="SectionCalendar__cell">25</div>
        <div class="SectionCalendar__cell">26</div>
        <div class="SectionCalendar__cell">27</div>
        <div class="SectionCalendar__cell">28</div>
        <div class="SectionCalendar__cell">29</div>
        <div class="SectionCalendar__cell">30</div>
        <div class="SectionCalendar__cell">31</div>
        <div class="SectionCalendar__cell SectionCalendar__cell_empty">1</div>
        <div class="SectionCalendar__cell SectionCalendar__cell_empty">2</div>
        <div class="SectionCalendar__cell SectionCalendar__cell_empty">3</div>
        <div class="SectionCalendar__cell SectionCalendar__cell_empty">4</div>
        <div class="SectionCalendar__cell SectionCalendar__cell_empty">5</div>
        <div class="SectionCalendar__cell SectionCalendar__cell_empty">6</div>
      </div>
    </div>
  </Section>
</template>

<script>

export default {
};
</script>

<style scoped>

.SectionCalendar {
  --padding: 5px;
}

.SectionCalendar__inner {
  margin: 0 auto;
  width: 95%;
}

.SectionCalendar__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: var(--fs-l);
}

.SectionCalendar__month,
.SectionCalendar__year {
  padding: 0 var(--padding)
    calc(var(--padding) * 2);
  text-transform: uppercase;
}

.SectionCalendar__body {
  display: grid;
  grid-template-columns: repeat(7, min-content);
  justify-content: space-between;
}

.SectionCalendar__cell {
  padding: 0 var(--padding);
  position: relative;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  aspect-ratio: 1/1;

  &.SectionCalendar__cell_start {
    color: #B91112;
    font-weight: 700;

    &:after {
      content: '';
      width: 130%;
      height: 130%;
      position: absolute;
      top: 50%; left: 50%;
      translate: calc(-50% + 1px) calc(-50% + 1px);
      background-image: url("@/assets/i/heart.svg");
      background-size: contain;
      background-repeat: no-repeat;
    }
  }

  &.SectionCalendar__cell_duration {
    color: #B91112;
  }

  &.SectionCalendar__cell_empty {
    opacity: 0.4;
    user-select: none;
  }

  &.SectionCalendar__cell_head {
    user-select: none;
  }

  &.SectionCalendar__cell_weekend {
    color: #B91112;
  }
}
</style>
