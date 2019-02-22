new Vue({
  el: '#app',
  data: {
    title: 'Becoming a vue ninja',
    name: 'John Pelling',
    url: 'www.youtube.com',
    classes: ['one', 'two']
  },
  methods: {
    greet(time) {
      return `Hello ${this.name} ,  good ${time}`
    }
  }
})