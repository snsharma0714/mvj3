document.addEventListener('DOMContentLoaded', () => {
    const loginTab = document.getElementById('loginTab');
    const signupTab = document.getElementById('signupTab');
    const slider = document.querySelector('.slider');
    const form = document.getElementById('loginForm');

    loginTab.addEventListener('click', () => {
        slider.style.left = '0';
        loginTab.classList.add('active');
        signupTab.classList.remove('active');
    });

    signupTab.addEventListener('click', () => {
        slider.style.left = '50%';
        signupTab.classList.add('active');
        loginTab.classList.remove('active');
    });


    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const inputs = form.querySelectorAll('input');
        const formData = {};
        
        inputs.forEach(input => {
            formData[input.type] = input.value;
        });
        
        console.log('Form submitted:', formData);
        
    });


    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', () => {
            if (!input.value) {
                input.parentElement.classList.remove('focused');
            }
        });
    });
});
