//Dependencies
const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

// // CORS config
// router.use((req, res, next)=> {
// 	res.header("Allow-Constrol-Allow-Origin", "https://localhost:3000")
// 	res.header("Allow-Constrol-Allow-Origin", "Origin, X-Requestin-With, Content-Type, Acccept")
// 	next()
// })

// API Routes
router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
router.use(function (req, res) {
	res.sendFile(path.join(__dirname, "../client/public/index.html"));
});

module.exports = router;
