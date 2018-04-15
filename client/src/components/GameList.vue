<template lang="pug">
  v-container(v-if="item")
    v-layout(row wrap)
      v-flex.white(xs12)
        h4 게임목록
        v-list(xs12)
          v-list-item.white(v-for="(r, k) in item.data" v-bind:key="k")
            v-list-tile(avatar :href="'/game/' + r.id" router ripple)
              v-list-tile-avatar.game-image
                img(v-bind:src="setImageSize(r.box_art_url)")
              v-list-tile-content
                v-list-tile-title(v-html="r.name")
            v-divider(light)
</template>
<style>
.game-image img { border-radius : 0px; }
</style>
<script>
export default {
  data () {
    return {
      item: null
    }
  },
  created () {
    this.fetch()
  },
  methods: {
    fetch () {
      this.$http.get(`${process.env.API}/twitch/game/top`)
      .then(r => {
        this.item = r.data
      })
    },
    setImageSize (url) {
      return url.replace('{width}', '320').replace('{height}', '320')
    }
  }
}
</script>
