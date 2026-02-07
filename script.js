document.addEventListener('DOMContentLoaded', function() {
    
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    const page1 = document.getElementById('page1');
    const page2 = document.getElementById('page2');
    
    let noClickCount = 0;
    
    // Yes button click handler
    yesBtn.addEventListener('click', function() {
        // Hide first page and show second page
        page1.classList.add('hidden');
        page2.classList.remove('hidden');
    });
    
    // No button click handler
    noBtn.addEventListener('click', function() {
        noClickCount++;
        
        // Get current yes button size
        const currentPadding = parseFloat(window.getComputedStyle(yesBtn).paddingTop);
        const currentFontSize = parseFloat(window.getComputedStyle(yesBtn).fontSize);
        
        // Increase yes button size
        const newPadding = currentPadding * 1.2;
        const newFontSize = currentFontSize * 1.15;
        
        yesBtn.style.padding = `${newPadding}px ${newPadding * 2}px`;
        yesBtn.style.fontSize = `${newFontSize}px`;
        
        // Optional: Make no button smaller
        const noCurrentPadding = parseFloat(window.getComputedStyle(noBtn).paddingTop);
        const noCurrentFontSize = parseFloat(window.getComputedStyle(noBtn).fontSize);
        
        if (noClickCount < 5) {
            noBtn.style.padding = `${noCurrentPadding * 0.9}px ${noCurrentPadding * 1.5 * 0.9}px`;
            noBtn.style.fontSize = `${noCurrentFontSize * 0.95}px`;
        }
        
         Optional: Change question text after certain clicks
         if (noClickCount === 3) {
             document.getElementById('question').textContent = 'Are you sure?';
         }
        
         Optional: Hide no button after many clicks
         if (noClickCount >= 5) {
             noBtn.style.display = 'none';
         }
    });
    
});
