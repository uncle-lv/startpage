import { Queue } from "./Queue";

class HistoryRecorder {
    constructor(size = 10) {
        this._size = size;
        this.queue = new Queue();
    }

    constructor(records, size = 10) {
        this._size = size;
        this.queue = new Queue(records);
    }

    _isFull() {
        if (this.queue.len() >= this._size) {
            return true;
        }
        return false;
    }

    add(record) {
        if (this._isFull()) {
            this.queue.dequeue();
        }
        this.queue.enqueue(record);
    }

    remove(key) {
        this.queue.items().filter((item, index, array) => {
            if (item.key === key) {
                array.splice(index, 1);
            }
        });
    }

    clear() {
        this.queue.clear();
    }
}