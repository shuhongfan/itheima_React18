import classNames from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import { changeActiveIndex } from '../../store/modules/takeaway'
import './index.scss'

const Menu = () => {
  const { foodsList, activeIndex } = useSelector(state => state.foods)
  const dispatch = useDispatch()
  const menus = foodsList.map(item => ({ tag: item.tag, name: item.name }))
  return (
    <nav className="list-menu">
      {/* 添加active类名会变成激活状态 */}
      {menus.map((item, index) => {
        return (
          <div
            // 提交action切换激活index
            onClick={() => dispatch(changeActiveIndex(index))}
            key={item.tag}
            className={classNames(
              'list-menu-item',
              activeIndex === index && 'active'
            )}
          >
            {item.name}
          </div>
        )
      })}
    </nav>
  )
}

export default Menu
