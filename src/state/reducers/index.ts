import cellsReducer from "./cellsReducer";
import { combineReducers } from "redux";


const reducers = combineReducers({
    cells: cellsReducer //reducers will have a state called cells and it will be the result of calling cellsReducer
});

export default reducers;
 

export type RootState = ReturnType<typeof reducers>; // applying types to reducers,this is a type definition that will be used in the store.ts file
