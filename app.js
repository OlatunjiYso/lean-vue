new Vue({
  el: '#app',
  data: {
    title: 'Becoming a Vue ninja',
    showRice: true,
    showBeans: true,
    showCoke: true,
    showFanta: true
  },
  methods: {
    toggleRice(){
      this.showRice = !this.showRice 
    },
    toggleBeans(){
      this.showBeans = !this.showBeans
    },
    toggleCoke(){
      this.showCoke = !this.showCoke
    },
    toggleFanta(){
      this.showFanta= !this.showFanta
    }
  }
})