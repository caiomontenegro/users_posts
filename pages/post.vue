<template>
<div>
  <h1>{{ getStatePost.title}}</h1>
  <div>
    <p>{{ getStatePost.content }}</p>
    <span>{{ getStatePost.author }}</span>
  </div>
</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      getStatePost: 'getStatePost'
    })
  },
}
</script>