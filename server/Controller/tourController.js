import Tour from "../Models/Tour.js";

//Creating new Tour

export const createTour = async (req, res) => {
  const newTour = new Tour(req.body);

  try {
    const savedTour = await newTour.save();
    res.status(200).json({
      success: true,
      message: "Successfully created",
      data: savedTour,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Failed to create. Try again " });
  }
};

//Update tour

export const updateTour = async (req, res) => {
  const id = req.params.id;
  try {
    const updatedTour = await Tour.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json({
      success: true,
      message: "Successfully updated",
      data: updatedTour,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Failed to update. Try again " });
  }
};

//Delete Tour

export const deleteTour = async (req, res) => {
  const id = req.params.id;
  try {
    const deltedTour = await Tour.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "Successfully deleted",
      data: deltedTour,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Failed to delete. Try again " });
  }
};

//getSingle Tour

export const getSingleTour = async (req, res) => {
  const id = req.params.id;
  try {
    const tour = await Tour.findById(id);
    res.status(200).json({
      success: true,
      message: "Successfully got data",
      data: tour,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Failed to get data. Try again " });
  }
};

//getAll Tour

export const getAllTour = async (req, res) => {
  //for pagination
  const page = parseInt(req.query.page);
  console.log(page);
  try {
    const getAlltourdata = await Tour.find({})
      .skip(page * 8)
      .limit(8);
    res.status(200).json({
      success: true,
      count: getAlltourdata.length,
      message: "Successfully got all data",
      data: getAlltourdata,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Failed to get all data. Try again " });
  }
};

//get tour by search
