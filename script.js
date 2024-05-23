function submitForm(event) {
    event.preventDefault();

    let firstname = document.getElementById("firstname").value;
    let lastname = document.getElementById("lastname").value;
    let Address = document.getElementById("Address").value;
    let Contact = document.getElementById("Contact").value;
    let DateOfBirth = document.getElementById("DateOfBirth").value;
    let Education = document.getElementById("Education").value;
    let Date = document.getElementById("Date").value;
    let Email = document.getElementById("Email").value;

    document.getElementById("firstname1").innerText = "Firstname: " + firstname;
    document.getElementById("lastname1").innerText = "Lastname: " + lastname;
    document.getElementById("Address1").innerText = "Address: " + Address;
    document.getElementById("Contact1").innerText = "Contact: " + "+92"+ Contact;
    document.getElementById("DateOfBirth1").innerText = "Date Of Birth: " + DateOfBirth;
    document.getElementById("Education1").innerText = "Education: " + Education;
    document.getElementById("Date1").innerText = "Date: " + Date;
    document.getElementById("Email1").innerText = "Email: " + Email;

    document.getElementById("formwindow").style.display = 'none';
    document.getElementById("infoWindow").style.display = 'block';
    
}


document.getElementById('Contact').addEventListener('input', function (e) {
    this.value = this.value.replace(/[^0-9]/g, '');
});
function myFunc(infoWindow) {
    var printdata = document.getElementById(infoWindow);
    var newwindow = window.open("");
    newwindow.document.write(printdata.outerHTML);
    newwindow.print();
    newwindow.close();
}
document.getElementById('Contact').addEventListener('input', function (e) {
    const value = e.target.value;
    if (value.length === 1 && value[0] === '0') {
        e.target.value = '';
    }
});