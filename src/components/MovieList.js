import { Ionicons } from '@expo/vector-icons';
import { Pressable, ScrollView, StyleSheet, Text } from 'react-native';
import { MOVIES } from '../data/movies';
import { colors } from '../theme';
import MovieCard from './MovieCard';

// Reusable list for every category page.
export default function MovieList({ title, category, navigation }) {
  const filtered = MOVIES.filter((movie) =>
    movie.categories.includes(category)
  );

  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <Pressable
        accessibilityRole="button"
        onPress={() => navigation.goBack()}
        style={styles.back}
      >
        <Ionicons name="arrow-back" size={16} color={colors.accent} />
        <Text style={styles.backText}>All categories</Text>
      </Pressable>

      <Text style={styles.title}>{title}</Text>
      <Text style={styles.count}>{filtered.length} films</Text>

      {filtered.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    padding: 20,
    paddingBottom: 30,
  },
  back: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginBottom: 14,
  },
  backText: {
    color: colors.accent,
    fontSize: 12,
    fontWeight: '700',
    marginLeft: 5,
  },
  title: {
    color: colors.text,
    fontSize: 32,
    fontWeight: '900',
  },
  count: {
    color: colors.muted,
    fontSize: 13,
    marginTop: 4,
    marginBottom: 18,
  },
});
