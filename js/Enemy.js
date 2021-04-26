/**적군을 정의한다 */
//상태 : 변수(속성) / 동작 : 함수(메서드)
class Enemy{
    constructor(container, src, width, height, x, y, velX, velY){
        //멤버 변수(객체와 생명을 같이 하는 변수)
        this.container=container;
        this.img=document.createElement("img");
        this.src=src;
        this.width=width;
        this.height=height;
        this.x=x;
        this.y=y;
        this.velX=velX;
        this.vetY=velY;
        //적군의 모습을 설정해본다
        this.img.src=this.src;
        this.img.style.width=this.width+"px";
        this.img.style.height=this.height+"px";
        //적군의 위치
        this.img.style.position="absolute";
        this.img.style.left=this.x+"px";
        this.img.style.top=this.y+"px";
        //부모요소에 부착
        this.container.appendChild(this.img);

    }
    tick(){
        this.x+=this.velX;
        this.y+=this.velY;

        //내가 화면의 음수값을 가질 때 즉 좌측 한계점을 지나면 제거
        if(this.x<0){
            var index = bulletArray.indexOf(this);
            removeObject(this.container, this.img, enemyArray, enemyArray.indexOf(this));
        }
    }
    //그래픽적 처리
    render(){
        this.img.style.left=this.x+"px";
        this.img.style.top=this.y+"px";
    }
}