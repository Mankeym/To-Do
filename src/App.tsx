import React, {useEffect} from 'react';
import {Header} from "./components/Header/Header";
import {Main} from "./components/Main/Main";
import {useDispatch} from "react-redux";
import {fetchTasks} from "./asyncActions/tasks";

function App() {

    const dispatch:any = useDispatch()
    useEffect(()=>{
        dispatch(fetchTasks())
    },[])
    console.log(1)
  return (
      <>
      <Header />
      <Main/>
      </>
  );
}

export default App;
