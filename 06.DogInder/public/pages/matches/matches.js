console.log("hello from matches")
let dogs = [];

const dogMatchesName = document.getElementById("dog-matches-name");
const dogMatchesBio = document.getElementById("dog-matches-bio");
const dogMatchesCity = document.getElementById("dog-matches-city");
const dogMatchesStreetAddress = document.getElementById("dog-matches-street-address");

const dogMatchesImageContainer = document.getElementById("dog-matches-image-container")


async function getMatches() {
    const response = await fetch("/api/v1/matches");
    const result = await response.json()

    console.log(result);
}

function getMatches() {
    fetch("/api/v1/matches")
    .then((response) => response.json())
    .then((result) => {
        dogs = result.data
        createMatchProfile(dogs.pop());
    })
}

getMatches();

function createMatchProfile(dog) {
    dogMatchesName.textContent = dog.name;
    dogMatchesBio.textContent = dog.bio;
    dogMatchesCity.textContent = dog.city;
    dogMatchesStreetAddress.textContent = dog.streetAddress;

    const imageTag = document.createElement("img");
    imageTag.id = "dog-matches-image";
    imageTag.src = dog.image;
    imageTag.alt = "dog match";

    dogMatchesImageContainer.innerHTML = "";
    dogMatchesImageContainer.appendChild(imageTag);

    setupHammerPanEvents(imageTag);
}



function setupHammerPanEvents(dogImageTag) {
    const hammertime = new Hammer(dogImageTag);

    hammertime.on('pan', (event) => {
        // Calculate the new position based on the pan movement
        const deltaX = event.deltaX;

        // Apply the transformation to the image
        dogImageTag.style.transform = `translateX(${deltaX}px)`;
    });

    hammertime.on('panend', (event) => {
        if (event.deltaX > 0) {
            console.log("Ended dragging to the right");
            // todo: Handle end of right drag here
        } else {
            console.log("Ended dragging to the left");
            // todo: Handle end of left drag here
        }
        if (dogs.length > 0) {
            createMatchProfile(dogs.pop());
        } else {
            getMatches();
        }
    });
}
