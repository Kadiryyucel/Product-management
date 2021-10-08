<template>
  <h3>Metaryaller</h3>
  <div class="container-table" v-if="allSavedMaterials">
    <el-table border :data="allSavedMaterials" stripe style="width: 100%">
        <el-table-column v-for="(key,i) of putedHeaders" :key="i" @click="select(i)"
          :prop="headersValueMaterials[i]"
          :label="key"
        />
    </el-table>
  </div>
</template>


<script>
import { useStore } from "vuex";
import { computed ,ref} from "vue";
export default {
  props:{
    option:{
      headers:[]
    }
  },
  setup(props) {
    let headersValueMaterials = ref(["type", "id", "name", "code", "color", "currency", "unit"]);
    let putedHeaders = ref(props.option.headers);
    const store = useStore();
    let allSavedMaterials = ref(["hi","vi"]);
    
    allSavedMaterials = computed({
      get: () => {
        return store.state.materialsFormation.materials;
      },
    });

    return {
      headersValueMaterials,
      allSavedMaterials,
      putedHeaders
    };
  },
};
</script>
<style lang="scss" scoped>
.container-table {
  padding: 40px;
}
</style>