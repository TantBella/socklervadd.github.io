<script>
// I denna komponenter importeras info från Getkatten och alla (20) arrays skrivs sedan ut automatiskt. Här har jag valt att ta med bild, namn och ursprung på rasen.

import GetKatt from './GetKatt.vue'

export default {

  // JAg fick felet:Image corrupt or truncated i konsolen. Det verkade uppstå pga för snabb uppladning eller liknande när jag googlade. Jag hittade denna funktionen för att ta bort det, men sedan försvann felet.
  // Ref: https://stackoverflow.com/questions/11727219/image-corrupt-or-truncated-in-firefox

  // loadlist(page, maxrows) {
  //   var orderby = ('.sortby_active').attr('title');
  //   var category = ('.category_active').attr('title');
  //   $.ajax({
  //     type: 'post',
  //     url: 'gallery_pages.php?page=' + page + '&maxrows=' + maxrows + '&orderby=' + orderby + '&category=' + category,
  //     beforeSend: function () {
  //       ('#page_loading').show();
  //       ('#container').fadeOut(300);
  //     },
  //     success: function (data) {
  //       ('#container').html(data);
  //       ('#container').stop().animate({ 'bottom': '0px' }, 100);
  //       // n = 0;
  //       ('#up_arrow').hide();
  //       ('#scrollup').css('cursor', 'default');
  //       if (!('#down_arrow').is(':visible')) {
  //         ('#down_arrow').show();
  //         ('#scrolldown').css('cursor', 'pointer');
  //       }
  //       ('#page_loading').hide();
  //       ('#container').fadeIn(700);
  //     }
  //   });
  // },

  computed: {
    cats: {
      get() {
        return this.$store.state.cats
      }
    }
  },

  components: {
    GetKatt
  }
}
</script>

<template>
  <GetKatt />
  <div class="rutnät">
    <div v-for="cat in cats" :key="cat">
      <ul>
        <li>
          <img :src="cat.image_link" />
          {{ cat.name + ', kommer ursprungligen från: ' + cat.origin }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
img {
  border-radius: 50%;
  height: 80%;
  width: 80%;
  margin: 0 auto;
  padding: 1px;
}

.rutnät {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  max-width: 95%;
  height: auto;
  gap: 5px;
  margin: auto;
  padding: 5px;
}

ul:hover {
  width: 100%;
  height: 100%;
  box-shadow: 0 0 2px 1px rgba(20, 20, 20, 0.5);
}

ul {
  background: rgba(232, 231, 231, 0.618);
  // padding: 5px;
  margin: 5px;
  border-radius: 10px;
  width: 250px;
  height: 250px;
  font-size: smaller;
  text-align: center;
}
</style>
