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
        permission({commit}) {
            show({commit}, {
                openMessageBox: function () {
                      const openVn = () => {
                        ElMessage({
                          message: h('p', null, [
                            h('span', null, 'Message can be '),
                            h('i', { style: 'color: teal' }, 'VNode'),
                          ]),
                        })
                      }
                  
                      return {
                        openVn,
                      }
                }
            })
        }
    },
}

function show({ commit }, o) {
    console.log("mer")
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