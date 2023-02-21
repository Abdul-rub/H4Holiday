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
    const tour = await Tour.findById(id).populate("reviews");
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
      .populate("reviews")
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
export const getTourBySearch = async (req, res) => {
  const city = new RegExp(req.query.city, "i");
  let query = { city };
  if (req.query.distance) {
    const distance = parseInt(req.query.distance);
    query.distance = { $gte: distance };
  }
  if (req.query.maxGroupSize) {
    const maxGroupSize = parseInt(req.query.maxGroupSize);
    query.maxGroupSize = { $gte: maxGroupSize };
  }
  try {
    const tours = await Tour.find(query).populate("reviews");
    res.status(200).json({
      success: true,
      message: "Successfully got all data",
      data: tours,
    });
  } catch (error) {
    res.status(404).json({ success: false, message: "Not found" });
  }
};

//get Featured Tour
export const getFeaturedTour = async (req, res) => {
  try {
    const getFeatureddata = await Tour.find({ featured: true })
      .populate("reviews")
      .limit(8);
    res.status(200).json({
      success: true,
      message: "Successfull",
      data: getFeatureddata,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Failed to get all data. Try again " });
  }
};

//get tour counts
export const getTourCount = async (req, res) => {
  try {
    const tourCount = await Tour.estimatedDocumentCount();
    res.status(200).json({ success: true, data: tourCount });
  } catch (error) {
    res.status(500).json({ success: false, message: "failed" });
  }
};
