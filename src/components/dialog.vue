<template>
  <div></div>
</template>

<script>
import { computed, watch } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    let store = useStore();
    let dialogContent = computed(() => store.state.dialog.content);
    console.log(dialogContent.value);

    watch(dialogContent.value, () => {
      for (let i = 0; i < dialogContent.value.length; i++) {
        let {openVn} = dialogContent.value[i].openMessageBox();
        openVn();
      }
    });
  },
};
</script>
