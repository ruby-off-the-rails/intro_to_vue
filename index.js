var app = new Vue({
  el: "#app",
  data: {
    message: "Hello Vue!",
    date: "Monday"
  },
  methods: {
    changeMessage: function() {
      console.log('changing the message....')
      this.message = "something else";
    }
  }
});
