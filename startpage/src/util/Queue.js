class Queue {
    constructor() {
        this._items = [];
    };

    constructor(items) {
        this._items = JSON.parse(JSON.stringify(items));
    }

    get items() {
        return this._items;
    }

    isEmpty() {
        return this.items.length == 0;
    };

    len() {
        return this._items.length;
    }

    enqueue(element) {
        this.items.unshift(element);
    };

    dequeue(element) {
        if (this.isEmpty()) {
            return null;
        }
        return this.items.pop();
    };

    clear() {
        this._items = [];
    }

    front() {
        if (this.isEmpty()) {
            return null;
        }
        return this.items[0];
    };

    end() {
        if (this.isEmpty()) {
            return null;
        }
        return this.items.at(-1);
    };
};

export { Queue }; 