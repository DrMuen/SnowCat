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
            props.onChangeMode(Number(event.target.id));
            event.preventDefault();
          }}>
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
function Create(props){
  return (
    <form onSubmit={(event)=>{
      event.preventDefault();
      const small = event.target.small.value;
      const big = event.target.big.value;
      props.onCreateMode(small,big)
    }}>
      <p><input name="small" type="text"  placeholder="3Star"></input></p>
      <p><textarea name="big" placeholder="4Star"></textarea></p>
      <p><input type="submit"></input></p>
    </form>
  );
}
function Update(props){
  const [title,setTitle] = useState(props.title);
  const [body,setBody] = useState(props.body);
  console.log(title);
  console.log(body)
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        const small = event.target.small.value;
        const big = event.target.big.value;
        props.onUpdateMode(small, big);
      }}
    >
      <p>
        <input
          name="samll"
          type="text"
          placeholder="5Star"
          defaultValue={props.title}
          onChange={(event)=>{
            setTitle(event.target.value);
            
          }}
        ></input>
      </p>
      <p>
        <textarea
          name="big"
          type="text"
          placeholder="6Star"
          defaultValue={props.body}
          onChange={(event)=>{
            setBody(event.target.value)
          }}
        ></textarea>
      </p>
      <p>
        <input type="submit" value="업데이트해보자"></input>
      </p>
    </form>
  );
}

function App() {
  const [mode,setMode] = useState("HomePage")
  const [id,setId] = useState(null)
  let content = null;
  let contextControll = null;
  const [nextId,setNextId] = useState(5)
  
  const [list,setList] = useState([
    { id: 1, title: "Momoi", body: "모또졌" },
    { id: 2, title: "Midoli", body: "미또이" },
    { id: 3, title: "Aris", body: "히카리여!" },
    { id: 4, title: "Uz", body: "UzQueen." },
  ]);

  
  if(mode === "HomePage"){
    content = (
      <div>
        <Article title="이서리센세" body="돌아온걸 환영해!"></Article>
        <input
          type="button"
          value="뭔가를 추가해보자!"
          onClick={(event) => {
            event.preventDefault();
            setMode("Create");
          }}
        ></input>
      </div>
    );
  }else if(mode === "Student"){
    let title,body=null;
    for(let i=0; i<list.length; i++){
      if(list[i].id===id){
         title=list[i].title;
         body=list[i].body
      }
    }
    content = 
      <div>
        <Article title={title} body={body}></Article>
        <input
          type="button"
          value="뭔가를 추가해보자!"
          onClick={(event) => {
            event.preventDefault();
            setMode("Create");
          }}
        ></input>
      </div>
      contextControll = <a href={"/update/"+id} onClick={(event)=>{
        event.preventDefault();
        setMode("Update")
      }}>업데이트</a>
    
  }else if(mode==="Create"){
    content = <Create onCreateMode={(small,big)=>{
                const add = { id:nextId,title:small,body:big};
                const newList = [...list];
                newList.push(add);
                setList(newList);
                setMode("Student");
                setId(nextId);
                setNextId(nextId+1)
    }}></Create>
  }else if(mode==="Update"){
    let title,body=null;
    for(let i=0;i<list.length;i++){
      if(list[i].id === id){
        title = list[i].title;
        body = list[i].body
      }
    }
    content = <Update title={title} body={body} onUpdateMode={()=>{
      
    }}></Update>
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
        }}
      ></Nav>
    {content}
    {contextControll}
      </div>
  );
}

export default App;
