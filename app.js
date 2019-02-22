new Vue({
  el: '#app',
  data: {
    x: 0,
    y:0
  },
  methods: {
  handlehover(e){
     this.x = e.offsetX;
     this.y = e.offsetY;
   }
  }
})