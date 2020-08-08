import Peer from "simple-peer";

export default class VideoCall {
  peer = null;
  init = (stream, initiator) => {
    this.peer = new Peer({
      path: "/peerjs",
      host: "/",
      port: "443",
      initiator: initiator,
      stream: stream,
      trickle: false,
      iceTransportPolicy: "relay",
      config: {
        iceServers: [
           {
             urls: "stun:numb.viagenie.ca",
             username: "ahmedabdalrahman61@gmail.com",
             credential: "1234512345",
           },
           {
             urls: "turn:numb.viagenie.ca",
             username: "ahmedabdalrahman61@gmail.com",
             credential: "1234512345",
           },
         ],
      }
    });
    return this.peer;
  };
  connect = (otherId) => {
    this.peer.signal(otherId);
  };
}
