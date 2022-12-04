/* eslint-disable react/jsx-no-undef */
import "./Ex.css"

function Header(){
  return (
    <header>
      <h1 id="hi">
        <a href="/">블루아카이브!</a>
      </h1>
    </header>
  );
}

function Nav() {
  return(
    <nav>
      <div>
        <ol>
          <li>Alise</li>
          <li>Momo2</li>
          <li>Midoli</li>
          <li>UziQueen</li>
        </ol>
      </div>
    </nav>
  )
}
function Article() {
  return(
    <article>
      <div>
        <h1>GOAT!</h1>
      </div>
    </article>
  )
}
function Ex() {
  return (
    <div>
      <Header></Header>
      <Nav></Nav>
      <Article></Article>
    </div>
  );
}

export default Ex;
