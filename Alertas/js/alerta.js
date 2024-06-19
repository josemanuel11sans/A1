Swal.fire({
    title: 'Agregar división académica',
    html: `
      <label for="swal-input1">Nombre de la división:</label>
      <input type="text" id="swal-input1" class="swal2-input" placeholder="First Name" style="background-color: #fff;"><br><br>
      <label for="swal-input2">Coordinador de la división académica:</label>
      <input type="text" id="swal-input2" class="swal2-input" placeholder="Pepe pica papas" >
    `,

    // style="background-color: #fff;"
    focusConfirm: false,
    preConfirm: () => {
      const firstName = document.getElementById('swal-input1').value;
      const lastName = document.getElementById('swal-input2').value;
      if (!firstName || !lastName) {
        Swal.showValidationMessage('Please enter both first name and last name');
      }
      return { firstName: firstName, lastName: lastName };
    },
    confirmButtonText: 'Submit',
    showCancelButton: true,
    cancelButtonText: 'Cancel',
    background: '#107863',
    customClass: {
      confirmButton: 'swal2-confirm',
      cancelButton: 'swal2-cancel'
    }
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(`Hello, ${result.value.firstName} ${result.value.lastName}!`);
    }
  });