webpackJsonp([1],{222:function(n,t,e){"use strict";var o=e(136),i=e(0);e.d(t,"a",function(){return s}),e.d(t,"b",function(){return c});var r=[],a=function(n){return n};e.i(i.a)(),a=function(n){return e.i(o.a)(),n},r=r.slice();var s=a,c=r.slice()},341:function(n,t){function e(n){throw new Error("Cannot find module '"+n+"'.")}e.keys=function(){return[]},e.resolve=e,n.exports=e,e.id=341},343:function(n,t,e){"use strict";var o=e(467);e.d(t,"a",function(){return o.a})},466:function(n,t,e){"use strict";var o=e(0);e.d(t,"a",function(){return i});var i=function(){function n(){}return n.prototype.ngOnInit=function(){function n(){$(".bio_element").typed({showCursor:!1,stringsElement:$("#typed-about-me"),callback:function(){setTimeout(function(){$(".bio_element").typed({strings:[""],showCursor:!1}),setTimeout(function(){t()},1e3)},2e3)}})}function t(){$(".bio_element").typed({showCursor:!1,stringsElement:$("#typed-work"),callback:function(){setTimeout(function(){$(".bio_element").typed({strings:[""],showCursor:!1}),setTimeout(function(){e()},1e3)},2e3)}})}function e(){$(".bio_element").typed({showCursor:!1,stringsElement:$("#typed-social"),callback:function(){$(".typed-cursor").css("display","none"),$(".social_container").css("display","block")}})}$(".delay").css("display","none"),$(".intro_element").typed({strings:["Hello! ^1000","I'm Tyler."],startDelay:1e3,backDelay:500,showCursor:!1,typeSpeed:40,callback:function(){setTimeout(function(){$(".typed-cursor").css("display","none"),$(".intro_element").css("text-decoration","underline"),$(".delay").css("display","inline-block"),n()},1e3)}})},n}();i=__decorate([e.i(o.U)({selector:"app",template:e(618),styles:[e(630)]})],i)},467:function(n,t,e){"use strict";var o=e(136),i=e(439),r=e(445),a=e(0),s=e(222),c=e(466),l=e(468),p=e(615),d=(e.n(p),e(616));e.n(d);e.d(t,"a",function(){return m});var u=[],m=function(){function n(){}return n.prototype.hmrOnInit=function(){},n.prototype.hmrOnDestroy=function(){},n.prototype.hmrAfterDestroy=function(){},n}();m=__decorate([e.i(a.i)({bootstrap:[c.a],declarations:[c.a,l.a],imports:[o.b,i.a,r.a],providers:[s.b,u]}),__metadata("design:paramtypes",[])],m)},468:function(n,t,e){"use strict";var o=e(469);e.d(t,"a",function(){return o.a})},469:function(n,t,e){"use strict";var o=e(0);e.d(t,"a",function(){return i});var i=function(){function n(){}return n}();i=__decorate([e.i(o.U)({selector:"no-content",template:"\n    <div>\n      <h1>404: page missing</h1>\n    </div>\n  "})],i)},613:function(n,t,e){t=n.exports=e(614)(),t.push([n.i,"@import url(https://fonts.googleapis.com/css?family=Oregano);",""]),t.push([n.i,".container{width:100%!important;margin:0!important;padding:0!important}.container,.row{height:100%!important}.row{overflow:scroll}.row{overflow-x:hidden}.profileContainer{background-color:#4682b4;height:100%;border-right:2px solid #000}.profileImageContainer{width:100%;height:100%;margin:0 auto;text-align:center;background-image:url("+e(617)+");background-repeat:no-repeat!important;background-size:contain!important;position:fixed}.profileText{font-size:2rem;color:snow;margin-top:30%;width:50%;font-family:Oregano,cursive}.bioContainer{background-color:snow;border-left:2px solid #000}.bio{margin-top:5%;padding:20px}.social_container{margin:0 auto;width:100%;text-align:center}.typed_header{font-size:1.5rem;text-decoration:underline}.small_display{display:none}.contact{margin-top:15px}.contact a{color:#4682b4}@media (max-width:767px){.profileContainer{border-bottom:2px solid #000;height:400px}.profileImageContainer{margin-left:0;position:static;background-position:50%}.profileText{float:right;margin-top:0;margin-right:5%;width:auto;position:static}.bioContainer{margin-top:0;text-align:center}.bio{margin:0 auto;margin-top:5%;padding:20px}.small_display{display:block}}.typed-cursor{opacity:1;-webkit-animation:blink .7s infinite;-moz-animation:blink .7s infinite;animation:blink .7s infinite}.fa-github,.fa-linkedin-square{font-size:2.5rem;color:#4682b4;margin-right:15px}@keyframes blink{0%{opacity:1}50%{opacity:0}to{opacity:1}}@-webkit-keyframes blink{0%{opacity:1}50%{opacity:0}to{opacity:1}}@-moz-keyframes blink{0%{opacity:1}50%{opacity:0}to{opacity:1}}",""])},615:function(n,t){},616:function(n,t){},617:function(n,t,e){n.exports=e.p+"78e19b592bd7863fca43dcb700c08a5a.gif"},618:function(n,t){n.exports='<div class="container">\n  <div class="row">\n    <div class="col-xs-12 col-md-6 profileContainer">\n        <div class="profileImageContainer">\n            <div class="profileText">\n                <span class="intro_element"></span><span class="typed-cursor">|</span>\n            </div>\n        </div>  \n    </div>\n    <div class="col-xs-12 col-md-6 bioContainer">\n        <div class="row">\n            <div class="col-xs-12 bio">  \n                \n                <div id="typed-about-me" style="display: none;">\n                    <p>Thanks For Your Interest In Me! ^500</p>\n                    <p>I\'m sure you think this is fancy, ^500 but let\'s get down to business! ^500</p>\n                    <p>\n                        <span class="typed_header">About Me:</span><br class="small_display">\n                        My name is <strong>Tyler Fletcher</strong>, ^500 but you already know that!<br>\n                        <br>\n                        I am currently an Applications Developer at Operation PAR, Inc., located in Largo, Florida.<br>\n                        <br>\n                        I am a <em>self motivated</em>, <em>self instructed</em> front-end developer,\n                        with a personal goal to learn something new every single day.<br>\n                        <br>\n                        I take pride in my passion and dedication for self-growth,\n                        and with a personailty that loves people, I fit right in just about <strong>anywhere.</strong><br>\n                        <br>\n                        Are you looking for someone who:<br>\n                        &#8226; Has good energy <br>\n                        &#8226; Is highly motivated <br>\n                        &#8226; Has excellent communication skills <br>\n                        &#8226; Can easily adapt to any environment<br>\n                        &#8226; Is willing to learn new technologies<br>\n                        <br>\n                        <strong>Great!</strong> ^800 I thought you might be!<br>\n                        <br>\n                    </p>\n                </div>\n                <div id="typed-work" style="display: none;">\n                    <p>\n                        <span class="typed_header">Experience:</span><br><br>\n                        \n                        <strong>My current responsibilities include (but are not limited to):</strong><br><br class="small_display">\n                        &#8226; Writing C# (.NET) web services<br>\n                        &#8226; Creating websites and web apps using Angular<br>\n                        &#8226; Creating scripts for automating data processes (conversions, manipulations, etc)<br>\n                        &#8226; Florida State Data Reporting and Billing<br>\n                        &#8226; Writing Crystal Reports and SSRS Reports<br>\n                        &#8226; and Integrating with SQL Server/ODBC Environments<br><br>\n                        \n                        <strong>I currently have experience with:</strong> <br>\n                        &#8226; HTML/CSS/JavaScript <br>\n                        &#8226; Angular (1.x and 2.x) <br>\n                        &#8226; Ionic (1.x and 2.x) <br>\n                        &#8226; Node.js <br>\n                        &#8226; C++/C# <br>\n                        &#8226; Python <br>\n                        &#8226; Linux/Unix/Windows Scripting <br><br>\n                        \n                        I am also familiar with Visual Studios, ^300 Xcode, ^300 Cordova, ^300 and Phonegap. <br>\n                        I can work comfortably in pretty much any OS, ^300 but my hardware and OS of choice is a MacBook Pro on OS X. <br>\n                        My favorite code editor of choice is Brackets, ^300 and I use Git for version management.<br><br>\n                    </p>\n                </div>\n                \n                <div id="typed-social" style="display: none;">\n                    <p>\n                        Hopefully you now know me a little better as a person than you did before.<br>\n                        There is still a lot to learn about me, and I am <em>eager</em> to formally introduce myself.<br>\n                        <br>\n                        Until that time comes, how about checking out some of my work, and let\'s get connected!<br><br>\n                    </p>\n                </div>\n            \n                <span class="bio_element"></span><span class="typed-cursor delay">|</span>\n                \n                <div class="social_container" style="display: none;">\n                    <a href="https://github.com/fletchertyler914" target="_blank"><i class="fa fa-github" aria-hidden="true"></i></a>\n                    <a href="https://www.linkedin.com/in/tyler-fletcher/" target="_blank"><i class="fa fa-linkedin-square" aria-hidden="true"></i></a>\n                    <p class="contact">Email: <a href="mailto:hello@tylerjfletcher.com">hello@tylerjfletcher.com</a></p>\n                    <p class="contact">Phone: <a href="tel:+16156913738">615-691-3738</a></p>\n                    <p class="contact">Resumé PDF: <a href="../assets/TylerFletcher.pdf">Download</a></p>\n                </div>\n                \n            </div>\n        </div>\n    </div>\n  </div>\n</div>'},630:function(n,t,e){var o=e(613);"string"==typeof o?n.exports=o:n.exports=o.toString()},631:function(n,t,e){"use strict";function o(){return e.i(i.a)().bootstrapModule(s.a).then(r.a).catch(function(n){return console.error(n)})}Object.defineProperty(t,"__esModule",{value:!0});var i=e(342),r=e(222),a=e(344),s=(e.n(a),e(343));t.main=o,e.i(a.bootloader)(o)}},[631]);
