import React from 'react';
import renderer from 'react-test-renderer';
import { tempData } from './tempData';
import Detail from '../src/detail/Detail';
describe('Detial', () => {
    let wrapper = null
     const props = {
        route:{
            params:tempData
        }
    }
    beforeEach(() => {
      wrapper = renderer.create(<Detail {...props} />).toJSON();
    })
    test('has 4 child',  () => {
      expect(wrapper.children.length).toBe(4);
    })
  })