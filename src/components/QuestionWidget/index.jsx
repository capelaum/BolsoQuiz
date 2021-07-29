import { useState } from "react";
import AlternativesForm from "../AlternativesForm";
import BackLinkArrow from "../BackLinkArrow";
import Widget from "../Widget";

export function QuestionWidget({
  question,
  questionIndex,
  totalQuestions,
  onSubmit,
  addResult,
}) {
  const [selectdedAlternative, setSelectdedAlternative] = useState(undefined);
  const [alternativeSubmitted, setAlternativeSubmitted] = useState(false);
  const questionId = `question__${questionIndex}`;
  const isCorrect = selectdedAlternative === question.answer;
  const hasAlternativeSelected = selectdedAlternative !== undefined;

  function handleSubmit(e) {
    e.preventDefault();
    setAlternativeSubmitted(true);

    setTimeout(() => {
      addResult(isCorrect);
      onSubmit();
      setAlternativeSubmitted(false);
      setSelectdedAlternative(undefined);
    }, 3 * 1000);
  }

  function renderQuestionAlternatives(question) {
    const alternatives = question.alternatives.map((alternative, index) => {
      const alternativeId = `alternative__${index}`;
      const selectedAlternativeStatus = isCorrect ? "SUCCESS" : "ERROR";
      const isSelected = selectdedAlternative === index;

      return (
        <Widget.Topic
          as="label"
          htmlFor={alternativeId}
          key={alternativeId}
          data-selected={isSelected}
          data-status={alternativeSubmitted && selectedAlternativeStatus}
        >
          <input
            style={{ visibility: "hidden", display: "none" }}
            id={alternativeId}
            name={questionId}
            type="radio"
            onChange={() => setSelectdedAlternative(index)}
            checked=""
          />
          {alternative}
        </Widget.Topic>
      );
    });

    return alternatives;
  }

  return (
    <Widget>
      <Widget.Header>
        <BackLinkArrow href="/" />
        <h3>{`Pergunta ${questionIndex + 1} de ${totalQuestions}`}</h3>
      </Widget.Header>

      <img
        alt="Descrição"
        style={{
          width: "100%",
          height: "150px",
          objectFit: "cover",
        }}
        src={question.image}
      />
      <Widget.Content>
        <h2>{question.title}</h2>
        <p>{question.description}</p>

        <AlternativesForm onSubmit={handleSubmit}>
          {renderQuestionAlternatives(question)}
          {alternativeSubmitted ? (
            isCorrect ? (
              <p style={{ backgroundColor: "#49AA26" }}>Você acertou!</p>
            ) : (
              <p style={{ backgroundColor: "#E92929" }}>Você errou!</p>
            )
          ) : (
            ""
          )}

          <Widget.Button type="submit" disabled={!hasAlternativeSelected}>
            Confirmar
          </Widget.Button>
        </AlternativesForm>
      </Widget.Content>
    </Widget>
  );
}
