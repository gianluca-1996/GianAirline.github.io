$('.input-cart-number').on('keyup change', function(){
    $t = $(this);
    
    if ($t.val().length > 3) {
      $t.next().focus();
    }
    
    var card_number = '';
    $('.input-cart-number').each(function(){
      card_number += $(this).val() + ' ';
    })
    
    $('.credit-card-box .number').html(card_number);
  });
  
  $('#card-holder').on('keyup change', function(){
    $t = $(this);
    $('.credit-card-box .card-holder div').html($t.val());
  });
  
  $('#card-holder').on('keyup change', function(){
    $t = $(this);
    $('.credit-card-box .card-holder div').html($t.val());
  });
  
  $('#card-expiration-month, #card-expiration-year').change(function(){
    m = $('#card-expiration-month option').index($('#card-expiration-month option:selected'));
    m = (m < 10) ? '0' + m : m;
    y = $('#card-expiration-year').val().substr(2,2);
    $('.card-expiration-date div').html(m + '/' + y);
  })
  
  $('#card-ccv').on('focus', function(){
    $('.credit-card-box').addClass('hover');
  }).on('blur', function(){
    $('.credit-card-box').removeClass('hover');
  }).on('keyup change', function(){
    $('.ccv div').html($(this).val());
  });
  
  
  /*--------------------
  CodePen Tile Preview
  --------------------*/
  setTimeout(function(){
    $('#card-ccv').focus().delay(1000).queue(function(){
      $(this).blur().dequeue();
    });
  }, 500);

//AGREGA EVENTO AL FORMULARIO DE PAGO  
const forms = document.querySelectorAll('.needs-validation')
Array.from(forms).forEach(form => {
  form.addEventListener('submit', event => {
    if (!form.checkValidity()) {
      event.preventDefault()
      event.stopPropagation()
    }

    if(form.checkValidity()){
      event.preventDefault()
      Swal.fire({
        title: 'Finalizando...',
        timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading()
        }
      }).then(() => {
        let btnConfirmar = document.querySelector('.btn')
        btnConfirmar.disabled = true
        
        Swal.fire({
          title: 'Reserva Confirmada!'  ,
          icon: 'success',
          showConfirmButton: 'true',
          confirmButtonText: 'Cerrar',
          text: 'En tu casilla de email recibirás toda la información sobre tu reserva'
        }).then((result) => {
          if(result.isConfirmed){
            localStorage.clear()
            window.close()
          }
        })
      })
    }
    form.classList.add('was-validated')
  }, false)
})