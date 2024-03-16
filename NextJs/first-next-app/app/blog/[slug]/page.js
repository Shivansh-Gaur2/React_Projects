export default function BlogPostPage({params}) {
    // next gives params props where the key will be stored under the key 
  return (
    <main>
      <h1>Blog Post</h1>
      <p>{params.slug}</p>
    </main>
  );
}