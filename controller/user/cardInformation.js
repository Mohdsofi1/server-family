import query from "../../db/index.js";

const cardInformation = async (req, res) => {
  try {
    const body = req.body;
    const dbRes = await query(
      "INSERT INTO users (email,name, no_telephone, relationship, home_address) VALUES ($1, $2, $3, $4,$5)",
      [
        body.email,
        body.name,
        body.no_telephone,
        body.relationship,
        body.home_address,
      ]
    );
    const serverRes = {
      message: "information save",
    };
    res.status(200).json(serverRes);
  } catch (error) {
    const serverRes = {
      message: "cannot save",
    };
    res.status(500).json(serverRes);
  }
};

export default cardInformation;
