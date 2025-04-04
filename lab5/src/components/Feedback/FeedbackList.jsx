import { useState } from "react"
import FeedbackForm from "./FeedBackForm"
import { Container } from "react-bootstrap"

function FeedbackList() {
    const [feedbacks, setFeedback] = useState([])

    return (
        <>
            <Container className="w-50">
                <h2>Отзывы:</h2>
                <div>
                    {feedbacks.map(el => {
                        return (<div className="px-3 border rounded mb-2" key={el["id"]}>
                            <h3>Автор: {el["author"]}</h3>
                            <p>Текст: {el["answer"]}</p>
                            <p>Оценка: {el["mark"]} / 5</p>
                        </div>)
                    })}
                </div>

            </Container>
            <FeedbackForm feedbackAdd={setFeedback} feedbacks={feedbacks} />

        </>
    )
}

export default FeedbackList