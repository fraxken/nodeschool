// nouveau tableau avec que les id du tableau ArrayOnlyAlarms
const idsArrayOnlyAlarms = new Set(...ArrayOnlyAlarms.map((item) => item.id));
console.log('new tableau', idsArrayOnlyAlarms)

// comparaison
cpt = ids.filter((id) => idsArrayOnlyAlarms.has(id)).length;

return cpt === ids.length