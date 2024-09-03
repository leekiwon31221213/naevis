document.addEventListener('DOMContentLoaded', function () {
    const elements = [
        { selector: '.loading-top-left', text: 'CH 0\nPLAY\n0:00:00' },
        { selector: '.loading-top-right', text: 'TAPE\nREC\n0:00:00' },
        { selector: '.loading-bottom', text: 'Hello, real world\nSRC' },
        { selector: '.loading-center h3', text: '1991 REAL WORLD' },
        { selector: '.loading-center h1', text: 'nævis calling...' }
    ];

    elements.forEach(({ selector, text }) => {
        typeText(document.querySelector(selector), text);
    });

    // Observer for profile section
    const profileElements = [
        { selector: '.profile_text', text: 'nævis calling' },
        { selector: '.profile_desc', text: 'name : naevis\nheight : 168cm\nsymbol : butterfly\norigin: Digital World "KWANGYA"\ndebut: 24.09.10 “Done”\nspecialty: Flexible Character' },
        { selector: '.profile_date', text: '2024.09.23' }
    ];

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                profileElements.forEach(({ selector, text }) => {
                    typeText(document.querySelector(selector), text);
                });
                observer.disconnect(); // Stop observing after animation starts
            }
        });
    });

    // Start observing the profile right section
    const profileSection = document.querySelector('.profile_right');
    if (profileSection) {
        observer.observe(profileSection);
    }

    function typeText(element, text) {
        const lines = text.split('\n');

        element.innerHTML = ''; // Clear existing text

        lines.forEach((line, lineIndex) => {
            const lineElement = document.createElement('div');
            element.appendChild(lineElement);

            const span = document.createElement('span');
            span.classList.add('typing-effect');
            lineElement.appendChild(span);

            let index = 0;
            const typingInterval = setInterval(() => {
                span.textContent += line[index];
                index++;

                if (index === line.length) {
                    clearInterval(typingInterval);

                    if (lineIndex === lines.length - 1) {
                        span.classList.remove('typing-effect');
                        if (element.matches('.loading-center h1')) {
                            addBlinkingDots(span); // Blinking dots effect
                        } else {
                            span.classList.add('blinking-effect');
                        }
                    }
                }
            }, 100); // Typing speed in milliseconds
        });

        // Start time increment animation if it contains time
        if (element.matches('.loading-top-left, .loading-top-right')) {
            const timeText = element.querySelector('div:last-child span'); // Get the span containing the time
            if (timeText) updateTime(timeText, lines[2]);
        }
    }

    function addBlinkingDots(span) {
        const textWithoutDots = span.textContent.replace(/\.*$/, ''); // Remove trailing dots
        span.textContent = textWithoutDots;
        const dots = document.createElement('span');
        dots.classList.add('dots');
        span.appendChild(dots);

        let dotCount = 0;
        setInterval(() => {
            dotCount = (dotCount + 1) % 4; // Dots count: 0, 1, 2, 3
            dots.textContent = '.'.repeat(dotCount);
        }, 500); // Blinking speed in milliseconds
    }

    function updateTime(timeSpan, initialTime) {
        let [hours, minutes, seconds] = initialTime.split(':').map(Number);
        setInterval(() => {
            seconds++;
            if (seconds >= 60) {
                seconds = 0;
                minutes++;
            }
            if (minutes >= 60) {
                minutes = 0;
                hours++;
            }

            const formattedTime = `${hours}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
            const originalText = timeSpan.parentElement.textContent.split('\n')[0]; // Preserve original text like "TAPE" or "CH 0"
            timeSpan.textContent = originalText + '\n' + formattedTime; // Update only the time text
        }, 1000); // Update every second
    }

    const loadingElement = document.querySelector('.loading');
    loadingElement.addEventListener('click', function () {
        loadingElement.classList.add('hidden');
    });
});






document.addEventListener('DOMContentLoaded', function () {
    const elements = [
        { selector: '.loading-top-left', text: 'CH 0\nPLAY\n0:00:00' },
        { selector: '.loading-top-right', text: 'TAPE\nREC\n0:00:00' },
        { selector: '.loading-bottom', text: 'Hello, real world\nSRC' },
        { selector: '.loading-center h3', text: '1991 REAL WORLD' },
        { selector: '.loading-center h1', text: 'nævis calling...' }
    ];

    elements.forEach(({ selector, text }) => {
        typeText(document.querySelector(selector), text);
    });

    // Observer for profile section
    const profileElements = [
        { selector: '.profile_text', text: 'nævis calling' },
        { selector: '.profile_desc', text: 'name : naevis\nheight : 168cm\nsymbol : butterfly\norigin: Digital World "KWANGYA"\ndebut: 24.09.10 “Done”\nspecialty: Flexible Character' },
        { selector: '.profile_date', text: '2024.09.23' }
    ];

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                profileElements.forEach(({ selector, text }) => {
                    typeText(document.querySelector(selector), text);
                });
                observer.disconnect(); // Stop observing after animation starts
            }
        });
    });

    // Start observing the profile right section
    const profileSection = document.querySelector('.profile_right');
    if (profileSection) {
        observer.observe(profileSection);
    }

    function typeText(element, text) {
        const lines = text.split('\n');

        element.innerHTML = ''; // Clear existing text

        lines.forEach((line, lineIndex) => {
            const lineElement = document.createElement('div');
            element.appendChild(lineElement);

            const span = document.createElement('span');
            span.classList.add('typing-effect');
            lineElement.appendChild(span);

            let index = 0;
            const typingInterval = setInterval(() => {
                span.textContent += line[index];
                index++;

                if (index === line.length) {
                    clearInterval(typingInterval);

                    if (lineIndex === lines.length - 1) {
                        span.classList.remove('typing-effect');
                        if (element.matches('.loading-center h1')) {
                            addBlinkingDots(span); // Blinking dots effect
                        } else {
                            span.classList.add('blinking-effect');
                        }
                    }
                }
            }, 100); // Typing speed in milliseconds
        });

        // Start time increment animation if it contains time
        if (element.matches('.loading-top-left, .loading-top-right')) {
            updateTime(element, lines[2]);
        }
    }

    function addBlinkingDots(span) {
        const textWithoutDots = span.textContent.replace(/\.*$/, ''); // Remove trailing dots
        span.textContent = textWithoutDots;
        const dots = document.createElement('span');
        dots.classList.add('dots');
        span.appendChild(dots);

        let dotCount = 0;
        setInterval(() => {
            dotCount = (dotCount + 1) % 4; // Dots count: 0, 1, 2, 3
            dots.textContent = '.'.repeat(dotCount);
        }, 500); // Blinking speed in milliseconds
    }

    function updateTime(element, initialTime) {
        let [hours, minutes, seconds] = initialTime.split(':').map(Number);
        setInterval(() => {
            seconds++;
            if (seconds >= 60) {
                seconds = 0;
                minutes++;
            }
            if (minutes >= 60) {
                minutes = 0;
                hours++;
            }

            const formattedTime = `${hours}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
            element.querySelector('div:last-child span').textContent = formattedTime; // Update time text
        }, 1000); // Update every second
    }

    const loadingElement = document.querySelector('.loading');
    loadingElement.addEventListener('click', function () {
        loadingElement.classList.add('hidden');
    });
});
