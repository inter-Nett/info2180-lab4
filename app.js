document.addEventListener("DOMContentLoaded", function () {

    const searchButton = document.getElementById("search-btn");
    const searchInput = document.getElementById("search");
    const resultDiv = document.getElementById("result");

    searchButton.addEventListener("click", function () {

        const query = searchInput.value.trim();

        fetch("superheroes.php?query=" + encodeURIComponent(query))
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }

                return response.text();
            })
            .then(data => {
                resultDiv.innerHTML = data;
            })
            .catch(error => {
                console.error("Error:", error);
                resultDiv.textContent = "An error occurred while searching.";
            });

    });

});