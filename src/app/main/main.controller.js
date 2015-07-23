class MainController {
  constructor () {
    'ngInject';

    this.todos = [
        {text: "Learn Clojure"}
    ];
    this.newTodo = {};
  }

  onAdd(newTodo) {
      this.todos.push(newTodo);
      this.newTodo = {};
  }
}

export default MainController;
