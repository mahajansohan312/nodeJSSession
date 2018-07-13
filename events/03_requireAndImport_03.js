const EventEmmiter = require('events');

module.exports = class Square extends EventEmmiter {
    constructor(width) {
        super()
        this.width = width;
    }

    area() {
        return this.width ** 2;
    }
};