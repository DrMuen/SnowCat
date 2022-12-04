/* eslint-disable jsx-a11y/alt-text */
import "./App.css";

function Header(props) {
  return (
    <header>
      <h1>
        <a
          href="/read"
          onClick={(event) => {
            event.preventDefault();
            props.onChangeMode();
          }}
        >
          {props.title}
        </a>
      </h1>
    </header>
  );
}

function Nav(props) {
  const lis = props.list.map((title) => (
    <li key={title.id}>
      <a
        id={title.id}
        href={"/read" + title.id}
        onClick={(event) => {
          event.preventDefault();
          props.onChangeMode(event.target.id);
        }}
      >
        {title.title}
      </a>
    </li>
  ));
  return (
    <nav>
      <ol>{lis}</ol>
    </nav>
  );
}

function Article(props) {
  return (
    <article>
      <h1>{props.title}</h1>
      <h1>{props.body}</h1>
    </article>
  );
}

function App() {
  const mode = "Blue Archive";
  let content = null;
  const list = [
    { id: 1, title: "Momo2", body: "미또졌" },
    { id: 2, title: "Midoli", body: "미또이" },
    { id: 3, title: "Aris", body: "히카리여!" },
    { id: 4, title: "Uzi", body: "UziQueen." },
  ];
  if (mode === "Blue Archive") {
    content = (
      <div>
        <Article title="Game Development Department" body="Meow"></Article>
        <Article title="Midoli" body="Game Start!"></Article>
      </div>
    );
  } else if (mode === "Genshin Impact") {
    content = (
      <div>
        <Article title="Liyue"></Article>
        <Article title="호두"></Article>
      </div>
    );
  }

  return (
    <div>
      <Header
        title="Blue Archive"
        onChangeMode={() => {
          alert("Hello World!");
        }}
      ></Header>
      <Nav
        list={list}
        onChangeMode={(body) => {
          alert(body);
        }}
      ></Nav>
      {content}
    </div>
  );
}

export default App;
