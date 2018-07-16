import sayHelloWorld from './helloWorld'

describe("helloWord test", () => {

    it("say helloWord", () => {
        const result = sayHelloWorld();
        expect(result)
            .toEqual('hello world!');
    });
});
