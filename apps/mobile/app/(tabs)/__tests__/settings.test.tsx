import React from 'react';
import { render, fireEvent, waitFor } from '@/utils/test-utils';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Haptics from 'expo-haptics';
import { Alert } from 'react-native';
import SettingsScreen from '../settings';

jest.mock('expo-router');
jest.mock('@react-native-async-storage/async-storage');
jest.mock('expo-haptics');
jest.mock('react-native', () => {
  const RN = jest.requireActual('react-native');
  return {
    ...RN,
    Alert: {
      alert: jest.fn(),
    },
  };
});

const mockUseRouter = useRouter as jest.MockedFunction<typeof useRouter>;
const mockAsyncStorage = AsyncStorage as jest.Mocked<typeof AsyncStorage>;
const mockHaptics = Haptics.impactAsync as jest.MockedFunction<typeof Haptics.impactAsync>;
const mockAlert = Alert.alert as jest.MockedFunction<typeof Alert.alert>;

describe('SettingsScreen', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockUseRouter.mockReturnValue({
      push: jest.fn(),
      back: jest.fn(),
      replace: jest.fn(),
    } as any);
  });

  describe('Settings Options Display', () => {
    it('renders all main settings sections', () => {
      const { getByText } = render(<SettingsScreen />);
      
      expect(getByText('Account')).toBeTruthy();
      expect(getByText('Preferences')).toBeTruthy();
      expect(getByText('Support')).toBeTruthy();
      expect(getByText('About')).toBeTruthy();
    });

    it('displays account settings options', () => {
      const { getByText } = render(<SettingsScreen />);
      
      expect(getByText('Profile')).toBeTruthy();
      expect(getByText('Purchase History')).toBeTruthy();
      expect(getByText('Payment Methods')).toBeTruthy();
      expect(getByText('Addresses')).toBeTruthy();
    });

    it('displays preference settings options', () => {
      const { getByText } = render(<SettingsScreen />);
      
      expect(getByText('Language')).toBeTruthy();
      expect(getByText('Currency')).toBeTruthy();
      expect(getByText('Notifications')).toBeTruthy();
      expect(getByText('Dark Mode')).toBeTruthy();
    });

    it('displays support options', () => {
      const { getByText } = render(<SettingsScreen />);
      
      expect(getByText('Help Center')).toBeTruthy();
      expect(getByText('Contact Support')).toBeTruthy();
      expect(getByText('Report a Bug')).toBeTruthy();
      expect(getByText('Feature Request')).toBeTruthy();
    });

    it('displays about section', () => {
      const { getByText } = render(<SettingsScreen />);
      
      expect(getByText('Privacy Policy')).toBeTruthy();
      expect(getByText('Terms of Service')).toBeTruthy();
      expect(getByText('App Version')).toBeTruthy();
      expect(getByText('1.0.0')).toBeTruthy();
    });
  });

  describe('Theme Toggle', () => {
    it('displays current theme setting', async () => {
      mockAsyncStorage.getItem.mockResolvedValue('light');
      
      const { getByText, getByTestId } = render(<SettingsScreen />);
      
      await waitFor(() => {
        expect(getByTestId('theme-toggle')).toBeTruthy();
        expect(getByText('Light')).toBeTruthy();
      });
    });

    it('toggles between light and dark mode', async () => {
      mockAsyncStorage.getItem.mockResolvedValue('light');
      mockAsyncStorage.setItem.mockResolvedValue();
      
      const { getByTestId } = render(<SettingsScreen />);
      
      await waitFor(() => {
        const toggle = getByTestId('theme-toggle');
        fireEvent.press(toggle);
        
        expect(mockAsyncStorage.setItem).toHaveBeenCalledWith('theme', 'dark');
      });
    });

    it('provides haptic feedback when toggling theme', async () => {
      const { getByTestId } = render(<SettingsScreen />);
      
      await waitFor(() => {
        const toggle = getByTestId('theme-toggle');
        fireEvent.press(toggle);
        
        expect(mockHaptics).toHaveBeenCalledWith(Haptics.ImpactFeedbackStyle.Light);
      });
    });
  });

  describe('Language Selection', () => {
    it('displays current language setting', async () => {
      mockAsyncStorage.getItem.mockResolvedValue('en');
      
      const { getByText } = render(<SettingsScreen />);
      
      await waitFor(() => {
        expect(getByText('English')).toBeTruthy();
      });
    });

    it('opens language selection modal', () => {
      const { getByText, getByTestId } = render(<SettingsScreen />);
      
      const languageOption = getByText('Language');
      fireEvent.press(languageOption);
      
      expect(getByTestId('language-modal')).toBeTruthy();
      expect(getByText('Select Language')).toBeTruthy();
    });

    it('displays available language options', () => {
      const { getByText } = render(<SettingsScreen />);
      
      const languageOption = getByText('Language');
      fireEvent.press(languageOption);
      
      expect(getByText('English')).toBeTruthy();
      expect(getByText('Polish')).toBeTruthy();
      expect(getByText('Spanish')).toBeTruthy();
      expect(getByText('French')).toBeTruthy();
    });

    it('changes language when selected', async () => {
      const { getByText } = render(<SettingsScreen />);
      
      const languageOption = getByText('Language');
      fireEvent.press(languageOption);
      
      const polishOption = getByText('Polish');
      fireEvent.press(polishOption);
      
      await waitFor(() => {
        expect(mockAsyncStorage.setItem).toHaveBeenCalledWith('language', 'pl');
      });
    });
  });

  describe('Currency Selection', () => {
    it('displays current currency setting', async () => {
      mockAsyncStorage.getItem.mockResolvedValue('USD');
      
      const { getByText } = render(<SettingsScreen />);
      
      await waitFor(() => {
        expect(getByText('USD ($)')).toBeTruthy();
      });
    });

    it('opens currency selection modal', () => {
      const { getByText, getByTestId } = render(<SettingsScreen />);
      
      const currencyOption = getByText('Currency');
      fireEvent.press(currencyOption);
      
      expect(getByTestId('currency-modal')).toBeTruthy();
      expect(getByText('Select Currency')).toBeTruthy();
    });

    it('displays available currency options', () => {
      const { getByText } = render(<SettingsScreen />);
      
      const currencyOption = getByText('Currency');
      fireEvent.press(currencyOption);
      
      expect(getByText('USD ($)')).toBeTruthy();
      expect(getByText('EUR (€)')).toBeTruthy();
      expect(getByText('GBP (£)')).toBeTruthy();
      expect(getByText('PLN (zł)')).toBeTruthy();
    });
  });

  describe('Notification Settings', () => {
    it('displays notification toggle', () => {
      const { getByText, getByTestId } = render(<SettingsScreen />);
      
      expect(getByText('Notifications')).toBeTruthy();
      expect(getByTestId('notifications-toggle')).toBeTruthy();
    });

    it('toggles notification preferences', async () => {
      mockAsyncStorage.getItem.mockResolvedValue('true');
      
      const { getByTestId } = render(<SettingsScreen />);
      
      await waitFor(() => {
        const toggle = getByTestId('notifications-toggle');
        fireEvent.press(toggle);
        
        expect(mockAsyncStorage.setItem).toHaveBeenCalledWith('notifications', 'false');
      });
    });

    it('shows notification permission prompt', () => {
      const { getByText } = render(<SettingsScreen />);
      
      const notificationOption = getByText('Notifications');
      fireEvent.press(notificationOption);
      
      expect(mockAlert).toHaveBeenCalledWith(
        'Notification Permissions',
        'Please enable notifications in your device settings to receive updates.',
        expect.any(Array)
      );
    });
  });

  describe('Cache Management', () => {
    it('displays cache clear option', () => {
      const { getByText } = render(<SettingsScreen />);
      
      expect(getByText('Clear Cache')).toBeTruthy();
      expect(getByText('Free up storage space')).toBeTruthy();
    });

    it('shows confirmation dialog when clearing cache', () => {
      const { getByText } = render(<SettingsScreen />);
      
      const clearCacheOption = getByText('Clear Cache');
      fireEvent.press(clearCacheOption);
      
      expect(mockAlert).toHaveBeenCalledWith(
        'Clear Cache',
        'This will remove temporarily stored data. Are you sure?',
        expect.any(Array)
      );
    });

    it('clears cache when confirmed', async () => {
      mockAlert.mockImplementation((title, message, buttons) => {
        buttons?.[1]?.onPress?.(); // Simulate pressing "Clear" button
      });
      
      const { getByText } = render(<SettingsScreen />);
      
      const clearCacheOption = getByText('Clear Cache');
      fireEvent.press(clearCacheOption);
      
      await waitFor(() => {
        expect(mockAsyncStorage.clear).toHaveBeenCalled();
      });
    });
  });

  describe('Account Actions', () => {
    it('navigates to profile when profile option is pressed', () => {
      const mockPush = jest.fn();
      mockUseRouter.mockReturnValue({
        push: mockPush,
        back: jest.fn(),
        replace: jest.fn(),
      } as any);
      
      const { getByText } = render(<SettingsScreen />);
      
      const profileOption = getByText('Profile');
      fireEvent.press(profileOption);
      
      expect(mockPush).toHaveBeenCalledWith('/profile');
    });

    it('navigates to purchase history', () => {
      const mockPush = jest.fn();
      mockUseRouter.mockReturnValue({
        push: mockPush,
        back: jest.fn(),
        replace: jest.fn(),
      } as any);
      
      const { getByText } = render(<SettingsScreen />);
      
      const historyOption = getByText('Purchase History');
      fireEvent.press(historyOption);
      
      expect(mockPush).toHaveBeenCalledWith('/purchase-history');
    });

    it('shows sign out confirmation', () => {
      const { getByText } = render(<SettingsScreen />);
      
      const signOutOption = getByText('Sign Out');
      fireEvent.press(signOutOption);
      
      expect(mockAlert).toHaveBeenCalledWith(
        'Sign Out',
        'Are you sure you want to sign out?',
        expect.any(Array)
      );
    });
  });

  describe('Support Actions', () => {
    it('opens help center', () => {
      const mockPush = jest.fn();
      mockUseRouter.mockReturnValue({
        push: mockPush,
        back: jest.fn(),
        replace: jest.fn(),
      } as any);
      
      const { getByText } = render(<SettingsScreen />);
      
      const helpOption = getByText('Help Center');
      fireEvent.press(helpOption);
      
      expect(mockPush).toHaveBeenCalledWith('/help');
    });

    it('opens contact support', () => {
      const mockPush = jest.fn();
      mockUseRouter.mockReturnValue({
        push: mockPush,
        back: jest.fn(),
        replace: jest.fn(),
      } as any);
      
      const { getByText } = render(<SettingsScreen />);
      
      const contactOption = getByText('Contact Support');
      fireEvent.press(contactOption);
      
      expect(mockPush).toHaveBeenCalledWith('/contact');
    });
  });

  describe('App Information', () => {
    it('displays app version info', () => {
      const { getByText } = render(<SettingsScreen />);
      
      expect(getByText('App Version')).toBeTruthy();
      expect(getByText('1.0.0')).toBeTruthy();
      expect(getByText('Build 100')).toBeTruthy();
    });

    it('shows app info when version is pressed', () => {
      const { getByText } = render(<SettingsScreen />);
      
      const versionText = getByText('1.0.0');
      fireEvent.press(versionText);
      
      expect(mockAlert).toHaveBeenCalledWith(
        'App Information',
        expect.stringContaining('Version: 1.0.0'),
        expect.any(Array)
      );
    });
  });

  describe('Accessibility', () => {
    it('has proper accessibility labels', () => {
      const { getByLabelText } = render(<SettingsScreen />);
      
      expect(getByLabelText('Toggle dark mode')).toBeTruthy();
      expect(getByLabelText('Toggle notifications')).toBeTruthy();
      expect(getByLabelText('Open profile settings')).toBeTruthy();
    });

    it('supports screen reader navigation', () => {
      const { getByRole } = render(<SettingsScreen />);
      
      expect(getByRole('button', { name: 'Profile' })).toBeTruthy();
      expect(getByRole('button', { name: 'Language' })).toBeTruthy();
      expect(getByRole('switch', { name: 'Dark Mode' })).toBeTruthy();
    });
  });
});