import React,{useState, useEffect} from 'react'
import { Note } from './components/Note';
const getDatafromLS=()=>{
  const data = localStorage.getItem('libs');
  if(data){
    return JSON.parse(data);
  }
  else{
    return []
  }
}

export const App = () => {
  const [libs, setlibs]=useState(getDatafromLS());
  const [title, setTitle]=useState('');
  const [is, setIs]=useState('');
  const [author, setAuthor]=useState('');
  

  const handleAddlibSubmit=(e)=>{
    e.preventDefault();
    let lib={
      title,
      author,
      is
    }
    setlibs([...libs,lib]);
    setTitle('');
    setAuthor('');
    setIs('');
  }

  const deletelib=(isbn)=>{
    const filteredlibs=libs.filter((element,index)=>{
      return element.is !== is
    })
    setlibs(filteredlibs);
  }
  useEffect(()=>{
    localStorage.setItem('libs',JSON.stringify(libs));
  },[libs])

  return (
    <div className='wrapper'>
      <h1>BookList App</h1>
      <p>Add and view your books using local storage</p>
      <div className='main'>

        <div className='form-container'>
          <form autoComplete="off" className='form-group'
          onSubmit={handleAddlibSubmit}>
            <label>Title</label>
            <input type="text" className='form-control' required
            onChange={(e)=>setTitle(e.target.value)} value={title}></input>
            <br></br>
            <label>Author</label>
            <input type="text" className='form-control' required
            onChange={(e)=>setAuthor(e.target.value)} value={author}></input>
            <br></br>
            <label>ISBN#</label>
            <input type="text" className='form-control' required
            onChange={(e)=>setIs(e.target.value)} value={is}></input>
            <br></br>
            <button type="submit" className='btn btn-success btn-md'>
              ADD
            </button>
          </form>
        </div>

        <div className='view-container'>
          {libs.length>0&&<>
            <div className='table-responsive'>
              <table className='table'>
                <thead>
                  <tr>
                    <th>ISBN#</th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  <Note libs={libs} deletelib={deletelib}/>
                </tbody>
              </table>
            </div>
            <button className='btn btn-danger btn-md'
            onClick={()=>setlibs([])}>Remove All</button>
          </>}
          {libs.length < 1 && <div>No books are added yet</div>}
        </div>

      </div>
    </div>
  )
}

export default App


