//Lesson 4.2
let today = new Date();
let thisYear = today.getFullYear();
let footer = document.querySelector('footer');
let copyright = document.createElement('p');
let skills = ['Javascript', 'HTML', 'Excel', 'PPT', 'Word'];
let skillsSection = document.querySelector('#skills');
let skillsList = skillsSection.querySelector('ul');

copyright.innerHTML = `&copy Neil Yanga ${thisYear}`;

footer.appendChild(copyright);

for (let value of skills){
    let skill = document.createElement('li');
    skill.innerHTML = value;
    skillsList.appendChild(skill);
}

//Lesson 4.3
let messageForm = document.querySelector("form[name='leave_message']");
messageForm.addEventListener('submit',(event)=> {
    event.preventDefault();
    let name = event.target.name.value;
    let email = event.target.email.value;
    let message = event.target.message.value;
    console.log(`${name} ${email} ${message}`);

    //Takes the user input message displayed in a list
    let messageSection = document.querySelector('#messages');
    let messageList = messageSection.querySelector('ul');
    let newMessage = document.createElement('li');

    newMessage.innerHTML = `<a href="mailto:email">${name}</a> wrote: <span>${message}</span>  `;

    //Creates remove button for each list item
    let removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.type = 'button';

    removeButton.addEventListener('click', (event) => {
        let entry = removeButton.parentNode;
        entry.remove();
    })


    //Appends these elements into the right parent node.
    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);

    //resets form input after you hit submit
    messageForm.reset();
});

