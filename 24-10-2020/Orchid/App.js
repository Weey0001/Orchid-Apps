import React, { Component } from 'react'
import FirstPage from './App/firstPage/firstPage'
import Back3D from './App/firstPage/components/back3D/Back3D'
import Reg from "./App/Registre/reg";

export default class App extends Component {
  render() {
    return (
      <Back3D>
        {/* <Reg /> */}
        <FirstPage/>
      </Back3D>
    )
  }
}

