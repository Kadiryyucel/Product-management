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
        editMaterial(state, { model, index }) {
            let materials = state.materials;
            let targetIndex = index;
            if(targetIndex === -1) {throw 'Değiştirilmek istenen metarial bulunamadı'}
            materials[targetIndex] = model;

        },
        removeMaterial(state, index){
            let materials = state.materials;
            let targetIndex = index;
            materials.splice(targetIndex,1);
        }
    }
}
