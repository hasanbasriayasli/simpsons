import React from "react";
import renderer from "react-test-renderer";
import { tempData } from "./tempData";
import List from "../src/list/List";
jest.useFakeTimers();

describe("AddForm",   () => {
  let wrapper = null;
  const spyNavigate = jest.fn();

  const props = {
    navigation: {
      navigate: spyNavigate,
    },
    route:{
      params: tempData
    },
  };
  beforeEach(  async() => {
    wrapper = await renderer.create(<List {...props} />).toJSON();
  });
  
  it("has 3 child", async() => {
     expect(wrapper.children.length).toBe(3);
  });
});
