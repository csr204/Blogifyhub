const router = require("express").Router();
const verify = require("../middlewares/verify");
const create = require("../contollers/createBlog");
const getLatest = require("../contollers/latestBlog");
const trending = require("../contollers/trending");
const search = require("../contollers/search");
const getByCategory = require("../contollers/category");
const getRelatedUsers = require("../contollers/relatedUsers");
const readBlog = require("../contollers/readBlog");
const likeBlog = require("../contollers/like");
const checkLike = require("../contollers/checkLike");
const addComment = require("../contollers/addComment");
const getComments = require("../contollers/getComments");
const getReplies = require("../contollers/getreplies");
const deleteComment = require("../contollers/deleteComment");
const getNotification = require("../contollers/getNotificationStatus");
const notifications = require("../contollers/notifications");
const deleteBlog = require("../contollers/deleteBlog");

router.post("/createBlog", verify, create);
router.get("/latest-blogs/:page", getLatest);
router.get("/trending-blogs", trending);
router.get("/category/:tag/:page/:id", getByCategory);
router.get("/search/:query/:page", search);
router.get("/user/:user/:page", getRelatedUsers);
router.post("/read/:id", readBlog);
router.post("/like", verify, likeBlog);
router.post("/checklike", verify, checkLike);
router.post("/add-comment", verify, addComment);
router.post("/get-comments", getComments);
router.post("/get-replies", getReplies);
router.post("/delete-comment", verify, deleteComment);
router.get("/get-notifications", verify, getNotification);
router.post("/notifications", verify, notifications);
router.post("/delete-blog", verify, deleteBlog);

module.exports = router;
