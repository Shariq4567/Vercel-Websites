function generateResume(name, profession, email, summary, skills, matric, inter, degreeName ,degreeField,  workExp = "None.") {
    function generateEducation() {
        
        let generatedEducation = ""

        if(matric != "" || inter != "" || degreeName != "" || degreeField != "") {
            generatedEducation = `<p class="left-info-heading">Education</p>
                            <p class="left-info-text">`

        }

        if(matric != "") {
            generatedEducation += `Matriculation from ${matric} School.<br>`
        }
    
        if(inter != "") {
            generatedEducation += `Intermediate from ${inter} College.<br>`
        }

        if(degreeName != "" && degreeField != "") {
            generatedEducation += `${degreeName} Degree in ${degreeField}.`
        }
        
        generatedEducation += `</p>`

        return generatedEducation
    }

    function generateWorkExperience(input) {
        let generatedWorkExperience = "";

        if(input === "None") {
            return `<p class="right-info-heading">Work Experience</p>
                    <p class="sub-heading">${input}</p>`
        }

        generatedWorkExperience += `<p class="right-info-heading">Work Experience</p>`

        let sections = input.split("#").filter(section => section.trim() !== "");

        sections.forEach(section => {
            let parts  = section.split("/");
            let heading = parts.shift();
            generatedWorkExperience += `<p class="sub-heading">${heading}</p>`;

            parts.forEach(part => {
                generatedWorkExperience += `<li>${part}</li>`;
            });
        });

        return generatedWorkExperience;
    }   

    function generateSkills() {
        let generatedSkills = ""
        skills.map(skill => {
            generatedSkills += `${skill}<br>`
        })
        return generatedSkills
    }

    return `<div class="main-container">
                <div class="head-container">
                    <p class="name">${name}</p>
                    <p class="profession">${profession || "Student"}</p>
                </div>
                <div class="details-container">
                    <div class="left-side-info">
                        <div>
                            <p class="left-info-heading">Personal Info</p>
                            <div class="email">
                                <img src="./icons/mail.png" width="25">
                                <a class="left-info-text">${email}</a>
                            </div>
                        </div>
                        <div>
                            ${generateEducation()}
                        </div>
                        <div class="skills">
                            <p class="left-info-heading">Skills</p>
                            <p class="left-info-text">
                                ${generateSkills()}
                            </p>
                        </div>
                    </div>
                    <div class="right-side-info">
                        <div>
                            <p class="right-info-heading">  Summary
                            </p>
                            <p class=".right-info-text">
                                ${summary}
                            </p>
                        </div>
                        <div>
                            ${generateWorkExperience(workExp)}
                        </div>
                        <div>
                            <p class="right-info-heading">
                                References
                            </p>
                            <p class="right-info-text">Available upon request.</p>
                        </div>
                    </div>
                </div>
            </div>`
    }

function handleFormSubmit() {
    const name = document.forms["userInfo"]["name"].value
    const profession = document.forms["userInfo"]["profession"].value
    const email = document.forms["userInfo"]["email"].value
    const workExp = document.forms["userInfo"]["workExp"].value;   const summary = document.forms["userInfo"]["summary"].value
    const skills = document.forms["userInfo"]["skills"].value
    const schoolName = document.forms["userInfo"]["schoolName"].value
    const collegeName = document.forms["userInfo"]["collegeName"].value
    const degreeName = document.forms["userInfo"]["degreeName"].value
    const degreeField = document.forms["userInfo"]["degreeField"].value
    document.body.innerHTML = generateResume(name, profession, email, summary, skills.split(","), schoolName, collegeName, degreeName, degreeField, workExp)
}



