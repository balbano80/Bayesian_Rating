var users = [
    {
        name: "Joe",
        upVotes: 5,
        downVotes: 2
    },
    {
        name: "Mary",
        upVotes: 20,
        downVotes: 1
    },
    {
        name: "Stan",
        upVotes: 90,
        downVotes: 5
    },
    {
        name: "Bob",
        upVotes: 55,
        downVotes: 8
    },
    {
        name: "Rebecca",
        upVotes: 2,
        downVotes: 0
    },
];


function avgNumVotes(employees){
    let totalVotes = 0;
    for (let i = 0; i < employees.length; i++){
        totalVotes += (employees[i].upVotes + employees[i].downVotes);
    }
    return Math.floor(totalVotes/employees.length);
}

function userRating(employee){
    return employee.upVotes / (employee.upVotes + employee.downVotes)
}

function avgRating(employees){
    let totalRatings = 0;
    for (let i = 0; i < employees.length; i ++){
        totalRatings += userRating(employees[i])
    }

    return totalRatings/employees.length; 
}

function overallRating(employees){
    let baseyianRatings = [];
    const averageRating = avgRating(employees);
    const averageNumberOfVotes = avgNumVotes(employees);
    for (let i = 0; i < employees.length; i++){
        let tempObj = {};
        tempObj.name = employees[i].name;
        tempObj.br = ((averageNumberOfVotes * averageRating) + ((employees[i].upVotes + employees[i].downVotes) * userRating(employees[i]))
         / (averageNumberOfVotes + (employees[i].upVotes + employees[i].downVotes)));

        console.log("tempObj: ", tempObj); 
        baseyianRatings.push(tempObj);
    };

    return baseyianRatings;
}

// console.log(avgNumVotes(users));

for (let i = 0; i < users.length; i++){
    console.log(users[i].name + ": " + userRating(users[i]))
}

// console.log("Averge Ratings: " + avgRating(users));

overallRating(users);



