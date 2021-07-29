import Widget from "../Widget";

export function LoadingWidget() {
  return (
    <Widget>
      <Widget.Header>Carregando...</Widget.Header>

      <Widget.Content>
        <div className="loading-container">
          <img src="/loading.gif" alt="loading" />
        </div>
      </Widget.Content>
    </Widget>
  );
}
