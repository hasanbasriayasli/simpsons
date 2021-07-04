import React from 'react';
import renderer from 'react-test-renderer';
import AddForm from '../src/add/AddForm';

jest.mock('react-native-gesture-handler', () => {
  const View = require('react-native/Libraries/Components/View/View');
  return{
    TextInput:View
  }
});
describe('AddForm',  () => {
    let wrapper = null
    const spyNavigate = jest.fn()
    const props = {
        navigation: {
          navigate: spyNavigate,
        }
      }
    beforeEach( async () => {
      wrapper = await renderer.create(<AddForm {...props} />).toJSON();
    })
    it('has 9 child', async () => {
      expect(wrapper.children.length).toBe(9);
    })
  })