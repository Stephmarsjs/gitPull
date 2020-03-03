// copy this file and rename it <initial>-person.js
// Add the get route to get the people from the People model
// add the post route that will take a firstName and lastName from the body
// this code should NOT be on master and should be done on a branch
// push this branch to github ‘git push -u <remote> <branch>’
// this branch needs to be merged to master. I can’t stop you from using git merge however this excersise is to practice pull requests. To complete this correctly merge the branch to master using the pull request system on your own repo
// Lastly figure out how to submit a pull request of your master to my master on github

const { Person } = require("../../models/Person");
const express = require("express");
const router = express.Router();

router.get("api/person", async (req, res) => {
  try {
    let people = await Person.find();
    res.send(people);
  } catch (error) {
    console.error(error);
  }
});

router.post("api/person", async (req, res) => {
  try {
    let person = new Person({
      firstName: req.body.firstName,
      lastName: req.body.lastName
    });
    await person.save();
    res.send(person);
  } catch (error) {
    console.error(error);
  }
});
