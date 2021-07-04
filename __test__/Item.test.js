import React from "react";
import renderer from "react-test-renderer";
import { tempData } from "./tempData";
import Item from "../src/list/Item";


describe("Item",  () => {
  let wrapper = null;
  const spyNavigate = jest.fn();
  const handleDelete = jest.fn();
  const props = {
    navigation: {
      navigate: spyNavigate,
    },
    item:tempData,
    handleDelete
  };
  beforeEach( async () => {
    wrapper = await renderer.create(<Item {...props} />).toJSON();
  });
  test("has 2 child", async () => {
    expect(wrapper.children.length).toBe(2);
  });
});
