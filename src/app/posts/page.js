import CommentForm from "@/component/comment";
import { db } from "@/utils/db";
import Link from "next/link";

export default async function Posts() {
  const result = await db.query(`SELECT * FROM posts`);
  const posts = result.rows;
  console.log(posts);

  const commentresult = await db.query(`SELECT * FROM comments`);
  const comments = commentresult.rows;
  console.log(comments);

  async function handleAddPost(formData) {
    "use server";

    const username = formData.get("username");
    const title = formData.get("title");
    const post = formData.get("post");
    const result = await db.query(
      `INSERT INTO posts (username,title,post)VALUES ($1,$2,$3)`,
      [username, title, post]
    );
  }
  return (
    <div>
      <h2>posts section</h2>
      <p>
        welcome to the posts section of our site, fill out the form below and
        interact with the community
      </p>
      <form action={handleAddPost}>
        <input type="text" placeholder="username" name="username" />
        <input type="text" placeholder="title" name="title" />

        <input type="text" placeholder="post" name="post" />
        <button>submit</button>
        <button>delete post</button>
      </form>
      <h3>User posts</h3>
      {posts.map((post) => {
        return (
          <Link key={post.id} href={`/posts/${post.id}`}>
            <h3>{post.title}</h3>
            <p>{post.username}</p>

            <p>{post.post}</p>
            {comments.map((comment) => {
              return (
                <div key={comment.post_id}>
                  <p>
                    {comment.username}-{comment.comment}-{comment.post_id}
                  </p>
                </div>
              );
            })}
            <CommentForm />
          </Link>
        );
      })}
    </div>
  );
}
