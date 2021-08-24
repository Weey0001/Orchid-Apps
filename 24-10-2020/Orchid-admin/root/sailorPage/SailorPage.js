import React from 'react'
import { StatusBar } from 'react-native'
import WaitSreen from './waitSreen/waitSreen'
import { NetError } from './netError/netError'
import { Articles } from './marketPage/corps/articles/articles'
import Register from './register/register'
import Background3D from './sensors/sensor';
import { compose } from 'recompose'
import HocSailorPage from '../HocSailorPage/HocSailorPage'
import MarketPage from './marketPage/marketPage'

const SailorPage = props => 

  <Background3D>

    <StatusBar hidden={true}/>

    <NetError { ...props } />

    {

      props.actionNav === "waitscreen" ? <WaitSreen { ...props } />
      : props.actionNav === "register" ? <Register { ...props } />
      : props.actionNav === "market" ? <MarketPage { ...props } />
      : null

    }
      
  </Background3D>

export default compose (
  
  HocSailorPage

) ( SailorPage )