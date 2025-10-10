const chekNumInputs = (selector) => {
    const chekInput = document.querySelectorAll(selector); 

    chekInput.forEach(item => {
        item.addEventListener('input', () => {
            item.value = item.value.replace(/\D/, '');
        });
    });
};

export default chekNumInputs;
