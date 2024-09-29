import Consultas from "../tabs/Consultas";
import Explorar from "../tabs/Explorar";
import Perfil from "../tabs/Perfil";
import Principal from "../tabs/Principal";

const tabsData = [
  {
    name: "Principal",
    component: Principal,
    icon: "home",
  },
  {
    name: "Consultas",
    component: Consultas,
    icon: "calendar",
  },
  {
    name: "Explorar",
    component: Explorar,
    icon: "search",
  },
  {
    name: "Perfil",
    component: Perfil,
    icon: "person",
  },
];
export default tabsData;
