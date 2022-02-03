import { useState, createContext, useContext } from "react";

var AppContext = createContext();

export default function GrandParent() {
    var [nativeDetails, setNativeDetails] = useState({
        village: "Xyz"
    })

    var [myDetails] = useState({
        name: "Technofunnel"
    })

    function updateVillage() {
        setNativeDetails({
            village: "Sample"
        })
    }

    return (
        <AppContext.Provider value={{village: nativeDetails.village, updateVillage: updateVillage, myDetails: myDetails}}>
            <h1>Data from GrandParent for Village is {nativeDetails.village}</h1><hr/>
            <Parent village={nativeDetails.village}></Parent>
        </AppContext.Provider>
    )
}

function Parent() {
    return (
        <div>
            <h2>This is Simple Data from "Parent"</h2><hr/>
            <Children></Children>
        </div>
    )
}

function Children() {
    return (
        <div>
            <h3>This sis Simple Data from "Children"</h3><hr/>
            <GrandChildren></GrandChildren>
        </div>
    )
}

function GrandChildren() {
    var contextData = useContext(AppContext);
    return (
        <div>
            <h3>This is Simple Data from "GrandChildren", We belong {contextData.village}</h3>  
            <input type="button" onClick={contextData.updateVillage} value="Update" />   
        </div>
    )
}