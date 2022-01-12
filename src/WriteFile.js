const fs = require('fs');

let footer = `</section>
</div>
<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
<script src="../javascript.js" async defer></script>
</body>
</html>`;

let html = '';
// function to create a long string to import into a index.html file for the website
let makeWebsite = (teamList, teamName) => {
    let header = `<!DOCTYPE html>
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
                ${teamName}
            </header>
            <section class="row justify-content-around">`;
            html += header;
    // loop through the team members to get their attributes
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
        html += str; //add new employee card to html string for index.html       
});
html += footer;

fs.writeFile('./index.html', html, err => {
    err? console.error(err) : console.log("created Website!");
});

}
// exports the function makeWebsite
module.exports = makeWebsite;