window.onload = function() {
    document.querySelectorAll('.slider-nav a').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            var targetId = this.getAttribute('href');
            setTimeout(() => {
                var targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'nearest' // Force scroll even if the element is already in view
                    });
                }
            }, 100); // Delay of 100 milliseconds
        });
    });
};