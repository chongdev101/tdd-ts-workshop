export class CircularBuffer {
    buffer: number[] = []
    pointerRead: number = 0
    pointerWrite: number = 0
    bufferSize: number = 3;
    count: number = 0
    /**
     *
     */
    constructor(size: number = 3) {
        this.bufferSize = size;
    }

    public put(num: number) {
        this.buffer[this.pointerWrite++] = num;
        if(this.count === this.bufferSize) {
            this.pointerRead++;
        } else {
            this.pointerWrite %= this.bufferSize;
        }
        this.count++
    }

    public get() {
        const result = this.buffer[this.pointerRead++];
        this.pointerRead %= this.bufferSize;
        this.count--

        return result
    }
}