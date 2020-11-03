import React from 'react'
import Enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import Success from "../../screens/Success";

Enzyme.configure({adapter: new Adapter()})

describe('Success Component', () => {

    let wrapper:any;

    beforeEach(() => {
        wrapper = shallow(<Success/>)
    })

    it('renders self', () => {
        expect(wrapper.find('div').hasClass('success-page')).toBe(true)
    })

    it('renders title', () => {
        expect(wrapper.find('h2').text()).toBe('Your check-in is confirmed')
    })

    it('has an image', () => {
        expect(wrapper.find('img').length).toBe(1)
    })

})