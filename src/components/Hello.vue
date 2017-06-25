<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <form>
      <input type="text" name="username" v-model="userName"/> <br>
      <input type="text" name="age" v-model="age"/> <br>
      <a href="javascript:;" @click="addUser"> Submit!</a>
    </form>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      userName: '',
      age: ''
    }
  },
  methods: {
    addUser () {
      var name = this.userName
      var age = this.age
      console.log('name: ' + name + ' age: ' + age)
      this.$http.post('/api/user/addUser', {
        username: name,
        age: age
      }, {}).then((response) => {
        console.log(response)
      })
    }
  }
}
</script>
