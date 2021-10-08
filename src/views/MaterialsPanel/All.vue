<template>
  <grid :option="option"></grid>
</template>

<script>
import { useRouter } from "vue-router";
import {ref} from "vue"
export default {
  setup() {
    let router = useRouter();
    let option = ref({
      select: function (materialId) {
        router.push({ name: "MaterialsEdit", params: { id: materialId } });
      },
      headers: ["Tip", "Id", "İsim", "Code", "Renk", "ParaBirimi", "Birim"],
    });
    return {
      option,
    };
  },
};
</script>