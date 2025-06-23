import React from 'react';
import { render, fireEvent, waitFor } from '@/utils/test-utils';
import { useQuery } from '@tanstack/react-query';
import { useLocalSearchParams, useRouter } from 'expo-router';
import CategoryScreen from '../[id]';

jest.mock('@tanstack/react-query');
jest.mock('expo-router');

const mockUseQuery = useQuery as jest.MockedFunction<typeof useQuery>;
const mockUseLocalSearchParams = useLocalSearchParams as jest.MockedFunction<typeof useLocalSearchParams>;
const mockUseRouter = useRouter as jest.MockedFunction<typeof useRouter>;

const mockCategoryData = {
  id: 'cat_templates',
  name: 'Templates',
  handle: 'templates',
  description: 'Professional design templates for your business',
  metadata: {
    subcategories: ['business-cards', 'flyers', 'brochures'],
  },
};

const mockCategoryProducts = [
  {
    id: 'prod_1',
    title: 'Business Card Template Pack',
    subtitle: 'Professional business card designs',
    thumbnail: 'https://example.com/thumb1.jpg',
    variants: [{ calculated_price: { original_amount: 1999 } }],
    categories: [{ id: 'cat_templates', name: 'Templates' }],
  },
  {
    id: 'prod_2',
    title: 'Flyer Design Collection',
    subtitle: 'Eye-catching flyer templates',
    thumbnail: 'https://example.com/thumb2.jpg',
    variants: [{ calculated_price: { original_amount: 2999 } }],
    categories: [{ id: 'cat_templates', name: 'Templates' }],
  },
  {
    id: 'prod_3',
    title: 'Brochure Template Set',
    subtitle: 'Tri-fold brochure designs',
    thumbnail: 'https://example.com/thumb3.jpg',
    variants: [{ calculated_price: { original_amount: 3999 } }],
    categories: [{ id: 'cat_templates', name: 'Templates' }],
  },
];

const mockPush = jest.fn();

