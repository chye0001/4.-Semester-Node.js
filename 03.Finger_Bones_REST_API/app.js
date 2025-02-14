const express = require("express");

const app = express();

const fingerBones = [
  {
    id: 1,
    artistName: "Phalange Knowles",
  },
  {
    id: 2,
    artistName: "Distal Phalange",
  },
];

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



// Status codes
// 2XX - Success everything went well
// 4XX - Client error
// 5XX - Server error 



const PORT = 8080;
app.listen(PORT);
