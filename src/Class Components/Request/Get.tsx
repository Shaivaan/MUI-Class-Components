// getAllClients=()=>{
//     // Customizable Area Start
//     const header = {
//       token: localStorage.getItem("token"),
//     };
//     const requestMessage = new Message(
//       getName(MessageEnum.RestAPIRequestMessage)
//     );
//     this.getAllClientsApiId = requestMessage.messageId;
//     requestMessage.addData(
//       getName(MessageEnum.RestAPIResponceEndPointMessage),
//       configJSON.CLIENT_GET_URL
//     );

//     requestMessage.addData(
//       getName(MessageEnum.RestAPIRequestHeaderMessage),
//       JSON.stringify(header)
//     );

//     requestMessage.addData(
//       getName(MessageEnum.RestAPIRequestMethodMessage),
//       configJSON.GET_METHOD_TYPE
//     );
//     runEngine.sendMessage(requestMessage.id, requestMessage);
//     // Customizable Area End
//     return true;
//   }