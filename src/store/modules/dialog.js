import {  ElMessage } from 'element-plus'
import {h} from "vue"
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
        informing({commit},{content,title,color="teal"}) {
            show({commit}, {
                openMessageBox: function () {
                      const openVn = () => {
                        ElMessage({
                          message: h('p', null, [
                            h('i', { style: `color:${color}` }, title || ""),
                            h('span', null, content),
                          ]),
                        })
                      }
                      return openVn
                }
            })
        }
    },
}

function show({ commit }, o) {

    Object.defineProperty(o, "active", {
        get(){
            return true;
        },
        set(newValue){
            o.activee = newValue;
            if (o.active == false) {
                commit("remove", o)
            }
        }
    });
    o.close = function(){
        o.active = false;
        return
    }

    if(o.active) commit("new",o)
}