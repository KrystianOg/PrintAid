import React from 'react';
import { render, fireEvent, waitFor } from '@/utils/test-utils';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'expo-router';
import BrowseScreen from '../browse';

jest.mock('@tanstack/react-query');
jest.mock('expo-router');

const mockUseQuery = useQuery as jest.MockedFunction<typeof useQuery>;
const mockUseRouter = useRouter as jest.MockedFunction<typeof useRouter>;
const mockPush = jest.fn();

const mockProducts = [
  {
    id: 'prod_1',
    title: 'Business Card Template',
    subtitle: 'Professional design',
    thumbnail: 'https://example.com/thumb1.jpg',
    variants: [{ calculated_price: { original_amount: 1999 } }],
    categories: [{ id: 'cat_1', name: 'Templates' }],
  },
  {
    id: 'prod_2',
    title: 'Logo Design Bundle',
    subtitle: 'Creative branding pack',
    thumbnail: 'https://example.com/thumb2.jpg',
    variants: [{ calculated_price: { original_amount: 4999 } }],
    categories: [{ id: 'cat_2', name: 'Graphics' }],
  },
  {
    id: 'prod_3',
    title: 'Social Media Kit',
    subtitle: 'Complete social package',
    thumbnail: 'https://example.com/thumb3.jpg',
    variants: [{ calculated_price: { original_amount: 2999 } }],
    categories: [{ id: 'cat_1', name: 'Templates' }],
  },
];

const mockCategories = [
  { id: 'cat_1', name: 'Templates', handle: 'templates' },
  { id: 'cat_2', name: 'Graphics', handle: 'graphics' },
  { id: 'cat_3', name: 'Logos', handle: 'logos' },
];

