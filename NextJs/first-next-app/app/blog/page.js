import Link from "next/link";

export default function BlogPage() {
  // when the route blog is called the nextJs will show this component by default
  return (
    <main>
      <h1>The Blog</h1>
      <p>
        <Link href= "/blog/post-1">Post 1</Link>
      </p>
      <p>
        <Link href= "/blog/post-2">Post 2</Link>
      </p>
    </main>
  );
}
