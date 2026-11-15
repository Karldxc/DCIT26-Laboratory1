import MovieList from '../components/MovieList';

export default function CategoryPage({ route, navigation }) {
  const { category, title } = route.params;

  return (
    <MovieList title={title} category={category} navigation={navigation} />
  );
}
