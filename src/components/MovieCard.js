import { Ionicons } from '@expo/vector-icons';
import { Image, StyleSheet, Text, View } from 'react-native';
import { colors, radius } from '../theme';

// Receives one movie from props and shows its poster beside the text.
export default function MovieCard({ movie }) {
  return (
    <View style={styles.card}>
      <Image source={movie.image} style={styles.image} />

      <View style={styles.info}>
        <Text style={styles.title} numberOfLines={2}>
          {movie.title}
        </Text>

        <View style={styles.meta}>
          <Text style={styles.metaText}>{movie.year}</Text>
          <Ionicons name="star" size={12} color={colors.accent} />
          <Text style={styles.rating}>{movie.rating.toFixed(1)}</Text>
        </View>

        <Text style={styles.desc} numberOfLines={3}>
          {movie.desc}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: colors.surface,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 10,
    marginBottom: 12,
  },
  image: {
    width: 86,
    height: 124,
    borderRadius: radius.sm,
    backgroundColor: colors.surfaceLight,
  },
  info: {
    flex: 1,
    marginLeft: 12,
  },
  title: {
    color: colors.text,
    fontSize: 16,
    fontWeight: '800',
  },
  meta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    marginTop: 6,
  },
  metaText: {
    color: colors.muted,
    fontSize: 12,
  },
  rating: {
    color: colors.accent,
    fontSize: 12,
    fontWeight: '800',
  },
  desc: {
    color: colors.muted,
    fontSize: 12,
    lineHeight: 18,
    marginTop: 8,
  },
});
