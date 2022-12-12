import Counter from "./Counter";
import Name from "./Name";
const App=()=>{
    return <div>
        <h1>Welcome To React App</h1>
        <Counter count={9}/>
        <Counter count={15}/>
        
        <Name fName="Afzal" lName="Rahman"/>
        <Name fName="Hafeez" lName="Rahman"/>
 
    </div>
}

export default App;