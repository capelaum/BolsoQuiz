import { useState } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

import db from "../db.json";
import Widget from "../src/components/Widget";
import Link from "../src/components/Link";
import QuizLogo from "../src/components/QuizLogo";
import QuizBackground from "../src/components/QuizBackground";
import Footer from "../src/components/Footer";
import GitHubCorner from "../src/components/GitHubCorner";
import QuizContainer from "../src/components/QuizContainer";

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    router.push({ pathname: "/quiz", query: { name: name } });
  }

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        <Widget
          as={motion.section}
          transition={{ delay: 0, duration: 0.5 }}
          variants={{
            show: { opacity: 1, y: "0" },
            hidden: { opacity: 0, y: "100%" },
          }}
          initial="hidden"
          animate="show"
        >
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <p>{db.description}</p>
            <form action="" onSubmit={handleSubmit}>
              <Widget.Input
                placeholder="Nome"
                type="text"
                name="name"
                onChange={e => setName(e.target.value)}
              />
              <Widget.Button type="submit" disabled={!name}>
                Jogar
              </Widget.Button>
            </form>
          </Widget.Content>
        </Widget>

        <Widget
          as={motion.section}
          transition={{ delay: 0.5, duration: 0.5 }}
          variants={{
            show: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
          initial="hidden"
          animate="show"
        >
          <Widget.Content>
            <h1>Quizes da Galera</h1>
            <ul>
              {db.external.map(linkExterno => {
                const [projectName, githubUser] = new URL(
                  linkExterno
                ).host.split(".");

                return (
                  <li key={linkExterno}>
                    <Widget.Topic
                      as={Link}
                      href={
                        name
                          ? `/quiz/${githubUser}___${projectName}?name=${name}`
                          : ""
                      }
                      // href={linkExterno}
                      target={name ? "_blank" : "_self"}
                    >
                      {`${githubUser}/${projectName}`}
                    </Widget.Topic>
                  </li>
                );
              })}
            </ul>
          </Widget.Content>
        </Widget>
        <Footer
          as={motion.footer}
          transition={{ delay: 0.5, duration: 0.5 }}
          variants={{
            show: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
          initial="hidden"
          animate="show"
        />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/capelaum" />
    </QuizBackground>
  );
}
