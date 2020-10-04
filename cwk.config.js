export default {
  participants: ["Joren", "Felix", "Arjan", "Cornelis"],
  title: "Java Workshop",
  target: "terminal",
  targetOptions: {
    cmd: "javac Foo.java && java Foo",
    excludeFromWatch: ["**/*.class"],
  },
};
