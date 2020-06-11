import { RxWebsocketSubject } from '../lib/rxjs-websocket';
const ws = new RxWebsocketSubject('wss://ws.tradier.com/v1/markets/events');



const client = new RxWebsocketSubject(`wss://ws.tradier.com/v1/markets/events`, undefined, undefined, undefined, (data) => { return data; })

client.subscribe(
    (m) => {
        console.log('message from server', m)

    },
    (e) => {
        console.log('Unclean close', e);
    },
    () => {
        console.log('Closed');
    }
);

client.connectionStatus.subscribe((isConnected) => {
    console.log('Socket-cluster emitter connection open?', isConnected)
    if (isConnected) {
        console.log('Connected, sending subscription commands...');
        ws.send('{"symbols": ["SPY"], "sessionid": "SESSION_ID", "linebreak": true}');
    }
    // this.open = isConnected;
    // if(this.open) {
    //   this.client.send({register:'server'})
    // }
    // const arrToSend = this.bufferOfMessages;
    // this.bufferOfMessages = [];
    //     arrToSend.forEach(m => {
    //         this.client.send(m);
    //     })
});

// ws.on('open', function open() {
//   console.log('Connected, sending subscription commands...');
//   ws.send('{"symbols": ["SPY"], "sessionid": "SESSION_ID", "linebreak": true}');
// });
// ws.on('message', function incoming(data) {
//   console.log(data);
// });
// ws.on('error', function error(data) {
//   console.log(data);
// });