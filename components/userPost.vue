<template>
  <div v-if="post" class="post">
      <a href="/post">
        <div class="post__title" @click="accessPost">
          <span class="post__textFormat">{{ post.title }}</span>
        </div>
      </a>
    <div class="post__content"><span class="post__textFormat">{{ post.content }}</span></div>
    <div class="post__author"><span class="post__textFormat">{{ post.author }}</span></div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: {
    post: {
      type: Object,
      required: true,
    }
  },
  methods: {
    accessPost() {
      this.$store.commit('updatePost', this.post)
    }
  },
  computed: {
    ...mapGetters({
      getStatePost: 'getStatePost'
    })
  },
}
</script>

<style lang="scss">

.post {
  box-shadow: 0px 10px 20px black;
  color: black;
  background-color: white;
  margin-bottom: 20px;
  border: solid 1px rgb(136, 131, 131);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  
  &__title {
    border-bottom: solid 1px rgb(202, 192, 192);
    color: black;
  }

  &__content {
  }
  
  &__author {
    text-align: end;
  }

  &__textFormat {
    padding: 4px;
  }
}
</style>