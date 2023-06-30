/**
 * @interface Skill
 * @property _id {number}      - db id number
 * @property name {string}     - name of skill
 * @property learned {boolean} - whether skill is learned
 * @property icon {string}     - font awesome icon class string
 */

/**
 * @type Skill[]
 */
const skills = [
    {_id: 12345, name: "HTML5", learned: true, icon: "fa-brands fa-html5"},
    {_id: 12346, name: "CSS3", learned: true, icon: "fa-brands fa-css3-alt"},
    {_id: 12347, name: "JavaScript", learned: false, icon: "fa-brands fa-js"},
    {_id: 12348, name: "Node.js", learned: false, icon: "fa-brands fa-node-js"},
    {_id: 12349, name: "Express.js", learned: false, icon: "fa-solid fa-truck-fast"},
];

// Ticket number for new ids
let currentId = 12350;


/**
 * Returns the skill or null if it doesn't exist
 * @param id {number} - id of the skill
 */ 
function getOne(id) {
    const skill = skills.find(skill => skill._id === id);

    if (skill === undefined) {
        console.trace("Tried to get skill, but it did not exist in db.");
        return null;
    }

    return skill;
}


/**
 * Get skills array
 * @returns {Skill[]}
 */
function getAll() {
    return skills;
}


/**
 * Add a skill to the db
 * @param skillName {string}
 * @param icon {string} font awesome class names
 */
function addOne(skillName, icon = "") {
    skills.push({
        _id: currentId++,
        icon,
        name: skillName,
        learned: false,
    });
}


/**
 * Delete a skill with a certain id from the db
 * @param id {number}
 * @returns {boolean} true if skill with id was deleted, or false if not.
 */
function deleteOne(id) {
    for (let i = 0; i < skills.length; ++i) {
        if (skills[i]._id === id) {
            skills.splice(i, 1);
            return true;
        }
    }

    return false;
}


/**
 * Update a pre-existing skill
 * @param id {number}        - id of the skill to update
 * @param skillName {string} - new name of the skill
 * @param learned {boolean}  - whether skill learned
 * @param icon {string}      - font awesome icon class
 * @returns {boolean} whether skill was updated
 */
function updateOne(id, skillName, learned, icon) {
    const skill = getOne(id);

    if (skill) {
        skill.name = skillName;
        skill.learned = learned;
        skill.icon = icon;
        return true;
    } else {
        console.error(`[Skill updateOne] Attempted to update skill with ${id}, but skill with id was not found`);
        return false;
    }
}


module.exports = {
    getOne,
    getAll,
    addOne,
    deleteOne,
    updateOne,
};
