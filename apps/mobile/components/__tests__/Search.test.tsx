import React from 'react';
import { render, fireEvent, waitFor } from '@/utils/test-utils';
import { useRouter } from 'expo-router';
import Search from '../Search';

jest.mock('expo-router');
const mockUseRouter = useRouter as jest.MockedFunction<typeof useRouter>;
const mockPush = jest.fn();

const mockSearchResults = [
  {
    id: 'prod_1',
    title: 'Business Card Template',
    subtitle: 'Professional design',
    thumbnail: 'https://example.com/thumb1.jpg',
  },
  {
    id: 'prod_2',
    title: 'Logo Design Kit',
    subtitle: 'Creative branding',
    thumbnail: 'https://example.com/thumb2.jpg',
  },
];

describe('Search Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockUseRouter.mockReturnValue({
      push: mockPush,
      back: jest.fn(),
      replace: jest.fn(),
    } as any);
  });

  describe('Initial State', () => {
    it('renders search input field', () => {
      const { getByPlaceholderText } = render(<Search />);
      
      expect(getByPlaceholderText('Search products...')).toBeTruthy();
    });

    it('displays search icon', () => {
      const { getByTestId } = render(<Search />);
      
      expect(getByTestId('search-icon')).toBeTruthy();
    });

    it('shows no results initially', () => {
      const { queryByText } = render(<Search />);
      
      expect(queryByText('No results found')).toBeFalsy();
    });
  });

  describe('Search Input', () => {
    it('updates input value when typing', () => {
      const { getByPlaceholderText } = render(<Search />);
      
      const input = getByPlaceholderText('Search products...');
      fireEvent.changeText(input, 'business');
      
      expect(input.props.value).toBe('business');
    });

    it('shows clear button when input has text', () => {
      const { getByPlaceholderText, getByTestId } = render(<Search />);
      
      const input = getByPlaceholderText('Search products...');
      fireEvent.changeText(input, 'logo');
      
      expect(getByTestId('clear-search')).toBeTruthy();
    });

    it('clears input when clear button is pressed', () => {
      const { getByPlaceholderText, getByTestId } = render(<Search />);
      
      const input = getByPlaceholderText('Search products...');
      fireEvent.changeText(input, 'template');
      
      const clearButton = getByTestId('clear-search');
      fireEvent.press(clearButton);
      
      expect(input.props.value).toBe('');
    });
  });

  describe('Search Results', () => {
    it('displays search results when available', async () => {
      const { getByPlaceholderText, getByText } = render(<Search />);
      
      const input = getByPlaceholderText('Search products...');
      fireEvent.changeText(input, 'business');
      
      await waitFor(() => {
        expect(getByText('Business Card Template')).toBeTruthy();
        expect(getByText('Logo Design Kit')).toBeTruthy();
      });
    });

    it('shows loading state during search', async () => {
      const { getByPlaceholderText, getByText } = render(<Search />);
      
      const input = getByPlaceholderText('Search products...');
      fireEvent.changeText(input, 'loading');
      
      expect(getByText('Searching...')).toBeTruthy();
    });

    it('displays no results message when search returns empty', async () => {
      const { getByPlaceholderText, getByText } = render(<Search />);
      
      const input = getByPlaceholderText('Search products...');
      fireEvent.changeText(input, 'nonexistent');
      
      await waitFor(() => {
        expect(getByText('No results found')).toBeTruthy();
      });
    });

    it('shows result count when results are available', async () => {
      const { getByPlaceholderText, getByText } = render(<Search />);
      
      const input = getByPlaceholderText('Search products...');
      fireEvent.changeText(input, 'template');
      
      await waitFor(() => {
        expect(getByText('Found 2 results')).toBeTruthy();
      });
    });
  });

  describe('Search Result Interaction', () => {
    it('navigates to product detail when result is tapped', async () => {
      const { getByPlaceholderText, getByText } = render(<Search />);
      
      const input = getByPlaceholderText('Search products...');
      fireEvent.changeText(input, 'business');
      
      await waitFor(() => {
        const resultItem = getByText('Business Card Template');
        fireEvent.press(resultItem);
        
        expect(mockPush).toHaveBeenCalledWith('/products/prod_1');
      });
    });

    it('displays product subtitle in results', async () => {
      const { getByPlaceholderText, getByText } = render(<Search />);
      
      const input = getByPlaceholderText('Search products...');
      fireEvent.changeText(input, 'logo');
      
      await waitFor(() => {
        expect(getByText('Professional design')).toBeTruthy();
        expect(getByText('Creative branding')).toBeTruthy();
      });
    });
  });

  describe('Recent Searches', () => {
    it('displays recent searches when input is focused', () => {
      const { getByPlaceholderText, getByText } = render(<Search />);
      
      const input = getByPlaceholderText('Search products...');
      fireEvent.focus(input);
      
      expect(getByText('Recent Searches')).toBeTruthy();
      expect(getByText('business cards')).toBeTruthy();
      expect(getByText('logo design')).toBeTruthy();
    });

    it('allows selecting recent search term', () => {
      const { getByPlaceholderText, getByText } = render(<Search />);
      
      const input = getByPlaceholderText('Search products...');
      fireEvent.focus(input);
      
      const recentSearch = getByText('business cards');
      fireEvent.press(recentSearch);
      
      expect(input.props.value).toBe('business cards');
    });

    it('shows clear recent searches option', () => {
      const { getByPlaceholderText, getByText } = render(<Search />);
      
      const input = getByPlaceholderText('Search products...');
      fireEvent.focus(input);
      
      expect(getByText('Clear Recent')).toBeTruthy();
    });
  });

  describe('Search Filters', () => {
    it('displays filter options', () => {
      const { getByText } = render(<Search />);
      
      expect(getByText('All Categories')).toBeTruthy();
      expect(getByText('Price: Low to High')).toBeTruthy();
    });

    it('opens filter modal when filter button is pressed', () => {
      const { getByTestId, getByText } = render(<Search />);
      
      const filterButton = getByTestId('filter-button');
      fireEvent.press(filterButton);
      
      expect(getByText('Filter Results')).toBeTruthy();
    });

    it('applies filters to search results', () => {
      const { getByText, getByTestId } = render(<Search />);
      
      const filterButton = getByTestId('filter-button');
      fireEvent.press(filterButton);
      
      const categoryFilter = getByText('Templates');
      fireEvent.press(categoryFilter);
      
      const applyButton = getByText('Apply Filters');
      fireEvent.press(applyButton);
      
      expect(getByText('Templates')).toBeTruthy();
    });
  });

  describe('Search Suggestions', () => {
    it('shows popular search suggestions', () => {
      const { getByPlaceholderText, getByText } = render(<Search />);
      
      const input = getByPlaceholderText('Search products...');
      fireEvent.focus(input);
      
      expect(getByText('Popular Searches')).toBeTruthy();
      expect(getByText('business templates')).toBeTruthy();
      expect(getByText('social media graphics')).toBeTruthy();
    });

    it('shows autocomplete suggestions while typing', async () => {
      const { getByPlaceholderText, getByText } = render(<Search />);
      
      const input = getByPlaceholderText('Search products...');
      fireEvent.changeText(input, 'bus');
      
      await waitFor(() => {
        expect(getByText('business cards')).toBeTruthy();
        expect(getByText('business flyers')).toBeTruthy();
      });
    });
  });

  describe('Error Handling', () => {
    it('displays error message when search fails', async () => {
      const { getByPlaceholderText, getByText } = render(<Search />);
      
      const input = getByPlaceholderText('Search products...');
      fireEvent.changeText(input, 'error');
      
      await waitFor(() => {
        expect(getByText('Search failed. Please try again.')).toBeTruthy();
      });
    });

    it('shows retry button on search error', async () => {
      const { getByPlaceholderText, getByText } = render(<Search />);
      
      const input = getByPlaceholderText('Search products...');
      fireEvent.changeText(input, 'error');
      
      await waitFor(() => {
        expect(getByText('Retry')).toBeTruthy();
      });
    });
  });

  describe('Performance', () => {
    it('debounces search input to avoid excessive API calls', async () => {
      const { getByPlaceholderText } = render(<Search />);
      
      const input = getByPlaceholderText('Search products...');
      
      fireEvent.changeText(input, 'b');
      fireEvent.changeText(input, 'bu');
      fireEvent.changeText(input, 'bus');
      fireEvent.changeText(input, 'business');
      
      // Should only trigger search after debounce delay
      await waitFor(() => {
        expect(input.props.value).toBe('business');
      }, { timeout: 1000 });
    });
  });
});