<template>
<div>
  <h1>{{ post.title }}}</h1>
  <div>
    <p>{{ post.content }}</p>
    <span>{{ post.author }}</span>
  </div>
</div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      require: True,
    }
  }
}
</script>