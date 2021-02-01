import styled from 'styled-components';

const Confetti = styled.div`
  left: 50%;
  width: 16px;
  height: 16px;
  position: absolute;
  transform-origin: left top;
  animation: confetti 5s ease-in-out -2s infinite;

&:nth-child(1) {
  left: 10%;
  animation-delay: 0;
  background-color: #fc0120;
}

&:nth-child(2) {
  left: 20%;
  animation-delay: -5s;
  background-color: #8257e6;
}

&:nth-child(3) {
  left: 30%;
  animation-delay: -3s;
  background-color: #ffbf4d;
}

&:nth-child(4) {
  left: 40%;
  animation-delay: -2.5s;
  background-color: #fe5d7a;
}

&:nth-child(5) {
  left: 50%;
  animation-delay: -4s;
  background-color: #45ec9c;
}

&:nth-child(6) {
  left: 60%;
  animation-delay: -6s;
  background-color: #f6e327;
}

&:nth-child(7) {
  left: 70%;
  animation-delay: -1.5s;
  background-color: #f769ce;
}

&:nth-child(8) {
  left: 80%;
  animation-delay: -2s;
  background-color: #007de7;
}

&:nth-child(9) {
  left: 90%;
  animation-delay: -3.5s;
  background-color: #63b4fc;
}

&:nth-child(10) {
  left: 100%;
  animation-delay: -2.5s;
  background-color: #f9c4ea;
}

@keyframes confetti {
  0% {
    transform: rotateZ(15deg) rotateY(0deg) translate(0, 0);
  }
  25% {
    transform: rotateZ(5deg) rotateY(360deg) translate(-5vw, 20vh);
  }
  50% {
    transform: rotateZ(15deg) rotateY(720deg) translate(5vw, 60vh);
  }
  75% {
    transform: rotateZ(5deg) rotateY(1080deg) translate(-10vw, 80vh);
  }
  100% {
    transform: rotateZ(15deg) rotateY(1440deg) translate(10vw, 110vh);
  }
}

@media (max-width: 500px) {
  h1 {
    font-size: 30px;
  }
}
`;

const Confettis = styled.div`
  position: absolute;
  overflow: hidden;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
`;

export default function ConfettiContainer() {
  return(
    <Confettis>
      <Confetti></Confetti>
      <Confetti></Confetti>
      <Confetti></Confetti>
      <Confetti></Confetti>
      <Confetti></Confetti>
      <Confetti></Confetti>
      <Confetti></Confetti>
    </Confettis>
  );
}