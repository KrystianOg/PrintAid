import * as React from "react";
import { render, screen } from "@testing-library/react-native";

import { ThemedText } from "../ThemedText";

it(`renders correctly`, () => {
  render(<ThemedText>Snapshot test!</ThemedText>);

  const tree = screen.toJSON();

  expect(tree).toMatchSnapshot();
});
