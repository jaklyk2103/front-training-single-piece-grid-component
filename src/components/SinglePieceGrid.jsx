import './SinglePieceGrid.css'
import ThreeLevelTextBox from './ThreeLevelTextBox'
import ThreeLevelTextBoxWithButton from './ThreeLevelTextBoxWithButton'
import TwoLevelTextBox from './TwoLevelTextBox'
import texts from '../texts'

const SinglePieceGrid = (props) => {
  return (
    <>
      <div className='container'>
        <ThreeLevelTextBox className='item join-community-block' title={texts['join-title']} subtitle={texts['join-subtitle']} content={texts['join-content']}></ThreeLevelTextBox>
        <ThreeLevelTextBoxWithButton className='item subscription-block' title={texts['subscription-title']} costValue={texts['subscription-cost-value']} costDescription={texts['subscription-cost-description']} content={texts['subscription-content']} buttonText={texts['subscription-button-text']}></ThreeLevelTextBoxWithButton>
        <TwoLevelTextBox className='item why-us-block' title={texts['why-title']} content={texts['why-content']}></TwoLevelTextBox>
      </div>
    </>
  )
}

export default SinglePieceGrid