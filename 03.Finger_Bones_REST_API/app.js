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

let nextId = 2;

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

// postfix increment
// value++;

// prefix increment
// ++value;

app.post("/fingerbones", (req, res) => {
  const postReq = req.body;

  const newFingerbone = {
    id: nextId++,
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

app.patch("/fingerbones/:id", (req, res) => {
  const id = NUmber(req.params.id);
  const foundFingerboneIndex = fingerBones.findIndex( (fingerbone) => fingerbone.id === id );

  if (foundFingerboneIndex === -1) {
    res.status(404).send( {error: `Fingerbone with id: ${id} does not exist in the database`} );
    return;

  } else {
    const fingerboneToEdit = fingerBones[foundFingerboneIndex];
    const updatedFingerBone = { ...fingerboneToEdit, ...req.body, id: id}
    fingerBones[foundFingerboneIndex] = updatedFingerBone;

    res.send( {data: updatedFingerBone} )
  }

})


// Ineffective method
// loops the entire array regardles of found.
// app.delete("/fingerbones/:id", (req, res) => {
//   const id = Number(req.params.id);

//   const doesExist = doesIdExist(id);
//   if (!doesExist) {
//     res.status(400).send({ error: `ID: ${id} does not exist` });
//     return;
//   }

//   fingerBones = fingerBones.filter((fingerbone) => fingerbone.id !== id);
//   res.send({ success: `Fingerbone with ID: ${id} was removed` });
// });

// More effective delete method
// only loops until index is found.
app.delete("/fingerbones/:id", (req, res) => {
  const id = Number(req.params.id);

  const foundIndex = fingerBones.findIndex( (fingerbone) => fingerbone.id === id );
  if (foundIndex === -1) {
    res.status(404).send( {error: `Fingerbone with id: ${id} does not exist in the database`} )

  } else {
    fingerBones.splice(foundIndex);
    res.status(204).send();
  }
})




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
app.listen(PORT, (error) => {

  if(error) {
    console.log(`Error startung the server`, error);
    return;
  }

  console.log(`Server is running on port`, PORT)
});