describe('CategoryScreen', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    
    mockUseLocalSearchParams.mockReturnValue({ id: 'cat_templates' });
    mockUseRouter.mockReturnValue({
      push: mockPush,
      back: jest.fn(),
      replace: jest.fn(),
    } as any);
  });

  describe('Loading State', () => {
    it('displays loading indicator when category is loading', () => {
      mockUseQuery.mockImplementation(({ queryKey }) => ({
        data: undefined,
        isFetching: true,
        refetch: jest.fn(),
        isLoading: true,
        error: null,
      } as any));

      const { getByText } = render(<CategoryScreen />);
      
      expect(getByText('Loading category...')).toBeTruthy();
    });
  });

  describe('Category Display', () => {
    beforeEach(() => {
      mockUseQuery.mockImplementation(({ queryKey }) => {
        if (queryKey[0] === 'category') {
          return {
            data: { product_category: mockCategoryData },
            isFetching: false,
            refetch: jest.fn(),
            isLoading: false,
            error: null,
          };
        }
        if (queryKey[0] === 'category-products') {
          return {
            data: { products: mockCategoryProducts },
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

    it('renders category information correctly', () => {
      const { getByText } = render(<CategoryScreen />);
      
      expect(getByText('Templates')).toBeTruthy();
      expect(getByText('Professional design templates for your business')).toBeTruthy();
    });

    it('displays category products count', () => {
      const { getByText } = render(<CategoryScreen />);
      
      expect(getByText('3 products')).toBeTruthy();
    });

    it('renders all products in category', () => {
      const { getByText } = render(<CategoryScreen />);
      
      expect(getByText('Business Card Template Pack')).toBeTruthy();
      expect(getByText('Flyer Design Collection')).toBeTruthy();
      expect(getByText('Brochure Template Set')).toBeTruthy();
    });

    it('displays product prices correctly', () => {
      const { getByText } = render(<CategoryScreen />);
      
      expect(getByText('$19.99')).toBeTruthy();
      expect(getByText('$29.99')).toBeTruthy();
      expect(getByText('$39.99')).toBeTruthy();
    });
  });

  describe('Product Navigation', () => {
    beforeEach(() => {
      mockUseQuery.mockImplementation(({ queryKey }) => {
        if (queryKey[0] === 'category') {
          return {
            data: { product_category: mockCategoryData },
            isFetching: false,
            refetch: jest.fn(),
            isLoading: false,
            error: null,
          };
        }
        if (queryKey[0] === 'category-products') {
          return {
            data: { products: mockCategoryProducts },
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

    it('navigates to product detail when product is tapped', () => {
      const { getByText } = render(<CategoryScreen />);
      
      const productCard = getByText('Business Card Template Pack');
      fireEvent.press(productCard);
      
      expect(mockPush).toHaveBeenCalledWith('/products/prod_1');
    });
  });

  describe('Subcategories', () => {
    beforeEach(() => {
      mockUseQuery.mockImplementation(({ queryKey }) => {
        if (queryKey[0] === 'category') {
          return {
            data: { product_category: mockCategoryData },
            isFetching: false,
            refetch: jest.fn(),
            isLoading: false,
            error: null,
          };
        }
        if (queryKey[0] === 'category-products') {
          return {
            data: { products: mockCategoryProducts },
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

    it('displays subcategory filters', () => {
      const { getByText } = render(<CategoryScreen />);
      
      expect(getByText('All')).toBeTruthy();
      expect(getByText('Business Cards')).toBeTruthy();
      expect(getByText('Flyers')).toBeTruthy();
      expect(getByText('Brochures')).toBeTruthy();
    });

    it('filters products by subcategory', () => {
      const { getByText } = render(<CategoryScreen />);
      
      const businessCardsFilter = getByText('Business Cards');
      fireEvent.press(businessCardsFilter);
      
      expect(getByText('Business Card Template Pack')).toBeTruthy();
    });

    it('shows active subcategory filter', () => {
      const { getByText, getByTestId } = render(<CategoryScreen />);
      
      const flyersFilter = getByText('Flyers');
      fireEvent.press(flyersFilter);
      
      expect(getByTestId('active-filter-flyers')).toBeTruthy();
    });
  });

  describe('Sorting and Filtering', () => {
    beforeEach(() => {
      mockUseQuery.mockImplementation(({ queryKey }) => {
        if (queryKey[0] === 'category') {
          return {
            data: { product_category: mockCategoryData },
            isFetching: false,
            refetch: jest.fn(),
            isLoading: false,
            error: null,
          };
        }
        if (queryKey[0] === 'category-products') {
          return {
            data: { products: mockCategoryProducts },
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

    it('displays sort options', () => {
      const { getByText, getByTestId } = render(<CategoryScreen />);
      
      const sortButton = getByTestId('sort-button');
      fireEvent.press(sortButton);
      
      expect(getByText('Price: Low to High')).toBeTruthy();
      expect(getByText('Price: High to Low')).toBeTruthy();
      expect(getByText('Name: A to Z')).toBeTruthy();
      expect(getByText('Newest First')).toBeTruthy();
    });

    it('sorts products by price ascending', () => {
      const { getByText, getByTestId } = render(<CategoryScreen />);
      
      const sortButton = getByTestId('sort-button');
      fireEvent.press(sortButton);
      
      const priceSort = getByText('Price: Low to High');
      fireEvent.press(priceSort);
      
      expect(getByText('Sort by: Price: Low to High')).toBeTruthy();
    });

    it('displays price range filter', () => {
      const { getByText, getByTestId } = render(<CategoryScreen />);
      
      const filterButton = getByTestId('filter-button');
      fireEvent.press(filterButton);
      
      expect(getByText('Price Range')).toBeTruthy();
      expect(getByText('$0 - $50')).toBeTruthy();
      expect(getByText('$50 - $100')).toBeTruthy();
    });
  });

  describe('Search Within Category', () => {
    beforeEach(() => {
      mockUseQuery.mockImplementation(({ queryKey }) => {
        if (queryKey[0] === 'category') {
          return {
            data: { product_category: mockCategoryData },
            isFetching: false,
            refetch: jest.fn(),
            isLoading: false,
            error: null,
          };
        }
        if (queryKey[0] === 'category-products') {
          return {
            data: { products: mockCategoryProducts },
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

    it('displays search input for category', () => {
      const { getByPlaceholderText } = render(<CategoryScreen />);
      
      expect(getByPlaceholderText('Search in Templates...')).toBeTruthy();
    });

    it('filters category products by search term', async () => {
      const { getByPlaceholderText, queryByText } = render(<CategoryScreen />);
      
      const searchInput = getByPlaceholderText('Search in Templates...');
      fireEvent.changeText(searchInput, 'business');
      
      await waitFor(() => {
        expect(queryByText('Business Card Template Pack')).toBeTruthy();
        expect(queryByText('Flyer Design Collection')).toBeFalsy();
      });
    });
  });

  describe('View Toggle', () => {
    it('switches between grid and list view', () => {
      const { getByTestId } = render(<CategoryScreen />);
      
      const gridViewButton = getByTestId('grid-view');
      const listViewButton = getByTestId('list-view');
      
      expect(gridViewButton).toBeTruthy();
      expect(listViewButton).toBeTruthy();
      
      fireEvent.press(listViewButton);
      
      expect(getByTestId('products-list')).toBeTruthy();
    });
  });

  describe('Pagination', () => {
    it('loads more products when scrolling to bottom', async () => {
      const mockFetchNextPage = jest.fn();
      
      mockUseQuery.mockImplementation(({ queryKey }) => {
        if (queryKey[0] === 'category') {
          return {
            data: { product_category: mockCategoryData },
            isFetching: false,
            refetch: jest.fn(),
            isLoading: false,
            error: null,
          };
        }
        if (queryKey[0] === 'category-products') {
          return {
            data: { 
              products: mockCategoryProducts,
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

      const { getByTestId } = render(<CategoryScreen />);
      
      const scrollView = getByTestId('products-scroll');
      fireEvent.scroll(scrollView, {
        nativeEvent: {
          contentOffset: { y: 1000 },
          contentSize: { height: 2000 },
          layoutMeasurement: { height: 800 },
        },
      });
      
      await waitFor(() => {
        expect(mockFetchNextPage).toHaveBeenCalled();
      });
    });
  });

  describe('Empty State', () => {
    it('displays empty state when no products in category', () => {
      mockUseQuery.mockImplementation(({ queryKey }) => {
        if (queryKey[0] === 'category') {
          return {
            data: { product_category: mockCategoryData },
            isFetching: false,
            refetch: jest.fn(),
            isLoading: false,
            error: null,
          };
        }
        if (queryKey[0] === 'category-products') {
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

      const { getByText } = render(<CategoryScreen />);
      
      expect(getByText('No products found in this category')).toBeTruthy();
      expect(getByText('Browse other categories')).toBeTruthy();
    });
  });

  describe('Error Handling', () => {
    it('displays error message when category fails to load', () => {
      mockUseQuery.mockImplementation(({ queryKey }) => {
        if (queryKey[0] === 'category') {
          return {
            data: null,
            isFetching: false,
            refetch: jest.fn(),
            isLoading: false,
            error: new Error('Failed to load category'),
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

      const { getByText } = render(<CategoryScreen />);
      
      expect(getByText('Failed to load category')).toBeTruthy();
      expect(getByText('Retry')).toBeTruthy();
    });

    it('displays error message when products fail to load', () => {
      mockUseQuery.mockImplementation(({ queryKey }) => {
        if (queryKey[0] === 'category') {
          return {
            data: { product_category: mockCategoryData },
            isFetching: false,
            refetch: jest.fn(),
            isLoading: false,
            error: null,
          };
        }
        if (queryKey[0] === 'category-products') {
          return {
            data: null,
            isFetching: false,
            refetch: jest.fn(),
            isLoading: false,
            error: new Error('Failed to load products'),
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

      const { getByText } = render(<CategoryScreen />);
      
      expect(getByText('Failed to load products')).toBeTruthy();
    });
  });

  describe('Pull to Refresh', () => {
    it('refreshes category data when pulled down', async () => {
      const mockRefetch = jest.fn();
      
      mockUseQuery.mockImplementation(({ queryKey }) => {
        if (queryKey[0] === 'category') {
          return {
            data: { product_category: mockCategoryData },
            isFetching: false,
            refetch: mockRefetch,
            isLoading: false,
            error: null,
          };
        }
        if (queryKey[0] === 'category-products') {
          return {
            data: { products: mockCategoryProducts },
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

      const { getByTestId } = render(<CategoryScreen />);
      
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
});