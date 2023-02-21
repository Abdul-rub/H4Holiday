import Booking from "../Models/booking.js";

//Create new Booking
export const createBooking = async (req, res) => {
  const newBooking = new Booking(req.body);

  try {
    const savedBooking = await newBooking.save();
    res.status(200).json({
      success: true,
      message: "Your tour is booked",
      data: savedBooking,
    });
  } catch (error) {
    res.status(500).json({ success: true, message: "Internal server error" });
  }
};

//Get single  booking
export const getBooking = async (req, res) => {
  const id = req.params.id;

  try {
    const book = await Booking.findById(id);
    res.status(200).json({ success: true, message: "successfull", data: book });
  } catch (error) {
    res.status(404).json({ success: true, message: "not found" });
  }
};

//Get Multiple Booking
export const getMultiBooking = async (req, res) => {
  try {
    const books = await Booking.find();
    res
      .status(200)
      .json({ success: true, message: "successfull", data: books });
  } catch (error) {
    res.status(500).json({ success: true, message: "Internal Server Error" });
  }
};
