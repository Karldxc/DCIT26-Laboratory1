import { Ionicons } from '@expo/vector-icons';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { CATEGORIES, MOVIES } from '../data/movies';
import { colors, radius } from '../theme';

export default function MoviesPage({ navigation }) {
  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.title}>Movies</Text>
      <Text style={styles.subtitle}>Choose a collection.</Text>

      <View style={styles.grid}>
        {CATEGORIES.map((item) => {
          const count = MOVIES.filter((movie) =>
            movie.categories.includes(item.key)
          ).length;

          return (
            <Pressable
              key={item.key}
              accessibilityRole="button"
              onPress={() =>
                navigation.navigate('Category', {
                  category: item.key,
                  title: item.title,
                })
              }
              style={({ pressed }) => [
                styles.card,
                {
                  borderColor: `${item.tint}55`,
                  backgroundColor: `${item.tint}0D`,
                },
                pressed && styles.pressed,
              ]}
            >
              <Ionicons name={item.icon} size={26} color={item.tint} />
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardCount}>{count} films</Text>
            </Pressable>
          );
        })}
      </View>
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
  title: {
    color: colors.text,
    fontSize: 34,
    fontWeight: '900',
  },
  subtitle: {
    color: colors.muted,
    fontSize: 14,
    marginTop: 4,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    rowGap: 12,
    marginTop: 24,
  },
  card: {
    width: '48%',
    height: 150,
    justifyContent: 'space-between',
    borderRadius: radius.lg,
    borderWidth: 1,
    padding: 16,
  },
  pressed: {
    opacity: 0.7,
  },
  cardTitle: {
    color: colors.text,
    fontSize: 17,
    fontWeight: '800',
  },
  cardCount: {
    color: colors.muted,
    fontSize: 12,
  },
});
