import React, {useEffect} from 'react';
import {Header} from "./components/Header/Header";
import {Main} from "./components/Main/Main";
import {useDispatch} from "react-redux";
import {fetchTasks} from "./asyncActions/tasks";
import {Popup} from "./components/Popup/Popup";

function App() {

    /*const dispatch:any = useDispatch()
    useEffect(()=>{
        dispatch(fetchTasks())
    },[])*/
  return (
      <>
      <Header />
      <Main/>
      <Popup />
      </>
  );
}

export default App;
