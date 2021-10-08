<template>
  <div class="home">
    <el-row>
      <el-col
        :span="12"
        style="display: flex; justify-content: flex-start; align-items: center"
      >
        <div class="addButton" @click="changeOpenOrClose()">
          <div v-show="!addMaterial">
            <font-awesome-icon size="2x" icon="plus" />
          </div>
          <div v-show="addMaterial">
            <font-awesome-icon size="2x" icon="minus" />
          </div>
        </div>
        <div v-show="addMaterial">
          <el-select v-model="value" placeholder="Select">
            <el-option
              v-for="item in allSavedMaterialsName"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
          <el-button
            style="height: 30px; width: 30px; padding: 5px; margin-left: 5px"
            type="primary"
            >Ok</el-button
          >
        </div>
      </el-col>
    </el-row>
    <el-table
      :data="tableData"
      style="width: 100%"
      :row-class-name="tableRowClassName"
    >
      <el-table-column prop="date" label="Date" width="180"> </el-table-column>
      <el-table-column prop="name" label="Name" width="180"> </el-table-column>
      <el-table-column prop="address" label="Address"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { ref,  computed } from "vue";
export default {
  setup() {
    const store = useStore();
    const { addMaterial, changeOpenOrClose } = createMaterials();

      let allSavedMaterialsName = computed(
        () => store.state.materialsFormation.namesMaterials
      );

    return {
      allSavedMaterialsName,
      addMaterial,
      changeOpenOrClose
    };
  },
};
function createMaterials() {
  const addMaterial = ref(true);

  const changeOpenOrClose = () => {
    addMaterial.value = !addMaterial.value;
  };
  return { addMaterial, changeOpenOrClose };
}
</script>
<style lang="scss" scoped>
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
</style>
