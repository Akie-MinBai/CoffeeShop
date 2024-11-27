// 导入configureStore函数和foodsReducer
import { configureStore } from "@reduxjs/toolkit";
import foodsReducer from "./modules/takeaway";
// 使用configureStore函数创建store，并将foodsReducer作为reducer
const store = configureStore({
    reducer: {
        foods: foodsReducer,
    },
})
// 导出store
export default store;