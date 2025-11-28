const mongoose = require("mongoose");
const supertest = require("supertest");
const app = require("../app");
const api = supertest(app);
const User = require("../models/userModel");
const Workout = require("../models/workoutModel");
const workouts = require("./data/workouts.js");

let token = null;


beforeAll(async () => {
  await User.deleteMany({});
  const result = await api
    .post("/api/user/signup")
    .send({ email: "mattiv@matti.fi", password: "R3g5T7#gh" });
  token = result.body.token;
});

describe("when there is initially some workouts saved", () => {
  beforeEach(async () => {
    await Workout.deleteMany({});
    await api
      .post("/api/workouts")
      .set("Authorization", "bearer " + token)
      .send(workouts[0])
    await api
      .post("/api/workouts")
      .set("Authorization", "bearer " + token)
      .send(workouts[1]);
  });

  it("Workouts are returned as json", async () => {
    await api
      .get("/api/workouts")
      .set("Authorization", "bearer " + token)
      .expect(200)
      .expect("Content-Type", /application\/json/);
  });

  it("New workout added successfully", async () => {
    const newWorkout = {
      title: "testworkout",
      reps: 10,
      load: 100,
    };

    await api
      .post("/api/workouts")
      .set("Authorization", "bearer " + token)
      .send(newWorkout)
      .expect(201);
    
  });
  //delete workout
  it("A workout deleted successfully", async () => {
    // create new workout to delete
    const newWorkout = {
      title: "DeleteTest",
      reps: 5,
      load: 50,
    };

    const createdWorkout = await api
      .post("/api/workouts")
      .set("Authorization", "bearer " + token)
      .send(newWorkout)
      .expect(201);

    const workoutId = createdWorkout.body._id;

    // send request DELETE
    await api
      .delete(`/api/workouts/${workoutId}`)
      .set("Authorization", "bearer " + token)
      .expect(200);

    // check workout deleted
    await api
      .get(`/api/workouts/${workoutId}`)
      .set("Authorization", "bearer " + token)
      .expect(404);

  });
  //update workout
  it("A workout updated successfully", async () => {
    //Create a new workout to update
    const newWorkout = {
      title: "updatedTitle",
      reps: 5,
      load: 50,
    };
    const createdWorkout = await api
      .post("/api/workouts")
      .set("Authorization", "bearer " + token)
      .send(newWorkout)
      .expect(201);

    const workoutId = createdWorkout.body._id;
    // send request UPDATE
    const updatedFields = { title: "updatedTitle", reps: 20, load: 60 };
    const updateRes = await api
      .patch(`/api/workouts/${workoutId}`)
      .set("Authorization", "bearer " + token)
      .send(updatedFields)
      .expect(200);

    // check response body map update
    expect(updateRes.body.title).toBe("updatedTitle");
    expect(updateRes.body.reps).toBe(5);
    expect(updateRes.body.load).toBe(50);

    // check workout update

    const getRes = await api
      .get(`/api/workouts/${workoutId}`)
      .set("Authorization", "bearer " + token)
      .expect(200);

    expect(getRes.body.title).toBe("updatedTitle");
    expect(getRes.body.reps).toBe(20);
    expect(getRes.body.load).toBe(60);

  });

  //Read (single workout)
  it("A single workout is retrieved successfully", async () => {
    // create new workout to read
    const newWorkout = {
      title: "readTest",
      reps: 12,
      load: 80,
    };

    const createdWorkout = await api
      .post("/api/workouts")
      .set("Authorization", "bearer " + token)
      .send(newWorkout)
      .expect(201);

    const workoutId = createdWorkout.body._id;

    // send request GETBYID
    const res = await api
      .get(`/api/workouts/${workoutId}`)
      .set("Authorization", "bearer " + token)
      .expect(200)
      .expect("Content-Type", /application\/json/);

    // check response body matches data
    expect(res.body.title).toBe("readTest");
    expect(res.body.reps).toBe(12);
    expect(res.body.load).toBe(80);
  });

});
afterAll(() => {
  mongoose.connection.close();
});
