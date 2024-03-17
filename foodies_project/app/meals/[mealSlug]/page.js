export default function MealDetailsPage({params}) {
  return (
    <main>
      <h1>{params.mealSlug}</h1>
      <p>Share your meals with the world!</p>
    </main>
  );
}