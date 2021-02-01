/* eslint-disable react/prop-types */
import React from 'react';

// import db from '../../../db.json';
import Widget from '../../components/Widget';
import QuizLogo from '../../components/QuizLogo';
import QuizBackground from '../../components/QuizBackground';
import QuizContainer from '../../components/QuizContainer';
import AlternativesForm from '../../components/AlternativesForm';
import BackLinkArrow from '../../components/BackLinkArrow';
import Confetti from '../../components/Confetti';

function ResultWidget({ results }) {
  return (
    <Widget>
      <Confetti></Confetti>
      <Widget.Header>
        <BackLinkArrow href="/" />
        ✨ <h3 >
          <span style={{ 
            color: '#ffea00',
          }}>
          Seu Score:{ ' ' }
          </span>
          {results.filter(result => result).length} pontos.
          </h3>
      </Widget.Header>
      <Widget.Content>
        {/* <h3>
          Você acertou { ' ' }
          { results.filter(result => result).length} 
          { ' ' }
          perguntas!
        
        </h3> */}
        <ul>
          {
          results.map((result, resultIndex) => 
            <li 
              key={resultIndex} 
              style={
                result ? 
                { color: '#49AA26' } : 
                { color: '#E92929'}
              }
            >
              {resultIndex + 1} - {result ? 'Acertou' : 'Errou'}
            </li>
          )}
        </ul>
      </Widget.Content>
    </Widget>


  ); 
}

function LoadingWidget() {
  return (
    <Widget>
      <Widget.Header>
        Carregando...
      </Widget.Header>

      <Widget.Content>
        <div className="loading-container">
          <img src="/loading.gif" alt="loading"/>
        </div>
      </Widget.Content>
    </Widget>
  );
}

function QuestionWidget({
  question,
  questionIndex,
  totalQuestions,
  onSubmit,
  addResult,
}) {
  const [selectdedAlternative, setSelectdedAlternative] = React.useState(undefined);
  const [alternativeSubmitted, setAlternativeSubmitted] = React.useState(false)
  const questionId = `question__${questionIndex}`;
  const isCorrect = selectdedAlternative === question.answer;
  const hasAlternativeSelected = selectdedAlternative !== undefined;

  return (
    <Widget>
      <Widget.Header>
        <BackLinkArrow href="/" />
        <h3>
          {`Pergunta ${questionIndex + 1} de ${totalQuestions}`}
        </h3>
      </Widget.Header>

      <img
        alt="Descrição"
        style={{
          width: '100%',
          height: '150px',
          objectFit: 'cover',
        }}
        src={question.image}
      />
      <Widget.Content>
        <h2>
          {question.title}
        </h2>
        <p>
          {question.description}
        </p>

        <AlternativesForm
          onSubmit={(e) => {
            e.preventDefault();
            setAlternativeSubmitted(true);

            setTimeout(() => {
              addResult(isCorrect)
              onSubmit();
              setAlternativeSubmitted(false);
              setSelectdedAlternative(undefined);
            }, 3 * 1000);
          }}
        >
          {question.alternatives.map((alternative, alternativeIndex) => {
            const alternativeId = `alternative__${alternativeIndex}`;
            const selectedAlternativeStatus = isCorrect ? 'SUCCESS' : 'ERROR'
            const isSelected = selectdedAlternative === alternativeIndex

            return (
              <Widget.Topic
                as="label"
                htmlFor={alternativeId}
                key={alternativeId}
                data-selected={isSelected}
                data-status={alternativeSubmitted && selectedAlternativeStatus}
              >
                <input
                  style={{ visibility: 'hidden', display: 'none' }}
                  id={alternativeId}
                  name={questionId}
                  type="radio"
                  onChange={() => setSelectdedAlternative(alternativeIndex)}
                />
                {alternative}
              </Widget.Topic>
            );
          })}
          {/* <p>selectdedAlternative: {`${selectdedAlternative}`}</p> */}
          { 
            alternativeSubmitted ? 
            (
              isCorrect ? 
              <p style={{ backgroundColor: '#49AA26' }}>Você acertou!</p> : 
              <p style={{ backgroundColor: '#E92929' }}>Você errou!</p>
            ) : ''
          }

          <Widget.Button type="submit" disabled={!hasAlternativeSelected}>
            Confirmar
          </Widget.Button>

          {/* <pre>
            {JSON.stringify(question, null, 4)}
          </pre> */}
        </AlternativesForm>
      </Widget.Content>
    </Widget>
  );
}

const screenStates = {
  QUIZ: 'QUIZ',
  LOADING: 'LOADING',
  RESULT: 'RESULT',
};

export default function QuizPage({ externalQuestions, externalBg}) {
  const [screenState, setScreenState] = React.useState(screenStates.LOADING);
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const [results, setResults] = React.useState([]);

  const questionIndex = currentQuestion;
  const totalQuestions = externalQuestions.length;
  const question = externalQuestions[questionIndex];

  function addResult(result) {
    setResults([...results, result]);
  }

  // [React chama de: Efeitos || Effects]
  // atualizado === willUpdate
  // morre === willUnmount
  React.useEffect(() => {
    // fetch() ...
    setTimeout(() => {
      setScreenState(screenStates.QUIZ);
    }, 1 * 1000);
  // nasce === didMount
  }, []);

  function handleSubmitQuiz() {
    const nextQuestion = questionIndex + 1;
    if (nextQuestion < totalQuestions) {
      setCurrentQuestion(nextQuestion);
    } else {
      setScreenState(screenStates.RESULT);
    }
  }

  return (
    <QuizBackground backgroundImage={externalBg}>
      <QuizContainer>
        <QuizLogo />
        {screenState === screenStates.QUIZ && (
          <QuestionWidget
            question={question}
            questionIndex={questionIndex}
            totalQuestions={totalQuestions}
            onSubmit={handleSubmitQuiz}
            addResult={addResult}
          />
        )}

      {/* {screenState === screenStates.RESULT &&  } */}

        {screenState === screenStates.LOADING && <LoadingWidget />}
        {screenState === screenStates.RESULT && <ResultWidget results={results} />}
      </QuizContainer>
    </QuizBackground>
  );
}