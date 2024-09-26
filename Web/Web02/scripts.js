
const swiper = new Swiper('.swiper-container', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  loop: true,
});

AOS.init({
  duration: 1200,
});


async function carregarServicos() {
  try {
    const response = await fetch('https://run.mocky.io/v3/65a04cf3-c1dc-4637-a5c8-436636c53480'); // URL da sua mock API
    if (!response.ok) {
      throw new Error('Erro na rede ao carregar os serviços');
    }
    
    const data = await response.json();
    console.log(data); 
    
    const serviceList = document.getElementById('service-list');
    serviceList.innerHTML = ''; 

    data.forEach(servico => {
      const serviceCard = document.createElement('div');
      serviceCard.classList.add('card');

      let icon;
      switch (servico.name) {
        case "Desenvolvimento Web":
          icon = "fas fa-code";
          break;
        case "Consultoria em TI":
          icon = "fas fa-laptop";
          break;
        case "Desenvolvimento de Aplicativos Móveis":
          icon = "fas fa-mobile-alt";
          break;
        case "Segurança da Informação":
          icon = "fas fa-shield-alt";
          break;
        case "Integração de Sistemas":
          icon = "fas fa-plug";
          break;
        default:
          icon = "fas fa-cogs";
          break;
      }

      serviceCard.innerHTML = `<i class="${icon}"></i><h3>${servico.name}</h3><p>${servico.description}</p>`;
      serviceList.appendChild(serviceCard);
    });
  } catch (error) {
    console.error('Erro ao carregar serviços:', error);
  }
}

carregarServicos();

//  EmailJS para o envio de emails
(function(){
  emailjs.init('');
})();

document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  emailjs.send('', {
    from_name: name,
    email_id: email,
    message: message,
  }).then(function(response) {
    alert('Mensagem enviada com sucesso!');
  }, function(error) {
    alert('Erro ao enviar a mensagem.');
  });
});
