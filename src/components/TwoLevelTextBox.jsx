const TwoLevelTextBox = ({ className, title, content }) => {
  return (
    <div className={className}>
      <div className="title">{title}</div>
      <ul className="content-list">
        {content?.split('\n').map(element => <li key={element}>{element}</li>)}
      </ul>
    </div>
  )
}

export default TwoLevelTextBox