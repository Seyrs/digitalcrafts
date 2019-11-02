class Villain extends Person {
    constructor(name) {
        super(name);
    }
    render() {
        return `
        <div class="villain">
            <img src="./villain.jpeg"/>
            <div class="health"> ${this.health}</div>
        </div>
        `
    }
}