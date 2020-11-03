import * as types from "../../redux/actionTypes";
import userReducer from "../../redux/userReducer";

interface Action {
    type: string;
    user?: object;
}


describe("Form Reducer", () => {
    let action: Action = {
        type: "RANDOM_TYPE"
    }
    it('handles action with unknown type', () => {
        expect(userReducer(undefined, action)).toEqual({})
    })


    it("handles action of type SUBMIT_FORM_SUCCESS", () => {
        let action: Action = {
            type: types.SAVE_USER_DETAILS,
            user: {
                name: "Tobechukwu",
                lastName: 'Onuegbu'
            }
        }
        expect(userReducer(undefined, action)).toEqual({
            name: "Tobechukwu",
            lastName: 'Onuegbu'
        });
    });
})