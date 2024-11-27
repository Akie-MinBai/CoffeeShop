// 导入CoffeeListStyle样式
import CoffeeListStyle from '../Style/CoffeeList.module.css'
// 导入Link组件
import { Link } from 'react-router-dom'
// 导入useSelector和useDispatch钩子
import { useSelector, useDispatch } from 'react-redux'
// 导入useEffect钩子
import { useEffect } from 'react'
// 导入getCoffeeList函数
import { getCoffeeList } from '../store/modules/takeaway'

// 定义CoffeeList组件
const CoffeeList = () => {
    // 使用useDispatch钩子获取dispatch函数
    const dispatch = useDispatch()
    // 使用useSelector钩子获取coffeeList
    const { coffeeList } = useSelector(state => state.foods)
    // 使用useEffect钩子，在组件挂载时调用getCoffeeList函数
    useEffect(() => {
        dispatch(getCoffeeList())
    }, [dispatch])
    // 定义CoffeeMap变量，值为coffeeList
    const CoffeeMap = coffeeList
    // 返回组件内容
    return (
        <div className={CoffeeListStyle.CoffeeListMain}>
        {/* 渲染coffee列表 */}
            {CoffeeMap.map(item => {
                return (
                    <div className={CoffeeListStyle.CoffeeItem} key={item.url}>
                        <div className={CoffeeListStyle.CoffeeItemImg} style={{ backgroundImage: `url(${item.url})` }} >
                            <Link to={"/SelectedCoffee?name=" + item.name + "&price=" + item.price}><button></button></Link>
                        </div>
                        <div className={CoffeeListStyle.CoffeeItemPrice}>{item.price}</div>
                        <div className={CoffeeListStyle.CoffeeItemName}>{item.name}</div>
                    </div>
                )
            })}

        </div>
    )
}

// 导出CoffeeList组件
export default CoffeeList