import './Christmas.css';
import {useState} from 'react'

function Headline(props){
  return(
    <header>
    <h1><a href="/" onClick={event=>{
        event.preventDefault();
        props.onChangeMode();
        }}>키보스트</a></h1>
    </header>
  )
}

function Nav(props){
    const liList = props.list.map((li)=>(
      <li key={li.id}>
        <a href={'./read'+li.id} onClick={(event)=>{
            event.preventDefault();
            props.onChangeMode(li.id);  
          }
        }>{li.title}</a>
      </li>
    )) 
    return (
      <nav>
        <ol>{liList}</ol>
      </nav>
      
    );
}

function Main(props){
    return(
      <article>
        <h2>{props.title}</h2>
        <div>{props.body}</div>
      </article>
    )
}

function Create(props){
    return(
      <form onSubmit={event=>{
        const title = event.target.title.value;
        const body = event.target.body.value;
        event.preventDefault();
        props.onCreateMode(title,body)
      }}>
        <p><input name='title'></input></p>
        <p><input name='body'></input></p>
        <p><input type='submit' value='submitttt'></input></p>
      </form>
    )
}


function Chirstmas(){
  let nextId=5;
  const[mode, setMode]=useState('키보스트')
  const[id,setId]=useState(null)
  const [list, setList]=useState([
    {id:1, title:'Uz', body:'UzQueen'},    
    {id:2, title:'Momoi', body:'사이바 모모이'},    
    {id:3, title:'Midoli', body:'사이바 미도리'},    
    {id:4, title:'Alis', body:'Hikari'},    
    ])
  let context = null;
  if(mode==='키보스트'){
    context = (
      <>
        <Main title="샬레" body="이서리센세"></Main>;
        <a href='./create' onClick={event=>{
          event.preventDefault();
          setMode('크리에이트');
        }}>크리에이트!</a>
      </>
    );
  }else if(mode==='게임개발부'){
    let title,body=null;
    for(let i = 0; i<list.length; i++){
      if(list[i].id===id){
        title=list[i].title;
        body=list[i].body;
      }
    }
    context = (
      <>
        <Main title={title} body={body}></Main>
        <a href="./create"
           onClick={(event) => {
             event.preventDefault();
             setMode("크리에이트");
          }}>크리에이트!</a>
      </>
    );
  }else if(mode==='크리에이트'){
    context=<Create id={nextId} onCreateMode={(title,body)=>{
      const createList={id:nextId, title:title, body:body};
      const copyList = [...list];
      copyList.push(createList);
      setList(copyList);
      setId(nextId);
      setMode('게임개발부');
      nextId=nextId+1
    }}></Create>
  }
  return(
    <>
      <Headline onChangeMode={()=>{setMode('키보스트')}}></Headline>
      <Nav list={list} onChangeMode={(id)=>{
        setMode('게임개발부');
        setId(id);

      }}></Nav>
      {context}
    </>
  )
}
export default Chirstmas