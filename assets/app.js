let logos = [
    {
        name: 'Digyt',
        src: 'assets/images/logos/digyt.png',
    }, 
    {
        name: 'Koopo Online',
        src: 'assets/images/logos/koopo.png',
    }, 
    {
        name: 'Latham Law',
        src: 'assets/images/logos/lathamlaw.png',
    }, 
    {
        name: 'Plu2o',
        src: 'assets/images/logos/plu2o.png',
    }, 
    {
        name: 'Paid In My City',
        src: 'assets/images/logos/paidinmycity.png',
    }, 

]
let skills = [
    {
        name: 'HTML/CSS',
        src: 'assets/images/skills/html-css.png',
    },
    {
        name: 'UI/UX',
        src: 'assets/images/skills/ui-and-ux.jpg',
    }, 
    {
        name: 'JavaScript',
        src: 'assets/images/skills/js-logo.png',
    },
    {
        name: 'React',
        src: 'assets/images/skills/react.svg',
    },
    
    {
        name: 'Angular',
        src: 'assets/images/skills/angular.svg',
    }, 
    {
        name: 'Vue',
        src: 'assets/images/skills/vue.svg',
    },
    {
        name: 'jQuery',
        src: 'assets/images/skills/jquery.svg',
    },
    {
        name:'Redux',
        src: 'assets/images/skills/redux.png',
    },
    {
        name: 'Node.js',   
        src: 'assets/images/skills/node.svg',
    }, 
    
    {
        name: 'C#',
        src: 'assets/images/skills/csharp.svg',
    },
    {
        name:'PHP',
        src: 'assets/images/skills/php.svg',
    }, 
    {
        name:'Laravel',
        src: 'assets/images/skills/laravel.webp',

    },
    {
        name:'MySQL',
        src: 'assets/images/skills/mysql.svg',
    }, 
    {
        name:'WordPress',
        src: 'assets/images/skills/wordpress.svg',
    }, 
    {
        name: 'Docker',
        src: 'assets/images/skills/docker.png',
    },
    {
        name:'Git',
        src: 'assets/images/skills/git.svg',
    },
    {
        name: 'apache',
        src: 'assets/images/skills/apache.png',
    },   
    {
        name:'Linux',
        src: 'assets/images/skills/linux.jpeg',
    },
    {
        name:'AWS',
        src: 'assets/images/skills/aws.svg',
    },
    {
        name: 'Azure',
        src: 'assets/images/skills/azure.svg',
    },
    
    
]
let projects = []

const addSkills = () => {
    let skillsContainer = document.getElementById('skills-grid')
    skills.forEach(skill => {
        let skillDiv = document.createElement('div')
        let skillImage = document.createElement('img')
        let skillText = document.createElement('h3')

        skillImage.src = skill.src
        skillImage.alt = skill.name
       // skillText.textContent = skill.name
        skillDiv.classList.add('skill')
        skillsContainer.appendChild(skillDiv)
        skillDiv.appendChild(skillImage)
       // skillDiv.appendChild(skillText)
    })
}
const addLogos = () => {
    let logosContainer = document.getElementById('experience-grid')
    logos.forEach(logo => {
        let logoDiv = document.createElement('div')
        let logoImage = document.createElement('img')
        let logoText = document.createElement('h3')

        logoImage.src = logo.src
        logoImage.alt = logo.name
        logoText.textContent = logo.name
        logoDiv.classList.add('logo')
        logosContainer.appendChild(logoDiv)
        logoDiv.appendChild(logoImage)
       // logoDiv.appendChild(logoText)
    })
}
addSkills();
addLogos()