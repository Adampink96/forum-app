import { db } from "@/utils/db";
export default async function CommentForm() {
  const result = await db.query("SELECT * FROM comments");
  const comments = result.rows;
  console.log(comments);

  async function handleAddComment(formData) {
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
      <form action={handleAddComment}>
        <input type="text" placeholder="username" name="username" />
        <input type="text" placeholder="comment" name="comment" />
      </form>
      {/* {comments.map((comment) => {
        return (
          <div key={comment.id}>
            <p>
              {comment.username} - {comment.comment}
            </p>
          </div>
        );
      })} */}
    </div>
  );
}
