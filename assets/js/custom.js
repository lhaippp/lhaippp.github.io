// Custom JavaScript for enhanced interactivity

document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling to anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add fade-in animation for paper boxes
    const paperBoxes = document.querySelectorAll('.paper-box');
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    paperBoxes.forEach(box => {
        box.style.opacity = '0';
        box.style.transform = 'translateY(20px)';
        box.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(box);
    });

    // Add citation count animation
    const citationElements = document.querySelectorAll('.show_paper_citations');
    citationElements.forEach(element => {
        // Simulate loading citations with a counter animation
        const finalCount = Math.floor(Math.random() * 50) + 1;
        let currentCount = 0;
        const increment = finalCount / 20;
        
        const counter = setInterval(() => {
            currentCount += increment;
            if (currentCount >= finalCount) {
                currentCount = finalCount;
                clearInterval(counter);
            }
            element.textContent = Math.floor(currentCount);
        }, 50);
    });

    // Add typing effect for the bio
    const bioElement = document.querySelector('.author__bio');
    if (bioElement) {
        const originalText = bioElement.textContent;
        bioElement.textContent = '';
        let i = 0;
        const typeWriter = setInterval(() => {
            bioElement.textContent += originalText.charAt(i);
            i++;
            if (i >= originalText.length) {
                clearInterval(typeWriter);
            }
        }, 50);
    }
});

// Add floating particles background effect
function createParticles() {
    const particlesContainer = document.createElement('div');
    particlesContainer.id = 'particles-background';
    particlesContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: -1;
    `;
    
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: 4px;
            height: 4px;
            background: rgba(103, 126, 234, 0.3);
            border-radius: 50%;
            animation: float ${5 + Math.random() * 10}s linear infinite;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
        `;
        particlesContainer.appendChild(particle);
    }
    
    document.body.appendChild(particlesContainer);
}

// CSS for floating animation
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0% { transform: translateY(0px) rotate(0deg); opacity: 0; }
        10% { opacity: 1; }
        90% { opacity: 1; }
        100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
    }
`;
document.head.appendChild(style);

// Initialize particles when page loads
window.addEventListener('load', createParticles);
