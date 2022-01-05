const TwoLevelTextBox = ({ className, title, content }) => {
  return (
    <div className={className}>
      <div className="title">{title}</div>
      <div className="content">{content}</div>
    </div>
  )
}

export default TwoLevelTextBox