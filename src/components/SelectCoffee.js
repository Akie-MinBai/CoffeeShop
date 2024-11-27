import SelectCoffeeStyle from '../Style/SelectCoffee.module.css';
import { createRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getCoffeeOrder } from '../store/modules/takeaway'
function SelectCoffee() {
    // 使用useDispatch获取dispatch函数
    const dispatch = useDispatch()
    // 获取URL中的参数
    const searchParams = new URLSearchParams(window.location.search);
    const name = searchParams.get('name');
    const price = parseInt(searchParams.get('price'));
    // 使用useState设置咖啡数量
    const [coffeeNum, setCoffeeNum] = useState(1);
    // 创建ref对象
    const size = createRef()
    const SHORT = createRef();
    const TALL = createRef();
    const GRANDE = createRef();
    const VENTI = createRef();
    const add = createRef()
    const SUGAR = createRef();
    const MILK = createRef();
    const milk = createRef()
    const OAT = createRef();
    const SOY = createRef();
    const ALM = createRef();
    // 定义咖啡订单函数
    function coffeeOrder() {
        // 根据选择的尺寸设置size的值
        if (SHORT.current.checked) {
            size.current = 'SHORT'
        } else if (TALL.current.checked) {
            size.current = 'TALL'
        } else if (GRANDE.current.checked) {
            size.current = 'GRANDE'
        } else if (VENTI.current.checked) {
            size.current = 'VENTI'
        }
        // 根据选择的额外添加设置add的值
        if (SUGAR.current.checked) {
            add.current = 'SUGAR'
        } else if (MILK.current.checked) {
            add.current = 'MILK'
        }
        // 根据选择的牛奶类型设置milk的值
        if (OAT.current.checked) {
            milk.current = 'OAT MILK'
        } else if (SOY.current.checked) {
            milk.current = 'SOY MILK'
        } else if (ALM.current.checked) {
            milk.current = 'ALMOND MILK'
        }
        // 调用dispatch函数，发送咖啡订单
        dispatch(getCoffeeOrder({
            name: name,
            price: price,
            num: coffeeNum,
            size: size.current,
            add: add.current,
            milk: milk.current
        }))
    }
    return (
        // 渲染表单
        <div className={SelectCoffeeStyle.SelectCoffeeMain}>
            <div className={SelectCoffeeStyle.SelectCoffeeName}>
                {
                    name === 'Coco ' ? 'Coco & Vanilla Cream' : name
                }
            </div>
            <div className={SelectCoffeeStyle.SelectCoffeeText}>A single espresso shot poured into hot foamy milk,with the surface topped with mildly sweetened cocoa powder and drizzled with scrumptious caramel syrup.</div>
            <div className={SelectCoffeeStyle.SelectCoffeeTitle}>SIZE</div>
            <div className={SelectCoffeeStyle.SelectCoffeeSIZEIcon}>
                <input style={{ backgroundSize: '40%' }} type="radio" id="SHORT" name="size" value="SHORT" ref={SHORT} defaultChecked />
                <p>SHORT</p>
            </div>
            <div className={SelectCoffeeStyle.SelectCoffeeSIZEIcon}>
                <input style={{ backgroundSize: '45%' }} type="radio" id="TALL" name="size" value="TALL" ref={TALL} />
                <p>TALL</p>
            </div>
            <div className={SelectCoffeeStyle.SelectCoffeeSIZEIcon}>
                <input style={{ backgroundSize: '50%' }} type="radio" id="GRANDE" name="size" value="GRANDE" ref={GRANDE} />
                <p>GRANDE</p>
            </div>
            <div className={SelectCoffeeStyle.SelectCoffeeSIZEIcon}>
                <input style={{ backgroundSize: '55%' }} type="radio" id="VENTI" name="size" value="VENTI" ref={VENTI} />
                <p>VENTI</p>
            </div>
            <div className={SelectCoffeeStyle.SelectCoffeeTitle}>EXTRA</div>
            <div className={SelectCoffeeStyle.SelectCoffeeEXTRAIcon}>
                <input type='radio' name='extra' value={'SUGAR'} ref={SUGAR} defaultChecked></input>
                <p>SUGAR</p>
            </div>
            <div className={SelectCoffeeStyle.SelectCoffeeEXTRAIcon}>
                <input type='radio' name='extra' value={'MILK'} ref={MILK}></input>
                <p>MILK</p>
            </div>
            <div className={SelectCoffeeStyle.SelectCoffeeTitle}>MILK TYPE</div>
            <div className={SelectCoffeeStyle.SelectCoffeeEXTRAIcon} style={{ width: '6em' }}>
                <input ref={OAT} type='radio' name='TYPE' value={'OAT MILK'} defaultChecked></input>
                <p>OAT MILK</p>
            </div>
            <div className={SelectCoffeeStyle.SelectCoffeeEXTRAIcon} style={{ width: '6em' }}>
                <input ref={SOY} type='radio' name='TYPE' value={'SOY MILK'}></input>
                <p>SOY MILK</p>
            </div>
            <div className={SelectCoffeeStyle.SelectCoffeeEXTRAIcon} style={{ width: '8em' }}>
                <input ref={ALM} type='radio' name='TYPE' value={'ALMOND MILK'}></input>
                <p>ALMOND MILK</p>
            </div>
            <div className={SelectCoffeeStyle.SelectCoffeeTitle}> </div>
            <div className={SelectCoffeeStyle.CoffeePrice}>{coffeeNum * price}</div>
            <div className={SelectCoffeeStyle.SelectCoffeeButton}>
                <button onClick={() => setCoffeeNum(coffeeNum - 1)}>-</button>
                <p>{coffeeNum}</p>
                <button onClick={() => setCoffeeNum(coffeeNum + 1)}>+</button>
            </div>
            <div className={SelectCoffeeStyle.SelectCoffeeTitle}> </div>
            <button className={SelectCoffeeStyle.OrderButton} onClick={() => coffeeOrder()} >PLACE ORDER</button>
        </div>
    )
}
export default SelectCoffee;