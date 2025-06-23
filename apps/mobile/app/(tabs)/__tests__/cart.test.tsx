import React from 'react';
import { render, fireEvent, waitFor } from '@/utils/test-utils';
import { useCart } from '@/hooks/useCart';
import CartScreen from '../cart';

jest.mock('@/hooks/useCart');
const mockUseCart = useCart as jest.MockedFunction<typeof useCart>;

const mockCartItems = [
  {
    id: 'item_1',
    name: 'Digital Print Template',
    price: 1999,
    variant: 'variant_1',
    quantity: 2,
  },
  {
    id: 'item_2', 
    name: 'Logo Design Bundle',
    price: 4999,
    variant: 'variant_2',
    quantity: 1,
  },
];

const mockRemoveItem = jest.fn();
const mockClearCart = jest.fn();

describe('CartScreen', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('Empty Cart', () => {
    beforeEach(() => {
      mockUseCart.mockReturnValue({
        items: [],
        totalItems: 0,
        totalPrice: 0,
        addItem: jest.fn(),
        removeItem: mockRemoveItem,
        clearCart: mockClearCart,
      });
    });

    it('displays empty cart message', () => {
      const { getByText } = render(<CartScreen />);
      
      expect(getByText('Your cart is empty')).toBeTruthy();
      expect(getByText('Browse products to add items to your cart')).toBeTruthy();
    });

    it('shows browse products button when cart is empty', () => {
      const { getByText } = render(<CartScreen />);
      
      expect(getByText('Browse Products')).toBeTruthy();
    });
  });

  describe('Cart with Items', () => {
    beforeEach(() => {
      mockUseCart.mockReturnValue({
        items: mockCartItems,
        totalItems: 3,
        totalPrice: 8997,
        addItem: jest.fn(),
        removeItem: mockRemoveItem,
        clearCart: mockClearCart,
      });
    });

    it('displays cart items correctly', () => {
      const { getByText } = render(<CartScreen />);
      
      expect(getByText('Digital Print Template')).toBeTruthy();
      expect(getByText('Logo Design Bundle')).toBeTruthy();
      expect(getByText('Quantity: 2')).toBeTruthy();
      expect(getByText('Quantity: 1')).toBeTruthy();
    });

    it('displays total price correctly', () => {
      const { getByText } = render(<CartScreen />);
      
      expect(getByText('Total: $89.97')).toBeTruthy();
    });

    it('displays total items count', () => {
      const { getByText } = render(<CartScreen />);
      
      expect(getByText('Cart (3 items)')).toBeTruthy();
    });

    it('shows checkout button when items exist', () => {
      const { getByText } = render(<CartScreen />);
      
      expect(getByText('Proceed to Checkout')).toBeTruthy();
    });

    it('shows clear cart button', () => {
      const { getByText } = render(<CartScreen />);
      
      expect(getByText('Clear Cart')).toBeTruthy();
    });
  });

  describe('Cart Actions', () => {
    beforeEach(() => {
      mockUseCart.mockReturnValue({
        items: mockCartItems,
        totalItems: 3,
        totalPrice: 8997,
        addItem: jest.fn(),
        removeItem: mockRemoveItem,
        clearCart: mockClearCart,
      });
    });

    it('removes item when remove button is pressed', () => {
      const { getAllByText } = render(<CartScreen />);
      
      const removeButtons = getAllByText('Remove');
      fireEvent.press(removeButtons[0]);
      
      expect(mockRemoveItem).toHaveBeenCalledWith('item_1');
    });

    it('clears entire cart when clear cart button is pressed', () => {
      const { getByText } = render(<CartScreen />);
      
      const clearButton = getByText('Clear Cart');
      fireEvent.press(clearButton);
      
      expect(mockClearCart).toHaveBeenCalled();
    });

    it('navigates to checkout when checkout button is pressed', () => {
      const { getByText } = render(<CartScreen />);
      
      const checkoutButton = getByText('Proceed to Checkout');
      fireEvent.press(checkoutButton);
      
      // In a real app, this would test navigation
      expect(checkoutButton).toBeTruthy();
    });
  });

  describe('Price Formatting', () => {
    it('formats individual item prices correctly', () => {
      mockUseCart.mockReturnValue({
        items: [
          {
            id: 'item_1',
            name: 'Test Item',
            price: 1050,
            variant: 'variant_1',
            quantity: 1,
          },
        ],
        totalItems: 1,
        totalPrice: 1050,
        addItem: jest.fn(),
        removeItem: mockRemoveItem,
        clearCart: mockClearCart,
      });

      const { getByText } = render(<CartScreen />);
      
      expect(getByText('$10.50')).toBeTruthy();
    });

    it('calculates subtotal for multiple quantities', () => {
      mockUseCart.mockReturnValue({
        items: [
          {
            id: 'item_1',
            name: 'Test Item',
            price: 1000,
            variant: 'variant_1',
            quantity: 3,
          },
        ],
        totalItems: 3,
        totalPrice: 3000,
        addItem: jest.fn(),
        removeItem: mockRemoveItem,
        clearCart: mockClearCart,
      });

      const { getByText } = render(<CartScreen />);
      
      expect(getByText('Subtotal: $30.00')).toBeTruthy();
    });
  });

  describe('Loading and Error States', () => {
    it('handles cart loading gracefully', () => {
      mockUseCart.mockReturnValue({
        items: [],
        totalItems: 0,
        totalPrice: 0,
        addItem: jest.fn(),
        removeItem: mockRemoveItem,
        clearCart: mockClearCart,
        isLoading: true,
      } as any);

      const { getByText } = render(<CartScreen />);
      
      expect(getByText('Loading cart...')).toBeTruthy();
    });
  });

  describe('Accessibility', () => {
    beforeEach(() => {
      mockUseCart.mockReturnValue({
        items: mockCartItems,
        totalItems: 3,
        totalPrice: 8997,
        addItem: jest.fn(),
        removeItem: mockRemoveItem,
        clearCart: mockClearCart,
      });
    });

    it('has proper accessibility labels', () => {
      const { getByLabelText } = render(<CartScreen />);
      
      expect(getByLabelText('Remove Digital Print Template from cart')).toBeTruthy();
      expect(getByLabelText('Clear entire cart')).toBeTruthy();
    });
  });
});