var express = require("express");
var router = express.Router();
const Employee = require("../routes/Schema/model");
/* post users data. */
router.post("/", (req, res) => {
  const userData = new Employee({
    name: req.body.name,
    place: req.body.place,
    salary: req.body.salary,
  });
  userData.save().then((user) => {
    res.send(user);
    console.log(user);
  });
});

/**get user data */

router.get("/", (req, res) => {
  Employee.find().then((user) => {
    if (user.length === 0) {
      res.send("user not found");
    }
    res.send(user);
  });
});
/**delete user data */

router.delete("/:_id", async (req, res) => {
  await Employee.findByIdAndDelete(req.params._id).then((user) => {
    res.send("deleted");
  });
});


/**user data edit */

// router.put("/:id",async(req,res)=>{  
//   const userid = req.params.id
//   console.log(userid,"jjjjjjjjjjjjjjjjjj");

//   const changeid = req.body

//  await Employee.findByIdAndUpdate(userid,changeid).then((user)=>{
//     res.send(user)
//   })
// })


router.put("/:id", async (req, res) => {
  try {
    console.log(req.body.name, "req.body");

    const hot = await Employee.findByIdAndUpdate(
      req.params.id,
      {
        name: req.body.name,
        place: req.body.place,
        salary: req.body.salary,
      },
      { new: true }
    );

    if (!hot) {
      return res.status(500).send("not updated!!!!");
    }

    console.log(hot + "kkkkkkkkkk");
    return res.send(hot);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const editList = await Employee.findById(req.params.id);

    if (!editList) {
      return res.json({ success: false });
    } else {
      console.log(editList);
      return res.send(editList);
    }
  } catch (error) {
    console.log(error);
    return res.status(500).send(error.message);
  }
});

module.exports = router;
