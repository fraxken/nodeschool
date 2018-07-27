// -> Définissez un objet appelé `Robot`
// -> Équipez-le d’une méthode appelée `new`
// -> Quand `Robot.new` est appelé, il devrait renvoyer un nouvel objet
//    dont le prototype serait `Robot`.  Par exemple :
//
//    var robby = Robot.new();
//    // `Robot` devrait être le prototype de `robby`

const Robot = {
	new: function() {
		return Object.create(Robot);
	}
}
const robby = Robot.new();

// -----------------------------------------------------
// Export CommonJS pour le vérificateur, n’y touchez pas
module.exports = {
	Robot: Robot
};
