function checkPasswordStrength() {
    const password = document.getElementById('passwordInput').value;
    const strengthIndicator = document.getElementById('strengthIndicator');

    
    strengthIndicator.textContent = '';

    if (password.length === 0) {
        strengthIndicator.textContent = 'Please enter a password';
        return;
    }

    let strength = 0;

    
    if (password.length >= 8) {
        strength += 1;
    }

    
    if (/\d/.test(password)) {
        strength += 1;
    }

    
    if (/[a-z]/.test(password)) {
        strength += 1;
    }

    
    if (/[A-Z]/.test(password)) {
        strength += 1;
    }

    
    if (/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) {
        strength += 1;
    }

    
    const strengthBars = document.createElement('div');
    strengthBars.innerHTML = `
        <span id="weak"></span>
        <span id="moderate"></span>
        <span id="strong"></span>
    `;
    strengthIndicator.appendChild(strengthBars);

    
    if (strength === 0) {
        document.getElementById('weak').style.width = '0%';
    } else if (strength === 1) {
        document.getElementById('weak').style.width = '33%';
    } else if (strength === 2) {
        document.getElementById('moderate').style.width = '66%';
    } else if (strength >= 3) {
        document.getElementById('strong').style.width = '100%';
    }
}

