<template>
  <materials v-model:modelValue="o"><option-menu :save="save"></option-menu></materials>
</template>

<script>
import materials from "./Materials.vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import { ref } from "vue";


import {Validator} from "../../utilty/Validator";
export default {
  components: { materials: materials },
  setup() {
    let store = useStore();
    let router = useRoute();

    let o = ref(JSON.parse(router.params.row));

    async function save() {
      let check = Validator(o.value);
      console.log(check)
      if (check) {
        try{
          store.commit("editMaterial", {model:o.value,index:router.params.index});
        }
        catch(e){
          console.error(e)
          return false;
        }
        return true;
      }
      return false;
    }
    return {
      o,
      save
    };
  },
};
</script>