// 导入SreachBarStyle样式
import SreachBarStyle from '../Style/SreachBar.module.css';
// 定义SreachBar组件
const SreachBar = () => {
    // 返回一个div，包含一个input和一个button
    return (
        <div className={SreachBarStyle.searchBarMain}>
            <input type='text' placeholder='Browse your favourite coffee here..'></input>
            <button type='submit'></button>
        </div>
    )
}
// 导出SreachBar组件
export default SreachBar;