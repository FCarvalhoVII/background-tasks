<h1 align="center">Server base para execução de tarefas em segundo plano</h1>

### Descrição
Server construído em NodeJS com *express* para envio de emails e fila de tarefas, a biblioteca escolhida para gerir as tarefas foi <a href="https://github.com/OptimalBits/bull">*Bull*</a>, o monitoramento das tarefas é feito por meio do *bull-board*. Foi usado também o *dotenv* para o uso de variáveis ambiente, *nodemailer* para envios de email por meio do servidor Node e o *sucrase* para o uso do padrão **ES6**.

<br />

Utilize o comando ```npm run dev``` para iniciar a aplicação.