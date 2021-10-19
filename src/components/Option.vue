<template>
  <el-card
    class="option-card"
    style="
      display: flex;
      justify-content: flex-end;
      height: 10%;
      bottom: 0px;
      align-items: center;
      width: 100%;
    "
  >
    <div class="card-content">
      <el-button @click="remove()">Sil</el-button>
      <div class="content">
        <el-button
          type="primary"
          @click="btnSave(save)"
          :loading="state === 'wait' ? true : false"
          >Kaydet</el-button
        >
        <el-button @click="cencel()">Vazgeç</el-button>
      </div>
    </div>
  </el-card>
</template>

<script>
import { defineComponent, ref, watch, onMounted } from "vue";
import {useRouter} from "vue-router"
import {useStore} from "vuex"

export default defineComponent({
  props: { save: Function, cencel: Function, remove: Function },
  setup() {
    let store = useStore();
    let router = useRouter();
    let state = ref("done");
    onMounted(() => {
      router.afterEach((to, from) => {
        if (from.fullPath !== to.fullPath) {
          state.value = "rest";
        }
      });
    });
    async function btnSave(save) {
      let checkRecord = await save();
      state.value = "wait";
      if (checkRecord) {
        setTimeout(() => {
          state.value = "done";
          store.dispatch("informing",{content:"Kayıt işlemi başarıyla gerçekleşti"});
        }, 200);
      } else if (!checkRecord) {
        state.value = "error";
        store.dispatch("informing",{content:"Kayıt işlemi gerçekleşmedi",title:"Dikkat ",color:"red"});
      }
    }

    watch(state, () => headerReaction(state.value));

    function headerReaction(state) {
      let header = document.querySelector(".el-page-header");
      let headerAfter = document.head.appendChild(
        document.createElement("style")
      );
      switch (state) {
        case "error":
          header.style.setProperty("--color-header-border", "red");
          headerAfter.innerHTML = ".el-page-header::after{display:none;}";
          break;
        case "wait":
          headerAfter.innerHTML =
            ".el-page-header::after{animation :waitRecord 1s linear 0s infinite;display:block;}";
          break;
        case "done":
          header.style.setProperty("--color-header-border", "green");
          headerAfter.innerHTML = ".el-page-header::after{display:none;}";
          break;
        default:
          header.style.setProperty("--color-header-border", "gray");
          headerAfter.innerHTML = ".el-page-header::after{display:none;}";
          break;
      }
    }
    return { btnSave, state };
  },
});
</script>
<style lang="scss" scoped>
.container {
  width: 100%;
  position: absolute;
  bottom: 0;
}
.card-content {
  display: flex;
  justify-content: space-between;
  flex: 10;
}
</style>
<style lang="scss">
.option-card > .el-card__body {
  width: 100%;
}
</style>
