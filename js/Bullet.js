/*총알을 정의한다.*/
class Bullet{
    /*변수(Property), 함수(Method)*/
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
        //총알의 모습을 설정해본다
        this.img.src=this.src;
        this.img.style.width=this.width+"px";
        this.img.style.height=this.height+"px";
        //총알의 위치
        this.img.style.position="absolute";
        this.img.style.left=this.x+"px";
        this.img.style.top=this.y+"px";
        //부모요소에 부착
        this.container.appendChild(this.img);

    }
    //물리량 변화
    tick(){
        this.x+=this.velX;
        this.y+=this.velY;

        //나와 적군 충돌의 충돌 확인(총알인 나와 적군은 1:多)
        //화면에 ㅡ존재하는 모든 적군을 대상으로 충돌 검사
        //만일 적군과 총알인 내가 충돌하게 된다면, 제거 대상은 적군 뿐 아니라 총알도 포함
        //객체 자체는 무형의 단위일 뿐 style을 가질 수 없다.
            //그 객체의 인스턴스가 가진 멤버변수 중 우리는 img를 사용할 것
        for(var i=0;i<enemyArray.length;i++){
            var hitResult=hitTest(this.img,enemyArray[i].img);
            if(hitResult){
                removeObject(this.container, enemyArray[i].img, enemyArray, i);
                removeObject(this.container, this.img, bulletArray, bulletArray.indexOf(this));
            }
        }

        //총알은 날아가다가, 자신이 스크린을 벗어난다면 자살.
        if(this.x>screen.width){
            var index = bulletArray.indexOf(this);
            removeObject(this.container, this.img, bulletArray, index);
        }
    }
    //그래픽적 처리
    render(){
        this.img.style.left=this.x+"px";
        this.img.style.top=this.y+"px";
    }
}