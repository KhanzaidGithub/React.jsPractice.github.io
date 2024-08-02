// import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';

import React from 'react';
import Btnsmall from './component/btnsmall';
import Array from './component/array';
// import Newarray from './component/newarray';
// import ChallengeArray from './component/challengeArray';
import Antdesign, { Antbtn02 } from './component/antdesign';
import Fvtcolor from './component/states'
import Teststate from './component/stateTest'
import CondStateRendering from './component/conditionalStateredering';
import StateUsingObj from './component/StateUsingObj';
import USeeffect from './component/useEffectState'
// Chaper-02
import Respondevent from './component/Addign Interactivity/respondingToEvent'
import Toolbar from './component/Addign Interactivity/event02';
// import Home from './component/gemini';
import Todolist from './component/todolist';


const App = () => {
  return (
    <div>
      <Btnsmall name="Zaidkhan" />
      <Array />
      {/* <Newarray /> Use Newarray as a component */}
      {/* <ChallengeArray /> */}
      <Antdesign />
      <Antbtn02 name="Testing Btn" />
      <Fvtcolor />
      <Teststate />
      <CondStateRendering />
      <StateUsingObj />
      <USeeffect />
      {/* Chapter Change */}
      <Respondevent />
      <Toolbar />
      {/* <Home/> */}
      <Todolist />
    </div>
  );
}

export default App;
