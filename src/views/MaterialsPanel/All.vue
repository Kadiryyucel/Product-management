<template>
  <grid :option="option"></grid>
</template>

<script>
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { ref } from "vue";
export default {
  setup() {
    let router = useRouter();
    let store = useStore();
    let option = ref({
      select: function (i, rowValues) {
        router.push({
          name: "MaterialsEdit",
          params: { index: i, row: JSON.stringify(rowValues) },
        });
      },
      remove: function (i) {
        store.commit("removeMaterial",i)
      },
      headers: ["Tip", "Id", "İsim", "Code", "Renk", "ParaBirimi", "Birim"],
    });
    return {
      option,
    };
  },
};
</script>