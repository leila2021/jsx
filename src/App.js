import './App.css';
import imageleyla from "./imageInSrc.jpg";
function App() {
  return (
    <div className="App">
      <div style={{border:'solid 1px black',maxwidth:'100vw'}}>

<h1 className='title red'>My name is Layla</h1>

<br></br>

<img src={imageleyla}></img>

<br ></br>

<img src={"/imageInPublic.jpg"}></img>

</div>

<video width="320" height="240" controls>

<source src={"myVideo.mp4"} type="video/mp4" ></source>

</video>
    </div>
  );
}

export default App;
