document.addEventListener('DOMContentLoaded', function () {
    // Paginación
    const careersPerPage = 5;
    let currentPage = 1;
    const careers = [
        { nombre: "ING. Desarrollo de software multiplataforma", division: "DATID" },
        { nombre: "ING. Infraestructura de Redes Digitales", division: "DATID" },
        { nombre: "ING. Diseño Digital", division: "DATID" },
        { nombre: "ING. Procesos Industriales", division: "DAMI" },
        { nombre: "ING. Nanotecnología", division: "DAMI" },
        { nombre: "ING. Mecatrónica", division: "DAMI" },
    ];

    function displayCareers(page) {
        const tableBody = document.querySelector("table tbody");
        tableBody.innerHTML = "";

        const start = (page - 1) * careersPerPage;
        const end = start + careersPerPage;
        const paginatedCareers = careers.slice(start, end);

        paginatedCareers.forEach(career => {
            const row = tableBody.insertRow();
            row.insertCell(0).textContent = career.nombre;
            row.insertCell(1).textContent = career.division;

            const editCell = row.insertCell(2);
            const editButton = document.createElement("button");
            editButton.textContent = "Editar";
            editButton.className = "edit-btn";
            editButton.addEventListener("click", () => {
                alert(`Editar ${career.nombre}`);
            });
            editCell.appendChild(editButton);
        });

        updatePagination();
    }

    function updatePagination() {
        const paginationDiv = document.getElementById("pagination");
        paginationDiv.innerHTML = "";

        const totalPages = Math.ceil(careers.length / careersPerPage);

        for (let i = 1; i <= totalPages; i++) {
            const button = document.createElement("button");
            button.textContent = i;
            button.addEventListener("click", () => {
                currentPage = i;
                displayCareers(currentPage);
            });

            if (i === currentPage) {
                button.classList.add("active");
            }

            paginationDiv.appendChild(button);
        }
    }

    displayCareers(currentPage);
});
