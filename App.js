import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  DarkTheme,
  NavigationContainer,
  getFocusedRouteNameFromRoute,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import CategoryPage from './src/pages/CategoryPage';
import HomePage from './src/pages/HomePage';
import MoviesPage from './src/pages/MoviesPage';
import ProfilePage from './src/pages/ProfilePage';
import { colors } from './src/theme';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const theme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: colors.accent,
    background: colors.background,
    card: colors.background,
    text: colors.text,
    border: colors.border,
  },
};

const headerOptions = {
  headerTitle: 'CineVault',
  headerStyle: { backgroundColor: colors.background },
  headerTintColor: colors.text,
  headerShadowVisible: false,
  headerTitleAlign: 'center',
  headerTitleStyle: { fontSize: 18, fontWeight: '800' },
};

const tabBarStyle = {
  backgroundColor: colors.surface,
  borderTopColor: colors.border,
  borderTopWidth: StyleSheet.hairlineWidth,
};

const tabIcons = {
  Home: ['home', 'home-outline'],
  Movies: ['film', 'film-outline'],
  Profile: ['person', 'person-outline'],
};

function MoviesStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        ...headerOptions,
        contentStyle: { backgroundColor: colors.background },
      }}
    >
      <Stack.Screen name="MovieCategories" component={MoviesPage} />
      <Stack.Screen
        name="Category"
        component={CategoryPage}
        options={{ headerBackButtonDisplayMode: 'minimal' }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea} edges={['left', 'right']}>
        <StatusBar style="light" />
        <NavigationContainer theme={theme}>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              ...headerOptions,
              tabBarActiveTintColor: colors.accent,
              tabBarInactiveTintColor: colors.muted,
              tabBarStyle,
              tabBarLabelStyle: { fontSize: 11, fontWeight: '700' },
              tabBarIcon: ({ focused, color, size }) => {
                const [active, inactive] = tabIcons[route.name];
                return (
                  <Ionicons
                    name={focused ? active : inactive}
                    size={size}
                    color={color}
                  />
                );
              },
            })}
          >
            <Tab.Screen name="Home" component={HomePage} />
            <Tab.Screen
              name="Movies"
              component={MoviesStack}
              options={({ route }) => ({
                headerShown: false,
                tabBarStyle:
                  (getFocusedRouteNameFromRoute(route) ?? 'MovieCategories') ===
                  'Category'
                    ? { display: 'none' }
                    : tabBarStyle,
              })}
            />
            <Tab.Screen name="Profile" component={ProfilePage} />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
});
