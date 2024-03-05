import { expect, test } from "vitest";
import { askQuestion } from "../../client/main.ts";

test("first test", () => {
    const myElement = document.createElement('div')
    expect(askQuestion("friends", myElement)).toBe("Questions to ask your friends")
});
