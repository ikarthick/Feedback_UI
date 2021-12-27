import { useState } from 'react';
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";

function App(){

    const [feedback, setFeedbackData] = useState(FeedbackData)

    return (
        <>
        <Header text='Feedback UI' />
        <div className='container'>
           <FeedbackList feedback={feedback} />
    </div>
        </>
    )
}
export default App;