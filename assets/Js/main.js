
// project section 
const projects = [
  { name: 'Project 1', type: 'web', image: './assets/img/pro/1.jpg', github: 'https://github.com/user/project1', code: 'https://github.com/user/project1' },
  { name: 'Project 2', type: 'app', image: './assets/img/pro/2.jpg', github: 'https://github.com/user/project2', code: 'https://github.com/user/project1' },
  { name: 'Project 3', type: 'web', image: './assets/img/pro/5.jpg', github: 'https://github.com/user/project3', code: 'https://github.com/user/project1' },
  // Add more projects here
];

const projectContainer = document.getElementById('project-container');
const buttons = document.querySelectorAll('.button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.getAttribute('data-filter');
    displayProjects(filter);
  });
});

function displayProjects(filter) {
  projectContainer.innerHTML = '';
  projects.filter(project => filter === 'all' || project.type === filter).forEach(project => {
    const projectDiv = document.createElement('div');
    projectDiv.classList.add('project');
    projectDiv.innerHTML = `
      <img src="${project.image}" alt="${project.name}">
      <div class="project-overlay">
        <div class="project-name">${project.name}</div>
        <div class="project-links">
          <a class="project-link" href="${project.github}" target="_blank">
            <i class="fab fa-github"></i>
          </a>
          <a class="project-link" href="${project.code}" target="_blank">
            <i class="fa fa-code"></i>
          </a>
        </div>
      </div>
    `;
    projectContainer.appendChild(projectDiv);
  });
}

const defaultFilter = 'all';
let currentFilter = defaultFilter;

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.getAttribute('data-filter');
    if (filter !== currentFilter) {
      toggleActiveButton(button);
      displayProjects(filter);
      currentFilter = filter;
    }
  });
});

function toggleActiveButton(button) {
  buttons.forEach(btn => btn.classList.remove('active'));
  button.classList.add('active');
}

// Initial display
displayProjects(defaultFilter);

// disable developer mode

// document.addEventListener('contextmenu', function(e) {
//   e.preventDefault();
// });

// skill
// const skills = {
//   frontend: [
//     { name: 'JavaScript', icon: './/assets//img//h3.png' },
//     { name: 'HTML', icon: './assets/img/h3.png' },
//     { name: 'CSS', icon: 'css_logo.png' },
//     { name: 'React', icon: 'react_logo.png' },
//     { name: 'jQuery', icon: 'jquery_logo.png' },
//     { name: 'jQuery', icon: 'jquery_logo.png' }

//   ],
//   backend: [
//     { name: 'Node.js', icon: 'nodejs_logo.png' },
//     { name: 'PHP', icon: 'php_logo.png' },
//     { name: 'MySQL', icon: 'mysql_logo.png' }
//   ],
//   other: [
//     { name: 'Java', icon: 'java_logo.png' },
//     { name: 'Python', icon: 'python_logo.png'}
//   ]
// };



// skill

function fetchJSON(callback) {
  fetch('./assets/main.json')
    .then(response => response.json())
    .then(data => {
      callback(data.skills);
    })
    .catch(error => console.error('Error fetching JSON:', error));
}

function showSkills(skillType) {
  const buttons = document.querySelectorAll('.btn1');
  buttons.forEach(button => {
    if (button.textContent.toLowerCase() === skillType) {
      button.classList.add('btn1-active');
    } else {
      button.classList.remove('btn1-active');
    }
  });

  const skillsContainer = document.getElementById('skills');
  skillsContainer.innerHTML = '';

  fetchJSON(skills => {
    skills[skillType].forEach(skill => {
      const skillItem = document.createElement('div');
      skillItem.className = 'skill-item';

      const skillImage = document.createElement('img');
      skillImage.src = `images/${skill.icon}`;
      skillImage.alt = skill.name;

      const skillName = document.createElement('p');
      skillName.textContent = skill.name;

      skillItem.appendChild(skillImage);
      skillItem.appendChild(skillName);

      skillsContainer.appendChild(skillItem);
    });
  });
}

// Show default "Frontend" skills on page load
function showSkills(skillType) {
const buttons = document.querySelectorAll('.btn1');
buttons.forEach(button => {
  if (button.textContent.toLowerCase() === skillType) {
    button.classList.add('btn1-active');
  } else {
    button.classList.remove('btn1-active');
  }
});

const skillsContainer = document.getElementById('skills');
skillsContainer.innerHTML = '';

fetchJSON(skills => {
  skills[skillType].forEach(skill => {
    const skillItem = document.createElement('div');
    skillItem.className = 'skill-item';

    const skillImage = document.createElement('img');
    skillImage.src = skill.icon; // Using the online image URL
    skillImage.alt = skill.name;

    const skillName = document.createElement('p');
    skillName.textContent = skill.name;

    skillItem.appendChild(skillImage);
    skillItem.appendChild(skillName);

    skillsContainer.appendChild(skillItem);
  });
});
}

showSkills('frontend');

// experience 
const experienceBtn = document.getElementById('experience-btn');
    const educationBtn = document.getElementById('education-btn');
    const experiencesectionE = document.querySelector('.sectionE.experience');
    const educationsectionE = document.querySelector('.sectionE.education');

    experienceBtn.addEventListener('click', () => {
      experiencesectionE.classList.add('active');
      educationsectionE.classList.remove('active');
      experienceBtn.classList.add('active');
      educationBtn.classList.remove('active');
    });

    educationBtn.addEventListener('click', () => {
      educationsectionE.classList.add('active');
      experiencesectionE.classList.remove('active');
      educationBtn.classList.add('active');
      experienceBtn.classList.remove('active');
    });

// experience 


// Dark mode 
function toggleMode() {
    const body = document.querySelector("body");
    const modeButton = document.querySelector("#mode-button");
  
    if (body.classList.contains("dark-mode")) {
      body.classList.remove("dark-mode");
      modeButton.innerHTML = '<i class="fa-regular fa-sun fa-shake"></i>';
    } else {
      body.classList.add("dark-mode");
      modeButton.innerHTML = '<i class="fa-sharp fa-regular fa-moon fa-shake"></i>';
    }
  }
  
// disable developer mode

    // document.addEventListener('contextmenu', function(e) {
    //     e.preventDefault();
    // });

  
  
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 50,
            sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

// come Back Nevigation
document.addEventListener('visibilitychange',
    function () {
        if (document.visibilityState === "visible") {
            document.title = "Portfolio | Dhanraj kadam";
            $("#favicon").attr("href", "./assets/img/logo.jpg");
        }
        else {
            document.title = "Come Back To Portfolio";
            $("#favicon").attr("href", "assets/img/logo.jpg");
        }
    });

// <!-- typed js effect starts -->

var typed = new Typed(".typing-text", {
    strings: ["Frontend development", "Backend Development", "Web Designing", "APP Development"],
    loop: true,
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 500,
});
// <!-- typed js effect ends -->
// <!-- tilt js effect starts -->
VanillaTilt.init(document.querySelectorAll(".tilt"), {
    max: 15,
});
// <!-- tilt js effect ends -->
