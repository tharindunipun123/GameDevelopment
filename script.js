document.addEventListener("DOMContentLoaded", function () {
    const circles = document.querySelectorAll('.circle');
    const handPointer = document.getElementById('handPointer');
    let lastCircle = null; // To keep track of the last circle with a red border

    function animatePointer() {
        circles.forEach((circle, index) => {
            setTimeout(() => {
                if (lastCircle) {
                    lastCircle.classList.remove('red-border'); // Remove the red border from the last circle
                }

                const circleRect = circle.getBoundingClientRect();
                const handPointerRect = handPointer.getBoundingClientRect();

                // Calculate center positions
                const circleCenterX = circleRect.left + circleRect.width / 2;
                const circleCenterY = circleRect.top + circleRect.height / 2;
                const handPointerCenterX = handPointerRect.width / 2;
                const handPointerCenterY = handPointerRect.height / 2;

                // Adjust hand pointer to circle center
                const moveX = circleCenterX - handPointerCenterX;
                const moveY = circleCenterY - handPointerCenterY;

                handPointer.style.transform = `translate(${moveX}px, ${moveY}px)`;

                // Change border after the hand pointer has moved
                setTimeout(() => {
                    circle.classList.add('red-border');
                    lastCircle = circle; // Update the lastCircle to the current one
                }, 500); // Adjust this time to match the duration of the pointer movement

            }, index * 1000);
        });

        // Restart the animation to loop continuously
        setTimeout(animatePointer, circles.length * 1000 + 1000); // Loops the animation
    }

    animatePointer();
});
