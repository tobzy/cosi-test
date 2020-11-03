import * as types from "../../redux/actionTypes";
import * as actions from "../../redux/actions";


//test suite for synchronous actions..
describe('actions', () => {
    //tests for ensure correct action type.

    it('saveUserDetails action has the correct type', () => {
        const action = actions.saveUserDetails({});
        expect(action.type).toBe(types.SAVE_USER_DETAILS);
    });
});

