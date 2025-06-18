import { render } from "@/utils/test-utils";

import HomeScreen from "@/app/(tabs)/index";

describe("HomeScreen", () => {
  test("snapshot", () => {
    const tree = render(<HomeScreen />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("Text renders correctly on HomeScreen", () => {
    const { getByText, debug } = render(<HomeScreen />);

    debug();

    getByText("Welcome to the app!");
  });
});
