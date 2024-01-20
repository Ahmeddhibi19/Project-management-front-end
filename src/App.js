import FormAddProject from "./Components/FormAddProject";
import FormAddTask from "./Components/FormAddTask";
import FormUpdateProject from "./Components/FormUpdateProject";
import FormUpdateTask from "./Components/FormUpdateTask";
import Home from "./Components/Home";
import Projects from "./Components/Projects";
import Tasks from "./Components/Tasks";
import { Route,Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home allproject='allproject' alltasks='alltasks'/>}/>
        <Route path='allproject' element={<Projects addproject='addproject' updateproject='updateproject' addtask='addtask' updatetask='updatetask'/>}/>
        <Route path="/allproject/addproject" element={<FormAddProject/>}/>
        <Route path="/allproject/addtask" element={<FormAddTask/>}/>
        <Route path="/allproject/updatetask" element={<FormUpdateTask/>}/>
        <Route path="/allproject/updateproject" element={<FormUpdateProject/>}/>
        <Route path='/alltasks' element={<Tasks updatetask='updatetask'/>}/>
        <Route path="/alltasks/addtask" element={<FormAddTask/>}/>
        <Route path="/alltasks/updatetask" element={<FormUpdateTask/>}/>
      </Routes>
    </div>
  );
}

export default App;
