
function formatText(command) {
    document.execCommand(command, false, null);
  }
  
  
  function changeFont() {
    const font = document.getElementById('fontSelector').value;
    document.getElementById('noteArea').style.fontFamily = font;
  }
  
 
  function getRandomLightColor() {
    const r = Math.floor(Math.random() * 156) + 100;
    const g = Math.floor(Math.random() * 156) + 100;
    const b = Math.floor(Math.random() * 156) + 100;
    return `rgb(${r}, ${g}, ${b})`;
  }
  
  
  function downloadNote() {
    const noteArea = document.getElementById('noteArea');
    
 
    noteArea.style.backgroundColor = getRandomLightColor();
  
    
    html2canvas(noteArea, { scale: 4, useCORS: true }).then(canvas => {
      
      const ctx = canvas.getContext('2d');
      const now = new Date();
      ctx.font = "16px Arial";
      ctx.fillStyle = "#000";
      ctx.fillText(now.toLocaleString(), 10, canvas.height - 40);
  
      
      const link = document.createElement('a');
      link.href = canvas.toDataURL('image/png', 1.0);
      link.download = `note-${now.toISOString()}.png`;
      link.click();
  
      
      noteArea.style.backgroundColor = "";
    });
  }
  
  
  document.querySelector("#cls").addEventListener('click', function(){
    location.reload();
  })