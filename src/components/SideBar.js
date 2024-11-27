// 导入SideBar的样式
import SideBarStyle from '../Style/SideBar.module.css'
// 定义SideBar组件
const SideBar = () => {
    // 返回一个div，包含一个按钮和多个选项
    return (
        <div className={SideBarStyle.SideBarMain}>
            {/* // 顶部按钮 */}
            <button className={`${SideBarStyle.btn} ${SideBarStyle.btnTop}`} type='button'></button>
            {/* // 选项1 */}
            <div className={SideBarStyle.item}>
                <input type='radio' value={'cappuccino'} name='coffee' defaultChecked></input>
                <p>Cappuccino</p>
            </div>
            {/* // 选项2 */}
            <div className={SideBarStyle.item}>
                <input type='radio' value={'latte'} name='coffee'></input>
                <p>Latte</p>
            </div>
            {/* // 选项3 */}
            <div className={SideBarStyle.item}>
                <input type='radio' value={'Americano'} name='coffee'></input>
                <p>Americano</p>
            </div>
            {/* // 选项4 */}
            <div className={SideBarStyle.item}>
                <input type='radio' value={'Expresso'} name='coffee'></input>
                <p>Expresso</p>
            </div>
            {/* // 选项5 */}
            <div className={SideBarStyle.item}>
                <input type='radio' value={'Flat White'} name='coffee'></input>
                <p>Flat White</p>
            </div>
            <button className={`${SideBarStyle.btn} ${SideBarStyle.btnBottom}`} type='button'></button>
        </div>
    )
}
export default SideBar;