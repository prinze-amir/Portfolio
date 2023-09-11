
const showJob = (job) => {

    let jobContainer = document.getElementById('job-info')
    jobContainer.classList.remove('opcaity')

    setTimeout(() => {
        jobContainer.innerHTML = ''
        let jobDiv = document.createElement('div')
        let jobImage = document.createElement('img')
        let company = document.createElement('h3')
        let role = document.createElement('h4')
        let jobDescription = document.createElement('p')
        jobImage.src = job.src
        company.textContent = job.name
        role.textContent = job.role
        jobDescription.textContent = job.description
        jobContainer.classList.add('shadow')
        jobContainer.classList.add('opcaity')
        jobDiv.classList.add('job')
        jobContainer.appendChild(jobDiv)
        jobDiv.appendChild(jobImage)  
        jobDiv.appendChild(company)
        jobDiv.appendChild(role)
        jobDiv.appendChild(jobDescription) 
    }, 500);
}

showJob(digyt);

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
        logoDiv.onclick = function(){   
            showJob(logo.info)
            document.location.href = '#top-job'
        }
    })
}
const addProjects = () => {
    let projectsContainer = document.getElementById('portfolio-grid')
    projects.forEach(project => {
        let projectDiv = document.createElement('div')
        let projectLink = document.createElement('a')
        let projectImage = document.createElement('img')
        let projectText = document.createElement('h3')

        if (project.url) {
            projectLink.href = project.url
            projectLink.target = '_blank'
            projectImage.src = project.src
            projectImage.alt = project.name
            projectText.textContent = project.name
            projectDiv.classList.add('project')
            projectsContainer.appendChild(projectDiv)
            projectDiv.appendChild(projectLink)
            projectLink.appendChild(projectImage)
        } else {
            projectImage.src = project.src
            projectImage.alt = project.name
            projectText.textContent = project.name
            projectDiv.classList.add('project')
            projectsContainer.appendChild(projectDiv)
            projectDiv.appendChild(projectImage)
        }
        
       // logoDiv.appendChild(logoText)
    })
}
addSkills();
addLogos()
addProjects()

const menuClick = () => {
    document.getElementById('menu-btn').onclick = function(){
        const sidebar = document.getElementById('sidebar')
        const menu = document.getElementById('menu-btn')
        const overlay = document.getElementById('overlay')
        if (menu.classList.contains("fa-bars")) {
            menu.classList.remove("fa-bars");
            menu.classList.add("fa-times");
        } else {
            menu.classList.remove("fa-times");
            menu.classList.add("fa-bars");
        }
        sidebar.classList.toggle('show')
        overlay.classList.toggle('overlay')
        menu.classList.toggle('right')

    }
}

const overlayClick = () => {
    document.getElementById('overlay').onclick = function(){
        const sidebar = document.getElementById('sidebar')
        const menu = document.getElementById('menu-btn')

        if (menu.classList.contains("fa-bars")) {
            menu.classList.remove("fa-bars");
            menu.classList.add("fa-times");
        } else {
            menu.classList.remove("fa-times");
            menu.classList.add("fa-bars");
        }
        sidebar.classList.toggle('show')
        menu.classList.toggle('right')
        overlay.classList.toggle('overlay')


    }
}
