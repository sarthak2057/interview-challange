import Wrapper from "../assets/wrapper/QNA";
import QnaTables from "./Qna-tables";

const QNA = () => {
  return (
    <Wrapper>
        <section className="qna-titles">
            <a href="#" className="title">Description</a>
            <a href="#" className="title active">Specifications</a>
            <a href="#" className="title">Questions/Answers</a>
            <a href="#" className="title">Ratings & Reviews</a>
            <hr />
        <QnaTables />
        </section>
        
    </Wrapper>
  )
}

export default QNA