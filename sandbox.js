document.querySelector(".ham-menu").
addEventListener("click", () =>{
    document.querySelector(".container").classList.
    toggle("change");
});

document.querySelector('.scroll-btn').
addEventListener('click',() =>{
document.querySelector("html").style.scrollBehavior = "smooth";
setTimeout(() => {
    document.querySelector("html").style.scrollBehavior = "unset";
},2000);
});



// document.getElementById('#learnit').addEventListener('click',()=>{

// })

document.getElementById('discover').addEventListener('click', () => {
    const learnItElement = document.getElementById('learnit');
    console.log(learnItElement)
    learnItElement.scrollIntoView({
        behavior: 'smooth'
    });
});

document.getElementById('about').addEventListener('click', () => {
    const aboutItElement = document.getElementById('about-me');
    console.log(aboutItElement)
    aboutItElement.scrollIntoView({
        behavior: 'smooth'
    });
});
