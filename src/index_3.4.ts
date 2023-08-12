type HasName = {
  name: string
}

type Family<Parent extends HasName, Child extends HasName> = {
  mother: Parent
  father: Parent
  child: Child
}

const familyObj: Family< {name: string }, {name: string}> = {
  mother: {name: "tarou"},
  father: {name: "kiyohiko"},
  child: {name: "ru-mae"}
}
console.log(familyObj.mother);