interface Person {
  name: string;
}

function wrap<T>(object: T) {
  return { object };
}

const jw: Person = {
  name: 'jwjw',
};

const me = wrap(jw);

console.log(me.object.name);
