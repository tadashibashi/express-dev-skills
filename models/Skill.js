
// mock database
const skills = [
    {_id: "fed24812feabc35124", name: "HTML5", learned: true, icon: "fa-brands fa-html5"},
    {_id: "fed24812feabc35125", name: "CSS3", learned: true, icon: "fa-brands fa-css3-alt"},
    {_id: "fed24812feabc35126", name: "JavaScript", learned: false, icon: "fa-brands fa-js"},
    {_id: "fed24812feabc35127", name: "Node.js", learned: false, icon: "fa-brands fa-node-js"},
    {_id: "fed24812feabc35128", name: "Express.js", learned: false, icon: "fa-solid fa-truck-fast"},
];

/**
 * Returns the skill or null if it doesn't exist
 */ 
function getOne(id) {
    return skills.find(skill => skill._id === id) || null;
}

/**
 * Get skills array
 */
function getAll() {
    return skills;
}


module.exports = {
    getOne,
    getAll,
};
