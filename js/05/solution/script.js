function onSubmit() {
  // Vorweg: nicht die schönste oder effektivste Variante
  // aber man kann recht gut erkennen was passiert

  let name = document.getElementsByName('name')[0].value;
  let password = document.getElementsByName('password')[0].value;
  let age = document.getElementsByName('age')[0].value;
  let city = document.getElementsByName('city')[0].value;
  let gender = document.querySelector('input[name="gender"]:checked').value;
  console.log('Name:', name);
  console.log('Password:', password);
  console.log('Age:', age);
  console.log('City:', city);
  console.log('Gender:', gender);
}