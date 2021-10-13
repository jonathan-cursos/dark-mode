const btnSwitch = document.querySelector('#switch')

//Comprobacion del modo inicial
if (localStorage.getItem('dark-mode') === 'true') {
  document.body.classList.add('dark')
  btnSwitch.classList.add('active')
} else {
  document.body.classList.remove('remove')
  btnSwitch.classList.remove('active')
}

btnSwitch.addEventListener('click', () => {
  document.body.classList.toggle('dark') //para reconocer sí el body tiene esta clase
  btnSwitch.classList.toggle('active')

  //Guardamos modo en localStorage

  if (document.body.classList.contains('dark')) {
    localStorage.setItem('dark-mode', 'true') //localStorage solo almacena texto
  } else {
    localStorage.setItem('dark-mode', 'false')
  }
})
