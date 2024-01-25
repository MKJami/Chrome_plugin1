```javascript
const techniques = [
    "Pair Programming: Two programmers work together at one workstation.",
    "Code Review: Review code by others to catch mistakes and learn new techniques.",
    "Test-Driven Development: Write tests before you write the actual code.",
    "Continuous Integration: Merge all developers' working copies to a shared mainline several times a day.",
    "Refactoring: Restructure existing code without changing its external behavior to improve nonfunctional attributes.",
    "Agile Development: A set of principles for software development under which requirements and solutions evolve through the collaborative effort of self-organizing cross-functional teams.",
    "Scrum: An agile framework for managing knowledge work, with an emphasis on software development.",
    "Kanban: A scheduling system for lean and just-in-time manufacturing, Kanban is a system to control the logistical chain from a production point of view.",
    "Waterfall Model: A sequential design process, used in software development processes, in which progress is seen as flowing steadily downwards (like a waterfall) through the phases of conception, initiation, analysis, design, construction, testing, production/implementation, and maintenance."
];

function generateTechnique() {
    const randomIndex = Math.floor(Math.random() * techniques.length);
    return techniques[randomIndex];
}

export { techniques, generateTechnique };
```