const app = Vue.createApp({
  //   template: "<h2>hello brother</h2>",
  data() {
    return {
      dataShow: true,
      title: "sonjoy barmon",
      age: 20,
      x: 0,
      y: 0,
    };
  },

  methods: {
    handleChange(data) {
      //   this.title = "anik vai";
      this.title = data;
    },
    handleButton() {
      this.dataShow = !this.dataShow;
    },
    handleEvent() {
      console.log("event id done!");
    },

    handleMouseMove(e) {
      this.x = e.offsetX;
      this.y = e.offsetY;
    },
  },
});

app.mount("#app");
