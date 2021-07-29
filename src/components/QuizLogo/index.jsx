import React from "react";
import { Logo } from "./styles";

export default function QuizLogo({ isExternal }) {
  if (isExternal) {
    return <Logo src="/logoAlura.svg" alt="Alura Quiz" />;
  }
  return <Logo src="/bolsoQuiz.svg" alt="Bolso Quiz" />;
}
