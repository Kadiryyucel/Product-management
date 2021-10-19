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

.error {
  color: rgb(214, 2, 2);
}
</style>

