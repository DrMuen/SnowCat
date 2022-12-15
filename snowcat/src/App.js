/* eslint-disable jsx-a11y/alt-text */
import "./App.css";
import {useState} from "react"
function Header(props) {
  return (
    <div className="head">
      <header>
        <h1>
          <a
            href="https://bluearchive.nexon.com/events/2022/10/1st"
            onClick={(event) => {
              props.onChangeMode();
              event.preventDefault();
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
        <a id={name.id} href={'/'+name.id} 
          onClick={(event)=>{
            props.onChangeMode(event.target.id);
            event.preventDefault();
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
  // const [mode,setMode] = useState("Student")
  const [mode,setMode] = useState("HomePage")
  const [id,setId] = useState(null)
  let content = null;
  let uyouka = null;
  
  const [list,setList] = useState([
    { id: 1, title: "Momoi", body: "미또졌" },
    { id: 2, title: "Midoli", body: "미또이" },
    { id: 3, title: "Aris", body: "히카리여!" },
    { id: 4, title: "Uz", body: "UzQueen." },
  ]);

  
  if(mode === "HomePage"){
    content = <Article title="이서리센세" body="돌아온걸 환영해!"></Article>
  }else if(mode === "Student"){
    let title,body=null;
    for(let i=0; i<list.length; i++){
      if(list[i].id===Number(id)){
         title=list[i].title;
         body=list[i].body
      }
    }
    content = <Article title= {title} body={body}></Article>
  }
  return (
    <div>
      <Header
        title="HomePage"
        onChangeMode={() => {
          setMode("HomePage");

        }}
      ></Header>
      <Nav
        list={list}
        onChangeMode={(_id) => {
          setMode("Student")
          setId(_id)
          // hi.target.innerHTML = hey 
        }}
      ></Nav>
    {content}
    </div>
  );
}

export default App;
