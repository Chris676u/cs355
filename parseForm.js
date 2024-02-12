    // Extract parameters from URL
    const urlParams = new URLSearchParams(window.location.search);
    const input1Value = urlParams.get('input1');
    const input2Value = urlParams.get('input2');
  
    // Display values on Page 2
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = `<p>Input 1: ${input1Value}</p><p>Input 2: ${input2Value}</p>`;