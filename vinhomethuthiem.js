function stripTags(strx,chop)
	{
	if(strx.indexOf("<")!=-1)
		{
		var s=strx.split("<");
		for(var i=0;
		i<s.length;
		i++)
			{
			if(s[i].indexOf(">")!=-1)
				{
				s[i]=s[i].substring(s[i].indexOf(">")+1,s[i].length)
			}
		}
		strx=s.join("")
	}
	chop=(chop<strx.length-1)?chop:strx.length-2;
	while(strx.charAt(chop-1)!=' '&&strx.indexOf(' ',chop)!=-1)chop++;
	strx=strx.substring(0,chop-1);
	return strx+'.'
}
function readmore(id)
	{
	var summ=summary;
	var p=document.getElementById(id),imgtag="",img=p.getElementsByTagName("img");
	if(img.length>=1)
		{
		imgtag='<div class="thumb-wrapper"><a class="post-thumb" href="'+x+'"><img class="thumb" src="'+img[0].src+'" style="max-width:100%" /><span>Read More</span></a></div>'
	}
	else
		{
		imgtag='<div class="no-img"/>'
	}
	p.innerHTML=imgtag+'<div class="post-content"><h2 class="post-title"><a href="'+x+'">'+y+'</a></h2><p>'+stripTags(p.innerHTML,summ)+'</p><div class="meta"><span class="ico16 ico16-calendar">'+w+'</span><span id="tag2" class="ico16 icon-user">'+v+'</span><span class="ico16 ico16-link"><a class="mainbutton fr" href="'+x+'">Đọc thêm</a></span></div></div>'
}
var summary = 260;

eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('a(e).b(f(){0 1=g 2();0 4=6[1.k()];0 5=1.i();0 8=3[1.h()];0 7=1.l();a(\'#2\').j(4+\' \'+5+\' \'+8+\' \'+7);9();c.d(9,F)});0 6=[\'m - \',\'y - \',\'x - \',\'A - \',\'B - \',\'E - \',\'D - \'];0 3=[\'C, \',\'w, \',\'v, \',\'p, \',\'o, \',\'n, \',\'q, \',\'r, \',\'u, \',\'t, \',\'s, \',\'z, \'];',42,42,'var|currentTime|Date|months|currentDay|currentDate|days|currentYear|currentMonth|clock|jQuery|ready|window|setInterval|document|function|new|getMonth|getDate|text|getDay|getFullYear|Sunday|June|May|April|July|August|November|October|September|March|February|Tuesday|Monday|December|Wednesday|Thursday|January|Saturday|Friday|1000'.split('|'),0,{}))

eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('B 2a(e){(B(t){3 n={Z:"",1h:5,1S:5,1j:5,P:"#12",q:1l,1m:"",1k:"2o",F:"",27:W,1J:W,1u:1y,2c:W,1e:28,1b:"1s 1t",21:"26 20 �",1w:"2x://1.2z.2E.2D/-2C/2B/2l/2n/2r/2q.2p",1v:2y,1a:"1s 1t",1A:["2m","2i","2h","2j","2k","2s","2t","2A","2v","2u","2w","2g"],1n:"",2F:1y};n=t.24({},n,e);3 r=0,i=1l,s=1l;2(!n.P){22.1Z(\'<k 1o="12"></k>\');n.P="#12"}3 o=B(e,o){r++;2(e.15.14){J(3 a=0,f=e.15.14.j;a<f;a++){3 l,c,h,p,d,v,m,y,w,E,S,x,T=e.15.14[a];3 T=e.15.14[a];J(3 N=0,C=T.G.j;N<C;N++){2(T.G[N].19=="2d"){l=T.G[N].Q;1E}}J(3 L=0,A=T.G.j;L<A;L++){2(T.G[L].19=="2e"&&T.G[L].2b=="1O/29"){v=T.G[L].I.25(" ")[0];1E}}c="1F"11 T?T.1F.$t:"1f"11 T?T.1f.$t:"";3 O=/<Y\\b[^<]*(?:(?!<\\/Y>)<[^<]*)*<\\/Y>/2f;d=t("<k></k>").1I(c.D(O,""));m=d.23("1H");p="1p$1V"11 T?T.1p$1V.2K.D(/\\/s[0-9]+\\-c/g,"/s"+n.1v+"-c"):m.j!=0?m[0].1x:n.1w;c=c.D(/<\\S[^>]*>/g,"");2(c.j>n.1e){c=c.U(0,n.1e)+""}h=T.I.$t;y=T.1i.$t.U(0,10);w=y.U(0,4);E=y.U(5,7);S=y.U(8,10);x=n.1A[1K(E,10)-1];2(13.Q.1C()!=l.1C()){u(l,h,p,c,w,S,x,v)}}}2(r>=n.q.j){s.K("6","");t("#1Q-M-1M",i).1B();2(n.1h>0){t("X:30("+(n.1h-1)+")",s).1B()}}};3 u=B(e,r,i,o,u,a,c,p){3 d=t("X",s);J(3 v=0,m=d.j;v<m;v++){3 y=t("a",d.H(v));3 b=f(y);2(y.K("Q")==e){l(y,++b);J(3 w=v-1;w>=0;w--){3 E=t("a",d.H(w));2(f(E)>b){2(v-w>1){d.H(w).2Y(d.H(v))}R}}2(v>0){d.H(0).2M(d.H(v))}R}}s.1I(\'<X><k 6="2N 1c-1g 1G-M X"><a 6="1c-1g 1q-2O-2L" Q="\'+e+\'" I="\'+(n.F?n.F.D("d",1):"")+\'"><1H  6="2G" 1d="\'+r+\'" 1x="\'+i+\'"/></a><a 6="1c-1g 1G-M-I" Q="\'+e+\'" I="\'+(n.F?n.F.D("d",1):"")+\'">\'+r+\'</a><k 6="2H">\'+(n.1J===W?\'<z 6="2I\'+(n.1u===W?" 2J":"")+\'"><z 6="2P">\'+a+\'</z> <z 6="2Q">\'+c+\'</z> <z 6="2W">\'+u+"</z></z>":"")+"</k><p 6=\'1q-1f\'>"+o+"</p></k></X>")};3 f=B(e){3 t=1K(e.K("1D"));R t>0?t:1};3 l=B(e,t){e.K("1D",t);2(n.F){e.K("I",n.F.D("d",t))}2(n.1n){e.K("6",n.1n+t)}};3 c=B(){2(n.P!="#12"){3 e=t(n.P);2(e.j!=1){R}i=t(\'<k 1o="12"></k>\').V(e)}18{i=t(n.P)}2(!n.q){n.q=[];t(\'a[19="2X"]:2V(\'+n.1S+")").2U(B(){3 e=t.2R(t(2S).1O().D(/\\n/g,""));2(t.2T(e,n.q)==-1){n.q[n.q.j]=e}})}2(n.q.j==0&&!n.1a){R}2(n.q.j==0){t("<16><z>"+n.1a+"</z></16>").V(i)}18{2(n.1b){t("<16><z>"+n.1b+"</z></16>").V(i)}}2(n.1m){t(\'<k 1o="1Q-M-1M">\'+n.1m+"</k>").V(i)}s=t("<1P "+(n.1k?\'6="\'+n.1k+\'"\':"")+"></1P>").V(i);2(n.q.j==0){t.1X((n.Z===""?17.13.1U+"//"+17.13.1Y:n.Z)+"/1W/M/1r?1N-1L="+n.1j+"&1R=1i&1d=1T-11-Y",o,"1z")}18{J(3 r=0;r<n.q.j;r++){t.1X((n.Z===""?17.13.1U+"//"+17.13.1Y:n.Z)+"/1W/M/1r/-/"+n.q[r]+"?1N-1L="+n.1j+"&1R=1i&1d=1T-11-Y",o,"1z")}}};c()})(2Z)}',62,187,'||if|var|||class|||||||||||||length|div||||||tags|||||||||span||function||replace||relevantTip|link|eq|title|for|attr||posts|||containerSelector|href|return|||substring|appendTo|true|li|script|blogURL||in|related_posts|location|entry|feed|h4|window|else|rel|recentTitle|relatedTitle|wpex|alt|rlt_summary|summary|widget|maxPosts|published|maxPostsPerTag|loadingClass|null|loadingText|postScoreClass|id|media|rcnt|default|Related|Posts|DateFloat|rlt_thumb|rlpBlank|src|false|jsonp|MonthNames|remove|toLowerCase|score|break|content|recent|img|append|ShowDate|parseInt|results|loadingtext|max|text|ul|related|orderby|maxTags|json|protocol|thumbnail|feeds|get|host|write|more|readMoretext|document|find|extend|split|Read|ShowComment|100|html|relatedPostsWidget|type|ShowDesc|alternate|replies|gi|Dec|Mar|Feb|Apr|May|AAAAAAAABAU|Jan|e7XkFtErqsU|loadingxx|gif|grey|s1600|Jun|Jul|Oct|Sep|Nov|http|70|bp|Aug|Tp0KrMUdoWI|htG7vy9vIAA|com|blogspot|onLoad|label_thumb|info|date|floatd|url|thumb|before|clearfix|psts|dd|dm|trim|this|inArray|each|lt|dy|tag|after|jQuery|gt'.split('|'),0,{}))

eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('1z 1A(e){z.q(\'<16 B="H-J-L-I">\');15(j t=0;t<1b;t++){j n=e.Y.W[t];j r=n.N.$t;j i;k(t==e.Y.W.P)17;15(j o=0;o<n.A.P;o++){k(n.A[o].14=="1y"&&n.A[o].1x=="1u/1v"){j u=n.A[o].N;j f=n.A[o].C}k(n.A[o].14=="1B"){i=n.A[o].C;17}}j l;1C{l=n.1I$13.1a}1J(h){s=n.O.$t;a=s.U("<19");b=s.U(\'V="\',a);c=s.U(\'"\',b+5);d=s.1H(b+5,c-b-5);k(a!=-1&&b!=-1&&c!=-1&&d!=""){l=d}G l="1G://1.1D.1E.1F/-1t/1s/1g/1h/1f/1j.1e"}j p=n.1c.$t;j v=p.F(0,4);j m=p.F(5,7);j g=p.F(8,10);j y=1d 1i;y[1]="1k";y[2]="1q";y[3]="1r";y[4]="1p";y[5]="1L";y[6]="1o";y[7]="1l";y[8]="1m";y[9]="1n";y[10]="1K";y[11]="24";y[12]="22";z.q(\'<Q B="20 H-J-L-I-Q">\');k(25==D)z.q(\'<a B="H-J-L-I-13" C="\'+i+\'" M ="K"><19 1Z="1M:1N%;" B="1R" V="\'+l+\'"/></a>\');z.q(\'<a B="H-J-L-I-N" C="\'+i+\'" M ="K">\'+r+"</a><1V/>");k("O"18 n){j w=n.O.$t}G k("Z"18 n){j w=n.Z.$t}G j w="";j E=/<\\S[^>]*>/g;w=w.1U(E,"");k(1W==D){k(w.P<X){z.q("");z.q(w);z.q("")}G{z.q("");w=w.F(0,X);j S=w.1Q(" ");w=w.F(0,S);z.q(w+"...");z.q("")}}j x="";j T=0;z.q("");k(23==D){x=x+y[21(m,10)]+"-"+g+" - "+v;T=1}k(1O==D){k(T==1){x=x+" | "}k(u=="1 R")u="1 1T";k(u=="0 R")u="1X R";u=\'<a C="\'+f+\'" M ="K">\'+u+"</a>";x=x+u;T=1}k(1S==D){k(T==1)x=x+" | ";x=x+\'<a C="\'+i+\'" B="1a" M ="K">1P &#1Y;</a>\';T=1}z.q(x);z.q("</Q>");k(1w==D)k(t!=1b-1)z.q("")}z.q("</16>")}',62,130,'|||||||||||||||||||var|if||||||write|||||||||document|link|class|href|true||substring|else|wpex|posts|widget|_top|recent|target|title|content|length|li|Comments|||indexOf|src|entry|numchars|feed|summary||||thumbnail|rel|for|ul|break|in|img|url|numposts|published|new|gif|s1600|AAAAAAAABAU|e7XkFtErqsU|Array|grey|Jan|Jul|Aug|Sep|Jun|Apr|Feb|Mar|Tp0KrMUdoWI|htG7vy9vIAA|text|html|displayseparator|type|replies|function|labelthumbs|alternate|try|bp|blogspot|com|http|substr|media|catch|Oct|May|width|100|showcommentnum|More|lastIndexOf|label_thumb|displaymore|Comment|replace|br|showpostsummary|No|187|style|clearfix|parseInt|Dec|showpostdate|Nov|showpostthumbnails'.split('|'),0,{}))
