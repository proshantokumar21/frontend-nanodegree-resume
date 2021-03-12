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
        "location" : "Mountain View, CA"
    },
    "bioPic" : "images/fry.jpg",
    "welcomeMessage" : "Hi there! How are you?",
    "skills" : ["Skill 1","Skill 2", "Skill 3", "Skill 4"]
}

var work = {
    "jobs": [
      {
        "employer": "Udacity",
        "title": "Course Developer",
        "location": "Mountain View, CA",
        "dates": "Feb 2014 - Current",
        "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
      },
      {
        "employer": "LearnBIG",
        "title": "Software Engineer",
        "location": "Seattle, WA",
        "dates": "May 2013 - Jan 2014",
        "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
      },
      {
        "employer": "LEAD Academy Charter High School",
        "title": "Science Teacher",
        "location": "Nashville, TN",
        "dates": "Jul 2012 - May 2013",
        "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
      },
      {
        "employer": "Stratford High School",
        "title": "Science Teacher",
        "location": "Nashville, TN",
        "dates": "Jun 2009 - Jun 2012",
        "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
      }
    ]
  };


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

$("#main").append(internationalizeButton);

function inName(yourName){
    var nameParts = yourName.trim().split(" ");
    nameParts[1] = nameParts[1].toUpperCase();
    nameParts[0] = nameParts[0].slice(0,1).toUpperCase() + nameParts[0].slice(1).toLowerCase();
    
    return nameParts[0] + " " + nameParts[1];
}


projects.display = function(){
    for (project in projects.projects){
        $("#projects").append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle);
        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);
        for(image in projects.projects[project].images){
            var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
            $(".project-entry:last").append(formattedImage);
        }
        
    }
}

projects.display();


$("#mapDiv").append(googleMap);