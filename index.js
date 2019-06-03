var app6 = new Vue({
  el: "#app-6",
  data: {
    message: "",
    message1: "Page loaded at " + new Date().toLocaleString()
  },
  methods: {
    reverseMessage: function() {
      this.message = this.message
        .split("")
        .reverse()
        .join("");
    }
  }
});

Vue.component("todo-item", {
  props: ["todo"],
  template: "<li>{{ todo.text }}</li>"
});

var app7 = new Vue({
  el: "#app-7",
  data: {
    groceryList: [
      { id: 0, text: "Vegetables" },
      { id: 1, text: "Cheese" },
      { id: 2, text: "Whatever else humans are supposed to eat" }
    ]
  }
});
