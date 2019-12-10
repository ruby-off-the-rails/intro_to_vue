var app = new Vue({
  el: "#app",
  data: {
    message: "Hello Vue!",
    date: "Monday",
    showInfo: false,
    bagels: ["plain", "egg", "everything"],
    newBagel: ""
  },
  methods: {
    changeMessage: function() {
      console.log('changing the message....');
      this.message = "something else";
    },
    toggleInfo: function() {
      console.log('toggling the info...');
      this.showInfo = !this.showInfo;
      // if (this.showInfo === true) {
      //   this.showInfo = false;
      // } else {
      //   this.showInfo = true;
      // }
    },
    addBagel: function() {
      console.log('adding a bagel...');
      console.log(this.newBagel);
      this.bagels.push(this.newBagel);
    }
  }
});




// make a variable
// write a new function
// change a variable
// map a variable onto a text box


