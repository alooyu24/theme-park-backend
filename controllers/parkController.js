const parkController = async (req, res) => {
  try {
    const parks = await parkController.find()
    res.send(parks)
  } catch (error) {
    res.status(500).send({ msg: "Error getting park", error })
  }
}

module.exports = {
  parkController,
}
