// 导入SideBar组件
import SideBar from "../components/SideBar";
// 导入SreachBar组件
import SreachBar from "../components/SreachBar";
// 导入OrderShowBar组件
import OrderShowBar from "../components/OrderShowBar";
// 导入CoffeeList组件
import CoffeeList from "../components/CoffeeList";
// 定义HomePage组件
const HomePage = () => {
    // 返回组件
    return (
        <>
            {/* 渲染SideBar组件 */}
            <SideBar />
            {/* 渲染SreachBar组件 */}
            <SreachBar />
            {/* 渲染OrderShowBar组件 */}
            <OrderShowBar />
            {/* 渲染CoffeeList组件 */}
            <CoffeeList />
        </>

    )
}
// 导出HomePage组件
export default HomePage;