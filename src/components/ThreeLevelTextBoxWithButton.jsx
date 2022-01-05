const ThreeLevelTextBoxWithButton = ({ className, title, costValue, costDescription, content, buttonText }) => {
  return (
    <div className={className}>
      <div className="title">{title}</div>
      <div className="cost">
        <div className="cost-value">{costValue}</div>
        <span className="cost-description">{costDescription}</span>
      </div>
      <div className="content">{content}</div>
      <button className="button">{buttonText}</button>
    </div>
  )
}

export default ThreeLevelTextBoxWithButton