const { WSA_E_CANCELLED } = require('constants');
const fs = require('fs');
const inquire = require('inquirer');
const Employee = require('./lib/Employee')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const Manager = require('./lib/Manager')
const teamList = [];
let html = '';
let footer = `</section>
</div>
<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
<script src="../javascript.js" async defer></script>
</body>
</html>`;
const questions = {
    manager: [{
        type: 'Input',
        message: 'What is the team name?',
        name: 'team'
    },
    {
        type: 'input',
        message: 'What is the the Manager\'s name?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'What is the the Manager\'s ID?',
        name: 'id'
    },
    {
        type: 'input',
        message: 'What is the the Manager\'s email?',
        name: 'email',
        validate: email => {
            return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email);
        }
    },
    {
        type: 'input',
        message: 'What is the  Manager\'s office number?',
        name: 'officeNumber'
    }],
    engineer: [{
        type: 'input',
        message: 'What is the Engineer\'s name?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'What is the Engineer\'s ID?',
        name: 'id'
    },
    {
        type: 'input',
        message: 'What is the Engineer\'s email?',
        name: 'email',
        validate: email => {
            return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email);
        }         },
    {
        type: 'input',
        message: 'what is your github',
        name: 'github',
    }],
    intern: [{
        type: 'input',
        message: 'What is the Intern\'s name?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'What is the Intern\'s ID?',
        name: 'id'
    },
    {
        type: 'input',
        message: 'What is the Intern\'s email?',
        name: 'email',
        validate: email => {
            return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email);
        }          
    },
    {
        type: 'input',
        message: 'what is the Intern\'s school?',
        name: 'school',
    }]
}
    

function assemble() {
    inquire
    .prompt(questions.manager).then((data) => {
        const manager = new Manager(data.name, data.id, data.email, data.officeNumber);
        teamList.push(manager);
        
        header = `<!DOCTYPE html>
        <html>
            <head>
                <meta charset="utf-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <title></title>
                <meta name="description" content="">
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"  integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous"/>
                <link rel="stylesheet" href="./style.css">
                <title>Team Generator</title>
            </head>
            <body>
                <header class="header">
                    ${data.team}
                </header>
                <section class="row justify-content-around">`;
        html += header;
    }).then(() => {
        newTeamMember();
    });
}

function newTeamMember() {
    inquire.prompt([
        {
            type: 'list',
            message: 'Who do you want to add next? select finish if done',
            choices: ['Engineer', 'Intern', 'Finish'],
            name: 'title'
        }
    ]).then((data) => {
        if (data.title == 'Engineer') {
            inquire.prompt(questions.engineer).then((data) => {
                let engineer = new Engineer(data.name, data.id, data.email, data.github);
                teamList.push(engineer);
                newTeamMember();
    })} else if (data.title == 'Intern') {
            inquire.prompt(questions.intern).then((data) => {
                let intern = new Intern(data.name, data.id, data.email, data.school);
                teamList.push(intern)
                newTeamMember();
    })} else {
        console.log("Team assembled!")
        makeWebsite(teamList);
    }
    });
} 
function makeWebsite(teamList) {


    
    teamList.forEach(element => {
        let icon;
        let uniqueItem;
        let name = element.name;
        let id = element.id;
        let email = element.email;
        let role = element.getRole();

        if(role == 'Manager') {
            officeNumber = element.getOfficeNumber();
            uniqueItem = `Office Number: ${officeNumber}`;
            icon = `<i class="fas fa-mug-hot" alt="mug Icon"></i>`;
        } else if(role == 'Engineer') {
            github = element.getGithub();
            uniqueItem = `Github: <a href="https://github.com/${github}">${github}</a>`;
            icon = `<i class="fas fa-glasses" alt="glasses Icon"></i>`;
        } else if(role == 'Intern') {
            school = element.getSchool();
            uniqueItem = `School: ${school}`;
            icon = `<i class="fas fa-graduation-cap" alt="school Icon"></i>`;
        }

        let str = 
        `<div class="col-12 col-sm-6 col-lg-4 mt-3">
                    <div class="card">
                      <h3 class="card-header"> ${icon} ${role}
                      </h3>
                      <div class="card-body">
                        <p class="card-text">
                        <ul class="list-group">
                          <li class='list-group-item'>${name}</li>
                          <li class='list-group-item'>${id}</li>
                          <li class='list-group-item'><a href="mailto:${email}">${email}</a></li>
                          <li class='list-group-item'>${uniqueItem}</li>
                          
                          
                          </ul>
                        </p>
                      </div>
                    </div>
                  </div>`
        html += str;

       
});
html += footer;
fs.writeFile('./index.html', html, err => {
    err? console.error(err) : console.log("created card!");
});

}


assemble();




