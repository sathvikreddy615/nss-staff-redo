const staffArticle = document.querySelector("#staff");
const fragment = document.createDocumentFragment();

const addBtn = document.querySelector("#addBtn");
const removeBtn = document.querySelector("#removeBtn");

addBtn.addEventListener("click", () => {

    const buildStaffArticle = () => {

        while (staffArticle.firstChild) {
            staffArticle.removeChild(staffArticle.firstChild)
        }

        for (let i = 0; i < NssDatabase.staff.length; i++) {
            let staffMember = NssDatabase.staff[i];
            let sectionEl = document.createElement("section");
            sectionEl.textContent = `${staffMember.name}: ${staffMember.cohort}`;
            fragment.appendChild(sectionEl);
        }
        staffArticle.appendChild(fragment);   
    }

    buildStaffArticle(); // why pass function here if it is called below?

    const getUserInput = () => {
        const inputName = document.querySelector("#inputName");
        const inputCohort = document.querySelector("#inputCohort");
    
        const newStaffMember = {
            name: inputName.value,
            cohort: inputCohort.value
        }

        NssDatabase.staff.push(newStaffMember);
        saveDatabase(NssDatabase, "Nss-database");
        buildStaffArticle();

        inputName.value = "";
        inputCohort.value = "";
    }

    getUserInput();
   
});

removeBtn.addEventListener("click", () => {
    if(staffArticle.lastChild) {
        staffArticle.removeChild(staffArticle.lastChild);
        NssDatabase.staff.pop();
    }
});