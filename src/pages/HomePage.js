import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { CATEGORIES, MOVIES } from '../data/movies';
import { colors, radius } from '../theme';

export default function HomePage({ navigation }) {
  return (
    <View style={styles.screen}>
      <View style={styles.glow} />

      <Text style={styles.eyebrow}>WELCOME</Text>
      <Text style={styles.title}>
        Cine<Text style={styles.accent}>Vault</Text>
      </Text>
      <Text style={styles.message}>
        Welcome back, film lover. Discover handpicked movies across four cool
        collections.
      </Text>

      <Pressable
        accessibilityRole="button"
        onPress={() => navigation.navigate('Movies', { screen: 'MovieCategories' })}
        style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      >
        <Text style={styles.buttonText}>Browse Movies</Text>
        <Ionicons name="arrow-forward" size={18} color={colors.background} />
      </Pressable>

      <Text style={styles.small}>
        {MOVIES.length} films · {CATEGORIES.length} collections
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    overflow: 'hidden',
    backgroundColor: colors.background,
    padding: 24,
  },
  glow: {
    position: 'absolute',
    top: -90,
    right: -90,
    width: 260,
    height: 260,
    borderRadius: 130,
    backgroundColor: colors.accentSoft,
  },
  eyebrow: {
    color: colors.accent,
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 2,
  },
  title: {
    color: colors.text,
    fontSize: 48,
    fontWeight: '900',
    marginTop: 8,
  },
  accent: {
    color: colors.accent,
  },
  message: {
    color: colors.muted,
    fontSize: 14,
    lineHeight: 21,
    marginTop: 12,
    maxWidth: 320,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    gap: 10,
    backgroundColor: colors.accent,
    borderRadius: radius.pill,
    paddingVertical: 14,
    paddingHorizontal: 20,
    marginTop: 24,
  },
  pressed: {
    opacity: 0.8,
  },
  buttonText: {
    color: colors.background,
    fontSize: 14,
    fontWeight: '800',
  },
  small: {
    color: colors.muted,
    fontSize: 12,
    marginTop: 24,
  },
});
