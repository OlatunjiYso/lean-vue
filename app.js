new Vue({
  el: '#app',
  data: {
    title: 'Becoming a vue ninja',
    name: 'John Pelling'
  },
  methods: {
    greet(time) {
      return `Hello ${this.name} ,  good ${time}`
    }
  }
})