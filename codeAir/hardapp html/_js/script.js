let unlocked = false;

function checkAndUnlock() {
  const codeInput = document.getElementById('unlockCode').value;
  // Substitua 'seucodigo' pelo código que deseja usar para desbloquear
  if (codeInput === '512783') {
    unlocked = true;
    enableCalculator();
  } else {
    alert('Código incorreto. Tente novamente.');
  }
}

function enableCalculator() {
  document.getElementById('calculator').classList.add('unlocked');
  document.getElementById('force').removeAttribute('disabled');
  document.getElementById('area').removeAttribute('disabled');
  document.getElementById('calculate-button').removeAttribute('disabled');
}

function calculatePressure() {
  var force = document.getElementById('force').value;
  var area = document.getElementById('area').value;

  if (force && area) {
    var pressure = force / area;
    document.getElementById('result').innerHTML = "Pressão calculada: " + pressure.toFixed(2) + " N/m²";
  } else {
    alert('Insira valores válidos para Força e Área.');
  }
}

