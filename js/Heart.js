class Hp{
    constructor(container, src, width, height, x, y, velX, velY){
        //멤버 변수(객체와 생명을 같이 하는 변수)
        this.container=container;
        this.img=document.createElement("img");
        this.src=src;
        this.width=width;
        this.height=height;
        this.x=x;
        this.y=y;

        //HP 모습을 설정해본다
        this.img.src=this.src;
        this.img.style.width=this.width+"px";
        this.img.style.height=this.height+"px";
        //HP 위치
        this.img.style.position="absolute";
        this.img.style.left=this.x+"px";
        this.img.style.top=this.y+"px";
        //부모요소에 부착
        this.container.appendChild(this.img);

    }
}