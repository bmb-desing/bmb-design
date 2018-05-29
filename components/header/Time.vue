<template>
  <transition name="time">
    <div class="times">
      <ul>
        <li>
          <b>Понедельник:</b>
          <span :class="getDay(1) ? 'current' : ''">9:00-19:00</span>
        </li>
        <li>
          <b>Вторник:</b>
          <span :class="getDay(2) ? 'current' : ''">9:00-19:00</span>
        </li>
        <li>
          <b>Среда:</b>
          <span :class="getDay(3) ? 'current' : ''">9:00-19:00</span>
        </li>
        <li>
          <b>Четверг:</b>
          <span :class="getDay(4) ? 'current' : ''">9:00-19:00</span>
        </li>
        <li>
          <b>Пятница:</b>
          <span :class="getDay(5) ? 'current' : ''">9:00-19:00</span>
        </li>
        <li>
          <b >Суббота:</b>
          <span class="red" :class="getDay(6) ? 'current' : ''">Выходной</span>
        </li>
        <li>
          <b>Воскресенье:</b>
          <span class="red" :class="getDay(0) ? 'current' : ''">Выходной</span>
        </li>
      </ul>
      <button @click="showForm">Обратный звонок</button>
    </div>
  </transition>
</template>

<script>
  import {mapMutations} from 'vuex'
	export default {
		name: "times",
    methods: {
      ...mapMutations({
        showForm: 'mutationShowForm'
      }),
		  getDay(number) {
		    const date = new Date()
        return date.getDay() == number ? true : false
      }
    }
	}
</script>

<style scoped lang="sass">
  @import "../../assets/sass/components/header/times"
  .time-enter-active, .time-leave-active
    transition: max-height .25s
  .time-enter
    max-height: 0
  .time-leave-to
    max-height: 0

</style>
