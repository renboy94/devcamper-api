process.env.NODE_ENV = "test";

const mongoose = require("mongoose");
const request = require("supertest");
const app = require("../../app");

const Bootcamp = require("../../models/Bootcamp");

beforeAll(async done => {
  // const response = await request(app)
  //   .post("/api/v1/bootcamps")
  //   .send({
  //     name: "USA Bootcamp",
  //     description:
  //       "Devworks is a full stack JavaScript Bootcamp located in the heart of Boston that focuses on the technologies you need to get a high paying job as a web developer",
  //     website: "https://devworks.com",
  //     phone: "(111) 111-1111",
  //     email: "enroll@devworks.com",
  //     address: "Dumaguete, Negros Oriental",
  //     careers: ["Web Development", "UI/UX", "Business"],
  //     housing: true,
  //     jobAssistance: true,
  //     jobGuarantee: false,
  //     acceptGi: true
  //   });
  done();
});

describe("/POST - Create a bootcamp", () => {
  test("returns new bootcamp", async () => {
    //   const newProduct = await request(app)
    //     .post("/products")
    //     .set("Authorization", `Bearer ${token}`)
    //     .field("name", "thor")
    //     .field("price", "12.99")
    //     .attach("productImage", `./testUploads/thor.jpg`);

    //   const newProductBody = newProduct.body.createdProduct;

    //   expect(newProduct.statusCode).toBe(201);
    //   expect(newProductBody.name).toEqual("thor");
    //   expect(newProductBody.price).toEqual(12.99);
    // const bootcamp = Bootcamp.find();
    // console.log(bootcamp.count());

    // const bootcamp = await request(app).get("/api/v1/bootcamps");

    // console.log(bootcamp.body);

    const response = await request(app)
      .post("/api/v1/bootcamps")
      .send({
        name: "Devworks Bootcamp",
        description:
          "Devworks is a full stack JavaScript Bootcamp located in the heart of Boston that focuses on the technologies you need to get a high paying job as a web developer",
        website: "https://devworks.com",
        phone: "(111) 111-1111",
        email: "enroll@devworks.com",
        address: "Dumaguete, Negros Oriental",
        careers: ["Web Development", "UI/UX", "Business"],
        housing: true,
        jobAssistance: true,
        jobGuarantee: false,
        acceptGi: true
      });
    console.log(response.body);
    expect(response.statusCode).toBe(201);
    // done();
  });
});
