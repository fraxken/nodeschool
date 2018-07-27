// -> Créez trois objets : `machine`, `robot` et `vehicle`
// -> Dans la définition de `machine` définissez une propriété `parts`
//    et donnez-lui comme valeur un tableau vide `[]`
// -> Dans la définition de `machine` toujours, définissez une propriété
//    `capabilities` et donnez-lui comme valeur un objet vide `{}`
const machine = {
	parts: [],
	capabilities: {}
};
const robot = {};
const vehicle = {};

// -> Changeons le prototype de `robot` et `vehicle` pour utiliser `machine`
robot.__proto__ = machine;
vehicle.__proto__ = machine;

// -> Que vaut `robot.parts` ?
claim(robot.parts, []);

// -> Que vaut `vehicle.parts` ?
claim(vehicle.parts, []);

// -> Que vaut `robot.capabilities` ?
claim(robot.capabilities, {});

// -> Que vaut `vehicle.capabilities` ?
claim(vehicle.capabilities, {});

// -> Ajoutons une pièce 'core' au robot
robot.parts.push('core');

// -> Que vaut `robot.parts` désormais ?
claim(robot.parts, ['core']);

// -> Que vaut `vehicle.parts` désormais ?
claim(vehicle.parts, ['core']);

// -> Ajoutons une compétence au véhicule
vehicle.capabilities.fly = true;

// -> Que vaut `robot.capabilities` désormais ?
claim(robot.capabilities, {fly: true});

// -> Que vaut `vehicle.capabilities` désormais ?
claim(vehicle.capabilities, {fly: true});


// -----------------------------------------------------
// Export CommonJS pour le vérificateur, n’y touchez pas
module.exports = {
	machine: machine,
	vehicle: vehicle,
	robot:   robot
};
