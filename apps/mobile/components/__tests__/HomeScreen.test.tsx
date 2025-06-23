import { render } from "@/utils/test-utils";
import { useQuery } from "@tanstack/react-query";

import HomeScreen from "@/app/(tabs)/index";

// Mock useQuery
jest.mock("@tanstack/react-query", () => ({
  useQuery: jest.fn(),
}));
const mockUseQuery = useQuery as jest.MockedFunction<typeof useQuery>;

describe("HomeScreen", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockUseQuery.mockImplementation(({ queryKey }) => {
      if (queryKey[0] === 'categories') {
        return {
          data: { product_categories: [] },
          isFetching: false,
          refetch: jest.fn(),
        };
      }
      if (queryKey[0] === 'featured') {
        return {
          data: { products: [] },
          isFetching: false,
          refetch: jest.fn(),
        };
      }
      return {
        data: null,
        isFetching: false,
        refetch: jest.fn(),
      };
    });
  });

  test("snapshot", () => {
    const tree = render(<HomeScreen />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("Text renders correctly on HomeScreen", () => {
    const { getByText } = render(<HomeScreen />);

    getByText("Shop by Category");
    getByText("Popular");
  });
});
