import { redirect } from "next/navigation";
import { db } from "@/utils/db";
export default async function loginPage() {
  const result = await db.query(`SELECT * FROM login`);
  const posts = result.rows;
  console.log(posts);

  async function handleAddLogin(formData) {
    "use server";

    const username = formData.get("username");
    const result = await db.query(`INSERT INTO login (username)VALUES ($1)`, [
      username,
    ]);
    redirect("/posts");
  }

  return (
    <div>
      <h2 className="h2">Login with your details below</h2>
      <form action={handleAddLogin}>
        <input type="text" placeholder="username" name="username" />
        <input type="password" placeholder="password" name="password" />
        <input type="password" placeholder="confirm" name="confirm" />
        <button>submit</button>
      </form>
    </div>
  );
}
