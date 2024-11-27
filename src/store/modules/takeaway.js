// 导入createSlice函数和axios库
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// 创建一个名为foods的slice，初始状态为coffeeList和coffeeOrder
const foodsStore = createSlice({
    name: "foods",
    initialState: {
        coffeeList:[],
        coffeeOrder: [],
    },
    // 定义两个reducer函数
    reducers: {
        // 将action.payload添加到coffeeOrder数组中
        getCoffeeOrder(state, action) {
            state.coffeeOrder.push(action.payload);
        },
        // 将action.payload赋值给coffeeList
        setCoffeeList(state, action) {
            state.coffeeList = action.payload
        }
    }
})
// 从slice中解构出getCoffeeOrder和setCoffeeList两个action
const { getCoffeeOrder,setCoffeeList } = foodsStore.actions
// 定义一个异步的action，用于获取coffeeList
const getCoffeeList = () => {
    return async (dispatch) => {
        // 发送GET请求，获取数据
        const res = await axios.get("http://localhost:3004/index")
        // 调用setCoffeeList action，将获取到的数据赋值给coffeeList
        dispatch(setCoffeeList(res.data))
    }
}
const foodsReducer = foodsStore.reducer
export { getCoffeeOrder,getCoffeeList }
export default foodsReducer