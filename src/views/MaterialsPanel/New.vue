<template>
  <materials v-model:modelValue="o"
    ><option-menu :save="save"></option-menu
  ></materials>
</template>


<script>
import { useStore } from "vuex";
import { defineComponent, ref } from "vue";
import materials from "./Materials.vue";
import { Validator } from "../../utilty/Validator";

export default defineComponent({
  components: { materials: materials },
  setup() {
    const store = useStore();
    let o = ref({
      type: "",
      id: 0,
      name: "",
      code: 0,
      color: "",
      currency: 0,
      unit: "",
    });

    async function save() {
      let check = Validator(o.value);
      if (check) {
        store.commit("addMaterial", o.value);
        store.commit("addMaterialName", o.value.name);
        return true;
      }
      return false;
    }

    return {
      save,
      o,
    };
  },
});
</script>
<style lang="scss">
.noActive {
  display: none;
}
.active {
  display: flex;
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background-color: black;
  opacity: 0.5;
  z-index: 5;
}
li {
  cursor: pointer;
  padding: 4px 16px;
  &:hover {
    background-color: rgb(209, 208, 208);
  }
}
.deleteMaterial {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.ico {
  cursor: pointer;
  &:hover {
    transform: scale(0.9);
  }
}
.addButton {
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  background-color: white;
  border: 1px solid black;
  border-radius: 100px;
  flex-shrink: 0;
  &:hover {
    transform: scale(0.9);
  }
}
.error {
  color: rgb(214, 2, 2);
}
</style>

