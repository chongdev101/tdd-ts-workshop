import { CircularBuffer } from '../libs/CircularBuffer';

describe("circularBuffer", () => {

    it("should get 1 when put 1", () => {
        //  arrange   
        const expectedResult = 1;
        const circularBuffer = new CircularBuffer();

        // act
        circularBuffer.put(1);
        const actualCircularBuffer = circularBuffer.get();

        // assert
        expect(actualCircularBuffer).toEqual(expectedResult);
    });

    it("should get 1 when put 1,2", () => {
        //  arrange   
        const expectedResult = 1;
        const circularBuffer = new CircularBuffer();

        // act
        circularBuffer.put(1);
        circularBuffer.put(2);
        const actualCircularBuffer = circularBuffer.get();

        // assert
        expect(actualCircularBuffer).toEqual(expectedResult);
    })

    it("should get 1,2 when put 1,2", () => {
        //  arrange   
        const expectedResult1 = 1;
        const expectedResult2 = 2;
        const circularBuffer = new CircularBuffer();

        // act
        circularBuffer.put(1);
        circularBuffer.put(2);
        const actualCircularBuffer1 = circularBuffer.get();

        const actualCircularBuffer2 = circularBuffer.get();

        // assert
        expect(actualCircularBuffer1).toEqual(expectedResult1);

        expect(actualCircularBuffer2).toEqual(expectedResult2);
    })

    it("ถ้า overflow ให้เลื่อน pointerWrite ไป 1 ตำแหน่ง", () => {
        //  arrange   
        const expectedResult = 2;
        const circularBuffer = new CircularBuffer();

        //act
        circularBuffer.put(1);
        circularBuffer.put(2);
        circularBuffer.put(3);
        circularBuffer.put(4);
        const resultBuffer = circularBuffer.get();

        //assert
        expect(resultBuffer).toEqual(expectedResult);
    })
    it("ควรได้ 2 ถ้า buffer ไม่เต็ม แต่ overflow", () => {
        //  arrange   
        const expectedResult = 2;
        const circularBuffer = new CircularBuffer();

        //act
        circularBuffer.put(1);
        circularBuffer.put(2);
        circularBuffer.put(3);
        circularBuffer.get();
        circularBuffer.put(4);
        const resultBuffer = circularBuffer.get();

        //assert
        expect(resultBuffer).toEqual(expectedResult);
    })
})