const txtElement = document.querySelector('.digitando');
const txts = ['Desenvolvedor Web', 'Programador Python',];
let txtIndex = 0; 
let charIndex = 0; 
let isDeleting = false;

function typeWriter() {
    const currentTxt = txts[txtIndex];

    if (isDeleting) {
        txtElement.textContent = currentTxt.substring(0, charIndex - 1);
        charIndex--;
    } else {
        txtElement.textContent = currentTxt.substring(0, charIndex + 1);
        charIndex++;
    }

    if (!isDeleting && charIndex === currentTxt.length) {
        setTimeout(() => isDeleting = true, 1000);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        txtIndex = (txtIndex + 1) % txts.length;
    }

    const typingSpeed = isDeleting ? 50 : 150; 

    setTimeout(typeWriter, typingSpeed);
}

const btnMenu = document.getElementById('btn-menu');

const navegacaoPrimaria = document.querySelector('.navegacao-primaria');


if (btnMenu && navegacaoPrimaria) {

    btnMenu.addEventListener('click', () => {

        navegacaoPrimaria.classList.toggle('ativado');
    });


    navegacaoPrimaria.querySelectorAll('a').forEach(item => {
        item.addEventListener('click', () => {

            navegacaoPrimaria.classList.remove('ativado');
        });
    });
}



const projectNav = document.querySelector('.project_navegacao');

const projectItems = document.querySelectorAll('.projects_armazenamento ul li');

if (projectNav && projectItems.length > 0) {

    projectNav.addEventListener('click', (e) => {

        if (e.target.tagName === 'LI') {

            projectNav.querySelectorAll('li').forEach(li => li.classList.remove('ativo'));

            e.target.classList.add('ativo');


            const filter = e.target.classList[0];
            projectItems.forEach(item => {

                if (filter === 'all' || item.id === filter) {

                    item.classList.add('ativo');
                } else {
                    item.classList.remove('ativo');
                }
            });
        }
    });

    const allButton = projectNav.querySelector('.all');
    if (allButton) {
        allButton.click();
    }
}



document.addEventListener('DOMContentLoaded', () => {

    if (txtElement) {
        typeWriter();
    }

});
