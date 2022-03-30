let today = new Date();
let thisYear = today.getFullYear();
let footer = document.querySelector('footer');
let copyright = document.createElement('p');
let skills = ['Javascript', 'HTML', 'Excel', 'PPT', 'Word'];
let skillsSection = document.querySelector('#skills');
let skillsList = skillsSection.querySelector('ul');

copyright.innerHTML = `Neil Yanga ${thisYear}`;

footer.appendChild(copyright);

for (let value of skills){
    let skill = document.createElement('li');
    skill.innerHTML = value;
    skillsList.appendChild(skill);
}

