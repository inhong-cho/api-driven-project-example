<template lang="pug">
  div#app
    v-toolbar.secondary(dark fixed)
        v-toolbar-side-icon(light href="/" router ripple)
    main
      v-slide-x-transition(mode="out-in")
        router-view
</template>

<script>
export default {
  name: 'app'
}
</script>
