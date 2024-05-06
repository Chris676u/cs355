const breedInput = document.getElementById('breedInput');
const breedList = document.getElementById('breedList');
const breedNotFound = document.getElementById('breedNotFound');
const imageContainer = document.getElementById('imageContainer');
let breedTimer;

async function handleInput(value) {
    clearTimeout(breedTimer);
    breedTimer = setTimeout(async () => {
        const breeds = await getBreeds(value);
        updateBreedList(breeds);
    }, 500);
}

async function getBreeds(prefix) {
    const response = await fetch(`https://dog.ceo/api/breeds/list/all`);
    const data = await response.json();

    const breedArray = Object.keys(data.message);
    return breedArray.filter(breed => breed.startsWith(prefix.toLowerCase()));
}

function updateBreedList(breeds) {
    breedList.innerHTML = "";
    breeds.forEach(breed => {
        const option = document.createElement('option');
        option.value = breed;
        breedList.appendChild(option);
    });
}

async function showImages() {
    const selectedBreed = breedInput.value.toLowerCase();
    const response = await fetch(`https://dog.ceo/api/breed/${selectedBreed}/images/random/5`);
    const data = await response.json();

    if (data.status === 'error') {
        breedNotFound.style.display = 'block';
        imageContainer.innerHTML = '';
    } else {
        breedNotFound.style.display = 'none';
        displayImages(data.message);
    }
}

function displayImages(images) {
    imageContainer.innerHTML = '';
    images.forEach(imageUrl => {
        const img = document.createElement('img');
        img.src = imageUrl;
        imageContainer.appendChild(img);
    });

    setInterval(() => showImages(), 5000);
}
