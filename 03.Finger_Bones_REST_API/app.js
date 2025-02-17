const express = require("express");
const app = express();
app.use(express.json());

let fingerBones = [
  {
    id: 1,
    artistName: "Phalange Knowles",
  },
  {
    id: 2,
    artistName: "Distal Phalange",
  },
];

let id = 2;

// route / get handler
app.get("/fingerbones", (req, res) => {
  res.send({ data: fingerBones });
});

app.get("/fingerbones/:id", (req, res) => {
  const id = Number(req.params.id);
  const selectedFingerBone = fingerBones.find(
    (fingerBone) => fingerBone.id === id
  );

  if (!selectedFingerBone) {
    res.status(404).send({ error: `No finger bones found with id: ${id}` });
  } else {
    res.send({ data: selectedFingerBone });
  }
});

app.post("/fingerbones", (req, res) => {
  const postReq = req.body;

  const newFingerbone = {
    id: ++id,
    artistName: postReq.artistName,
  };

  fingerBones.push(newFingerbone);
  res.send({ data: newFingerbone });
});

app.put("/fingerbones/:id", (req, res) => {
  const putReq = req.body;

  const id = Number(req.params.id);

  const doesExist = doesIdExist(id);
  if (!doesExist) {
    res.status(400).send({ error: `ID: ${id} does not exist` });
    return;
  }

  const updatedFingerBone = {
    id: id,
    artistName: putReq.artistName,
  };

  fingerBones = fingerBones.filter((fingerBone) => fingerBone.id !== id);
  fingerBones.push(updatedFingerBone);
  res.send({ data: updatedFingerBone });
});

app.delete("/fingerbones/:id", (req, res) => {
  const id = Number(req.params.id);

  const doesExist = doesIdExist(id);
  if (!doesExist) {
    res.status(400).send({ error: `ID: ${id} does not exist` });
    return;
  }

  fingerBones = fingerBones.filter((fingerbone) => fingerbone.id !== id);
  res.send({ success: `Fingerbone with ID: ${id} was removed` });
});

//validation functions

// function validateRequest(req, res) {
//   const reqBody = req.body;
//   const invalidFields = validateFields(reqBody, res);
//   if (invalidFields) {
//     return true;
//   }

//   const id = Number(reqBody.id);
//   const invalidIdType = validateIdIsNumber(id, res);
//   if (invalidIdType) {
//     return true;
//   }

//   const invalidIdSize = validateIdLargerThanZero(id, res);
//   if (invalidIdSize) {
//     return true;
//   }

//   const invalidId = doesIdExist(id, res);
//   if (invalidId) {
//     return true;
//   }

//   return false;
// }

// function validateFields(reqBody, res) {
//   if (reqBody.id === undefined || reqBody.artistName === undefined) {
//     res.status(400).send({
//       error: `The post request most contain the following fields: id and artistName`,
//     });
//     return true;
//   }
// }

// function validateIdIsNumber(id, res) {
//   if (isNaN(id)) {
//     res.status(400).send({ error: `ID most be a number` });
//     return true;
//   }
// }

// function validateIdLargerThanZero(id, res) {
//   if (id <= 0) {
//     res.status(400).send({ error: `ID most be larger than 0` });
//     return true;
//   }
// }

function doesIdExist(id) {
  const isFoundId = fingerBones.some((fingerbone) => fingerbone.id === id);
  if (isFoundId) {
    return true;
  }

  return false;
}

// Status codes
// 2XX - Success everything went well
// 4XX - Client error
// 5XX - Server error

const PORT = 8080;
app.listen(PORT);
