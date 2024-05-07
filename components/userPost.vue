<template>
  <div v-if="post" class="post">
    <div class="post__title">
      <a href="/post">
        <span class="post__textFormat">{{ post.title }}</span>
      </a>
    </div>
    <div class="post__content"><span class="post__textFormat">{{ post.content }}</span></div>
    <div class="post__author"><span class="post__textFormat">{{ post.author }}</span></div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    }
  }
}
</script>

<style lang="scss">

.post {
  margin-bottom: 20px;
  border: solid 1px white;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  
  &__title {
    border-bottom: solid 1px white;
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