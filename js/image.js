export default class Image {
    constructor(src,text,width,height){
        this.src = src;
        this.text = text;
        this.width = width;
        this.height = height;
    }

    render(){
        return `<img src="${this.src}" alt="${this.text}" width="${this.width}" height="${this.height}">`;
    }
}