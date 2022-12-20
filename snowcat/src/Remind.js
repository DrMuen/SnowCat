import "./Remind.css"
import { useState } from "react"

function Header(props){
  return (
    <header>
      <h1>
        <a href="./" onClick={(event)=>{
          event.preventDefault()
          props.onChangeMode()
        }}>입구</a>
    </h1>
    </header>
  );
}

//Nav -> Navigation Link 라는 뜻으로 사용됨. 일반적으로 메뉴, 목차 인덱스 등을 표시할 때 사용됨.
function Nav(props){
  const menu = props.list.map((array)=>(
      <li key={array.id}>
        <a id={array.id} href={'./Read'+array.id} onClick={(event)=>{
          event.preventDefault();
          props.onChangeMode(Number(event.target.id));
        }}>{array.title}</a>
      </li> 
  ))
  return(
    <nav>
      <ol>{menu}</ol>
    </nav>
  )
}

function Article(props){
  return(
    <article>
      <h2>{props.title}</h2>
      <div>{props.body}</div>
    </article>  
  )
}

function Create(props){
  let title,body=null;
  return(
    <form onSubmit={(event)=>{
      event.preventDefault();
      title = event.target.title.value;
      body = event.target.body.value;
      props.onCreateMode(title,body);
    }}>
      <p><input name='title' placeholder='유즈야 왜 이제야 온거니..'></input></p>
      <p><input name='body' placeholder='꼭 천장으로 와야했니'></input></p>
      <p><input type='submit' value='모집'></input></p>
    </form>
  )
}

function Update(props){
  const [title,setTitle] = useState(props.title); 
  const [body,setBody] = useState(props.body);
  return(
    <form onSubmit={(event)=>{
      const title=event.target.title.value;
      const body=event.target.body.value
      event.preventDefault();
      props.onUpdateMode(title,body)
    }}>
      <p><input name='title' value={title} onChange={(event)=>{
        setTitle(event.target.value);
        }}></input></p>
      <p><input name='body' value={body} onChange={(event)=>{
        setBody(event.target.value)
      }}></input></p>
      <p><input type='submit' value='수정'></input></p>
    </form>
  )
}


function Remind(){
  let content = null;
  let createContent = null;
  const [mode,setMode]=useState("homepage")
  const [id,setId]=useState(null);
  const [nextId,setNextId]=useState(5);
  const [list,setList]=useState([
    {id:1,title:'Momoi',body:'오늘도 진 모모이'},
    {id:2,title:'Midoli',body:'오늘도 모모이를 이긴 미도리'},
    {id:3,title:'Aris',body:'프로게이머 아리스'},
    {id:4,title:'Uz',body:'캐비넛속의 UzQueen'},
  ])

  if(mode==="homepage"){
    content=
      <div>
        <Article title='키보스트' body='밀레니엄'></Article>
        <a className="create" href="./create" onClick={(event)=>{
          event.preventDefault();
          setMode("create")  
        }}>뭔가를 만들어보자!</a>
      </div>
  }else if(mode==='student'){
    let body,title = null;
    for(let i=0; i<list.length; i++){
      if(list[i].id===id){
        title=list[i].title;
        body=list[i].body;
      }
    }
    content=
      <div>
        <Article title={title} body={body}></Article>
        <p>
          <a className="create" href="./create" onClick={(event)=>{
            event.preventDefault();
            setMode("create")  
          }}>뭔가를 만들어보자!</a>
        </p>
        <p>
          <a className="update" href="./update" onClick={(event)=>{
            event.preventDefault();
            setMode("update")  
            }}>뭔가를 수정해보자!</a>
        </p>
        <p>
            <a className="delete" href="./delete" onClick={(event)=>{
            event.preventDefault();
            setMode("delete")  
            }}>뭔가를 삭제해보자!</a>
        </p>
      </div>
  }else if(mode==='create'){
    createContent=<Create onCreateMode={(title,body)=>{
      const newCreate={id:nextId,title:title,body:body};
      const newList = [...list];
      newList.push(newCreate);
      setList(newList);
      setId(nextId);
      setMode('student');
      setNextId(nextId+1)
    }}></Create>
}else if(mode==='update'){
     let body, title = null;
     for (let i = 0; i < list.length; i++) {
       if (list[i].id === id) {
         title = list[i].title;
         body = list[i].body;
       }
     }
    content=<Update title={title} body={body} onUpdateMode={(title,body)=>{
        const newList =[...list];
        const updateList={id:id, title:title, body:body};
        console.log(updateList)
        for (let i=0; i<list.length; i++){
            if(list[i].id===id){
                newList[i]=updateList;
                setList(newList)
                setMode('student')
            }
        }
        }
      }
></Update>
}else if(mode==='delete'){
    const newList=[];
    for(let i=0;i<list.length;i++){
        if(list[i].id!==id){
            newList.push(list[i])
        }
    }
    console.log(newList)
    setList(newList);
    setMode('homepage')
}

  return (
    <div>
      <Header onChangeMode={()=>{
        setMode('homepage')
        }}></Header>
      <Nav list={list} onChangeMode={(_id)=>{
        setMode('student');
        setId(_id)
      }}></Nav>
      {content}
      {createContent}
    </div>
  );
}

export default Remind;