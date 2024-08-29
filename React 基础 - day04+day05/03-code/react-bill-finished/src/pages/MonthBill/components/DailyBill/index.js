import classNames from 'classnames'
import { useState } from 'react'
import { billTypeToName } from '@/contant/billList'
import Icon from '@/components/Icon'
import OneLineOverview from '@/components/OneLineOverview'
import './index.scss'

const DailyBill = ({ dateText, overview, billList }) => {
  const [expand, setExpand] = useState(true)
  return (
    <div className={classNames('dailyBill', expand && 'expand')}>
      <div className="header">
        <div className="dateIcon" onClick={() => setExpand(!expand)}>
          <span className="date">{dateText}</span>
          <Icon
            type="arrowcircle"
            className={classNames('icon', expand && 'expand')}
          />
        </div>
        <OneLineOverview pay={overview.pay} income={overview.income} />
      </div>

      <div className="billList">
        {billList.map(item => {
          return (
            <div className="bill" key={item.id}>
              <div className="icon">
                <Icon type={item.useFor} />
              </div>
              <div className="detail">
                <div className="billType">{billTypeToName[item.useFor]}</div>
              </div>
              <div className={classNames('money', item.type)}>
                {item.money.toFixed(2)}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default DailyBill
