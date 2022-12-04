/* eslint-disable jsx-a11y/alt-text */
import './App.css';

function Header(props){
  return (
    <header>
      <h1>
        <a href='/read' onClick={
          (event)=> {
            event.preventDefault();
            props.onChangeMode();
          }
          }>{props.title}</a>
      </h1>
    </header>
  );
}

function Nav(props){
  const lis = props.list.map((title) => (
    <li key={title.id}>
      <a href={'/read'+title.id}>{title.title}</a>
    </li>
  ));
  return (
    <nav>
      <ol>{lis}</ol>
    </nav>
  );
}

function Article(props){
  return(
    <article>
      <h1>{props.title}</h1>
      <h1>{props.body}</h1>
    </article>
  )
}

function App(){
  const list =[
    {id:1, title:'Momo2', body:'미또졌'},
    {id:2, title:'Midoli', body:'미또이'},
    {id:3, title:'Aris', body:'히카리여!'},
    {id:4, title:'Uzi', body:'UziQueen.'}
  ]
  return (
    <div>
      <Header title='Blue Archive' onChangeMode={()=>{alert('Hello World!')}} ></Header>
      <Nav list={list} onchangeMode={()=>{alert(1)}}></Nav>
      <Article title='Game Development Department'></Article>
      <Article title='Midoli' body='Game Start!'></Article>
    </div>
  );
}

export default App;
