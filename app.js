new Vue({
  el: '#app',
  data: {
   name: 'Segun'
  },
  methods: {
  updateName(e){
    console.log(e)
    this.name = e.target.value;
   }
  }
})