describe('BrowseScreen', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockUseRouter.mockReturnValue({
      push: mockPush,
      back: jest.fn(),
      replace: jest.fn(),
    } as any);
  });

  describe('Loading State', () => {
    it('displays loading indicator when products are loading', () => {
      mockUseQuery.mockReturnValue({
        data: undefined,
        isFetching: true,
        refetch: jest.fn(),
        isLoading: true,
        error: null,
      } as any);

      const { getByText } = render(<BrowseScreen />);
      
      expect(getByText('Loading products...')).toBeTruthy();
    });
  });

  describe('Product Display', () => {
    beforeEach(() => {
      mockUseQuery.mockImplementation(({ queryKey }) => {
        if (queryKey[0] === 'products') {
          return {
            data: { products: mockProducts },
            isFetching: false,
            refetch: jest.fn(),
            isLoading: false,
            error: null,
          };
        }
        if (queryKey[0] === 'categories') {
          return {
            data: { product_categories: mockCategories },
            isFetching: false,
            refetch: jest.fn(),
            isLoading: false,
            error: null,
          };
        }
        return {
          data: null,
          isFetching: false,
          refetch: jest.fn(),
          isLoading: false,
          error: null,
        };
      } as any);
    });

    it('renders all products in grid layout', () => {
      const { getByText } = render(<BrowseScreen />);
      
      expect(getByText('Business Card Template')).toBeTruthy();
      expect(getByText('Logo Design Bundle')).toBeTruthy();
      expect(getByText('Social Media Kit')).toBeTruthy();
    });

    it('displays product prices correctly', () => {
      const { getByText } = render(<BrowseScreen />);
      
      expect(getByText('$19.99')).toBeTruthy();
      expect(getByText('$49.99')).toBeTruthy();
      expect(getByText('$29.99')).toBeTruthy();
    });

    it('shows product categories', () => {
      const { getByText } = render(<BrowseScreen />);
      
      expect(getByText('Templates')).toBeTruthy();
      expect(getByText('Graphics')).toBeTruthy();
    });

    it('navigates to product detail when product is tapped', () => {
      const { getByText } = render(<BrowseScreen />);
      
      const productCard = getByText('Business Card Template');
      fireEvent.press(productCard);
      
      expect(mockPush).toHaveBeenCalledWith('/products/prod_1');
    });
  });

  describe('Search and Filter', () => {
    beforeEach(() => {
      mockUseQuery.mockImplementation(({ queryKey }) => {
        if (queryKey[0] === 'products') {
          return {
            data: { products: mockProducts },
            isFetching: false,
            refetch: jest.fn(),
            isLoading: false,
            error: null,
          };
        }
        if (queryKey[0] === 'categories') {
          return {
            data: { product_categories: mockCategories },
            isFetching: false,
            refetch: jest.fn(),
            isLoading: false,
            error: null,
          };
        }
        return {
          data: null,
          isFetching: false,
          refetch: jest.fn(),
          isLoading: false,
          error: null,
        };
      } as any);
    });

    it('displays search input', () => {
      const { getByPlaceholderText } = render(<BrowseScreen />);
      
      expect(getByPlaceholderText('Search products...')).toBeTruthy();
    });

    it('filters products by search term', async () => {
      const { getByPlaceholderText, queryByText } = render(<BrowseScreen />);
      
      const searchInput = getByPlaceholderText('Search products...');
      fireEvent.changeText(searchInput, 'business');
      
      await waitFor(() => {
        expect(queryByText('Business Card Template')).toBeTruthy();
        expect(queryByText('Logo Design Bundle')).toBeFalsy();
      });
    });

    it('shows filter options', () => {
      const { getByText } = render(<BrowseScreen />);
      
      expect(getByText('All Categories')).toBeTruthy();
      expect(getByText('Sort by: Featured')).toBeTruthy();
    });

    it('filters by category', () => {
      const { getByText } = render(<BrowseScreen />);
      
      const categoryFilter = getByText('Templates');
      fireEvent.press(categoryFilter);
      
      expect(getByText('Business Card Template')).toBeTruthy();
      expect(getByText('Social Media Kit')).toBeTruthy();
    });
  });

  describe('Sorting', () => {
    beforeEach(() => {
      mockUseQuery.mockImplementation(({ queryKey }) => {
        if (queryKey[0] === 'products') {
          return {
            data: { products: mockProducts },
            isFetching: false,
            refetch: jest.fn(),
            isLoading: false,
            error: null,
          };
        }
        return {
          data: null,
          isFetching: false,
          refetch: jest.fn(),
          isLoading: false,
          error: null,
        };
      } as any);
    });

    it('displays sorting options', () => {
      const { getByText, getByTestId } = render(<BrowseScreen />);
      
      const sortButton = getByTestId('sort-button');
      fireEvent.press(sortButton);
      
      expect(getByText('Price: Low to High')).toBeTruthy();
      expect(getByText('Price: High to Low')).toBeTruthy();
      expect(getByText('Name: A to Z')).toBeTruthy();
      expect(getByText('Newest First')).toBeTruthy();
    });

    it('sorts products by price ascending', () => {
      const { getByText, getByTestId } = render(<BrowseScreen />);
      
      const sortButton = getByTestId('sort-button');
      fireEvent.press(sortButton);
      
      const priceSort = getByText('Price: Low to High');
      fireEvent.press(priceSort);
      
      expect(getByText('Sort by: Price: Low to High')).toBeTruthy();
    });

    it('sorts products by name', () => {
      const { getByText, getByTestId } = render(<BrowseScreen />);
      
      const sortButton = getByTestId('sort-button');
      fireEvent.press(sortButton);
      
      const nameSort = getByText('Name: A to Z');
      fireEvent.press(nameSort);
      
      expect(getByText('Sort by: Name: A to Z')).toBeTruthy();
    });
  });

  describe('View Toggle', () => {
    it('switches between grid and list view', () => {
      const { getByTestId } = render(<BrowseScreen />);
      
      const gridViewButton = getByTestId('grid-view');
      const listViewButton = getByTestId('list-view');
      
      expect(gridViewButton).toBeTruthy();
      expect(listViewButton).toBeTruthy();
      
      fireEvent.press(listViewButton);
      
      // In list view, products should be displayed differently
      expect(getByTestId('product-list')).toBeTruthy();
    });

    it('remembers view preference', () => {
      const { getByTestId } = render(<BrowseScreen />);
      
      const listViewButton = getByTestId('list-view');
      fireEvent.press(listViewButton);
      
      // Re-render component
      const { getByTestId: getByTestId2 } = render(<BrowseScreen />);
      
      expect(getByTestId2('product-list')).toBeTruthy();
    });
  });

  describe('Pagination', () => {
    it('shows load more button when more products available', () => {
      mockUseQuery.mockImplementation(({ queryKey }) => {
        if (queryKey[0] === 'products') {
          return {
            data: { 
              products: mockProducts,
              hasNextPage: true,
              count: 25,
            },
            isFetching: false,
            refetch: jest.fn(),
            isLoading: false,
            error: null,
          };
        }
        return {
          data: null,
          isFetching: false,
          refetch: jest.fn(),
          isLoading: false,
          error: null,
        };
      } as any);

      const { getByText } = render(<BrowseScreen />);
      
      expect(getByText('Load More')).toBeTruthy();
      expect(getByText('Showing 3 of 25 products')).toBeTruthy();
    });

    it('loads more products when load more is pressed', () => {
      const mockFetchNextPage = jest.fn();
      
      mockUseQuery.mockImplementation(({ queryKey }) => {
        if (queryKey[0] === 'products') {
          return {
            data: { 
              products: mockProducts,
              hasNextPage: true,
            },
            isFetching: false,
            refetch: jest.fn(),
            isLoading: false,
            error: null,
            fetchNextPage: mockFetchNextPage,
          };
        }
        return {
          data: null,
          isFetching: false,
          refetch: jest.fn(),
          isLoading: false,
          error: null,
        };
      } as any);

      const { getByText } = render(<BrowseScreen />);
      
      const loadMoreButton = getByText('Load More');
      fireEvent.press(loadMoreButton);
      
      expect(mockFetchNextPage).toHaveBeenCalled();
    });
  });

  describe('Pull to Refresh', () => {
    it('refreshes products when pulled down', async () => {
      const mockRefetch = jest.fn();
      
      mockUseQuery.mockImplementation(({ queryKey }) => {
        if (queryKey[0] === 'products') {
          return {
            data: { products: mockProducts },
            isFetching: false,
            refetch: mockRefetch,
            isLoading: false,
            error: null,
          };
        }
        return {
          data: null,
          isFetching: false,
          refetch: jest.fn(),
          isLoading: false,
          error: null,
        };
      } as any);

      const { getByTestId } = render(<BrowseScreen />);
      
      const scrollView = getByTestId('products-scroll');
      fireEvent.scroll(scrollView, {
        nativeEvent: {
          contentOffset: { y: -100 },
        },
      });
      
      await waitFor(() => {
        expect(mockRefetch).toHaveBeenCalled();
      });
    });
  });

  describe('Empty State', () => {
    it('displays empty state when no products found', () => {
      mockUseQuery.mockImplementation(({ queryKey }) => {
        if (queryKey[0] === 'products') {
          return {
            data: { products: [] },
            isFetching: false,
            refetch: jest.fn(),
            isLoading: false,
            error: null,
          };
        }
        return {
          data: null,
          isFetching: false,
          refetch: jest.fn(),
          isLoading: false,
          error: null,
        };
      } as any);

      const { getByText } = render(<BrowseScreen />);
      
      expect(getByText('No products found')).toBeTruthy();
      expect(getByText('Try adjusting your search or filters')).toBeTruthy();
    });
  });

  describe('Error Handling', () => {
    it('displays error message when products fail to load', () => {
      mockUseQuery.mockImplementation(({ queryKey }) => {
        if (queryKey[0] === 'products') {
          return {
            data: null,
            isFetching: false,
            refetch: jest.fn(),
            isLoading: false,
            error: new Error('Failed to fetch products'),
          };
        }
        return {
          data: null,
          isFetching: false,
          refetch: jest.fn(),
          isLoading: false,
          error: null,
        };
      } as any);

      const { getByText } = render(<BrowseScreen />);
      
      expect(getByText('Failed to load products')).toBeTruthy();
      expect(getByText('Retry')).toBeTruthy();
    });
  });
});