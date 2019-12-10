var app = new Vue({
  el: "#app",
  data: {
    message: "Hello Vue!",
    number1: 0,
    number2: 0,
    number3: 0,
    result: 0
  },
  methods: {
    computeSum: function() {
      console.log("computing sum...");
      // gather up all the values the user has typed in
      this.result = parseInt(this.number1) + parseInt(this.number2) + parseInt(this.number3);

      // add them up
      // show the sum to the user
    }
  }
});
