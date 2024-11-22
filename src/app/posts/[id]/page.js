import { db } from "@/utils/db";
export default async function FilteredPostPage({ params }) {
  const id = (await params).id;
  const postresponse = await db.query(`SELECT * FROM posts WHERE id = ${id}`);
  const post = postresponse.rows;
  console.log(post);
  // await postresponse.json();
  const commentreponse = await db.query(
    `SELECT * FROM comments WHERE posts_id = ${id}`
  );
  const comments = commentreponse.rows;
  console.log(comments);
  // await commentreponse.json();
  // select * posts where id
  // seclet all comments where posit_id
  return (
    <div>
      <h2>
        {post.rows[0].title} - {post.rows[0].username}
      </h2>
      <p>{post.rows[0].username}</p>
      {comments.map((comment) => {
        return (
          <div key={comment.id}>
            <p>{comment.username}</p>
            <p>{comment.comment}</p>
          </div>
        );
      })}

      {/* <h2>
        {comment.username} - {comment.comment}
      </h2> */}
    </div>
  );
}
