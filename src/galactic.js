export class Galactic{
  constructor(dateString) {
    this.dateString = dateString;
    this.today = new Date();
    this.birthDate = new Date(this.dateString);
    this.age = this.today.getFullYear() - this.birthDate.getFullYear();
  }
  getAge() {
    return this.age;
  }




}
