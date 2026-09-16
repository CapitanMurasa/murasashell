import { commands } from './commands';

const inputField = document.getElementById('cmd-input') as HTMLInputElement;
const output = document.getElementById('output') as HTMLDivElement;
const typer = document.getElementById('typer') as HTMLSpanElement;
const inputLine = document.getElementById('input-line') as HTMLDivElement;
var program = 'bash';


document.addEventListener('click', () => {
    if (program === 'bash'){
      inputField?.focus();
    }
});

document.addEventListener('keydown', (event: KeyboardEvent) => {
    if (event.ctrlKey || event.altKey) return;
    if (program === 'bash'){
        inputField?.focus();
    }
    if (program === 'man') {
        if (event.key.toLowerCase() === 'q') {
            event.preventDefault(); 
            
            program = 'bash';
            output.innerHTML = ''; 
            
            if (inputField) inputField.value = '';
            if (typer) typer.textContent = '';
            

            inputLine.style.display = 'flex'; 
   
            inputField?.focus();
        }
        return; 
    }
});

inputField?.addEventListener('keydown', (event: KeyboardEvent) => {
  const target = event.target as HTMLInputElement;

  if (program === 'bash'){
    if (event.key === 'Enter') {
      event.preventDefault(); 
    
      const rawInput = target.value.trim();
      
      if (!rawInput) return;

      const userLine = document.createElement('div');
      userLine.className = 'line';
      userLine.innerHTML = `guest> ${rawInput}`;
      output.appendChild(userLine);

      const commandParts = rawInput.split(/\s+/); 
      const cmd = commandParts[0].toLowerCase();
      const args = commandParts.slice(1); 

      if (cmd === 'clear') {
          output.innerHTML = ''; 
      } 
      else if (cmd === 'man'){
        program = 'man';
        output.innerHTML = '...your man page content... <br><br> (Press "q" to quit)';
        target.value = '';
        if (typer) typer.textContent = '';

        inputLine.style.display = 'none';
      }
      else {
          const responseLine = document.createElement('div');
          responseLine.className = 'line';

          if (commands[cmd]) {
              responseLine.innerHTML = commands[cmd](args);
          } else {
              responseLine.textContent = `bash: ${cmd}: command not found`;
          }
          output.appendChild(responseLine);
      }


      target.value = '';
      if (typer) typer.textContent = '';
      window.scrollTo(0, document.body.scrollHeight);
    }
  }
});