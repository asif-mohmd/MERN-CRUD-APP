import jwt from "jsonwebtoken";

export const authorization = (req, res, next) => {
    const token = req.cookies.access_token;
    console.log("authing :",token)
    if (!token) {
        console.log("tk not working")
      return res.sendStatus(403);
    }
    try {
      const data = jwt.verify(token, process.env.JWT_SECRET);
      req.userId = data.id;
      req.userRole = data.role;
      return next();
    } catch {
      return res.sendStatus(403);
    }
  };