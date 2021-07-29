import { useRouter } from "next/router";

import BackLinkArrow from "../BackLinkArrow";
import Widget from "../Widget";
import Confetti from "../Confetti";

export function ResultWidget({ results }) {
  const router = useRouter();
  const name = router.query.name;

  return (
    <Widget>
      <Confetti></Confetti>
      <Widget.Header>
        <BackLinkArrow href="/" />✨{" "}
        <h3>
          <span
            style={{
              color: "#ffea00",
            }}
          >
            {name}, seu Score:{" "}
          </span>
          {results.filter(result => result).length} pontos.
        </h3>
      </Widget.Header>
      <Widget.Content>
        <ul>
          {results.map((result, resultIndex) => (
            <li
              key={resultIndex}
              style={result ? { color: "#49AA26" } : { color: "#E92929" }}
            >
              {resultIndex + 1} - {result ? "Acertou" : "Errou"}
            </li>
          ))}
        </ul>
      </Widget.Content>
    </Widget>
  );
}
