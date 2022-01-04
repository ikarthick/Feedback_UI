import Card from './shared/Card';
import { FaTimes } from 'react-icons/fa'
function FeedbackItem( {item,darkmode,handleDelete} ) { 

    return (
        <Card reverse={darkmode}>
            <div className='num-display'>{item.rating}</div>
            <button onClick={() => handleDelete(item.id)} className='close'><FaTimes color='purple'></FaTimes></button>
            <div className='text-display'>{item.text}</div>
        {/*    <button onClick={HandleClick} >Change Rating</button>  */}
        </Card>
    )
}

export default FeedbackItem
