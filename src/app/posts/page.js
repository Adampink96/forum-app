import { db } from "@/utils/db";

export default async function Posts() {
  const result = await db.query(`SELECT * FROM posts`);
  const posts = result.rows;
  console.log(posts);

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
      </form>
      <h3>User posts</h3>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <h3>
              {post.title} - {post.username}
            </h3>

            <p>{post.post}</p>
          </div>
        );
      })}
    </div>
  );
}
