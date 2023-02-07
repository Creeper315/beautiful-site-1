import { tt1 } from "../Component/Testt/testt";

test("my test 1", () => {
    const k = 5;
    let r = tt1(k);
    expect(r).toBe(10);
});
