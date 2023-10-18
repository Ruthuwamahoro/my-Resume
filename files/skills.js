function animateSkills() {
    const skillLevels = document.querySelectorAll('.python-level');
    skillLevels.forEach((level) => {
        const endValue = parseInt(level.getAttribute('data-level'), 10);
        let current = 0;
        const increment = endValue / 100;
        let width = 0;

        function animateSkill() {
            if (current >= endValue) {
                clearInterval(timer);
            } else {
                current += increment;
                width = Math.min(current, endValue);
                level.style.width = width + '%';
                level.textContent = width.toFixed(0) + '%';
            }
        }

        const timer = setInterval(animateSkill, 10);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    animateSkills();
});








