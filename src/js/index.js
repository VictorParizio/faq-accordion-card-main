const topico = document.querySelectorAll('.topico');

topico.forEach(function (item) {
    item.addEventListener("click", () => {
        if (item.classList.contains('mostrar')) {
            item.classList.remove("mostrar");
        } else {
            item.classList.add("mostrar");
        }
    })
})