import { expect, test } from "vitest";
import { askQuestion } from "../../client/main.ts";

test("first test", () => {
    const myElement = document.createElement('div')
    expect(askQuestion("fall_in_love", myElement)).toBe("36 Questions to Fall in Love")
});
