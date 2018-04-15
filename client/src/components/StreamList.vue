<template lang="pug">
  v-container(v-if="item")
    v-layout(row v-for="(i, k) in item.data" v-bind:key="k")
      v-card
        img(v-bind:src="setImageSize(i.thumbnail_url)" width="100%")
        v-card-title(primary-title)
          div
            h3.headline.mb-0 {{ i.title }}
</template>

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
      this.$http.get(`${process.env.API}/twitch/game/${this.$route.params.gameId}`)
      .then(r => {
        this.item = r.data
      })
    },
    setImageSize (url) {
      return url.replace('{width}', '720').replace('{height}', '360')
    }
  }
}
</script>
