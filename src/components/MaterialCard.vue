<template>
  <div>
    <el-card
      class="box-card material"
      v-for="(material, i) of materials"
      :key="i"
      style="margin: 5px; position: relative; overflow: visible"
    >
      <div class="deleteMaterial" @click="toggleMenu()">
        <div class="ico" ref="ico">
          <font-awesome-icon size="2x" icon="ellipsis-h" />
        </div>
        <dropdown-menu v-show="showMenu">
          <li @click="deleteMaterial(i)">Sil</li>
          <li @click="selectMaterial(i)">Düzenle</li>
        </dropdown-menu>
      </div>
      <h3 style="color: gray">Metaryal</h3>
      <div v-for="(values, index) of material.obj" :key="index">
        <el-row>
          <el-col :span="24">
            <div v-for="(valueMaterial, c) of values.arrSavedValues" :key="c">
              <div>{{ valueMaterial.text }}</div>
              <el-input
                :modelValue="valueMaterial.value"
                @update:modelValue="valueMaterial.value = $event"
              >
              </el-input>
            </div>
          </el-col>
        </el-row>
      </div>
    </el-card>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  props: { materials: { default: [] }, index: { type:Function } },
  setup(props) {
    const { idMaterial, showMenu, deleteMaterial, toggleMenu } =
      useMaterials();

    function selectMaterial(i) {
      let el = document.getElementsByClassName("material")[i];
      el.style.zIndex = 9;
      props.index(i);
    }
    return {

      idMaterial,
      showMenu,
      selectMaterial,
      deleteMaterial,
      toggleMenu,
    };
  },
};
function useMaterials() {
  let showMenu = ref(false);

  function selectMaterial(i) {
    let el = document.getElementsByClassName("material")[i];
    el.style.zIndex = 9;
  }
  function deleteMaterial(i) {
    this.$store.commit("deleteMaterial", i);
  }
  function toggleMenu() {
    showMenu.value = !showMenu.value;
  }

  return {
    showMenu,
    selectMaterial,
    deleteMaterial,
    toggleMenu,
  };
}
</script>