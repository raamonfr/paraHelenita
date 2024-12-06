// Data inicial para o contador geral
const startDate = new Date("2024-09-21T00:00:00");

// Data inicial para o contador específico
const namoroStartDate = new Date("2024-11-06T00:00:00");

// Função que atualiza o contador
function updateCounter() {
  const now = new Date();
  
  // Contador geral a partir de 21 de setembro
  const elapsedTime = now - startDate;
  
  if (elapsedTime < 0) {
    document.getElementById("contadordetempo").innerText = "A data inicial ainda não chegou!";
  } else {
    // Cálculo do tempo decorrido
    const seconds = Math.floor(elapsedTime / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30); // Aproximação de meses
    const remainingDays = days % 30;
    const remainingHours = hours % 24;
    const remainingMinutes = minutes % 60;
    const remainingSeconds = seconds % 60;

    // Atualizar o HTML com o tempo decorrido desde 21 de setembro
    document.getElementById("contadordetempo").innerHTML = `
      <p>${months} meses, ${remainingDays} dias, ${remainingHours} horas, ${remainingMinutes} minutos e ${remainingSeconds} segundos</p>
    `;
  }

  // Contador a partir de 6 de novembro
  const namoroElapsedTime = now - namoroStartDate;

  if (namoroElapsedTime < 0) {
    document.getElementById("tempodenamoro").innerText = "A data do namoro ainda não chegou!";
  } else {
    // Cálculo do tempo decorrido
    const namoroSeconds = Math.floor(namoroElapsedTime / 1000);
    const namoroMinutes = Math.floor(namoroSeconds / 60);
    const namoroHours = Math.floor(namoroMinutes / 60);
    const namoroDays = Math.floor(namoroHours / 24);
    const namoroMonths = Math.floor(namoroDays / 30); // Aproximação de meses
    const namoroRemainingDays = namoroDays % 30;
    const namoroRemainingHours = namoroHours % 24;
    const namoroRemainingMinutes = namoroMinutes % 60;
    const namoroRemainingSeconds = namoroSeconds % 60;

    // Atualizar o HTML com o tempo decorrido desde 6 de novembro
    document.getElementById("tempodenamoro").innerHTML = `
      <p>${namoroMonths} mes, ${namoroRemainingDays} dias, ${namoroRemainingHours} horas, ${namoroRemainingMinutes} minutos e ${namoroRemainingSeconds} segundos</p>
    `;
  }
}

// Atualização contínua a cada segundo
setInterval(updateCounter, 1000);

// Chamada inicial
updateCounter();

