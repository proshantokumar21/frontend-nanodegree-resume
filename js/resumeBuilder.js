/*
This is empty on purpose! Your code to build the resume will go here.
 */


var bio = {
    "name" : "Proshanto Kumar",
    "role" : "Web Developer",
    "contacts" : {
        "mobile" : "01855712725",
        "email" : "proshantokumer2@gmail.com",
        "github" : "proshantokumer2",
        "twitter" : "kumar.du.pro",
        "location" : "Dhaka"
    },
    "bioPic" : "images/fry.jpg",
    "welcomeMessage" : "Hi there! How are you?",
    "skills" : ["Skill 1","Skill 2", "Skill 3", "Skill 4"]
}

var work = {
    "jobs" : [
        {
            "employer" : "Tuition",
            "title" : "Teacher",
            "dates" : "August 2018 - Present",
            "description" : "I teach Students. I teach Students. I teach Students. I teach Students. I teach Students. I teach Students. I teach Students. I teach Students. I teach Students. I teach Students. I teach Students. I teach Students. I teach Students. I teach Students. I teach Students. I teach Students. I teach Students."
        },
        {
            "employer" : "Neobux",
            "title" : "Ad_Clicker",
            "dates" : "January 2017 - December 2017",
            "description" : "I click ads. I click ads. I click ads. I click ads. I click ads. I click ads. I click ads. I click ads. I click ads. I click ads. I click ads. I click ads. I click ads. I click ads. I click ads. I click ads. I click ads. I click ads. I click ads. I click ads. I click ads. I click ads. I click ads. I click ads. I click ads. I click ads. I click ads. I click ads."
        }
    ]
}



var education = {
    "schools" : [
        {
            "name" : "Notre Dame College",
            "dates" : "2015-2017",
            "city" : "Dhaka",
            "majors" : ["Science"],
            "degree" : "HSC",
            "url" : "notredamecollegedhaka"
        },
        {
            "name" : "BKSP Public School",
            "dates" : "2005-2015",
            "city" : "Dhaka",
            "majors" : ["Science"],
            "degree" : "SSC",
            "url" : "bksppublicschool"
        }
    ],

    "onlineCourses" : [
        {
            "title" : "JavaScript",
            "school" : "Udacity",
            "dates" : 2021,
            "url" : "Find Your PC"
        }
    ]
}

var projects = {
    "projects": [
        {
            "title" : "Sample Project 1",
            "dates" : 2021,
            "description" : "Give your description here. Give your description here. Give your description here. Give your description here. Give your description here. Give your description here. Give your description here. Give your description here. Give your description here. Give your description here. Give your description here. Give your description here. Give your description here. Give your description here. Give your description here. Give your description here. Give your description here. Give your description here. Give your description here.",
            "images" : [
                "/images/197x148.gif",
                "/images/fry.jpg"
            ]
        }
    ]
}


var formattedName = HTMLheaderName.replace("%data%", "Proshanto");
var formattedRole = HTMLheaderRole.replace("%data%", "Web Developer");
var formattedbioPic = HTMLbioPic.replace("%data%",bio.bioPic);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedbioPic);



if(bio.skills.length > 0){

    $("#header").append(HTMLskillsStart);

    var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedSkill);
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formattedSkill);
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
    $("#skills").append(formattedSkill);
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
    $("#skills").append(formattedSkill);
    
}

var displayWork = function(){

    for (job in work.jobs){
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    
        $(".work-entry:last").append(formattedEmployerTitle);
        $(".work-entry:last").append(formattedDates);
        $(".work-entry:last").append(formattedLocation);
        $(".work-entry:last").append(formattedDescription);
        
    }

}
displayWork();