function loop(a,b,c){
 const f=b,m=a,l=m.length;
 let i=0;
 if(c!==true){
	while(i<l){f(m[i]);++i;}
 }else{
	while(i<l){if(f(m[i])!==true){++i;}else{break;};}
 }
}
loop([1,2,3],function(x){console.log(x);});//123
loop([1,2,3],function(x){console.log(x);return x===2;});//123
loop([1,2,3],function(x){console.log(x);return x===2;},true);//12
