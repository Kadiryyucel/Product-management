export default {
    state: {
        namespaced: true,
        materials: [],
        namesMaterials: [],
        count: 0,
    },
    mutations: {
        addMaterial(state, newValue) {
            state.materials.push(newValue);
        },
        addMaterialName(state, newValue) {
            state.namesMaterials.push({ value: newValue, label: newValue })
        },
        deleteMaterial(state, i) {
            state.materials.splice(i, 1);
        },
        editMaterial(state, { model, id }) {
            let materials = state.materials;
            let targetIndex = state.materials.findIndex((material)=>material.id === id);
            materials[targetIndex] = model;

        }
    }
}
