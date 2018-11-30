// ======================= Formulario de contacto =======================

var formulario = document.getElementById('formemail');
// var info = document.querySelector('#emailModal');

formulario.addEventListener('submit', function(e){
  e.preventDefault();
  // console.log('click en formulario');
  
  var datos = new FormData(formulario);

      fetch('/contact.php',{
        method: 'POST',
        body: datos
      })
        .then( res => res.json())
        .then( data => {
          console.log(data);
          if(data === '1'){
            // info.innerHTML = `<div class="col s12 center-align"><span>Datos enviados</span></div>`;
            alert('Message sent');
            setTimeout(function(){borrar()}, 3000);
            function borrar(){
              info.innerHTML = '';
              formulario.reset();
            }
          }else{
            if(data === '0'){
              // info.innerHTML = `<div class="col s12 center-align"><span>Datos no enviados</span></div>`;
              alert('Message not sent');
              setTimeout(function(){borrar()}, 3000);
              function borrar(){
                info.innerHTML = '';
              }
            }
          }         
        });
});
