<template>
  <div class="page-container" style="height: 100%">
    <el-page-header content="detail" ref="header" />
    <div style="height: 100%; margin: 10px">
      <el-drawer v-model="drawer" direction="ltr">
        <ul style="list-style-type: none; padding: 0px">
          <li
            :close-on-click-modal="!toggleMask"
            class="menuButton"
            v-for="(item, index) in menu"
            :key="index"
            @click="openInnerDrawer(item.child)"
          >
            <font-awesome-icon size="2x" :icon="['fas', item.ico]" />
            <span v-show="true" style="margin-left: 20px">{{ item.text }}</span>
          </li>
        </ul>
        <el-drawer
          :close-on-click-modal="toggleMask"
          :append-to-body="true"
          direction="ltr"
          v-model="innerDrawer"
          z-index="1"
        >
          <ul
            style="
              list-style-type: none;
              padding: 0px;
              display: flex;
              align-items: flex-end;
              flex-direction: column;
              text-align: right;
              font-family: Arial, Helvetica, sans-serif;
            "
          >
            <li
              class="innerMenuButton"
              v-for="(childItem, index) in innerDrawerContext"
              :key="index"
              @click="routerUrl(childItem)"
            >
              <span v-show="true" style="padding: 5px; margin: 0px">{{
                childItem.text
              }}</span>
            </li>
          </ul>
        </el-drawer>
      </el-drawer>
      <div style="position: relative; margin: 0px; height: 100%">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, reactive, onMounted } from "vue";
import { useRouter } from "vue-router";

export default {
  setup() {
    const router = useRouter();

    let menu = reactive([
      { ico: "tshirt", text: "Ürünler", to: "Home" },
      {
        ico: "swatchbook",
        text: "Araçlar",
        child: [
          { text: "Materyaller", to: "MaterialsAll" },
          { text: "Oluştur", to: "MaterialsNew" },
        ],
      },
    ]);

    const { menuVisible, toggleMenu } = drawerMenu();
    const { routerUrl, openInnerDrawer, innerDrawerContext, innerDrawer } =
      InnerDrawerMenu();

    let drawer = ref(false);
    let toggleMask = ref(false);

    onMounted(() => {
      window.addEventListener("mousemove", (e) => {
        if (e.screenX < 2) {
          drawer.value = true;
        }
      });
      window.addEventListener("click", (e) => {
        let drawers = document.querySelectorAll(".el-drawer");
        let target = e.target;
        for (let i = 0; i < drawers.length; i++) {
          let el = drawers[i];
          if (target !== el || !el.contains(target)) {
            innerDrawer.value
              ? (innerDrawer.value = false)
              : (drawer.value = false);
            return;
          }
        }
      });
    });

    return {
      toggleMask,
      routerUrl,
      openInnerDrawer,
      innerDrawerContext,
      innerDrawer,
      drawer,
      menu,
      menuVisible,
      toggleMenu,
    };
    function InnerDrawerMenu() {
      let innerDrawerContext = ref([]);
      let innerDrawer = ref(false);
      function routerUrl(item) {
        router.push({ name: item.to });
      }
      function openInnerDrawer(menuChild) {
        innerDrawer.value = !innerDrawer.value;
        innerDrawerContext.value = menuChild;
        toggleMask.value = !toggleMask.value;
      }
      return {
        routerUrl,
        openInnerDrawer,
        innerDrawerContext,
        innerDrawer,
      };
    }
  },
};

function drawerMenu() {
  let menuVisible = ref(false);
  const toggleMenu = () => {
    menuVisible.value = !menuVisible.value;
  };

  return { menuVisible, toggleMenu };
}
</script>

<style lang="scss">
:root {
  --color-header-border: rgb(179, 177, 177);
}
.el-page-header {
  border-bottom: 5px solid var(--color-header-border);
  margin-bottom: 10px !important;
  box-shadow: 0px 0px 5px 2px rgb(202, 202, 202) inset;
  padding: 10px;
  position: relative;
  &::after {
    content: "";
    background-color: yellow;
    height: 5px;
    width: 10%;
    left: -5px;
    bottom: -5px;
    position: absolute;
    display: none;
  }
}
@keyframes waitRecord {
  to {
    left: -5px;
  }
  from {
    left: 1200px;
  }
}
.el-drawer {
  width: 100% !important;
  box-shadow: 0 0 0 10px 50px gray !important;
  border-right: 1px solid gray;
}
.el-overlay {
  width: 16%;
  justify-content: flex-end;
}
body > .el-overlay {
  width: 28% !important;
}
.md-app {
  min-height: 350px;
  border: 1px solid rgba(#000, 0.12);
}

// Demo purposes only
.md-drawer {
  width: 230px;
  max-width: calc(100vw - 125px);
}
.menuButton {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  cursor: pointer;
  font-family: Arial, Helvetica, sans-serif;
  &:hover {
    background-color: rgb(223, 223, 223);
  }
}
.innerMenuButton {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  margin: 10px;
  margin: 0px;
  font-size: 20px;
  margin: 5px 0px;
  cursor: pointer;
  &:hover {
    background-color: rgb(223, 223, 223);
  }
}
.md-list-item-content {
  display: flex !important;
  flex-direction: column !important;
  justify-content: center !important;
  align-items: center;
}
</style>