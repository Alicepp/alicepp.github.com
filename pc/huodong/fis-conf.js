fis.config.merge({
    namespace : 'huodong',
    roadmap:{
        domain:'http://s.emao.net/tmall/build/pc'
    }
});
var pack={
    'static/tar/huodong.css' : [
        /\/static\/lib\/css\/global\.(css|less)/i
        ,/\/widget\/(?!(page\/)).*\.(css|less)/i
    ],
    'static/tar/huodong.js' : [
        /\/widget\/(?!(page\/)).*\.js/i,

    ]
};
function toPack(pageName){
    var cssKey='static/tar/'+pageName+'.css';
    var cssReg=new RegExp("/widget/page/"+pageName+"/.*\\.(css|less)","i");
    var jsKey='static/tar/'+pageName+'.js';
    var jsReg=new RegExp("/widget/page/"+pageName+"/.*\\.js","i");
    pack[cssKey]=[cssReg];
    pack[jsKey]=[jsReg];
}
var pages=['czrbl087','ding150731','pei150804','cdcz0828','ding150908'];
pages.forEach(function(item){
    toPack(item);
});
fis.config.set('pack', pack);


fis.config.get('roadmap.path').unshift({
    reg : /\/test\/.*/i,
    release:false
});
fis.config.get('roadmap.path').unshift({
    reg : /\/plugin\/.*/i,
    release:false
});
fis.config.get('roadmap.path').unshift({
    reg : "**.sh",
    release:false
});
fis.config.get('roadmap.path').unshift({
    reg : "**.bat",
    release:false
});
fis.config.get('roadmap.path').unshift({
    reg : "**.conf",
    release:false
});

fis.config.get('roadmap.path').unshift({
    reg : /^\/widget\/(.*\.(js|css|less))$/i,
    isMod : true,
    useHash: false,
    release : '${statics}/${namespace}/widget/$1'
});



