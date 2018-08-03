export class Galactic{
  constructor(dateString) {
    this.dateString = dateString;
    this.today = new Date(2018, 7, 3);
    this.birthDate = new Date(this.dateString);
    this.age = this.today.getFullYear() - this.birthDate.getFullYear();
  }
  getAge() {
    return this.age;
  }
  getAgeSeconds() {
    let seconds = parseInt((this.today - this.birthDate)/1000);
    return seconds;
  }

  mercury(){
    let mercuryAge = this.age / .24;
    return mercuryAge;
  }

  venus(){
    let venusAge = this.age / .62;
    return venusAge;
  }

  mars(){
    let marsAge = this.age / 1.88;
    return marsAge;
  }

  jupiter(){
    let jupiterAge = this.age / 11.86;
    return jupiterAge;
  }



}
