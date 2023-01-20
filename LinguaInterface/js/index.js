//
//  index.js
//  LinguaInterface version 1.0
//  Created by Stéphane Valès on 2023/01/20
//
//  no description
//  Copyright © 2022 Ingenuity i/o. All rights reserved.
//

//server connection
function isConnectedToServerChanged(isConnected)
{
    if (isConnected)
        document.getElementById("connectedToServer").style.background = 'green';
    else
        document.getElementById("connectedToServer").style.background = 'red';
}


IGS.netSetServerURL("ws://localhost:5000");
IGS.agentSetName("LinguaInterface");
IGS.observeWebSocketState(isConnectedToServerChanged);

IGS.definitionSetVersion("1.0");



IGS.outputCreate("userInput", iopTypes.IGS_STRING_T, "");


//Initialize agent

//actually start ingescape
IGS.start();


//
// HTML example
//

document.getElementById("serverURL").value = IGS.netServerURL();
document.getElementById("name").innerHTML = IGS.agentName();

function executeAction() {
    //add code here if needed
}

//update websocket config
function setServerURL() {
    IGS.netSetServerURL(document.getElementById("serverURL").value);
}

//write outputs
function setuserInputOutput() {
    IGS.outputSetString("userInput", document.getElementById("userInput_output").value);
}

