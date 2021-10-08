<template>
  <materials :model="o"><option-menu :save="save"></option-menu></materials>
</template>

<script>
import materials from "./Materials.vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import { computed, reactive } from "vue";

import {onMounted,toRefs} from "vue"
import {Validator} from "../../utilty/Validator";
export default {
  components: { materials: materials },
  setup() {
    let store = useStore();
    let router = useRoute();
   
    let materials = computed(() => store.state.materialsFormation.materials);
    let o = reactive({});
    function selectedMaterialsId() {
      materials.value.forEach((material) => {
        if (material.id === router.params.id) {
          o.value = material;
          return;
        }
      });
    }
    onMounted(()=>{selectedMaterialsId()});

    function save() {
      let check = Validator(o);
      if (check) {
        store.commit("editMaterial", {model:o,id:router.params.id});
      }
      return
    }
    return {
      ...toRefs(o),
      save
    };
  },
};
</script>