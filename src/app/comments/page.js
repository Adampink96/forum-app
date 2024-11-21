import { db } from "../../utils/db";

export default async function comments() {
  const result = await db.query(`SELECT
    posts.id,
    posts.title,
      posts.post,
      comments.username,
      comments.comment,
      comments.posts_id
    FROM
    posts
    
    JOIN comments ON comments.posts_id = posts.id`);
  const comments = result.rows;
  console.log(comments);

  async function handleAddPost(formData) {
    "use server";

    const username = formData.get("username");
    const comment = formData.get("comment");

    const result = await db.query(
      `INSERT INTO comments (username,comment)VALUES ($1,$2)`,
      [username, comment]
    );
  }
  return (
    <div>
      <h2>welcome to the comments section</h2>
      <p>comment on some of the posts below</p>
      {/* <form action={handleAddPost}>
        <input type="text" placeholder="username" name="username" />
        <input type="text" placeholder="comment" name="comment" />
        <button>submit</button>
      </form> */}
      <h3>full feed</h3>
      {comments.map((comment) => {
        return (
          <div key={comment.id}>
            <h3>
              {comment.title} - {comment.post}
            </h3>

            <p>
              {comment.comment} - {comment.username}
            </p>
            <form className="comments" action={handleAddPost}>
              <input type="text" placeholder="username" name="username" />
              <input type="text" placeholder="comment" name="comment" />
              <button>submit</button>
            </form>
          </div>
        );
      })}
    </div>
  );
}
