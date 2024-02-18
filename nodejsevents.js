import { EventEmitter } from 'node:events';

class MyEmitter extends EventEmitter { }

const myEmitter = new MyEmitter();
myEmitter.on('Need_light?', () => {
        setTimeout(() => {
                console.log('Kindly turn on the light switch.');
        }, 3000);

});

myEmitter.emit('Need_light?');