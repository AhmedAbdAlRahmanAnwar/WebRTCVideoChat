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
             // urls: "stun:numb.viagenie.ca",
             urls: process.env.REACT_APP_STUN_SERVERS,
             username: process.env.REACT_APP_TURN_USERNAME,
             credential: process.env.REACT_APP_TURN_CREDENCIAL,
           },
           {
             // urls: "turn:numb.viagenie.ca",
             urls: process.env.REACT_APP_TURN_SERVERS,
             username: process.env.REACT_APP_TURN_USERNAME,
             credential: process.env.REACT_APP_TURN_CREDENCIAL,
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
