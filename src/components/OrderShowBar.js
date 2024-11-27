import { useState } from 'react';
import OrderShowBarStyle from '../Style/OrderShowBar.module.css'
import { useSelector } from 'react-redux'
import BurstingBlueberry from '../Pic/CoffeeListPic/BurstingBlueberry.png'
import CinnamonAndCocoa from '../Pic/CoffeeListPic/CinnamonAndCocoa.png'
import CocoVanillaCream from '../Pic/CoffeeListPic/Coco&VanillaCream.png'
import DalgonaMacha from '../Pic/CoffeeListPic/DalgonaMacha.png'
import DrizzledWithCaramel from '../Pic/CoffeeListPic/DrizzledWithCaramel.png'
import WhippedChocolate from '../Pic/CoffeeListPic/WhippedChocolate.png'
function OrderShowBar() {
    // 使用useState钩子来定义一个名为showTrue的状态变量，初始值为false
    const [showTrue, setShowTrue] = useState(false)
    // 使用useSelector钩子来获取名为foods的state中的coffeeOrder
    const { coffeeOrder } = useSelector(state => state.foods)
    // 计算coffeeOrder中所有item的price的总和
    const orderPrice = coffeeOrder.reduce((acc, item) => acc + item.price, 0)
    // 计算coffeeOrder中所有item的num的总和
    const orderNum = coffeeOrder.reduce((acc, item) => acc + item.num, 0)
    // 定义一个名为pic的变量，初始值为BurstingBlueberry
    let pic = BurstingBlueberry
    // 定义一个名为showPic的函数，根据传入的name参数来设置pic的值
    function showPic(name) {
        switch (name) {
            case 'Bursting Blueberry':
                pic = BurstingBlueberry
                break;
            case 'Cinnamon And Cocoa':
                pic = CinnamonAndCocoa
                break;
            case 'Coco':
                pic = CocoVanillaCream
                break;
            case 'Dalgona Macha':
                pic = DalgonaMacha
                break;
            case 'Drizzled With Caramel':
                pic = DrizzledWithCaramel
                break;
            case 'Whipped Chocolate':
                pic = WhippedChocolate
                break;
            default:
                pic = CocoVanillaCream
                break;
        }
    }
    // 返回一个包含orderShowBar和AllCover两个div的组件
    return (
        <>
            <div className={OrderShowBarStyle.orderShowBar} onClick={() => setShowTrue(!showTrue)}>
                <div className={OrderShowBarStyle.orderShowBarImage}></div>
                <div className={OrderShowBarStyle.orderShowBarTitle}>ORDER STATUS</div>
                <div className={OrderShowBarStyle.orderShowBarContent}>{orderNum}</div>
            </div>
            {/* 通过showTrue的值来决定是否显示AllCover组件 */}
            {showTrue ?
                <div className={OrderShowBarStyle.AllCover}>
                {/* 侧边栏 */}
                    <div className={OrderShowBarStyle.AllCoverContent}>
                    {/* 标题 */}
                        <div className={OrderShowBarStyle.Title}>
                            <h1>Order Status </h1>
                            <p onClick={() => setShowTrue(!showTrue)}>HIDE -&gt; </p>
                        </div>
                        {/* 订单页 */}
                        <div style={{ overflowY: 'scroll', height: '50%', backgroundColor: 'white' }}>
                            <div className={OrderShowBarStyle.FirstStep}>
                                <li>Ordered </li>
                                <p>JUST NOW</p>
                                {coffeeOrder.map((item, index) => {
                                    showPic(item.name)
                                    return (
                                        <div key={index} style={{ backgroundColor: 'white' }}>
                                            <p style={{ backgroundImage: `url(${pic})`, backgroundSize: 'cover', float: 'left', width: '10%', height: '2.5em', marginRight: '0', marginLeft: '5%' }}></p>
                                            <span style={{ backgroundColor: 'white', float: 'left', marginTop: '1em', fontSize: '1.2em', letterSpacing: '1px', width: '55%', textAlign: 'center' }}>
                                            {
                                                item.name === 'Coco '?'Coco & Vanilla Cream': item.name
                                            }</span>
                                            <p style={{ backgroundColor: 'rgba(205, 65, 38, 0.8)', color: 'white', borderRadius: '100%', width: '2em', height: '2em', textAlign: 'center', lineHeight: '2em', float: 'left', marginTop: '0.9em' }}>{item.num}</p>
                                        </div>

                                    )
                                })
                                }
                            </div>
                            <div className={OrderShowBarStyle.FirstStep}>
                                <li>Preparing </li>
                                <p>12 MINS AGO</p>
                            </div>
                            <div className={OrderShowBarStyle.FirstStep}>
                                <li>Finishing </li>
                            </div>
                            <div className={OrderShowBarStyle.FirstStep}>
                                <li>Served </li>
                            </div>
                        </div>
                        {/* 结算模块 */}
                        <div className={OrderShowBarStyle.CaculateCard}>
                            <div className={OrderShowBarStyle.CaculateStep}>
                                <p>Subtotal</p>
                                <cite>{orderPrice}</cite>
                            </div>
                            <hr></hr>
                            <div className={OrderShowBarStyle.CaculateStep}>
                                <p>Discount-10%</p>
                                <cite>{orderPrice / 10}</cite>
                            </div>
                            <hr></hr>
                            <div className={OrderShowBarStyle.CaculateStep} style={{ fontWeight: 'bold' }}>
                                <p>Total</p>
                                <cite>{orderPrice - orderPrice / 10}</cite>
                            </div>
                            <div className={OrderShowBarStyle.BigButton}>
                            </div>
                        </div>
                    </div>
                </div>
                : ''}
        </>
    )
}
export default OrderShowBar;