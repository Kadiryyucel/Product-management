import option from "./Option"
import dropdown from "./DropdownMenu"
import materialCard from "./MaterialCard"
import grid from "./Grid"
import dialog from "./Dialog"
export default {
    install: function (Vue) {
        Vue.component("option-menu",option);
        Vue.component("dropdown-menu",dropdown);
        Vue.component("material-card",materialCard);
        Vue.component("grid",grid)
        Vue.component("Y-dialog",dialog)
    }
}
