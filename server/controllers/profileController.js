import Employee from "../models/Employee.js";

// Get profile
// GET /api/profile
export const getProfile = async (req, res) => {
  try {
    const session = req.session;

    if (!session?.userId || !session?.role) {
      return res.status(401).json({
        error: "Unauthorized",
      });
    }

    if (session.role === "ADMIN") {
      return res.status(200).json({
        success: true,
        user: {
          userId: session.userId,
          firstName: "Admin",
          lastName: "",
          email: session.email,
          role: session.role,
        },
      });
    }

    if (session.role !== "EMPLOYEE") {
      return res.status(403).json({
        error: "Access denied",
      });
    }

    const employee = await Employee.findOne({ userId: session.userId });

    if (!employee) {
      return res.status(404).json({
        error: "Employee profile not found",
      });
    }
    return res.json(employee);
  } catch (error) {
    return res.status(500).json({ error: "Failed to fetch profile" });
  }
};

// Update profile
// PUT /api/profile

export const updateProfile = async (req, res) => {
  try {
    const session = req.session;

    if (!session?.userId) {
      return res.status(401).json({
        error: "Unauthorized",
      });
    }

    const { bio } = req.body;

    if (typeof bio !== "string") {
      return res.status(400).json({
        error: "Bio must be a string",
      });
    }

    if (bio.length > 500) {
      return res.status(400).json({
        error: "Bio cannot exceed 500 characters",
      });
    }

    const employee = await Employee.findOne({
      userId: session.userId,
    });

    if (!employee) {
      return res.status(404).json({
        error: "Employee not found",
      });
    }

    if (employee.isDeleted) {
      return res.status(403).json({
        error: "Your account is deactivated.",
      });
    }

    const updatedEmployee = await Employee.findByIdAndUpdate(
      employee._id,
      { $set: { bio: bio.trim() } },
      {
        new: true,
        runValidators: true,
      },
    ).select("firstName lastName email bio");

    return res.status(200).json({
      success: true,
      message: "Profile updated successfully",
      employee: updatedEmployee,
    });
  } catch (error) {
    console.error("Update profile error:", error);

    return res.status(500).json({
      error: "Failed to update profile",
    });
  }
};
