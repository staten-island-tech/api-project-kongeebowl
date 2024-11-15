import "../css/style.css";
async function getData() {
  try {
    const response = await fetch(
      "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/all"
    );
    if (response.status != 200) {
      throw new Error(response);
    } else {
      const data = await response.json();
      document.querySelector("h1").textContent = data.data.name;
    }
  } catch (error) {
    console.log(error);
    console.log("Sorry could not find that pocket monster");
  }
}

getData();
