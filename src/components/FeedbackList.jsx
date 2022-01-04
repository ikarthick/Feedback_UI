import FeedbackItem from "./FeedbackItem";

function FeedbackList( {feedback,darkmode,handleDelete} ) {
    

    if(!feedback || feedback.length === 0){
        return 'No feedback fetched'
    }
    
    return (
        <div className='feedback-list'>
            {feedback.map((item) => (
               <FeedbackItem key={item.id} item={item} darkmode={darkmode} handleDelete={handleDelete} />
            ))}
        </div>
    )
}

export default FeedbackList
