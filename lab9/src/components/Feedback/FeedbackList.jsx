import { Container } from "react-bootstrap";
import { postsApi } from "../../store/api";

function FeedbackList() {
  const { data, isLoading, isError, isFetching } =
    postsApi.useFetchAllFeedbacksQuery();

  if (isFetching) {
    return (
      <Container className="w-50">
        <div class="spinner-border" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </Container>
    );
  }

  if (isError) {
    return <Container className="w-50">Ошибка</Container>;
  }
  return (
    <>
      <Container className="list__container w-50">
        <h2>Отзывы:</h2>
        <div>
          {data.map((el) => {
            return (
              <div
                className="px-3 border rounded mb-2 d-flex align-items-center"
                key={el["id"]}
              >
                <div className="me-auto">
                  {el["id"]}
                  <h3>Автор: {el["author"]}</h3>
                  <p>Текст: {el["answer"]}</p>
                  <p>Оценка: {el["mark"]} / 5</p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </>
  );
}

export default FeedbackList;
