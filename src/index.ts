import "./style.css";
import { UI } from "peasy-ui";
import Peer from "peerjs";

if ("mediaDevices" in navigator && "getUserMedia" in navigator.mediaDevices) {
  console.log("Let's get this party started");
} else {
  window.alert("BROWSER NO WORKY");
}

const peer = new Peer();
// \${value<=>remoteID
const template = `
<div>
    <div>
        <label for="peerID"> Peer ID </label>
        <input id="peerID" type="text" class="peerinput" name="peerID" \${value<=>remoteID}}>
        <p> my id is: </p> <span>\${myID}</span>
        
    </div>

    <div style="margin-bottom: 10px;">
        <label for="source">Source Control</label>
        <input \${value<=>myIndex} name="source" type="number" min="1" max="4">
    </div>

    <div class="vidContainer">
        <div class="user" \${user<=*users:id}>
          <div class="buttondiv" \${===user.isVisible}>
            <button id="AC_\${user.id}" \${!==user.callActive} \${click@=>makeAudioCall}>Audio</button>
            <button id="VC_\${user.id}"\${!==user.callActive} \${click@=>makeCall}>Video</button>       
            <button id="Mute_\${user.id}" \${===user.callActive} \${click@=>mute}>Mute</button> 
            <button id="CC_\${user.id}" \${===user.callActive} \${click@=>disconnect}>Close</button> 
          </div>
          <div class="zoomcrop" style="border: 1px solid \${user.color};" >
            <video id="myvid\${user.id}"></video>
          </div>
        </div>
    </div>
</div>`;

const model = {
  makeCall: (_event: any, model: any, element: any) => {
    console.log(element);
    const target = parseInt(element.id.split("_")[1]);
    const source = model.myIndex;
    model.remoteID = (document.getElementById("peerID") as HTMLInputElement).value;
    console.log(target, source);
    if (target == source) return;
    if (model.remoteID == undefined) return;
    console.log("here");
    const theirID = model.remoteID;
    console.log("calling: ", theirID);
    call(theirID, target, source, true);
  },
  makeAudioCall: (_event: any, model: any, element: any) => {
    const target = parseInt(element.id.split("_")[1]);
    const source = model.myIndex;
    if (target == source) return;
    if (model.remoteID == undefined) return;

    const theirID = model.remoteID;
    console.log("calling: ", theirID);
    call(theirID, target, source, false);
  },
  disconnect: () => {},
  mute: () => {},
  videoSrc: "",
  myID: "",
  myIndex: 1,
  remoteID: "",
  users: <any>[],
};

model.users.push({
  id: 1,
  color: "red ",
  callActive: false,
  get isVisible() {
    return model.myIndex != this.id;
  },
});
model.users.push({
  id: 2,
  color: "blue",
  callActive: false,
  get isVisible() {
    return model.myIndex != this.id;
  },
});
model.users.push({
  id: 3,
  color: "limegreen ",
  callActive: false,
  get isVisible() {
    return model.myIndex != this.id;
  },
});
model.users.push({
  id: 4,
  color: "purple ",
  callActive: false,
  get isVisible() {
    return model.myIndex != this.id;
  },
});

peer.on("open", id => {
  console.log("peer ID: ", id);
  model.myID = id;
});

peer.on("call", async call => {
  console.log("getting called");

  const src = model.myIndex;
  const trg = src + 1;
  let getUserMedia = navigator.mediaDevices.getUserMedia;
  try {
    console.log("trying call");
    let stream = await getUserMedia({ video: true, audio: true });
    console.log("answering call");
    call.answer(stream);
    call.on("stream", (remoteStream: any) => {
      const srcCntrl: any = document.getElementById(`myvid${src}`);
      srcCntrl.srcObject = stream;
      srcCntrl.play();
      console.log("stream established");
      console.log(remoteStream);
      const vidCntrl: any = document.getElementById(`myvid${trg}`);
      vidCntrl.srcObject = remoteStream;
      vidCntrl.play();
      model.users[trg - 1].callActive = true;
      model.users[src - 1].callActive = true;
    });
  } catch (error) {
    window.alert(error);
  }
});

const call = async (remotePeerID: any, trg: number, src: number, video: boolean) => {
  let getUserMedia = navigator.mediaDevices.getUserMedia;
  try {
    console.log("setting up stream");
    let stream = await getUserMedia({ video: video, audio: true });
    console.log("making call");
    const call = peer.call(remotePeerID, stream, {});
    console.log("call id: ", call);

    call.on("stream", (remoteStream: any) => {
      const srcCntrl: any = document.getElementById(`myvid${src}`);
      srcCntrl.srcObject = stream;
      srcCntrl.play();
      console.log("stream established");
      console.log(remoteStream);
      const vidCntrl: any = document.getElementById(`myvid${trg}`);
      vidCntrl.srcObject = remoteStream;
      vidCntrl.play();
      model.users[trg - 1].callActive = true;
      model.users[src - 1].callActive = true;
    });
  } catch (error) {
    window.alert(error);
  }
};

UI.create(document.body, template, model);

setInterval(() => {
  UI.update();
}, 1000 / 60);
