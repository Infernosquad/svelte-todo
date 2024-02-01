export default class TodoItem {
  public id: number;

  public text: string;

  public completed: boolean;

  constructor() {
    this.completed = false;
    this.text = '';
    this.id = (new Date()).getTime();
  }
}
