const inputField = document.getElementById('cmd-input') as HTMLInputElement;
const output = document.getElementById('output') as HTMLDivElement;
const typer = document.getElementById('typer') as HTMLSpanElement;

inputField?.addEventListener('keydown', (event: KeyboardEvent) => {
  if (event.key === 'Enter') {
    event.preventDefault(); 
    
    const target = event.target as HTMLInputElement;
    const rawInput = target.value.trim();
    
    if (!rawInput) return; 

    const userLine = document.createElement('div');
    userLine.className = 'line';
    userLine.innerHTML = `guest> ${rawInput}`;
    output.appendChild(userLine);


    const commandParts = rawInput.split(/\s+/); 
    const cmd = commandParts[0].toLowerCase();
    
    const args = commandParts.slice(1); 


    const responseLine = document.createElement('div');
    responseLine.className = 'line';

    if (cmd === 'echo') {

      responseLine.textContent = args.join(" ");
      output.appendChild(responseLine);
    } 
    else if (cmd === 'clear') {
      output.innerHTML = '';
    }
    else {

      responseLine.textContent = `bash: ${cmd}: command not found`;
      output.appendChild(responseLine);
    }


    target.value = '';
    if (typer) typer.textContent = '';
    window.scrollTo(0, document.body.scrollHeight);
  }
});