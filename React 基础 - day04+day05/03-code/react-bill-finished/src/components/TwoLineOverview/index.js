import classNames from 'classnames'

import './index.scss'

const TwoLineOverview = ({ pay, income }) => {
  return (
    <div className={classNames('twoLineOverview')}>
      <div className="item">
        <span className="money">{Math.abs(pay).toFixed(2)}</span>
        <span className="type">支出</span>
      </div>
      <div className="item">
        <span className="money">{income.toFixed(2)}</span>
        <span className="type">收入</span>
      </div>
      <div className="item">
        <span className="money">{(income + pay).toFixed(2)}</span>
        <span className="type">结余</span>
      </div>
    </div>
  )
}

export default TwoLineOverview
