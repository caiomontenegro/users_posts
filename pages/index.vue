<template>
  <div class="content">
    <div>
      <h1>Welcome to Users Posts</h1>
    </div>
    <p>Clique no título do post para lê-lo.</p>
    <user-post v-for="post in posts" :key="post.id" :post="post"></user-post>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [
        {id: '01', title: 'Teste de Front-End', content: 'Este é um teste de front-end', author: 'Caio Montenegro'},
        {id: '02', title: 'Teste de Back-End', content: 'Este é um teste de back-end', author: 'Silvana Montenegro'},
        {id: '03', title: 'Teste de BI', content: 'Este é um teste de business intelligence', author: 'Evandro Francisco'},
        {id: '04', title: 'Teste de Machinne Learning', content: 'Este é um teste de Machinne Learning', author: 'Lucas Montenegro'}
      ]
    }
  }
}
</script>

<style lang="scss">

h1 {
  text-align: center;
}
</style>