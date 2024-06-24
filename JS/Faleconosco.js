function enviarEmail(event) {
    event.preventDefault(); // Impede o envio do formulário padrão
    
    // Coleta os dados do formulário
    var nome = document.getElementById('inputNome').value;
    var email = document.getElementById('inputEmail').value;
    var telefone = document.getElementById('inputTel').value;
    var mensagem = document.getElementById('inputTxt').value;

    // Parâmetros para enviar ao serviço de email
    var params = {
        nome: nome,
        email: email,
        telefone: telefone,
        mensagem: mensagem
    };

    // Envio do email usando o serviço EmailJS
    emailjs.send('snzv41d', '95wxc67', params)
        .then(function(response) {
            console.log('Email enviado com sucesso!', response);
            alert('Formulário enviado com sucesso!');
            // Limpa os campos do formulário após o envio
            document.getElementById('Formulario').reset();
        }, function(error) {
            console.error('Erro ao enviar o email:', error);
            alert('Ocorreu um erro ao enviar o formulário. Por favor, tente novamente.');
        });
}
