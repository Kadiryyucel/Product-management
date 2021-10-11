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

    watch(dialogContent.value, () => {
      for (let i = 0; i < dialogContent.value.length; i++) {
        let open = dialogContent.value[i].openMessageBox();
        open();
      }
    });
  },
};
</script>
