import query from "../../db/index.js";

const listUsers = async (req, res) => {
  const dbRes = await query(
    "SELECT id, username, email, created_at FROM users"
  );
  const serverRes = {
    message: `${dbRes.rowCount} users are found`,
    data: dbRes.rows,
  };
  res.status(200).json(serverRes);
};

export default listUsers;
