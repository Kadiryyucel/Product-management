<template>
  <navigation >
    <router-view />
  </navigation>
  <Y-dialog></Y-dialog>
</template>

<script>
import Navigation from "./views/Navigation.vue";

export default {
  components: { Navigation},
  setup() {
    
  },
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.el-overlay{
  background-color: transparent !important;
}
</style>
