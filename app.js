

//Observerar vilka objekt som är på skärmen och togglar då på "show". Annars så har varje div en "blurred".
const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }

    });
}, {rootMargin: "-180px"});

const blurredElements = document.querySelectorAll(".blurred");
blurredElements.forEach((el) => observer.observe(el));

