import { Injectable } from "@nestjs/common";
import { pairwise } from "rxjs";
import * as WebSocket from "ws";
import { PriorityQueueClass } from "./queue";
import { validateJSON } from "./validator";

const pairwiseQueue = new PriorityQueueClass((a, b) => a.priority > b.priority);
let i = 0;

@Injectable()
export class WSService {
    private ws = new WebSocket("ws://localhost:7777");

    constructor() {

        this.ws.on("open", () => { });
        // per each msg do something.
        this.ws.on("message", function (message) {
            const isValidMsg = validateJSON(JSON.parse(message.toString()));
            if (isValidMsg) {
                console.log(message.toString());
                const msg = JSON.parse(message.toString());
                pairwiseQueue.push(msg);
            } else {
                // discard msg
                const msg = message.toString();
                console.log(msg);
            }
            console.log('--------------------------------');
            console.log(`Queue size ${pairwiseQueue.size()}`)
        });
    }

    // send(data: any) {
    //     this.ws.send(data);
    // }

    // onMessage(handler: Function) {
    //     // ...
    // }
}