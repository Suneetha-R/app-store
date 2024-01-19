// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, onClickTabItem, isActive} = props
  const {tabId, displayText} = tabDetails
  const classNameActTab = isActive ? 'act-tab' : ''
  const onClickTab = () => {
    onClickTabItem(tabId)
  }
  return (
    <li className="tab-items">
      <button
        type="button"
        onClick={onClickTab}
        className={`button ${classNameActTab}`}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
