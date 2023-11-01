import Person from "./Person";

// Class for Directory
class Directory{
  #list; // private list

  //Constructor for Directory class
  constructor() {
    let initialData = new Person("Hello", 23);
    this.#list = [initialData];
  }
    
  // Add person in private list
  addItem(){
    let newName = Math.random().toString(36).substring(2, 7)
    let newAge = Math.floor(Math.random() * 100)
    let newData = new Person(newName, newAge)
    this.#list.push(newData)
  }
    
  // Update person details in private list 
  updateDetails(index){
    //Remove current name and replace with blank
    this.#list[index].setName("");
  }
  
  // Get private list
  getList() {
    return [...this.#list];
  }
}
  
export default Directory