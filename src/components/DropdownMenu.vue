<template>
  <div class="menuContainer" ref="menuContainer">
    <ul class="menu" ref="menu" style="padding: 0; list-style-type: none">
      <slot></slot>
    </ul>
  </div>
</template>

<script>

export default {
  props: { option: { default: [] }, value: { default: false } },
  setup() {
      
  },
};
</script>
<style lang="scss" scoped>
.menuContainer {
  position: absolute;
  background-color: white;
  box-shadow: 0px 0px 5px 1px gray;
}
</style>