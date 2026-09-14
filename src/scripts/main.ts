const inputField = document.getElementById('cmd-input');
inputField?.addEventListener('input', (event: Event) => {
    const target = event.target as HTMLInputElement;
    console.log(target.value);
});