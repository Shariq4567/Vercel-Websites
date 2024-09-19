function generateResume(name, profession, email, summary, skills, matric, inter, degreeName ,degreeField,  workExp = "None.") {
    function generateEducation() {
        
        let generatedEducation = ""

        if(matric != "" || inter != "" || degreeName != "" || degreeField != "") {
            generatedEducation = `<p class="left-info-heading">Education</p>
                            <p class="left-info-text">`

        }

        if(matric != "") {
            generatedEducation += `<textarea class="left-info-text">Matriculation from ${matric} School.</textarea>`
        }
    
        if(inter != "") {
            generatedEducation += `<textarea class="left-info-text">Intermediate from ${inter} College.</textarea>`
        }

        if(degreeName != "" && degreeField != "") {
            generatedEducation += `<textarea class="left-info-text">${degreeName} Degree in ${degreeField}.</textarea>`
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
            generatedWorkExperience += `<textarea class="sub-heading">${heading.trim()}</textarea>`;

            parts.forEach(part => {
                generatedWorkExperience += `<li class="right-textarea-align"><textarea class="right-info-text">${part.trim()}</textarea></li>`;
            });
        });

        return generatedWorkExperience;
    }   

    function generateSkills() {
        let generatedSkills = ""
        skills.map(skill => {
            generatedSkills += `<textarea class="left-info-text">${skill.trim()}</textarea>`
        })
        return generatedSkills
    }

    return `<div class="main-container">
                <div class="head-container">
                    <input class="name" value=${name.trim()}>
                    <input class="profession" value=${profession.trim() || "Student"}>
                </div>
                <div class="details-container">
                    <div class="left-side-info">
                        <div>
                            <p class="left-info-heading">Personal Info</p>
                            <div class="email">
                                <img src="./icons/mail.png" width="25" height="25">
                                <textarea class="left-info-text">${email.trim()}</textarea>
                            </div>
                        </div>
                        <div>
                            ${generateEducation()}
                        </div>
                        <div class="skills">
                            <p class="left-info-heading">Skills</p>
                                ${generateSkills()}
                        </div>
                    </div>
                    <div class="right-side-info">
                        <div>
                            <p class="right-info-heading">  Summary
                            </p>
                            <textarea class="right-info-text">
                                ${summary.trim()}
                            </textarea>
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
    const workExp = document.forms["userInfo"]["workExp"].value;
    const summary = document.forms["userInfo"]["summary"].value
    const skills = document.forms["userInfo"]["skills"].value
    const schoolName = document.forms["userInfo"]["schoolName"].value
    const collegeName = document.forms["userInfo"]["collegeName"].value
    const degreeName = document.forms["userInfo"]["degreeName"].value
    const degreeField = document.forms["userInfo"]["degreeField"].value
    document.body.innerHTML = generateResume(name, profession, email, summary, skills.split(","), schoolName, collegeName, degreeName, degreeField, workExp)
}



