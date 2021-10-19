<template>
  <h3>Metaryaller</h3>
  <div class="container-table" v-if="allSavedMaterials">
    <el-table border :data="allSavedMaterials.filter((data)=> !search || data.name.toLowerCase().includes(search.toLowerCase()))" style="width: 100%">
      <el-table-column
        v-for="(v, i) of putedHeaders"
        :key="i"
        @click="select"
        :prop="headersPropsMaterials[i]"
        :label="v"
      />
      <el-table-column align="right" width="160px">
        <template #header>
          <el-input v-model="search" size="mini" placeholder="Type to search" />
        </template>
        <template #default="scope">
          <el-button size="mini" @click="option.select(scope.$index, scope.row)"
            >Edit</el-button
          >
          <el-button
            size="mini"
            type="danger"
            @click="option.remove(scope.$index)"
            >Delete</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>


<script>
import { useStore } from "vuex";
import { computed, ref } from "vue";
export default {
  props: {
    option: {
      headers: [],
      headersPropsMaterials:[
      "type",
      "id",
      "name",
      "code",
      "color",
      "currency",
      "unit",
    ]
    },
  },
  setup(props) {
    const store = useStore();

    let putedHeaders = ref(props.option.headers);
    let search = ref("");
    let allSavedMaterials = ref([]);

    allSavedMaterials = computed({
      get: () => {
        return store.state.materialsFormation.materials;
      },
    });

    return {
      search,
      allSavedMaterials,
      putedHeaders,
    };
  },
};
</script>
<style lang="scss" scoped>
.container-table {
  padding: 40px;
}
</style>