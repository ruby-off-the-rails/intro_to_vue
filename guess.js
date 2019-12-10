var app = new Vue({
  el: "#app",
  data: {
    message: "Hello Vue!",
    correctNumber: 32,
    userGuess: null
  },
  methods: {
    checkGuess: function() {
      console.log('in checking guess');
      // find the guess
      // this.userGuess
      // find the answer
      // this.correctNumber
      // compare them
      if (this.userGuess > this.correctNumber) {
        this.message = "your guess is too high"
      } else if (this.userGuess < this.correctNumber) {
        this.message ="your guess is too low"
      } else {
        this.message ="your guess is correct"
      }
    }
  }
});
