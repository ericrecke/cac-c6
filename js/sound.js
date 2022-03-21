export default class Sound {
    constructor(src, type, autoplay){
        this.src = src;
        this.type = type;
        this.autoplay = autoplay;
    }
    render(){
        let isAutoplay = this.autoplay === true ? "autoplay" : "";
        return `<audio controls ${isAutoplay}> <source src="${this.src}" type="${this.type}"> </audio>`
    }
}