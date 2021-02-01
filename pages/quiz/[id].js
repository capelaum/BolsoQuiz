// import { getRouteMatcher } from 'next/dist/next-server/lib/router/utils';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import QuizScreen from '../../src/screens/Quiz';

export default function QuizDaGaleraPage({ externalDB }) {
  // console.log(externalDB);
  return (
    <ThemeProvider theme={externalDB.theme}>
      <QuizScreen
        externalQuestions={externalDB.questions}
        externalBg={externalDB.bg}
        isExternal={true}
      />
    {/* <pre style={{ color: 'black' }}>
      {JSON.stringify(externalDB.questions, null, 4)}
    </pre> */}
    </ThemeProvider>
  );
}

export async function getServerSideProps(context) {
  // console.log('Infos que o next passa:', context.query);
  const [githubUser, projectName] = context.query.id.split('___');
  try { 
    const externalDB = await fetch(`https://${projectName}.${githubUser}.vercel.app/api/db`)
      .then(response => {
        if(response.ok) {
          return response.json();
        }
        throw new Error('Falha em pegar os dados');
      })
      .then(responseObject => responseObject)
      // retorna a props para o componente
      return {
        props: { externalDB },
      };
  } catch (error) {
    console.error(error);
    return {
      redirect: {
        permanent: false,
        destination: '/'
      }
    };
  }
}
