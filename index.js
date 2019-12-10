var app = new Vue({
  el: "#app",
  data: {
    message: "Hello Vue!",
    date: "Monday",
    showInfo: false
  },
  methods: {
    changeMessage: function() {
      console.log('changing the message....');
      this.message = "something else";
    },
    toggleInfo: function() {
      console.log('toggling the info...');
      if (this.showInfo === true) {
        this.showInfo = false;
      } else {
        this.showInfo = true;
      }
    }
  }
});




// make a variable
// write a new function
// change a variable
// map a variable onto a text box


