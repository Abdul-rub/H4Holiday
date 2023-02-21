import User from "../Models/User.js";

//Creating new Tour
export const createUser = async (req, res) => {
  const newUser = new User(req.body);

  try {
    const savedTour = await newUser.save();
    res.status(200).json({
      success: true,
      message: "Successfully created",
      data: savedUser,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Failed to create. Try again " });
  }
};

//Update tour
export const updateUser = async (req, res) => {
  const id = req.params.id;
  try {
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json({
      success: true,
      message: "Successfully updated",
      data: updatedUser,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Failed to update. Try again " });
  }
};

//Delete Tour
export const deleteUser = async (req, res) => {
  const id = req.params.id;
  try {
    const deltedUser = await User.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "Successfully deleted",
      data: deltedUser,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Failed to delete. Try again " });
  }
};

//getSingle Tour
export const getSingleUser = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await User.findById(id);
    res.status(200).json({
      success: true,
      message: "Successfully got data",
      data: user,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Failed to get data. Try again " });
  }
};

//getAll Tour
export const getAllUser = async (req, res) => {
  try {
    const getAllUserdata = await User.find({});
    res.status(200).json({
      success: true,
      count: getAllUserdata.length,
      message: "Successfully got all data",
      data: getAllUserdata,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Failed to get all data. Try again " });
  }
};
