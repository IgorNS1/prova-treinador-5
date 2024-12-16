const startGameButton = document.querySelector('.start-game')
const title = document.querySelector('h1')
const questionContainer = document.querySelector('.question-container')
const questionText = document.querySelector('.question')
const answersContainer = document.querySelector('.answers-container')
const nextQuestionButton = document.querySelector('.next-question')

startGameButton.addEventListener('click', startGame)
nextQuestionButton.addEventListener('click', displayNextQuestion)

let currentQuestionIndex = 0 // contador das questões
let totalCorrect = 0

function startGame() {
    startGameButton.classList.add('hide')
    questionContainer.classList.remove('hide')
    title.classList.add('hide')
    displayNextQuestion()
}

function displayNextQuestion() {
    resetState()

    if (questions_page_5.length === currentQuestionIndex) {
        return finishGame()
    }

    questionText.textContent = questions_page_5[currentQuestionIndex].question
    questions_page_5[currentQuestionIndex].answer.forEach(answer => {
        const newAnswer = document.createElement('button')

        newAnswer.classList.add('button', 'answer')
        newAnswer.textContent = answer.text

        if (answer.correct) {
            newAnswer.dataset.correct = answer.correct
        }

        answersContainer.appendChild(newAnswer)

        newAnswer.addEventListener('click', selectAnswer)
    })
}

function resetState() {
    while (answersContainer.firstChild) {
        answersContainer.removeChild(answersContainer.firstChild)
    }

    document.body.removeAttribute('class')
    nextQuestionButton.classList.add('hide')
}

function selectAnswer(event) {
    const answerClicked = event.target

    if (answerClicked.dataset.correct) {
        document.body.classList.add('correct')
        document.body.classList.remove('incorrect')
        totalCorrect++
    } else {
        document.body.classList.add('incorrect')
        document.body.classList.remove('correct')
    }

    document.querySelectorAll('.answer').forEach(button => {
        if (button.dataset.correct) {
            button.classList.add('correct')
        } else {
            button.classList.add('incorrect')
        }
        button.disabled = true
    })

    nextQuestionButton.classList.remove('hide')
    currentQuestionIndex++
}

function finishGame() {
    const totalQuestion = questions_page_5.length
    const performance = Math.floor(totalCorrect * 100 / totalQuestion)

    let message = ''

    switch (true) {
        case (performance >= 90):
            message = 'Execelente :D'
            break
        case (performance >= 70):
            message = 'Muito Bom :)'
            break
        case (performance >= 50):
            message = 'Bom :|'
            break
        case (performance >= 30):
            message = 'Precisa Melhorar :('
            break
        default:
            message = 'Precisa Melhorar MUITO D:'
    }

    questionContainer.innerHTML =
        `
            <p class="final-message">
                Você acertou ${totalCorrect} de ${totalQuestion} questôes!
                <span>Resultado: ${message}</span>
            </p>
        
            <button onclick="window.location.reload()" class="button">Refazer teste</button>

        `
}

