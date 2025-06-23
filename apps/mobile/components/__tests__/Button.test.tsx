import React from 'react';
import { render, fireEvent } from '@/utils/test-utils';
import * as Haptics from 'expo-haptics';
import Button from '../Button';

jest.mock('expo-haptics');
const mockHaptics = Haptics.impactAsync as jest.MockedFunction<typeof Haptics.impactAsync>;

describe('Button Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('Basic Rendering', () => {
    it('renders button with text correctly', () => {
      const { getByText } = render(
        <Button title="Click Me" onPress={() => {}} />
      );
      
      expect(getByText('Click Me')).toBeTruthy();
    });

    it('renders button with custom testID', () => {
      const { getByTestId } = render(
        <Button title="Test Button" onPress={() => {}} testID="custom-button" />
      );
      
      expect(getByTestId('custom-button')).toBeTruthy();
    });

    it('renders disabled button correctly', () => {
      const { getByText } = render(
        <Button title="Disabled" onPress={() => {}} disabled={true} />
      );
      
      const button = getByText('Disabled');
      expect(button.props.accessibilityState.disabled).toBe(true);
    });
  });

  describe('Button Variants', () => {
    it('renders primary button variant', () => {
      const { getByTestId } = render(
        <Button 
          title="Primary" 
          onPress={() => {}} 
          variant="primary" 
          testID="primary-button" 
        />
      );
      
      const button = getByTestId('primary-button');
      expect(button.props.style).toEqual(
        expect.objectContaining({
          backgroundColor: expect.any(String),
        })
      );
    });

    it('renders secondary button variant', () => {
      const { getByTestId } = render(
        <Button 
          title="Secondary" 
          onPress={() => {}} 
          variant="secondary" 
          testID="secondary-button" 
        />
      );
      
      const button = getByTestId('secondary-button');
      expect(button.props.style).toEqual(
        expect.objectContaining({
          borderWidth: expect.any(Number),
        })
      );
    });

    it('renders outline button variant', () => {
      const { getByTestId } = render(
        <Button 
          title="Outline" 
          onPress={() => {}} 
          variant="outline" 
          testID="outline-button" 
        />
      );
      
      const button = getByTestId('outline-button');
      expect(button.props.style).toEqual(
        expect.objectContaining({
          borderWidth: expect.any(Number),
        })
      );
    });

    it('renders ghost button variant', () => {
      const { getByTestId } = render(
        <Button 
          title="Ghost" 
          onPress={() => {}} 
          variant="ghost" 
          testID="ghost-button" 
        />
      );
      
      const button = getByTestId('ghost-button');
      expect(button.props.style).toEqual(
        expect.objectContaining({
          backgroundColor: 'transparent',
        })
      );
    });
  });

  describe('Button Sizes', () => {
    it('renders small button size', () => {
      const { getByTestId } = render(
        <Button 
          title="Small" 
          onPress={() => {}} 
          size="small" 
          testID="small-button" 
        />
      );
      
      const button = getByTestId('small-button');
      expect(button.props.style).toEqual(
        expect.objectContaining({
          paddingVertical: expect.any(Number),
          paddingHorizontal: expect.any(Number),
        })
      );
    });

    it('renders medium button size (default)', () => {
      const { getByTestId } = render(
        <Button 
          title="Medium" 
          onPress={() => {}} 
          testID="medium-button" 
        />
      );
      
      const button = getByTestId('medium-button');
      expect(button.props.style).toEqual(
        expect.objectContaining({
          paddingVertical: expect.any(Number),
          paddingHorizontal: expect.any(Number),
        })
      );
    });

    it('renders large button size', () => {
      const { getByTestId } = render(
        <Button 
          title="Large" 
          onPress={() => {}} 
          size="large" 
          testID="large-button" 
        />
      );
      
      const button = getByTestId('large-button');
      expect(button.props.style).toEqual(
        expect.objectContaining({
          paddingVertical: expect.any(Number),
          paddingHorizontal: expect.any(Number),
        })
      );
    });
  });

  describe('Button Interactions', () => {
    it('calls onPress when button is pressed', () => {
      const mockOnPress = jest.fn();
      const { getByText } = render(
        <Button title="Press Me" onPress={mockOnPress} />
      );
      
      const button = getByText('Press Me');
      fireEvent.press(button);
      
      expect(mockOnPress).toHaveBeenCalledTimes(1);
    });

    it('does not call onPress when button is disabled', () => {
      const mockOnPress = jest.fn();
      const { getByText } = render(
        <Button title="Disabled" onPress={mockOnPress} disabled={true} />
      );
      
      const button = getByText('Disabled');
      fireEvent.press(button);
      
      expect(mockOnPress).not.toHaveBeenCalled();
    });

    it('provides haptic feedback on press', () => {
      const { getByText } = render(
        <Button title="Haptic" onPress={() => {}} hapticFeedback={true} />
      );
      
      const button = getByText('Haptic');
      fireEvent.press(button);
      
      expect(mockHaptics).toHaveBeenCalledWith(Haptics.ImpactFeedbackStyle.Light);
    });

    it('does not provide haptic feedback when disabled', () => {
      const { getByText } = render(
        <Button 
          title="No Haptic" 
          onPress={() => {}} 
          hapticFeedback={false} 
        />
      );
      
      const button = getByText('No Haptic');
      fireEvent.press(button);
      
      expect(mockHaptics).not.toHaveBeenCalled();
    });
  });

  describe('Loading State', () => {
    it('displays loading indicator when loading', () => {
      const { getByTestId } = render(
        <Button 
          title="Loading" 
          onPress={() => {}} 
          loading={true} 
          testID="loading-button" 
        />
      );
      
      expect(getByTestId('loading-indicator')).toBeTruthy();
    });

    it('disables button when loading', () => {
      const mockOnPress = jest.fn();
      const { getByText } = render(
        <Button title="Loading" onPress={mockOnPress} loading={true} />
      );
      
      const button = getByText('Loading');
      fireEvent.press(button);
      
      expect(mockOnPress).not.toHaveBeenCalled();
    });

    it('hides button text when loading', () => {
      const { queryByText } = render(
        <Button title="Hidden Text" onPress={() => {}} loading={true} />
      );
      
      expect(queryByText('Hidden Text')).toBeFalsy();
    });
  });

  describe('Icon Support', () => {
    it('renders button with left icon', () => {
      const { getByTestId } = render(
        <Button 
          title="With Icon" 
          onPress={() => {}} 
          leftIcon="plus" 
          testID="icon-button" 
        />
      );
      
      expect(getByTestId('left-icon')).toBeTruthy();
    });

    it('renders button with right icon', () => {
      const { getByTestId } = render(
        <Button 
          title="With Icon" 
          onPress={() => {}} 
          rightIcon="arrow-right" 
          testID="icon-button" 
        />
      );
      
      expect(getByTestId('right-icon')).toBeTruthy();
    });

    it('renders icon-only button', () => {
      const { getByTestId, queryByText } = render(
        <Button 
          onPress={() => {}} 
          leftIcon="heart" 
          testID="icon-only-button" 
        />
      );
      
      expect(getByTestId('left-icon')).toBeTruthy();
      expect(queryByText('')).toBeFalsy();
    });
  });

  describe('Custom Styling', () => {
    it('applies custom style prop', () => {
      const customStyle = { backgroundColor: 'red', borderRadius: 20 };
      const { getByTestId } = render(
        <Button 
          title="Custom Style" 
          onPress={() => {}} 
          style={customStyle} 
          testID="custom-style-button" 
        />
      );
      
      const button = getByTestId('custom-style-button');
      expect(button.props.style).toEqual(
        expect.arrayContaining([
          expect.objectContaining(customStyle)
        ])
      );
    });

    it('applies custom text style prop', () => {
      const customTextStyle = { fontSize: 20, fontWeight: 'bold' };
      const { getByText } = render(
        <Button 
          title="Custom Text" 
          onPress={() => {}} 
          textStyle={customTextStyle} 
        />
      );
      
      const text = getByText('Custom Text');
      expect(text.props.style).toEqual(
        expect.arrayContaining([
          expect.objectContaining(customTextStyle)
        ])
      );
    });
  });

  describe('Accessibility', () => {
    it('has proper accessibility label', () => {
      const { getByLabelText } = render(
        <Button 
          title="Accessible Button" 
          onPress={() => {}} 
          accessibilityLabel="Custom accessibility label" 
        />
      );
      
      expect(getByLabelText('Custom accessibility label')).toBeTruthy();
    });

    it('has proper accessibility hint', () => {
      const { getByText } = render(
        <Button 
          title="Button with Hint" 
          onPress={() => {}} 
          accessibilityHint="This button performs an action" 
        />
      );
      
      const button = getByText('Button with Hint');
      expect(button.props.accessibilityHint).toBe('This button performs an action');
    });

    it('has button accessibility role', () => {
      const { getByRole } = render(
        <Button title="Role Button" onPress={() => {}} />
      );
      
      expect(getByRole('button')).toBeTruthy();
    });

    it('indicates disabled state in accessibility', () => {
      const { getByText } = render(
        <Button title="Disabled Button" onPress={() => {}} disabled={true} />
      );
      
      const button = getByText('Disabled Button');
      expect(button.props.accessibilityState.disabled).toBe(true);
    });
  });

  describe('Full Width', () => {
    it('renders full width button', () => {
      const { getByTestId } = render(
        <Button 
          title="Full Width" 
          onPress={() => {}} 
          fullWidth={true} 
          testID="full-width-button" 
        />
      );
      
      const button = getByTestId('full-width-button');
      expect(button.props.style).toEqual(
        expect.objectContaining({
          width: '100%',
        })
      );
    });
  });

  describe('Button Group', () => {
    it('renders grouped buttons correctly', () => {
      const { getByText } = render(
        <>
          <Button title="First" onPress={() => {}} />
          <Button title="Second" onPress={() => {}} />
          <Button title="Third" onPress={() => {}} />
        </>
      );
      
      expect(getByText('First')).toBeTruthy();
      expect(getByText('Second')).toBeTruthy();
      expect(getByText('Third')).toBeTruthy();
    });
  });

  describe('Edge Cases', () => {
    it('handles empty title gracefully', () => {
      const { container } = render(
        <Button title="" onPress={() => {}} />
      );
      
      expect(container).toBeTruthy();
    });

    it('handles very long title text', () => {
      const longTitle = 'This is a very long button title that should be handled gracefully by the component';
      const { getByText } = render(
        <Button title={longTitle} onPress={() => {}} />
      );
      
      expect(getByText(longTitle)).toBeTruthy();
    });

    it('handles rapid successive presses', () => {
      const mockOnPress = jest.fn();
      const { getByText } = render(
        <Button title="Rapid Press" onPress={mockOnPress} />
      );
      
      const button = getByText('Rapid Press');
      fireEvent.press(button);
      fireEvent.press(button);
      fireEvent.press(button);
      
      expect(mockOnPress).toHaveBeenCalledTimes(3);
    });
  });
});