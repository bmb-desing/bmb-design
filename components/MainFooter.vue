<template>
  <footer class="footer">
    <div class="footer__top">
      <div class="footer__wrapper">
        <div class="footer__list">
          <ul>
            <li>
              <span>Ул. Соловьева 4, оф 1 </span>
            </li>
            <li>
              <a href="tel:+79781003949">+7 (978) 100 49 39</a>
            </li>
            <li>
              <a href="tel:+79781003949">+7 (978) 100 49 39</a>
            </li>
            <li>
              <span>
                ОГРНИП <br/>
                315920400075769
              </span>
            </li>
            <li>
              <span>
                ИНН 920450128329
              </span>
            </li>
          </ul>
        </div>
        <div class="footer__list">
          <ul>
            <li>
              <nuxt-link to="#">Сайт под ключ</nuxt-link>
            </li>
            <li>
              <nuxt-link to="#">Сайт под ключ</nuxt-link>
            </li>
            <li>
              <nuxt-link to="#">Сайт под ключ</nuxt-link>
            </li>
            <li>
              <nuxt-link to="#">Сайт под ключ</nuxt-link>
            </li>
            <li>
              <nuxt-link to="#">Сайт под ключ</nuxt-link>
            </li>
            <li>
              <nuxt-link to="#">Сайт под ключ</nuxt-link>
            </li>
          </ul>
        </div>
        <div class="footer__list">
          <ul>
            <li>
              <nuxt-link to="#">Сайт под ключ</nuxt-link>
            </li>
            <li>
              <nuxt-link to="#">Сайт под ключ</nuxt-link>
            </li>
            <li>
              <nuxt-link to="#">Сайт под ключ</nuxt-link>
            </li>
            <li>
              <nuxt-link to="#">Сайт под ключ</nuxt-link>
            </li>
            <li>
              <nuxt-link to="#">Сайт под ключ</nuxt-link>
            </li>
            <li>
              <nuxt-link to="#">Сайт под ключ</nuxt-link>
            </li>
            <li>
              <nuxt-link to="#">Сайт под ключ</nuxt-link>
            </li>
            <li>
              <nuxt-link to="#">Сайт под ключ</nuxt-link>
            </li>
          </ul>
        </div>
        <div class="footer__list">
          <ul>
            <li>
              <nuxt-link to="#">Сайт под ключ</nuxt-link>
            </li>
            <li>
              <nuxt-link to="#">Сайт под ключ</nuxt-link>
            </li>
            <li>
              <nuxt-link to="#">Сайт под ключ</nuxt-link>
            </li>
            <li>
              <nuxt-link to="#">Сайт под ключ</nuxt-link>
            </li>
            <li>
              <nuxt-link to="#">Сайт под ключ</nuxt-link>
            </li>
            <li>
              <nuxt-link to="#">Сайт под ключ</nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer__bottom">
      <div class="footer__wrapper">
        <span>2002-{{getYear}} (c) Бомбей</span>
        <nuxt-link to="/obrabotka-personalnyh-dannyh">Согласие на обработку персональных данных</nuxt-link>
      </div>
    </div>
  </footer>
</template>

<script>
	export default {
		name: "main-footer",
    computed: {
		  getYear() {
		    const date = new Date()
        return date.getFullYear()
      }
    }
	}
</script>

<style scoped lang="sass">
  @import "../assets/sass/system/footer"
</style>
