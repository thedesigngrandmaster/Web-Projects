const labels = document.querySelectorAll('.main label')

labels.forEach(label => {
    main.innerHTML = main.innerText
        .split('')
        .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
        .join('')
})