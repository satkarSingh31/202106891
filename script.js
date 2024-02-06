document.addEventListener('DOMContentLoaded', function () {
    const moreInformationSections = document.querySelectorAll('.more-information');

    moreInformationSections.forEach(section => {
        section.addEventListener('mouseover', function () {
            this.style.transform = 'scale(1.1)';
        });

        section.addEventListener('mouseout', function () {
            this.style.transform = 'scale(1)';
        });
    });
