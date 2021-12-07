const btnDisplay = document.querySelector('#showHideButton');
const formStudent = document.querySelector('form')

btnDisplay.addEventListener('click', function () {
    if (formStudent.style.display == 'none') {              //create button
        formStudent.style.display = 'block';
        btnDisplay.textContent = 'Hide From Add Student';
    } else {
        formStudent.style.display = 'none';
        btnDisplay.textContent = 'Show From Add Student';
    }
});

const btnAdd = document.querySelector('#submitButton')
btnAdd.addEventListener('click', function () {
    console.log('Button Click');
});

const facultyProdi = document.querySelector('#faculty');
facultyProdi.addEventListener('click', function () {
    console.log(faculty.value);

    let prodi = document.querySelector('#programStudy');
    if (faculty.value == 'Pascasarjana') {
        let prodiOption1 = document.createElement('option');
        let optionText1 = document.createTextNode('Magister Management');  //Create elemen for Magister  management
        prodiOption1.appendChild(optionText1);
        prodi.appendChild(prodiOption1);

        let prodiOption2 = document.createElement('option');
        let optionText2 = document.createTextNode('Magister Teologi');  //Create elemen for teologi
        prodiOption2.appendChild(optionText2);
        prodi.appendChild(prodiOption2);
    }

    else if (faculty.value == 'Fakultas Keguruan dan Ilmu Pendidikan') {
        let prodiOption1 = document.createElement('option');
        let optionText1 = document.createTextNode('Pendidikan Agama');
        prodiOption1.appendChild(optionText1);
        prodi.appendChild(prodiOption1);

        let prodiOption2 = document.createElement('option');
        let optionText2 = document.createTextNode('Pendidikan Bahasa Inggris');   //create elemen BING
        prodiOption2.appendChild(optionText2);
        prodi.appendChild(prodiOption2);

        let prodiOption3 = document.createElement('option');
        let optionText3 = document.createTextNode('Pendidikan Ekonomi');         //create elemen pendidikan Ekonomi
        prodiOption3.appendChild(optionText3);
        prodi.appendChild(prodiOption3);

        let prodiOption4 = document.createElement('option');
        let optionText4 = document.createTextNode('Pendidikan Luar Sekolah');    //create elemen pendidikan Luar sekolah
        prodi.appendChild(prodiOption4);
    }
    else if (faculty.value == 'Fakultas Ekonomi dan Bisnis') {
        let prodiOption1 = document.createElement('option');            //create element pendidikan Manajement
        let optionText1 = document.createTextNode('Manajement');
        prodiOption1.appendChild(optionText1);
        prodi.appendChild(prodiOption1);

        let prodiOption2 = document.createElement('option');           //create elemen pendidikanAkuntansi
        let optionText2 = document.createTextNode('Akuntansi');
        prodiOption2.appendChild(optionText2);
        prodi.appendChild(prodiOption2);
    }
    else if (faculty.value == 'Fakultas Pertanian') {
        let prodiOption1 = document.createElement('option');          //create element Agroteknolog
        let optionText1 = document.createTextNode('Agroteknologi');
        prodiOption1.appendChild(optionText1);
        prodi.appendChild(prodiOption1);
    }

    else if (faculty.value == 'Fakultas Ilmu Komputer') {               //create element TI
        let prodiOption1 = document.createElement('option');
        let optionText1 = document.createTextNode('Informatika');
        prodiOption1.appendChild(optionText1);
        prodi.appendChild(prodiOption1);

        let prodiOption2 = document.createElement('option');            //create elemen pendidikan SI
        let optionText2 = document.createTextNode('Sistem Informasi');
        prodiOption2.appendChild(optionText2);
        prodi.appendChild(prodiOption2);
    }

    else if (faculty.value == 'Fakultas Keperawatan') {
        //create element Nurse
        let prodiOption1 = document.createElement('option');
        let optionText1 = document.createTextNode('Profesi Nurse');
        prodiOption1.appendChild(optionText1);
        prodi.appendChild(prodiOption1);

        //create elemen FKIP
        let prodiOption2 = document.createElement('option');
        let optionText2 = document.createTextNode('Keperawatan');
        prodiOption2.appendChild(optionText2);
        prodi.appendChild(prodiOption2);
    }
    else if (faculty.value == 'Fakultas Filsafat') {
        let prodiOption1 = document.createElement('option');
        let optionText1 = document.createTextNode('Ilmu Filsafat');
        prodiOption1.appendChild(optionText1);
        prodi.appendChild(prodiOption1);
    }
    else if (faculty.value == 'Akademi Sekrtari Manajemen Indonesia Klabat') {
        let prodiOption1 = document.createElement('option');
        let optionText1 = document.createTextNode('Sekretari (D3)');
        prodiOption1.appendChild(optionText1);
        prodi.appendChild(prodiOption1);
    }
})

formStudent.addEventListener('submit', function (e) {
    e.preventDefault();
    let studentNim = document.querySelector('#student-nim');
    let studentName = document.querySelector('#student-name');
    let studentGender = document.getElementsByClassName('form-check-input');
    let resultGender;
    for (i = 0; i < 2; i++) {
        if (studentGender[0].checked) {
            resultGender = document.querySelector('#student-male');
        }
        else if (studentGender[1].checked) {
            resultGender = document.querySelector('#student-female');
        }
    }
    let faculty = document.querySelector('#faculty');
    let option = faculty.options[faculty.selectedIndex];
    let prodi = document.querySelector('#programStudy')
    let optionProdi = prodi.options[prodi.selectedIndex];

    let icon = document.querySelector('#icon');
    const tr = document.createElement('tr');
    tr.className = "displayData";

    //Create Table
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    const td3 = document.createElement('td');
    const td4 = document.createElement('td');
    const td5 = document.createElement('td');
    const td6 = document.createElement('td');


    const tdText1 = document.createTextNode(studentNim.value);
    const tdText2 = document.createTextNode(studentName.value);
    const tdText3 = document.createTextNode(resultGender.value);
    const tdText4 = document.createTextNode(option.value);
    const tdText5 = document.createTextNode(optionProdi.value);
    const tdText6 = document.createTextNode(icon.textContent);


    td1.appendChild(tdText1);
    td2.appendChild(tdText2);
    td3.appendChild(tdText3);
    td4.appendChild(tdText4);
    td5.appendChild(tdText5);
    td6.appendChild(tdText6);


    const table = document.querySelector('#table');
    table.appendChild(tr);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    tr.appendChild(td6);

});