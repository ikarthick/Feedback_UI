import { useState } from 'react';
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";
import FeedbackStats from './components/FeedbackStats';

function App(){

    const [feedback, setFeedbackData] = useState(FeedbackData)

    const [darkmode, setDarkmode] = useState(false);


    const Darkmode = () => (
        setDarkmode((prev) => (
            !prev
        ))
    )

    const deleteFeedback = (id) => {
      
       if(window.confirm("Are you sure to delete this feedback?")){
           setFeedbackData(feedback.filter((item) => item.id !== id))
       }
        
    }

    return (
        <>
        <Header text='Feedback UI' />
        <div className='container'>
            <FeedbackStats feedback={feedback}/>
           <FeedbackList feedback={feedback} darkmode={darkmode} handleDelete={deleteFeedback} />
          <br></br> <button className='btn' onClick={Darkmode} >Dark Mode</button>
    </div>
        </>
    )
}
export default App;