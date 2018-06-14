<template>
  <div class="team__item">
    <div class="team__left">
      <nuxt-link :to="'/about/team/' + user.alias">
        <img :src="user.users_info.avatar" :alt="user.first_name + ' ' + user.last_name">
      </nuxt-link>
    </div>
    <div class="team__right">
      <h2 class="team__title">
          <nuxt-link :to="'/about/team/' + user.alias">
            {{user.first_name}} {{user.last_name}}
          </nuxt-link>
      </h2>
      <div class="team__content">
        <div class="team__position">{{user.users_info.position}}</div>
        <div class="team__text" v-html="user.users_info.shortText"></div>
        <div class="team__count">
          Участвовал в <span>{{user.works.length}}</span> проектах
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'user-item',
  props: ['user']
}
</script>
<style lang="sass" scoped>
  @import "../../assets/sass/pages/team/list"
</style>
