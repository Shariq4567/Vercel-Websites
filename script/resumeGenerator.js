export default async function generateResume(name, profession = "Student", email, summary, skills, matric = "", inter = "", degreeName = "",degreeField = "",  workExp = "None.") {
    const generatedSkills = "";
    skills.split(',').map((skill) => {
        generatedSkills + `${skill}<br>`
    })

    function generateEducation() {
        const generatedEducation = ""
        if(matric.trim() !== "") {
            generatedEducation + `Matriculation from ${matric} School<br>`
        }
        if(inter.trim() !== "") {
            generatedEducation + `Intermediate from ${inter} College`
        }

        if(degreeName.trim() !== "" && degreeField.trim() !== "") {
            generatedEducation + `${degreeName} Degree in ${degreeField}`
        }
        return `<p class="left-info-heading">Education</p>
                            <p class="left-info-text">
                                ${generatedEducation}
                            </p>`

    }  
    
    function generateWorkExperience() {
        const generatedWorkExperience = ""
        if(workExp.trim().split("/").length !== 0) {
            generatedWorkExperience + `<p class="right-info-heading">Work Experience</p><ul>`
            workExp.split("/").map(word => {
                word.includes("#") ? (generatedWorkExperience + `<p class="sub-heading">
                ${word}
            </p>`) : (generatedWorkExperience + `<li>${word}</li>`)
            })
        }
    }

    return `<div class="main-container">
                <div class="head-container">
                    <p class="name">${name}</p>
                    <p class="profession">${profession}</p>
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
                                ${generatedSkills}
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
                            ${generateWorkExperience()}
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