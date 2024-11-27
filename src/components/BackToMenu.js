// 导入Link组件
import { Link } from "react-router-dom";
// 导入BackToMenuStyle样式
import BackToMenuStyle from '../Style/BackToMenu.module.css'
// 定义BackToMenu组件
const BackToMenu = () => {
    // 返回一个div，包含一个Link组件，Link组件的to属性为"/HomePage"，style属性为{ textDecoration: 'none' }，Link组件内部包含两个div，一个为BackToMenuTag，一个为BackToMenuText
    return (
        <div className={BackToMenuStyle.BackToMenuMain}>
            <Link to="/HomePage" style={{ textDecoration: 'none' }}>
                <div className={BackToMenuStyle.BackToMenuTag}></div>
                <div className={BackToMenuStyle.BackToMenuText}>BACK TO MENU</div>
            </Link>
        </div>
    )
}
// 导出BackToMenu组件
export default BackToMenu;