function fetchNationality () {
  fetch(
  "https://api.nationalize.io?name="
  +document.getElementById("fname").value)
  .then((response) => {
    if (!response.ok) {
      alert("No data found.");
      throw new Error("No data found.");
    }
  return response.json();
  })
  .then((data) => display(data));
}

function display(data) {
  const name = data.name;
  var country = (data.country).map(item => item.country_id);
  var probability = (data.country).map(item => Math.round((item.probability * 100)));
  
  document.querySelector(".name").innerText = "Name: " + name;
  document.querySelector(".nationality").innerHTML = "Nationality: " + country;
  document.querySelector(".probability").innerHTML = "Probability: " + probability;
}

fetchNationality();
