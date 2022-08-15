const student = {
    stack: ['HTML'],
    level: 1,
    improveLevele () {
        this.level += 1;
        if (this.level === 2) {
            this.stack.push('CSS');
        } else if (this.level === 3) {
            this.stack.push('JavaScript');
        } else if (this.level === 4) {
            this.stack.push('React');
        } else if (this.level === 5) {
            this.stack.push('NodeJS');
        } else {
            alert ('This student its does know all that techtology.');
            console.log(this);
        }
        return this;
    }   
}

student
    .improveLevele()
    .improveLevele()
    .improveLevele()
    .improveLevele()
    .improveLevele();