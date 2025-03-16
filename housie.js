const a=[];
    for(b=1;b<=90;b++)
    {
      a.push(b)
    }
    const cr=document.querySelector(".number-chart")
    for(i=0;i<90;i++){
      const el=document.createElement("div")
      const tx=document.createTextNode(`${a[i]}`)
      el.appendChild(tx)
      cr.appendChild(el)
    }
    function rest(){
      
      a.length=0
      c.textContent="--"
      for(v=1;v<=90;v++){
        const cr2=document.querySelector(`.number-chart div:nth-child(${v})`)
        a.push(v)
        cr2.style.background="white"
        cr2.style.border="solid green 1px"
      }
    }
    const c=document.querySelector("#one")
    const d=Math
    function next(){
      let f=a[d.floor(d.random()*a.length)]
      if (a.length==0){
        c.textContent="--"
      }
      else if (f==undefined || f==null){
        f=a[0]
        c.textContent=a[0]
      }
      else if (a.length<=90){
        c.textContent=f
      }

      const cr2=document.querySelector(`.number-chart div:nth-child(${f})`)
      cr2.style.background="rgb(0,255,0,0.6)"
      cr2.style.border="solid black 1px"
      a.splice(a.indexOf(f),1)
    }
    
    