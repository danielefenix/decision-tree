var DecisionTree = require('decision-tree');

var training_data = [
	{"color":"blue", "shape":"square", "liked":false},
	{"color":"red", "shape":"square", "liked":false},
	{"color":"blue", "shape":"circle", "liked":true},
	{"color":"red", "shape":"circle", "liked":true},
	{"color":"blue", "shape":"hexagon", "liked":false},
	{"color":"red", "shape":"hexagon", "liked":false},
	{"color":"yellow", "shape":"hexagon", "liked":true},
	{"color":"yellow", "shape":"circle", "liked":true}
];

var class_name = "liked";

var features = ["color", "shape"];

var dt = new DecisionTree(training_data, class_name, features);

function predict(instance) {

  var predicted_class = dt.predict(instance);

  return  predicted_class;

}

module.exports = {

  predict : predict

}
