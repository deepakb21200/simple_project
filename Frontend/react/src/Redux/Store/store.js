import { createStore } from "redux";
import reducerfn from "../Reducer Function/reducerfn";



let store = createStore(reducerfn)

export default store