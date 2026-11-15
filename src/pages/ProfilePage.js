import { StyleSheet, Text, View } from 'react-native';
import { colors, radius } from '../theme';

export default function ProfilePage() {
  return (
    <View style={styles.screen}>
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>CV</Text>
      </View>
      <Text style={styles.name}>The Cinephile</Text>
      <Text style={styles.handle}>@cinevault.member</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Profile</Text>
        <Text style={styles.message}>
          Welcome to your profile. Keep collecting the films that stay with you
          long after the credits roll.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
    padding: 24,
  },
  avatar: {
    width: 84,
    height: 84,
    borderRadius: 42,
    borderWidth: 2,
    borderColor: colors.accent,
    backgroundColor: colors.surfaceLight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    color: colors.accent,
    fontSize: 28,
    fontWeight: '900',
  },
  name: {
    color: colors.text,
    fontSize: 22,
    fontWeight: '900',
    marginTop: 14,
  },
  handle: {
    color: colors.muted,
    fontSize: 12,
    marginTop: 4,
  },
  card: {
    width: '100%',
    backgroundColor: colors.surface,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 20,
    marginTop: 24,
  },
  cardTitle: {
    color: colors.text,
    fontSize: 15,
    fontWeight: '800',
  },
  message: {
    color: colors.muted,
    fontSize: 13,
    lineHeight: 21,
    marginTop: 8,
  },
});
