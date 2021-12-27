'use strict';

const
    js0 = require('js0'),

    Timer = require('./Timer')
;

class abTimer_Class
{

    get Timer() {
        return Timer;
    }


    constructor()
    {

    }

    start(runFn, interval)
    {
        js0.args(arguments, 'function', 'number');

        let t = new Timer(runFn, interval);
        t.start();

        return t;
    }

}
export default abTimer = new abTimer_Class();