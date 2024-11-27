// 导入BackToMenu组件
import BackToMenu from "../components/BackToMenu";
// 导入OrderShowBar组件
import OrderShowBar from "../components/OrderShowBar";
// 导入BackGround组件
import BackGround from "../components/BackGround";
// 导入SelectCoffee组件
import SelectCoffee from "../components/SelectCoffee";
// 定义SelectedCoffee函数组件
function SelectedCoffee() {
    // 返回组件结构
    return (
        <>
            {/* 返回BackToMenu组件 */}
            <BackToMenu />
            {/* 返回OrderShowBar组件 */}
            <OrderShowBar/>
            {/* 返回BackGround组件 */}
            <BackGround />
            {/* 返回SelectCoffee组件 */}
            <SelectCoffee/>
        </>
    )
}
// 导出SelectedCoffee组件
export default SelectedCoffee;