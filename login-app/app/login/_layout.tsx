import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/use-color-scheme';
import LoginScreen from './login';

export const unstable_settings = {
  anchor: 'login',
};

export default function FeedLayout() {
  const colorScheme = useColorScheme();

  return (
    <LoginScreen />
  );
}
