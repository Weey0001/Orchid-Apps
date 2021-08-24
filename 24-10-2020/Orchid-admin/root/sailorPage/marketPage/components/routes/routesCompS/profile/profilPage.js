import React from "react";
import ProfilContainer from "./components/container/profilCon";
import InfoAdmin from "./components/infoAdmin/InfoAdmin";

let ProfilPage = props => 

  <ProfilContainer>

    { /* ImageProfile */ }

    <InfoAdmin { ...props } />

  </ProfilContainer>

export default ProfilPage