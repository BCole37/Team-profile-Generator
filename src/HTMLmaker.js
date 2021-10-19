const generateManager = function (manager) {
    return `
    <div class="col-3 mt-3">
        <div class="card h-100">
            <div class="card-header">
                <h2>${manager.name}</h2>
                <h3>Manager</h3>
            </div>
            <div class="card-body">
                <p class="id">ID: ${manager.id}</p>
                <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                <p class="office">Office number: ${manager.officeNumber}</p>
            </div>
        </div>
    </div>
    `;
}

const generateEngineer = function (engineer) {
    return `
    <div class="col-3 mt-3">
        <div class="card h-100">
            <div class="card-header">
                <h2>${engineer.name}</h2>
                <h3>Engineer</h3>
            </div>
            <div class="card-body">
                <p class="id">ID: ${engineer.id}</p>
                <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                <p class="gitHub">Github: <a href="https://github.com/${engineer.gitHub}" target="_blank"> ${engineer.gitHub}</a></p>
            </div>
        </div>
    </div>
    `;
}

const generateIntern = function (intern) {
    return `
    <div class="col-3 mt-3">
        <div class="card h-100">
            <div class="card-header">
                <h2>${intern.name}</h2>
                <h3>Intern</h3>
            </div>
            <div class="card-body">
                <p class="id">ID: ${intern.id}</p>
                <p class="email">Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
                <p class="school">School: ${intern.school}</p>
            </div>
        </div>
    </div>
    `;
}

HTMLmaker = (data) => {
    cardArray = [];

    for(let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole();

        if(role === 'Manager') {
            const managerCard = generateManager(employee);
            cardArray.push(managerCard);
        }
        if(role === 'Engineer') {
            const engineerCard = generateEngineer(employee);
            cardArray.push(engineerCard);
        }
        if(role === 'Intern') {
            const internCard = generateIntern(employee);
            cardArray.push(internCard);
        }
    }

    const employeeCards = cardArray.join('');
    const generateTeam = generateTeamPage(employeeCards);
    
    return generateTeam;
}

const generateTeamPage = function (employeeCards) {   
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Team</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
    <header class="jumbotron">
    <h1>Team profile</h1>

    </header>
        <main>
            <div class="container">
                <div class="row justify-content-center" id="team-cards">
                    ${employeeCards}
                </div>
            </div>
        </main>
    </body>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.js"></script>
    </html>
  `;
}
  
module.exports = HTMLmaker; 