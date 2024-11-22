import { redirect } from "next/navigation";
import { db } from "@/utils/db";
export default async function loginForm() {
  const result = await db.query(`SELECT * FROM login`);
  const posts = result.rows;
  console.log(posts);

  async function handleAddLogin(formData) {
    "use server";

    const username = formData.get("username");
    const result = await db.query(`INSERT INTO login (username)VALUES ($1)`, [
      username,
    ]);
  }

  redirect("/posts");

  return (
    <div>
      <h2>Login</h2>
      <form action={handleAddLogin}>
        <input type="text" placeholder="username" name="username" />
        <input type="text" placeholder="password" name="password" />
        <input type="text" placeholder="confirm" name="confirm" />
        <button>submit</button>
      </form>
    </div>
  );
}
