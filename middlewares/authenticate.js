import jwt from "jsonwebtoken";

export const authenticateCustomer = (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) return res.status(401).json({ message: "Unauthorized" });

    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.customerId =  decoded.id ;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }
};

export const authenticateOwner = (req, res, next) => {
  try {
    const token = req.cookies.token;
    //console.log(token)
    if (!token) return res.status(401).json({ message: "Unauthorized" });

    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    if (decoded.role !== "owner") return res.status(403).json({ message: "Access denied" });

    req.ownerId =  decoded.id ;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }
};
