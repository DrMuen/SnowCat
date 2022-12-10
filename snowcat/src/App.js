/* eslint-disable jsx-a11y/alt-text */
import "./App.css";

function Header(props) {
  return (
    <div className="head">
      <header>
        <h1>
          <a
            href="https://bluearchive.nexon.com/events/2022/10/1st"
            onClick={() => {
              props.onChangeMode();
            }}
          >
            {props.title}
          </a>
        </h1>
      </header>
    </div>
  );
}

function Nav(props) {
  const lis = props.list.map((name) => (
    <li key={name.id}>
      <a href={'/'+name.id} 
        onClick={(event)=>{
          event.preventDefault();
          props.onChangeMode(event, "듀얼을 신청한다, "+name.title)
      }} >
        {name.title} 
      </a>
    </li>
  ));
  
  return (
    <div>
      <nav>
        <ol>{lis}</ol>
      </nav>
    </div>
  );
}

function Article(props) {
  return (
    <div>
      <article>
        <h1>{props.title}</h1>
        <h1>{props.body}</h1>
      </article>
    </div>
  );
}
// function Button(props){
//   return (
//     <div>
//       <input type="button" value="GAME CHANGE!" onClick={()=>{
        
//       }}></input>
//     </div>
//   );
// }

function App() {
  const mode = "Blue Archive";
  let content = null;
  const list = [
    { id: 1, title: "Momo2", body: "미또졌" },
    { id: 2, title: "Midoli", body: "미또이" },
    { id: 3, title: "Aris", body: "히카리여!" },
    { id: 4, title: "Uz", body: "UzQueen." },
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
        onChangeMode={(hi,hey) => {
          hi.target.innerHTML = hey
        }}
      ></Nav>
      {content}
    </div>
  );
}

export default App;
