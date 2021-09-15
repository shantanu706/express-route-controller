let count = 0;

exports.birdModel= function birdModel(name,origin){
    this.name=name;
    this.origin=origin;
    this.counter=++count;
}
