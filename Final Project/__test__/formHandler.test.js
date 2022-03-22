import { handleSubmit } from "../src/client/js/formHandler"


describe("Testing to see if the handle sumbit is defined", () => {
    test("Test the handle submit function", () => {
        expect(handleSubmit).toBeDefined();
    })});