import { useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';

export default function QuizPage() {
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
                placeholder="Nome*" 
                type="text" 
                name="nome" 
                onChange={e => setName(e.target.value) }
              />
              <Widget.Button type="submit" disabled={ !name } >Jogar</Widget.Button>
            </form>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Content>
            <h1>
              <a href="https://aluraquiz-base.alura-challenges.vercel.app/contribuidores" target="_blank">
                Quizes da Galera
              </a>
            </h1>
            <p>lorem ipsum dolor sit amet...</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/capelaum" />
    </QuizBackground>
  );
}