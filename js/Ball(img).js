class Ball{
    //new 연산자에 의해 호출되는 메서드를 생성자 메서드라 하고,
    //생성자 메서드의 목적인 이 객체가 인스턴스화 될 때, 즉 사물이
    //탄생할 때 알맞는 개성을 부여하기 위함이다.
    //공의 모습, 상태 등(형용사적) 사실은 변수 값.

    constructor(container,src,width,height,velX,velY){
        //객체와 함께 살아감. 즉, 객체가 죽을 때 같이 죽음.
        //따라서 this로 명시된 객체가 보유한 변수를 가리켜 멤버변수라 한다.
        this.container=container;//어디에 붙일지 결정하지 말고, 호출자가 결정하도록
        this.src=src;//어디에 붙일지 결정하지 말고, 호출자가 결정하도록
        this.width=width;
        this.height=height;
        this.x=0;
        this.y=0;
        this.velX=velX;//좌우 결정, +증가-감소
        this.velY=velY;//상하 결정, +증가-감소
        this.limitY=parseInt(this.container.style.height);//공의 y축한계점=wrapper의 크기
        this.limitX=parseInt(this.container.style.width);//공의 x축한계점=wrapper의 크기
        this.r=0;//각도
        
        this.img = document.createElement("img");//공을 감쌀 div
        this.img.style.width=this.width+"px";
        this.img.style.height=this.height+"px";
        this.img.src=this.src;
        //this.div.style.background="blue";
        this.img.style.position="absolute";
        this.img.style.left=0+"px";
        this.img.style.top=0+"px";
        this.img.style.padding=0+"px";
    
        this.container.appendChild(this.img);
    }
    //공의 동작!
    move(){
        this.x=this.x+this.velX;
        this.y=this.y+this.velY;

        if(this.y>=this.limitY-this.height||this.y<0){ //밑바닥에 도달하면!!!
            this.velY*=-1;
        }if(this.x>=this.limitX-this.width||this.x<0){ //밑바닥에 도달하면!!!
            this.velX*=-1;
        }
        this.img.style.left=this.x+"px"
        this.img.style.top=this.y+"px"
        this.r++;
        this.img.style.transform="rotate("+this.r+"deg}";
    }
}