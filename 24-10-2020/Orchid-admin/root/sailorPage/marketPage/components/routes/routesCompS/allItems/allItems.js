import React from "react";
import FlatFrItems from "../sharedComp/FltFrItems/FlatFrItems";
import HocAllItems from "./hocallitems/HocAllItems";

let AllItems = props => <FlatFrItems { ...props } />

export default compose ( HocAllItems ) ( AllItems )