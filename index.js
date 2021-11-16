const progress = document.querySelectorAll('.progress');
const text = document.getElementsByTagName('p');
const button = document.getElementById('click');


const updateProgress = percentage => {  
    progress.forEach(item => {
        item.style.width = `${percentage}%`;
    });
    
    setTimeout(() => {
        Array.from(text).forEach(item => {
            item.textContent = `${percentage}%`
        })
    }, 700)
}

updateProgress(50)

button.addEventListener('click', () => {
    updateProgress(100)
})