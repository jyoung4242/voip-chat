import "./style.css";
import { UI } from "peasy-ui";
import Peer from "peerjs";

if ("mediaDevices" in navigator && "getUserMedia" in navigator.mediaDevices) {
  console.log("Let's get this party started");
} else {
  window.alert("BROWSER NO WORKY");
}

const peer = new Peer();

const template = `
<div>
    <div>
        <button \${click@=>makeCall}>Make Call</button>
        <input type="text" \${value<=>remoteID} />
        <p> my id is: </p>
        <span>\${myID}</span>
    </div>

    <div>
        <video id="myvid" />
    </div>
</div>`;

const model = {
  makeCall: (_event: any, model: any, _element: any) => {
    const theirID = model.remoteID;
    console.log("calling: ", theirID);
    call(theirID);
  },
  videoSrc: "",
  myID: "",
  remoteID: "",
};

peer.on("open", id => {
  console.log("peer ID: ", id);
  model.myID = id;
});

peer.on("call", async call => {
  console.log("getting called");
  let getUserMedia = navigator.mediaDevices.getUserMedia;
  try {
    console.log("trying call");
    let stream = await getUserMedia({ video: true, audio: true });
    console.log("answering call");
    call.answer(stream);
    call.on("stream", (remoteStream: any) => {
      console.log("stream established");
      console.log(remoteStream);
      const vidCntrl: any = document.getElementById("myvid");
      vidCntrl.srcObject = remoteStream;
      vidCntrl.play();
    });
  } catch (error) {
    window.alert(error);
  }
});

const call = async (remotePeerID: any) => {
  let getUserMedia = navigator.mediaDevices.getUserMedia;
  try {
    console.log("setting up stream");
    let stream = await getUserMedia({ video: true, audio: true });
    console.log("making call");
    const call = peer.call(remotePeerID, stream, {});
    console.log("call id: ", call);
    call.on("stream", (remoteStream: any) => {
      console.log("stream established");
      console.log(remoteStream);
      const vidCntrl: any = document.getElementById("myvid");
      vidCntrl.srcObject = remoteStream;
      vidCntrl.play();
    });
  } catch (error) {
    window.alert(error);
  }
};

UI.create(document.body, template, model);

setInterval(() => {
  UI.update();
}, 1000 / 60);
