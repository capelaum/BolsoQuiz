import { useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import db from '../db.json';
import Widget from '../src/components/Widget';
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
            <p>lorem ipsum dolor sit amet...</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/capelaum" />
    </QuizBackground>
  );
}
