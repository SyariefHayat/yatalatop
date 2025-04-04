const router = require("express").Router();
const userController = require("../controllers/index.controller");
const { checkToken } = require("../utils/auth");
const upload = require('../middlewares/upload');

router.get("/", (req, res) => {
    res.send("Server is running!");
})

router.post("/sign-up", userController.SignUpUser);
router.post("/sign-in", userController.SignInUser);
router.get("/check-user/:email", userController.CheckEmail);
router.delete("/sign-in", checkToken, userController.SignOutUser);

router.post("/donation", checkToken, upload.single('image'), userController.AddDonation);
router.get("/donation", userController.GetDonation);
router.get("/donation/:id", userController.GetDonationById);
router.put("/donation/:id", checkToken, upload.single('image'), userController.UpdateDonation);
router.delete("/donation/:id", checkToken, userController.DeleteDonation);

router.post("/create-transaction", userController.AddTransaction);

router.post("/article", upload.single('image'), userController.AddArticle);
router.get("/article", userController.GetArticle);
router.get("/article/:id", userController.GetArticleById);
router.put("/article/:id", upload.single('image'), userController.UpdateArticle);
router.delete("/article/:id", userController.DeleteArticle);

module.exports = router;