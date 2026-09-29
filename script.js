const counterInput = document.getElementById('counter-input');
const btnSave = document.getElementById('btn-save');
const btnReset = document.getElementById('btn-reset');

const savedValue = localStorage.getItem('notion_counter_value');
if (savedValue !== null) {
    counterInput.value = savedValue;
}

btnSave.addEventListener('click', () => {
    localStorage.setItem('notion_counter_value', counterInput.value);
    alert('Valor salvo com sucesso!');
});

btnReset.addEventListener('click', () => {
    if (confirm('Deseja zerar o contador?')) {
        counterInput.value = 0;
        localStorage.setItem('notion_counter_value', 0);
    }
});