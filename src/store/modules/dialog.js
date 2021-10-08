import { ElMessageBox, ElMessage } from 'element-plus'
export default {
    state: {
        content: []
    },
    mutations: {
        remove(state) {
            state.content = []
        },
        new(state,value){
            state.content.push(value);
        }
    },
    actions: {
        show({commit},o){
            show({commit},o)
        },
        permission({commit}, title) {
            title = title || 'dikkat';
            show(commit, {
                title: title,
                template: `<el-button type="text" @click="open">Click to open the Message Box</el-button>`,
                openMessageBox: function () {
                    ElMessageBox.confirm(
                        'proxy will permanently delete the file. Continue?',
                        'Warning',
                        {
                            confirmButtonText: 'OK',
                            cancelButtonText: 'Cancel',
                            type: 'warning',
                        }
                    )
                        .then(() => {
                            ElMessage({
                                type: 'success',
                                message: 'Delete completed',
                            })
                        })
                        .catch(() => {
                            ElMessage({
                                type: 'info',
                                message: 'Delete canceled',
                            })
                        })
                }
            })
        }
    },
}

function show({ commit }, o) {
    o.active = true;

    Object.defineProperty(o, "active", {
        get(){
            return o._active || true;
        },
        set(newValue){
            o._active = newValue;
            if (o._active == false) {
                commit("remove", o)
            }
        }
    })
    new
}