const questions_page_5 = [
    {
        question: 'Estamos comprometidos em fornecer informações públicas e honestas sobre nossos ingredientes para que o nosso cliente possa fazer escolhas de forma consciente.',
        answer: [
            { text: 'VERDADERO', correct: true },
            { text: 'FALSO', correct: false },
        ]
    },
    {
        question: 'Não é um passo operacional da pessoa da bebidas balcão:',
        answer: [
            { text: 'Preparar a bebida de acordo com o pedido', correct: false },
            { text: 'Cumprir os padrões de higiene', correct: false },
            { text: 'Verificar a exatidão do pedido', correct: false },
            { text: 'Colocar a bebida na bandeja do cliente', correct: true },
        ]
    },
    {
        question: 'O ambiente também é responsável pela primeira impressão. Quais desses itens formam um ambiente agradável?',
        answer: [
            { text: 'Temperatura baixa e som ambiente, sem foco na organização.', correct: false },
            { text: 'Som alto, iluminação forte e decoração neutra.', correct: false },
            { text: 'Decoração chamativa, mas pouca iluminação.', correct: false },
            { text: 'Limpeza, organização, decoração, temperatura, iluminação e som.', correct: true },
        ]
    },
    {
        question: 'O armazenamento inadequado do alimento pode gerar contaminação.',
        answer: [
            { text: 'NÃO SE APLICA', correct: false },
            { text: 'APENAS EM CASOS ESPECÍFICOS', correct: false },
            { text: 'VERDADERO', correct: true },
            { text: 'FALSO', correct: false },
        ]
    },
    {
        question: 'O que acontecerá se deixarmos os pães descobertos?',
        answer: [
            { text: 'O sabor será intensificado.', correct: false },
            { text: 'Eles ficarão muito secos, fora dos padrões de qualidade.', correct: true },
            { text: 'Nada, pois o pão é resistente.', correct: false },
            { text: 'Eles absorverão umidade e ficarão melhores.', correct: false },
        ]
    },
    {
        question: 'O que Candice espera ao usar o Drive-thru?',
        answer: [
            { text: 'Conveniência e a certeza do sabor e a qualidade dos produtos.', correct: true },
            { text: 'Interação direta com atendentes.', correct: false },
            { text: 'Longos tempos de espera para qualidade garantida.', correct: false },
            { text: 'Preços baixos, sem compromissos.', correct: false },
        ]
    },
    {
        question: 'O que devemos fazer quando o cliente for fazer sua refeição no restaurante mas não quiser a entrega à mesa?',
        answer: [
            { text: 'Peça ao cliente que aguarde na entrada.', correct: false },
            { text: 'Ignore o pedido de não entregar à mesa.', correct: false },
            { text: 'Direcione o cliente para a área de entrega e indique o Painel de pedidos prontos. Explique que, quando o pedido estiver pronto, o número correspondente será apresentado no monitor e um atendente entregará o respectivo pedido.', correct: true },
            { text: 'Ofereça uma mesa mesmo assim.', correct: false },
        ]
    },
    {
        question: 'O que devemos fazer se a área de atendimento estiver muito movimentada?',
        answer: [
            { text: 'Preste atenção nas outras pessoas à medida que se desloca e seja claro na sua comunicação.', correct: true },
            { text: 'Concentre-se apenas no cliente atual.', correct: false },
            { text: 'Evite interagir com outros clientes para reduzir o stress.', correct: false },
            { text: 'Acelere suas atividades sem se preocupar com a segurança.', correct: false },
        ]
    },
    {
        question: 'O que devemos ficar atentos quando a cozinha estiver bem movimentada?',
        answer: [
            { text: 'Esperar o movimento diminuir para agir.', correct: false },
            { text: 'Ignorar a movimentação e focar no seu trabalho.', correct: false },
            { text: 'Acelerar sem considerar a segurança.', correct: false },
            { text: 'Preste atenção nas outras pessoas, seja claro na comunicação e fique atento aos níveis.', correct: true },
        ]
    },
    {
        question: 'O que deve-se fazer se a pessoa da entrega receber instruções que o pedido deve ir para a área de Espera?',
        answer: [
            { text: 'Peça ao cliente que volte mais tarde.', correct: false },
            { text: 'Apresente todas as bebidas e sobremesas, coloque um prisma com número sobre o veículo, solicitando ao cliente de maneira respeitosa para estacionar no local indicado para a espera.', correct: true },
            { text: 'Ignore as instruções e entregue no local padrão.', correct: false },
            { text: 'Deixe o cliente estacionar onde preferir.', correct: false },
        ]
    },
    {
        question: 'O que é "Data de validade" de um produto?',
        answer: [
            { text: 'Data de fabricação.', correct: false },
            { text: 'Data para revisão.', correct: false },
            { text: 'Data sugerida para armazenagem.', correct: false },
            { text: 'Data limite para consumo de um alimento ou bebida.', correct: true },
        ]
    },
    {
        question: 'O que é Economia Circular?',
        answer: [
            { text: 'É um sistema que prioriza produtos não recicláveis.', correct: false },
            { text: 'É um modelo de negócios tradicional.', correct: false },
            { text: 'É um conceito que associa o desenvolvimento econômico a um melhor aproveitamento dos recursos naturais, priorizando insumos mais duráveis, recicláveis e renováveis.', correct: true },
            { text: 'É uma técnica de venda agressiva.', correct: false },
        ]
    },
    {
        question: 'O que é hospitalidade?',
        answer: [
            { text: 'Manter uma distância segura dos clientes.', correct: false },
            { text: 'Nossa oportunidade de criar momentos deliciosos e de bem-estar para os nossos clientes.', correct: true },
            { text: 'Tratar todos de forma neutra e objetiva.', correct: false },
            { text: 'Garantir que todos os clientes sejam rápidos.', correct: false },
        ]
    },
    {
        question: 'O que é o Sistema de Nível de Produção (PLS)?',
        answer: [
            { text: 'Uma regra de vendas para a equipe.', correct: false },
            { text: 'Uma prática de marketing.', correct: false },
            { text: 'Uma técnica para melhorar a decoração.', correct: false },
            { text: 'Um guia para a operação da UHC e Fritura Final, que indica a quantidade de produto a ser preparada e armazenada.', correct: true },
        ]
    },
];
