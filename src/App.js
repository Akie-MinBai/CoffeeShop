// 导入HomePage组件
import HomePage from "./Page/HomePage";
// 导入SelectedCoffee组件
import SelectedCoffee from "./Page/SelectedCoffee";
// 导入BrowserRouter组件
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// 定义App组件
function App() {
  // 返回Router组件，包含Routes组件，Routes组件包含Route组件
  return (
    <Router>
      <Routes>
        {/* // 定义路由，当路径为"/"时，渲染HomePage组件 */}
        <Route path="/" element={<HomePage />} />
        {/* // 定义路由，当路径为"/HomePage"时，渲染HomePage组件 */}
        <Route path="/HomePage" element={<HomePage />} />
        {/* // 定义路由，当路径为"/SelectedCoffee"时，渲染SelectedCoffee组件 */}
        <Route path="/SelectedCoffee" element={<SelectedCoffee />} />
      </Routes>
    </Router>
  );
}

// 导出App组件
export default App;
