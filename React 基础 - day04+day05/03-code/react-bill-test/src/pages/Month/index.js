import { NavBar, DatePicker } from 'antd-mobile'
import { useEffect, useState } from 'react'
import './index.scss'
import classNames from 'classnames'
import dayjs from 'dayjs'
import { useSelector } from 'react-redux'
import { useMemo } from 'react'
import _ from 'lodash'
import DailyBill from './components/DayBill'
const Month = () => {
  // 按月做数据的分组
  const billList = useSelector(state => state.bill.billList)
  const monthGroup = useMemo(() => {
    // return出去计算之后的值
    return _.groupBy(billList, (item) => dayjs(item.date).format('YYYY-MM'))
  }, [billList])
  console.log(monthGroup)

  // 控制弹框的打开和关闭
  const [dateVisible, setDateVisible] = useState(false)

  // 控制时间显示
  const [currentDate, setCurrentDate] = useState(() => {
    return dayjs(new Date()).format('YYYY-MM')
  })

  const [currentMonthList, setMonthList] = useState([])

  const monthResult = useMemo(() => {
    // 支出  /  收入  / 结余
    const pay = currentMonthList.filter(item => item.type === 'pay').reduce((a, c) => a + c.money, 0)
    const income = currentMonthList.filter(item => item.type === 'income').reduce((a, c) => a + c.money, 0)
    return {
      pay,
      income,
      total: pay + income
    }

  }, [currentMonthList])

  // 初始化的时候把当前月的统计数据显示出来
  useEffect(() => {
    const nowDate = dayjs().format('YYYY-MM')
    // 边界值控制
    if (monthGroup[nowDate]) {
      setMonthList(monthGroup[nowDate])
    }
  }, [monthGroup])

  // 确认回调
  const onConfirm = (date) => {
    setDateVisible(false)
    // 其他逻辑
    console.log(date)
    const formatDate = dayjs(date).format('YYYY-MM')
    console.log(formatDate)
    setMonthList(monthGroup[formatDate])
    setCurrentDate(formatDate)
  }

  // 当前月按照日来做分组
  const dayGroup = useMemo(() => {
    // return出去计算之后的值
    const groupData = _.groupBy(currentMonthList, (item) => dayjs(item.date).format('YYYY-MM-DD'))
    const keys = Object.keys(groupData)
    return {
      groupData,
      keys
    }
  }, [currentMonthList])


  return (
    <div className="monthlyBill">
      <NavBar className="nav" backArrow={false}>
        月度收支
      </NavBar>
      <div className="content">
        <div className="header">
          {/* 时间切换区域 */}
          <div className="date" onClick={() => setDateVisible(true)}>
            <span className="text">
              {currentDate + ''}月账单
            </span>
            {/* 思路：根据当前弹框打开的状态控制expand类名是否存在 */}
            <span className={classNames('arrow', dateVisible && 'expand')}></span>
          </div>
          {/* 统计区域 */}
          <div className='twoLineOverview'>
            <div className="item">
              <span className="money">{monthResult.pay.toFixed(2)}</span>
              <span className="type">支出</span>
            </div>
            <div className="item">
              <span className="money">{monthResult.income.toFixed(2)}</span>
              <span className="type">收入</span>
            </div>
            <div className="item">
              <span className="money">{monthResult.total.toFixed(2)}</span>
              <span className="type">结余</span>
            </div>
          </div>
          {/* 时间选择器 */}
          <DatePicker
            className="kaDate"
            title="记账日期"
            precision="month"
            visible={dateVisible}
            onCancel={() => setDateVisible(false)}
            onConfirm={onConfirm}
            onClose={() => setDateVisible(false)}
            max={new Date()}
          />
        </div>
        {/* 单日列表统计 */}
        {
          dayGroup.keys.map(key => {
            return <DailyBill key={key} date={key} billList={dayGroup.groupData[key]} />
          })
        }

      </div>
    </div >
  )
}

export default Month