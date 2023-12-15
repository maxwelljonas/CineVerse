// For the accordion
document.addEventListener('DOMContentLoaded', function () {
    const questions = document.querySelectorAll('.q');

    questions.forEach(question => {
        question.addEventListener('click', function () {
            const targetId = this.getAttribute('data-target');
            const answer = document.getElementById(targetId);

            // Toggle the 'show' class on the answer
            answer.classList.toggle('show');

            // Slide down effect
            if (answer.classList.contains('show')) {
                answer.style.maxHeight = answer.scrollHeight + "px" + "100px";
                answer.style.padding = "24px"; // Adjust as needed
            } else {
                answer.style.maxHeight = null;
                answer.style.padding = "0";
            }

            // Hide other answers
            questions.forEach(q => {
                const otherTargetId = q.getAttribute('data-target');
                if (otherTargetId !== targetId) {
                    const otherAnswer = document.getElementById(otherTargetId);
                    otherAnswer.classList.remove('show');
                    otherAnswer.style.maxHeight = null;
                    otherAnswer.style.paddingTop = "0";
                }
            });
        });
    });
});
