var work = {
	"jobs": [
	{
		"employer": "Rodriguez Angobaldo Abogados",
		"title": "Junior Associate",
		"location": "San Isidro, Lima - Perú",
		"dates": "2014 - 2016",
		"description": "Bank and Financial Law - Recovery Area"
	},
	{
		"employer": "Aramburu, Camino & Boero Asociados",
		"title": "Paralegal",
		"location": "Miraflores, Lima - Perú",
		"dates": "2013-2014",
		"description":"Civil and Family Law"
	},
	{
		"employer": "Vega & Asociados",
		"title": "Intern",
		"location": "Miraflores, Lima - Perú",
		"dates": "2011 - 2013",
		"description": "Immigration Law"
	},
	{
		"employer": "Torres, Portocarrero & Richter Asociados",
		"title": "Intern",
		"location": "Miraflores, Lima - Perú",
		"dates": "2009 - 2011",
		"description": "Labor Law"
	}
]
};

var personal = {
	"birth": "Date of Birth",
	"date": "February 5th, 1989",
	"place": "Place of Birth", 
	"city": "Chincha, Ica- Perú"
};

var bio = {
	"name": "Pierina Canales Saez",
	"role": "Front-End Ninja",
	"contacts": {
		"mobile": "(+511)965363168",
		"email": "pierina.cs@gmail.com",
		"github": "PierinaCS",
		"location": "Lima - Perú"
	},
	"skills": [
	"LAW", "HTML - Beginner", "CSS - Beginner", "JS - Beginner"
	],
	"bioPic": "images/me.jpeg"
};

var education = {
	"schools": [
	{
		"name": "USMP University",
		"location": "La Molina, Lima - Perú",
		"degree": "Corporate Lawyer",
		"dates": "2007 - 2015",
		"url": "http://www.derecho.usmp.edu.pe/"
	},
	{
		"name": "Divina Providencia High School",
		"location": "Chincha, Ica - Perú",
		"degree": "Student",
		"dates": "2001 - 2005"
	}
	],
	"onlineClasses":[
		{
			"title": "Intro to HTML and CSS",
			"school": "Udacity",
			"dates": "2016",
		},
		{
			"title": "Programming Foundations With Python",
			"school": "Udacity",
			"dates": "2016",
		},
		{
			"title": "JavaScript Basics",
			"school": "Udacity",
			"dates": "2016",
		}
	]
}

var name = bio.name;
var formattedName = HTMLheaderName.replace("%data%", name);

$("#header").prepend(formattedName);

var mobile = bio.contacts.mobile;
var formattedMobile = HTMLmobile.replace("%data%", mobile);
$("#topContacts").append(formattedMobile);

var email = bio.contacts.email;
var formattedEmail = HTMLemail.replace("%data%", email);
$("#topContacts").append(formattedEmail);

var github = bio.contacts.github;
var formattedGithub = HTMLgithub.replace("%data%", github);
$("#topContacts").append(formattedGithub);

var _location = bio.contacts.location;
var formattedLocation = HTMLlocation.replace("%data%", _location);
$("#topContacts").append(formattedLocation);

var bioPic = bio.bioPic;
var formattedBioPic = HTMLbioPic.replace("%data%", bioPic);
$("#header").append(formattedBioPic);

var skills = bio.skills;
$("#header").append(HTMLskillsStart);

var formattedSkills = HTMLskills.replace("%data%", bio.skills[0]);
$("#skills").append(formattedSkills);

var formattedSkills = HTMLskills.replace("%data%", bio.skills[1]);
$("#skills").append(formattedSkills);

var formattedSkills = HTMLskills.replace("%data%", bio.skills[2]);
$("#skills").append(formattedSkills);

var formattedSkills = HTMLskills.replace("%data%", bio.skills[3]);
$("#skills").append(formattedSkills);

function displayWork() {

	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;

		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);

		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		$(".work-entry:last").append(formattedLocation);

		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	}
}

displayWork();

function displayEducation() {
	for (school in education.schools) {
		$("#education").append(HTMLschoolStart);

		var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		var formattedNameDegree = formattedName + formattedDegree;

		$(".education-entry:last").append(formattedNameDegree);

		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		$(".education-entry:last").append(formattedDates);

		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		$(".education-entry:last").append(formattedLocation);
	}
}

displayEducation();

function displayOnlineClasses() {
	$("#online").append(HTMLonlineClasses);
	for (onlineClass in education.onlineClasses) {			
	

		var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineClasses[onlineClass].title);
		var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineClasses[onlineClass].school);
		var formattedSchoolTitle = formattedTitle + formattedSchool

		$(".education-entry:last").append(formattedSchoolTitle);	

		var formattedDates = HTMLonlineDates.replace("%data%", education.onlineClasses[onlineClass].dates);
		$(".education-entry:last").append(formattedDates);
	}
}

displayOnlineClasses();

function displayPersonal() {
	$("#personal").append(HTMLpersonalStart);

	var formattedBirth = HTMLpersonalBirth.replace("%data%", personal.birth);
	$(".personal-entry:last").append(formattedBirth);

	var formattedDate = HTMLpersonalDate.replace("%data%", personal.date);
	$(".personal-entry:last").append(formattedDate);

	var formattedPlace = HTMLpersonalPlace.replace("%data%", personal.place);
	$(".personal-entry:last").append(formattedPlace);

	var formattedCity = HTMLpersonalCity.replace("%data%", personal.city);
	$(".personal-entry:last").append(formattedCity);
}

displayPersonal();