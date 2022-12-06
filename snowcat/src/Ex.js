/* eslint-disable react/jsx-no-undef */
import "./Ex.css"

function Header(props){
    console.log(props)
  return (
    <header>
      <h1 id="hi">
        <a href="/">{props.title}</a>
      </h1>
    </header>
  );
}

function Nav(props) {
  console.log(props.call)
  const li = props.call.map((hi)=>{return <li key={hi.title}>{hi.title}</li>})
  return(
    <nav>
      <div>
        <ol>
          {li}
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
  const nameList = [
    {id:1, title:"Alis", language:"C"},
    {id:2, title:"Momo2", language:"Javascript"},
    {id:3, title:"Midoli", language:"Python"},
    {id:4, title:"UZQUeen", language:"SQL"} 
  ]
  return (
    <div>
      <Header title="Hoyoverse-"></Header>
      <Nav call={nameList}></Nav>
      <Article></Article>
    </div>
  );
}

export default Ex;
