// import { getRouteMatcher } from 'next/dist/next-server/lib/router/utils';
import React from 'react';

import { ThemeProvider } from 'styled-components';
import QuizScreen from '../../src/screens/Quiz';

export default function QuizDaGaleraPage({ externalDB }) {

  console.log(externalDB);
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
    // const externalDB = await fetch('https://aluraquiz-css.omariosouto.vercel.app/api/db')
    const externalDB = await fetch(`https://${projectName}.${githubUser}.vercel.app/api/db`)
      .then(response => {
        if(response.ok) {
          return response.json();
        }
        throw new Error('Falha em pegar os dados');
      }) 
      .then(responseObject => responseObject)
    
      console.log('externalDB:', externalDB);// resposta do lado do servidor

      // retorna a propspara o componente
      return {
        props: { externalDB },
      };
  } catch (error) {
    console.error(error);
  }
}

// export async function getServerSideProps(context) {
//   const [projectName, githubUser] = context.query.id.split('___');

//   try {
//     const dbExterno = await fetch(`https://aluraquiz-css.omariosouto.vercel.app/api/db`)
//     // const dbExterno = await fetch(`https://${projectName}.${githubUser}.vercel.app/api/db`)
//       .then((respostaDoServer) => {
//         if (respostaDoServer.ok) {
//           return respostaDoServer.json();
//         }
//         throw new Error('Falha em pegar os dados');
//       })
//       .then((respostaConvertidaEmObjeto) => respostaConvertidaEmObjeto)
//       // .catch((err) => {
//       //   console.error(err);
//       // });

//     console.log('dbExterno', dbExterno);
//     console.log('Infos que o Next da para nós', context.query.id);
//     return {
//       props: {
//         dbExterno,
//       },
//     };
//   } catch(err) {
//     throw new Error(err);
//   }
// }
