import { useState } from 'react';
import { useRouter } from 'next/router';

import db from '../db.json';
import Widget from '../src/components/Widget';
import Link from '../src/components/Link';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizContainer from '../src/components/QuizContainer';

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState('');
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <p>{db.description}</p>
            <form action="" onSubmit={function(e) {
              //router manda para pagina quiz
              e.preventDefault();
              router.push(`/quiz?name=${name}`)
            }} >
              <Widget.Input 
                placeholder="Nome" 
                type="text" 
                name="name" 
                onChange={function(e) {
                  // State
                  setName(e.target.value);
                }}
              />
              <Widget.Button type="submit" disabled={ !name } >Jogar</Widget.Button>
            </form>
            {/* <p>Nome: {name}</p> */}
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>Quizes da Galera</h1>
            <ul>
              {db.external.map((linkExterno) => {
                const [projectName, githubUser] = linkExterno
                  .replace(/\//g, '')
                  .replace('https:', '')
                  .replace('.vercel.app', '')
                  .split('.')

                return (
                  <li key={linkExterno}>
                    <Widget.Topic 
                    as={Link}
                    // href={`/quiz/${githubUser}___${projectName}`} 
                    href={linkExterno} 
                    target="_blank" 
                    >
                      {`${githubUser}/${projectName}`}
                    </Widget.Topic>
                  </li>
                );
              })}
            </ul>

          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/capelaum" />
    </QuizBackground>
  );
}
