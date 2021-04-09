console.log("Loaded")


const defaultRules = {
    "A": "ABA",
    "B": "BBB"
}


class LSYS {
    constructor (axiom = "A", rules = defaultRules) {
        this.canvas = document.querySelector('canvas')
        this.ctx = null
        this.init()
        this.axiom = axiom
        this.rules = rules
    }
    init () {
        if (this.canvas) {
            this.ctx = this.canvas.getContext('2d')
        }
    }
}




const lsys = new LSYS()