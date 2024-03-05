// npx vitest test
import { expect, test } from "vitest";
import { askQuestion } from "../../client/main.ts";

test("first test", () => {
    const myElement = document.createElement('div')
    expect(askQuestion("big_talk", myElement)).toBe("Big Talk Questions")
});
