import mongoose from "mongoose";
import Product from "../models/userModel.js";

export const getUser = async (req, res) => {
	try {
		const users = await User.find({});
		res.status(200).json({ success: true, data: users });
	} catch (error) {
		console.log("error in fetching users:", error.message);
		res.status(500).json({ success: false, message: "Server Error" });
	}
};

export const createUser = async (req, res) => {
	const user = req.body; // user will send this data

	if (!user.name || !user.password || !user.email) {
		return res.status(400).json({ success: false, message: "Please provide all fields" });
	}

	const newUser = new User(user);

	try {
		await newUser.save();
		res.status(201).json({ success: true, data: newUser });
	} catch (error) {
		console.error("Error in Create user:", error.message);
		res.status(500).json({ success: false, message: "Server Error" });
	}
};

/*export const updateUser = async (req, res) => {
	const { id } = req.params;

	const product = req.body;

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ success: false, message: "Invalid Product Id" });
	}

	try {
		const updatedProduct = await Product.findByIdAndUpdate(id, product, { new: true });
		res.status(200).json({ success: true, data: updatedProduct });
	} catch (error) {
		res.status(500).json({ success: false, message: "Server Error" });
	}
}; */


/*export const deleteProduct = async (req, res) => {
	const { id } = req.params;

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ success: false, message: "Invalid Product Id" });
	}

	try {
		await Product.findByIdAndDelete(id);
		res.status(200).json({ success: true, message: "Product deleted" });
	} catch (error) {
		console.log("error in deleting product:", error.message);
		res.status(500).json({ success: false, message: "Server Error" });
	}
}; */
