
<template>
  <div style="positon: relative; height: 100%">
    <div style="min-height: 100%; display: flex; flex-direction: columns">
      <div
        style="
          display: flex;
          position: relative;
          margin-bottom: 80px;
          flex-wrap: wrap;
          justify-content: center;
        "
      >
        <el-card
          class="box-card"
          style="flex-shrink: 0; margin: 5px; max-width: 400px"
        >
          Tipi
          <el-row>
            <el-col :span="24">
              <el-input
                class="materialInput"
                placeholder="Please input"
                v-model="model.type"
                type
              ></el-input>
            </el-col>
          </el-row>
          Nitelikeri
          <el-row>
            <el-col :span="12">
              Id
              <el-input
                class="materialInput"
                placeholder="Please input"
                v-model="model.id"
                id
              ></el-input>
            </el-col>
            <el-col :span="12">
              Adı
              <el-input
                class="materialInput"
                placeholder="Please input"
                v-model="model.name"
                name
              ></el-input>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              Code
              <el-input
                class="materialInput"
                placeholder="Please input"
                v-model="model.code"
                code
              ></el-input>
            </el-col>
            <el-col :span="12">
              Renk
              <el-input
                class="materialInput"
                placeholder="Please input"
                v-model="model.color"
                color
              ></el-input>
            </el-col>
          </el-row>
          Maliyeti
          <el-row>
            <el-col :span="12">
              Fiyat
              <el-input
                class="materialInput"
                placeholder="Please input"
                v-model="model.currency"
                currency
              >
              </el-input>
            </el-col>
            <el-col :span="12">
              Birim
              <el-input
                class="materialInput"
                placeholder="Please input"
                v-model="model.unit"
                unit
              ></el-input>
            </el-col>
          </el-row>
        </el-card>
      </div>
    </div>
    <slot></slot>
  </div>
</template>
<script>
import { defineComponent, watch, ref } from "vue";

export default defineComponent({
  props: {
    modelValue: {
      type: Object,
      default: () => ({
        type: "",
        id: 0,
        name: "",
        code: 0,
        color: "",
        currency: 0,
        unit: "",
      }),
    },
  },
  setup(props, { emit }) {
    
    let model = ref(props.modelValue);
    watch(model.value,()=>{
      emit("update:modelValue",model.value)
    })

    return {
      model,
    };
  },
});
</script>
<style lang="scss">
.noActive {
  display: none;
}
.active {
  display: flex;
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background-color: black;
  opacity: 0.5;
  z-index: 5;
}
li {
  cursor: pointer;
  padding: 4px 16px;
  &:hover {
    background-color: rgb(209, 208, 208);
  }
}
.deleteMaterial {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.ico {
  cursor: pointer;
  &:hover {
    transform: scale(0.9);
  }
}
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
.error {
  color: rgb(214, 2, 2);
}
</style>

