const ThreeLevelTextBox = ({ className, title, subtitle, content }) => {
  return (
    <div className={className}>
      <div className="title">{title}</div>
      <div className="subtitle">{subtitle}</div>
      <div className="content">{content}</div>
    </div>
  )
}

export default ThreeLevelTextBox