const UserModel = require("../models/UserModel");

exports.register = async (req, res) => {
  const { name, email, age, location, job, password } = req.body;

  console.log("name", name);

  try {
    const user = await UserModel.findOne({ email: email });

    if (user) {
      console.log("User Already exists");
    }
    const userData = await UserModel.create({
      name,
      email,
      age,
      location,
      job,
      password,
    });

    if (userData) {
      console.log("User Created");
    }
  } catch (err) {
    res.status(400);
    throw new Error();
  }
};

// app.post('/add-phone', async(req,res) => {
//     console.log("workong")
//     const phoneNumber = new PhoneBook(req.body)
//     console.log(req.body)
//     try{
//         await phoneNumber.save()
//         res.status(201).json({
//             status: 'Success',
//             data : {
//                 phoneNumber
//             }
//         })
//     }catch(err){
//         res.status(500).json({
//             status: 'Failed',
//             message : err
//         })
//     }
// })

// app.get('/get-phone', async (req,res) => {
//     const phoneNumbers = await PhoneBook.find({})
//     try{
//         res.status(200).json({
//             status : 'Success',
//             data : {
//                 phoneNumbers
//             }
//         })
//     }catch(err){
//         res.status(500).json({
//             status: 'Failed',
//             message : err
//         })
//     }
// })
