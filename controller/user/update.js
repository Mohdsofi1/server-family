import query from "../../db/index.js";

const Update = async (req, res) => {
  try {
    const body = req.body;
    const serverRes = { body };
    res.status(200).json(serverRes);
  } catch (error) {}
};

export default Update;
