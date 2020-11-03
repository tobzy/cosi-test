import React from 'react'
import Enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import {Welcome} from "../../screens/Welcome";

Enzyme.configure({adapter: new Adapter()})

describe('Success Component', () => {

    let wrapper:any;
    const mockSaveUserDetails = jest.fn();   // our mock submit function to replace the one provided by mapDispatchToProps

    beforeEach(() => {
        wrapper = shallow(<Welcome saveUserDetails={mockSaveUserDetails}/>);
    })

    it('renders self', () => {
        expect(wrapper.find('form').hasClass('welcome-page')).toBe(true)
    })

    it('renders title', () => {
        expect(wrapper.find('h2').text()).toBe('Welcome to your Web Check-in')
    })

    it('renders two form fields', () => {
        expect(wrapper.find('.form-group')).toHaveLength(2);
    });


})