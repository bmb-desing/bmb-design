<template>
    <div class="error body" style="background-image: url(/img/errors/404.jpg)">
      <div class="error__container">
        <div class="error__content">
          <div class="error__left">
            <h1 class="error__title">{{error.message}}</h1>
            <div class="error__text">Cообщите нам пожалуйста об ошибке (вы можете это сделать нажатием на кнопку "Сообщить об ошибке" или отправив E-mail на почту
              <a href="mailto:support@bmb-design.ru" style="color: #ecc84c; text-decoration: none;">support@bmb-design.ru</a>). </div>
            <div class="error__buttons">
              <nuxt-link to="/" class="error__button error__button_index">На главную</nuxt-link>
              <button class="error__button error__button_callback" @click="getEmail">Сообщить об ошибке</button>
            </div>
            <div v-if="showEmail" class="error__form">
              <form @submit.prevent="submitForm()">
                <input type="text" placeholder="Укажите ваш E-mail для получения ответа" v-model="email" v-validate="'required|email'" data-vv-name="E-mail">
                <span v-show="errors.has('E-mail')" class="error__error">{{ errors.first('E-mail') }}</span>
                <button class="error__button error__button_callback">Отправить</button>
              </form>
            </div>
          </div>
          <div class="error__right">
            <div class="loader">
              <div class="cssload-loader">
                <div class="cssload-inner cssload-one"></div>
                <div class="cssload-inner cssload-two"></div>
                <div class="cssload-inner cssload-three"></div>
              </div>
              <!--Логотип-->
              <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 21262 21262" width="212.617mm" height="212.617mm" class="loader__svg">
                <g id="_2188478511776">
                  <rect width="100%" height="100%" x="0" y="0" fill="transparent" stroke="url(#pattern)" stroke-width="5%"></rect>
                  <path class="fil0" fill="url(#pattern)" d="M6719 11795c0,507 -152,943 -458,1307 -323,382 -734,573 -1232,573 -187,0 -467,-5 -842,-14 -373,-9 -653,-12 -840,-12 -137,0 -343,5 -617,17 -276,12 -482,18 -620,18 -73,0 -108,-33 -108,-100 0,-321 14,-803 44,-1446 30,-642 45,-1124 45,-1444 0,-338 -15,-847 -45,-1524 -30,-677 -44,-1184 -44,-1523 0,-64 35,-96 108,-96 260,0 651,2 1172,5 522,3 913,4 1176,4 611,0 1099,114 1463,341 443,277 664,707 664,1289 0,201 -58,410 -174,626 -117,218 -259,382 -426,493 -83,55 -127,91 -127,109 0,17 44,49 127,95 223,122 400,303 533,540 134,239 201,485 201,742zm-1226 -2510c0,-409 -184,-686 -551,-828 -221,-85 -583,-127 -1087,-127 -490,0 -734,36 -734,109 0,96 -5,240 -14,433 -9,191 -13,337 -13,436 0,67 1,170 4,310 3,139 5,243 5,313 0,85 329,127 987,127 936,0 1403,-258 1403,-773zm116 2468c0,-357 -158,-597 -476,-722 -201,-82 -513,-123 -938,-123 -734,0 -1101,39 -1101,118l0 718c0,104 3,265 9,480 6,217 9,378 9,485 0,30 92,52 279,66 186,15 462,22 829,22 460,0 791,-59 992,-179 264,-158 397,-446 397,-865zm8011 1822c0,73 -36,109 -109,109 -52,0 -131,-5 -237,-14 -106,-9 -185,-13 -237,-13 -53,0 -133,4 -241,13 -107,9 -186,14 -238,14 -74,0 -109,-48 -109,-145 0,-370 10,-925 34,-1665 24,-740 34,-1295 34,-1667 0,-55 -10,-82 -34,-82 -27,0 -46,16 -61,48 -149,318 -500,1168 -1054,2548 -89,266 -219,597 -387,994 -21,33 -127,49 -317,49 -276,0 -428,-25 -458,-74 -98,-236 -240,-567 -425,-993 -242,-575 -615,-1435 -1117,-2576 -10,-21 -27,-41 -57,-61 -24,17 -35,49 -35,95 0,376 6,940 20,1692 13,752 19,1316 19,1692 0,95 -36,145 -109,145 -51,0 -125,-5 -228,-14 -101,-9 -177,-13 -227,-13 -52,0 -131,4 -234,13 -103,9 -182,14 -234,14 -73,0 -109,-29 -109,-84 0,-324 15,-809 45,-1453 29,-646 44,-1131 44,-1453 0,-336 -15,-839 -44,-1512 -30,-671 -45,-1174 -45,-1510 0,-55 33,-86 100,-95 395,-52 693,-79 893,-79 30,0 71,59 124,179 708,1550 1315,2935 1824,4152 119,286 191,428 214,428 30,0 93,-116 188,-349 399,-943 951,-2342 1655,-4200 46,-116 96,-175 149,-175 99,0 246,6 443,18 197,12 345,17 444,17 71,0 107,36 107,106 0,334 -11,838 -31,1510 -21,671 -32,1175 -32,1510 0,320 12,801 36,1442 24,642 36,1121 36,1439zm5640 -1780c0,507 -152,943 -458,1307 -324,382 -734,573 -1232,573 -187,0 -467,-5 -842,-14 -373,-9 -653,-12 -840,-12 -137,0 -343,5 -618,17 -276,12 -482,18 -619,18 -73,0 -109,-33 -109,-100 0,-321 15,-803 45,-1446 30,-642 45,-1124 45,-1444 0,-338 -15,-847 -45,-1524 -30,-677 -45,-1184 -45,-1523 0,-64 36,-96 109,-96 260,0 651,2 1171,5 522,3 913,4 1176,4 612,0 1100,114 1464,341 443,277 664,707 664,1289 0,201 -59,410 -175,626 -116,218 -258,382 -425,493 -84,55 -127,91 -127,109 0,17 43,49 127,95 222,122 400,303 533,540 134,239 201,485 201,742zm-1226 -2510c0,-409 -184,-686 -551,-828 -221,-85 -583,-127 -1088,-127 -489,0 -734,36 -734,109 0,96 -4,240 -13,433 -9,191 -14,337 -14,436 0,67 2,170 5,310 3,139 4,243 4,313 0,85 330,127 988,127 936,0 1403,-258 1403,-773zm116 2468c0,-357 -158,-597 -476,-722 -202,-82 -513,-123 -939,-123 -734,0 -1101,39 -1101,118l0 718c0,104 3,265 9,480 6,217 9,378 9,485 0,30 93,52 279,66 187,15 463,22 830,22 459,0 791,-59 992,-179 264,-158 397,-446 397,-865z" />
                </g>
                <defs>
                  <!-- Da gradient -->
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style="stop-color:#5c5edc;"/>
                    <stop offset="50%" style="stop-color:#ecc84c;"/>
                    <stop offset="75%" style="stop-color:#a35100;"/>
                    <stop offset="100%" style="stop-color:#5c5edc;"/>
                  </linearGradient>

                  <!-- Stitch 2 gradients together for seamless animation  -->
                  <pattern id="pattern" x="0" y="0" width="300%" height="100%" patternUnits="userSpaceOnUse"  >
                    <rect x="0" y="0" width="150%" height="100%" fill="url(#gradient)" >
                      <animate attributeType="XML"
                               attributeName="x"
                               from="0" to="150%"
                               dur="1.5s"
                               repeatCount="indefinite"/>
                    </rect>
                    <rect x="-150%" y="0" width="150%" height="100%" fill="url(#gradient)">
                      <animate attributeType="XML"
                               attributeName="x"
                               from="-150%" to="0"
                               dur="1.5s"
                               repeatCount="indefinite"/>
                    </rect>
                  </pattern>
                </defs>
              </svg>

            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
	export default {
	  data() {
	    return {
	      sendError: 0,
        showEmail: false,
        email: '',
      }
    },
    head() {
	    return {
	      title: 'Ошибка ' +this.error.statusCode
      }
    },
    methods: {
	    getEmail() {
	      return this.showEmail = true
      },
      sendForm() {
	      //@TODO Сделать отправку формы
	      console.log(123)
      },
      submitForm: function() {
        this.$validator.validateAll().then((result) => {
          if(result) {
            this.sendForm()
          }
        })
      }
    },
		name: "error",
    props: ['error'],
    layout: 'errors',
	}
</script>

<style scoped lang="sass">
  @import "../assets/sass/system/loader"
  @import "../assets/sass/components/error/_index.sass"

</style>
