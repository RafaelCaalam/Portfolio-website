
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const sectionId = this.getAttribute('href');
        const targetElement = document.querySelector(sectionId);
        const headerHeight = document.querySelector('header').offsetHeight;
        const targetPosition = targetElement.offsetTop - headerHeight;

        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });

        document.querySelectorAll('nav ul li a').forEach(link => link.classList.remove('active'));
        this.classList.add('active');
    });
});

window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const headerHeight = document.querySelector('header').offsetHeight;

    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop - headerHeight;
        const sectionBottom = sectionTop + section.clientHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            const id = section.getAttribute('id');
            document.querySelectorAll('nav ul li a').forEach(link => link.classList.remove('active'));
            document.querySelector(`nav ul li a[href="#${id}"]`).classList.add('active');
        }
    });
});

function learnMore(sectionId) {
    const targetElement = document.querySelector(sectionId);
    const headerHeight = document.querySelector('header').offsetHeight;
    const targetPosition = targetElement.offsetTop - headerHeight;

    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
    });

    document.querySelectorAll('nav ul li a').forEach(link => link.classList.remove('active'));
    document.querySelector(`nav ul li a[href="${sectionId}"]`).classList.add('active');
}

function downloadCV() {
    var url = 'https://rafaelcaalam.github.io/online-resume/';
    var win = window.open(url, '_blank');
    win.focus();
}

function goToLink() {
    var url = "https://github.com/RafaelCaalam";
    var win = window.open(url, '_blank');
    win.focus();
}

function sendEmail() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    const subject = encodeURIComponent("Contact from Portfolio Website");
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    
    window.location.href = `mailto:caalamrafael52@gmail.com?subject=${subject}&body=${body}`;
}

function sendMessage() {
    const message = encodeURIComponent("Hello Rafael, I would like to connect with you.");
    window.location.href = `https://www.messenger.com/t/USERNAME?message=${message}`;
}

document.getElementById('sendEmailButton').addEventListener('click', sendEmail);
document.getElementById('sendMessageButton').addEventListener('click', sendMessage);

document.addEventListener('DOMContentLoaded', function() {
    const headerHeight = document.querySelector('header').offsetHeight;
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        });
    });
});
document.getElementById('sendEmailButton').addEventListener('click', function() {
    window.open('mailto:caalamrafael52@gmail.com', '_blank');
});

function goToMessenger() {
    var url = "https://www.messenger.com";
    var win = window.open(url, '_blank');
    win.focus();
}


