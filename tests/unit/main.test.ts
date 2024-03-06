// npx vitest test
import { expect, test } from "vitest";
import { askQuestion, selectGroup } from "../../client/main.ts";

const name: string = "big_talk"
const myElement = document.createElement('div')

test("big_talk", () => {
    expect(askQuestion(name, myElement)).toBe("Big Talk Questions")
});

test("fall in love question set", () => {
    expect(askQuestion("fall_in_love", myElement)).toBe("36 Questions to Fall in Love")
})

test("friends set", () => {
    expect(askQuestion("friends", myElement)).toBe("Questions to ask your friends")
})