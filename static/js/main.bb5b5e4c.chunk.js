(this.webpackJsonpstars_stripes=this.webpackJsonpstars_stripes||[]).push([[0],{10:function(e,t,a){e.exports=a(16)},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t),a.d(t,"calculateHorizontalScore",(function(){return j})),a.d(t,"calculateVerticalScore",(function(){return C})),a.d(t,"transposeDiagonalFromLeft",(function(){return D})),a.d(t,"transposeDiagonalFromRight",(function(){return R})),a.d(t,"calculateDiagonalFromLeftScore",(function(){return M})),a.d(t,"calculateDiagonalFromRightScore",(function(){return x})),a.d(t,"calculateScore",(function(){return I})),a.d(t,"isEndgame",(function(){return H})),a.d(t,"completeEndgame",(function(){return P})),a.d(t,"updateBlackout",(function(){return U}));var r=a(8),n=a(2),l=a(3),s=a(5),c=a(4),o=a(1),i=a(0),u=a.n(i),h=a(6),d=a.n(h),m=(a(15),document.getElementById("modal")),v=function(e){Object(s.a)(a,e);var t=Object(c.a)(a);function a(e){var r;return Object(o.a)(this,a),(r=t.call(this,e)).el=document.createElement("div"),r}return Object(l.a)(a,[{key:"componentDidMount",value:function(){m.appendChild(this.el)}},{key:"componentWillUnmount",value:function(){m.removeChild(this.el)}},{key:"render",value:function(){return Object(h.createPortal)(this.props.children,this.el)}}]),a}(u.a.Component),p=a(7),f=function e(t,a){Object(o.a)(this,e),this.color=t,this.shape=a},b=function(e){Object(s.a)(a,e);var t=Object(c.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return 1!==this.props.currentRule?null:u.a.createElement("div",{className:"tutorialStep"},u.a.createElement("div",{className:"tutorial-text"},"Take turns dragging an X or O of your color onto the grid."),u.a.createElement("div",{className:"tutorial-board"},u.a.createElement("div",{className:"board-row"},u.a.createElement("div",{className:"square"}),u.a.createElement("div",{className:"square"}),u.a.createElement("div",{className:"square"}),u.a.createElement("div",{className:"square tutorial1animation4"},"O"),u.a.createElement("div",{className:"square"})),u.a.createElement("div",{className:"board-row"},u.a.createElement("div",{className:"square"}),u.a.createElement("div",{className:"square"}),u.a.createElement("div",{className:"square"}),u.a.createElement("div",{className:"square"}),u.a.createElement("div",{className:"square"})),u.a.createElement("div",{className:"board-row"},u.a.createElement("div",{className:"square tutorial1animation3"},"X"),u.a.createElement("div",{className:"square"}),u.a.createElement("div",{className:"square"}),u.a.createElement("div",{className:"square"}),u.a.createElement("div",{className:"square"})),u.a.createElement("div",{className:"board-row"},u.a.createElement("div",{className:"square"}),u.a.createElement("div",{className:"square"}),u.a.createElement("div",{className:"square tutorial1animation5"},"O"),u.a.createElement("div",{className:"square"}),u.a.createElement("div",{className:"square"})),u.a.createElement("div",{className:"board-row"},u.a.createElement("div",{className:"square"}),u.a.createElement("div",{className:"square"}),u.a.createElement("div",{className:"square"}),u.a.createElement("div",{className:"square"}),u.a.createElement("div",{className:"square"})),u.a.createElement("div",{className:"board-row"},u.a.createElement("div",{className:"square tray"}),u.a.createElement("div",{className:"square tray tutorial1animationX"},"X"),u.a.createElement("div",{className:"square tray"}),u.a.createElement("div",{className:"square tray tutorial1animationO"},"O"),u.a.createElement("div",{className:"square tray"}))))}}]),a}(u.a.Component),E=function(e){Object(s.a)(a,e);var t=Object(c.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return 2!==this.props.currentRule?null:u.a.createElement("div",{className:"tutorialStep"},"The same symbol of opposite color cannot be placed next to each other. (Show hints appearing)")}}]),a}(u.a.Component),N=function(e){Object(s.a)(a,e);var t=Object(c.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return 3!==this.props.currentRule?null:u.a.createElement("div",{className:"tutorialStep"},"When no symbol can be placed in a square, it is blacked out. (Show)")}}]),a}(u.a.Component),g=function(e){Object(s.a)(a,e);var t=Object(c.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return 4!==this.props.currentRule?null:u.a.createElement("div",{className:"tutorialStep"},"Win by getting the most 3 on a rows of your color. Symbol doesn't matter. (Show board with lines drawn to indicate sets)")}}]),a}(u.a.Component);function y(e){return 1!==e.currentRule?u.a.createElement("button",{onClick:e.handlePrevious},"Previous"):u.a.createElement("div",null)}function S(e){return e.currentRule<e.totalSteps?u.a.createElement("button",{onClick:e.handleNext},"Next"):u.a.createElement("div",null)}function q(e){return e.showRules?u.a.createElement(v,null,u.a.createElement("div",{className:"modal"},u.a.createElement("div",{className:"tutorial"},u.a.createElement(b,{currentRule:e.currentRule}),u.a.createElement(E,{currentRule:e.currentRule}),u.a.createElement(N,{currentRule:e.currentRule}),u.a.createElement(g,{currentRule:e.currentRule}),u.a.createElement("div",{className:"navigation"},u.a.createElement(y,{currentRule:e.currentRule,handlePrevious:e.handlePrevious}),u.a.createElement("div",null,e.currentRule,"/",4),u.a.createElement(S,{currentRule:e.currentRule,totalSteps:4,handleNext:e.handleNext}),u.a.createElement("button",{onClick:e.handleHide},"Exit"))))):null}function O(e){var t="square",a=null;return e.color?(t+=" "+e.color,"star"===e.shape?a="X":"circle"===e.shape&&(a="O")):e.hints&&e.hintShape&&e.hintColor&&e.legalMove[e.hintColor][e.hintShape]&&(t+=" "+e.hintColor+" hint"),u.a.createElement("div",{className:t,onDragOver:e.onDragOver,onDrop:e.onDrop},a)}var w=function(e){Object(s.a)(a,e);var t=Object(c.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"renderSquare",value:function(e,t){var a=this.props.squares[e][t];return u.a.createElement(p.DropTarget,{targetKey:"token",dropData:{row:e,column:t}},u.a.createElement(O,{shape:a?a.shape:null,color:a?a.color:null,key:e+","+t,row:e,column:t,legalMove:this.props.legalMoves[e][t],hintShape:this.props.hintShape,hintColor:this.props.hintColor,hints:this.props.hints}))}},{key:"createSquares",value:function(){for(var e=[],t=0;t<this.props.gridSize;t++){for(var a=[],r=0;r<this.props.gridSize;r++)a.push(this.renderSquare(t,r));e.push(u.a.createElement("div",{className:"board-row",key:t},a))}return e}},{key:"render",value:function(){return u.a.createElement("div",null,this.createSquares())}}]),a}(u.a.Component),k=function(e){Object(s.a)(a,e);var t=Object(c.a)(a);function a(e){var r;Object(o.a)(this,a),(r=t.call(this,e)).handleDragOver=function(e,t,a){e.preventDefault()},r.handleMouseDown=function(e,t){var a=r.state.blueIsNext?"blue":"red";r.setState({hintColor:a,hintShape:t})},r.handleMouseUp=function(e){r.setState({hintColor:null,hintShape:null})},r.handleHintsChange=function(e){var t=e.target.checked;r.setState({hints:t})},r.handleUndo=function(e){var t=r.state.history,a=t.squares.length>1?t.squares.slice(0,-1):t.squares.slice(),n=t.legalMoves.length>1?t.legalMoves.slice(0,-1):t.legalMoves.slice();t.squares=a,t.legalMoves=n;var l=!(t.squares.length>1)||!r.state.blueIsNext;document.getElementsByTagName("body")[0].style.setProperty("--player_color",l?"var(--blue_color)":"var(--red_color)"),r.setState({history:t,blueIsNext:l})},r.handleNewGame=function(e){var t=r.state.history,a=t.squares.slice(0,1),n=t.legalMoves.slice(0,1);t.squares=a,t.legalMoves=n,r.setState({history:t,blueIsNext:!0,hintColor:null,hintShape:null})};for(var l=[],s=0;s<5;s++){for(var c=[],i=0;i<5;i++)c.push({red:{star:!0,circle:!0},blue:{star:!0,circle:!0}});l.push(c)}return r.state={gridSize:5,history:{squares:[Array.from({length:5},(function(e){return Array(5).fill(null)}))],legalMoves:[l]},blueIsNext:!0,hints:!0,hintColor:null,hintShape:null,showRules:!0,currentRule:1},r.handleShow=r.handleShow.bind(Object(n.a)(r)),r.handleHide=r.handleHide.bind(Object(n.a)(r)),r.handlePrevious=r.handlePrevious.bind(Object(n.a)(r)),r.handleNext=r.handleNext.bind(Object(n.a)(r)),r.handleHintsChange=r.handleHintsChange.bind(Object(n.a)(r)),r.handleNewGame=r.handleNewGame.bind(Object(n.a)(r)),r}return Object(l.a)(a,[{key:"handleShow",value:function(){this.setState({showRules:!0})}},{key:"handleHide",value:function(){this.setState({showRules:!1})}},{key:"handlePrevious",value:function(){var e=this.state.currentRule;e-=1,this.setState({currentRule:e})}},{key:"handleNext",value:function(){var e=this.state.currentRule;e+=1,this.setState({currentRule:e})}},{key:"handleDrop",value:function(e){var t=e.dropData.row,a=e.dropData.column,r=e.dragData.shape,n=this.state.history,l=n.squares.slice(),s=l[l.length-1].map((function(e){return e.slice()})),c=this.state.blueIsNext?"blue":"red",o="star"===r?"circle":"star",i=this.state.blueIsNext?"red":"blue",u=n.legalMoves.slice(),h=JSON.parse(JSON.stringify(u[u.length-1]));if(h[t][a][c][r]){for(var d=this.state.gridSize,m=t-1;m<=t+1;m++)for(var v=a-1;v<=a+1;v++)m===t&&v===a&&(h[m][v][i][r]=!1,h[m][v][i][o]=!1,h[m][v][c][o]=!1,h[m][v][c][r]=!1),m>=0&&v>=0&&m<d&&v<d&&(h[m][v][i][r]=!1);s[t][a]=new f(c,r),document.getElementsByTagName("body")[0].style.setProperty("--player_color",this.state.blueIsNext?"var(--red_color)":"var(--blue_color)"),n.squares=l.concat([s]),n.legalMoves=u.concat([h]),this.setState({history:n,blueIsNext:!this.state.blueIsNext,hintColor:null,hintShape:null})}}},{key:"render",value:function(){var e=this,t=this.state.history,a=t.squares.slice(),r=a[a.length-1].slice(),n=t.legalMoves.slice(),l=n[n.length-1].slice();r=U(r,l),H(l)&&(r=P(r,l));var s=I(r),c=s.red,o=s.blue;return u.a.createElement("div",{className:"game"},u.a.createElement("div",{className:"title"},u.a.createElement("h1",null,"Stars and Circles"),u.a.createElement("h2",null,"Game by Colin Thom"),u.a.createElement("h2",null,"Built by Sarah Edwards")),u.a.createElement("div",{className:"game-board"},u.a.createElement(w,{squares:r,gridSize:this.state.gridSize,legalMoves:l,hintShape:this.state.hintShape,hintColor:this.state.hintColor,hints:this.state.hints})),u.a.createElement("div",{className:"token-area"},u.a.createElement(p.DragDropContainer,{targetKey:"token",dragData:{shape:"star"},onDrop:function(t){return e.handleDrop(t)},onDragStart:function(t){return e.handleMouseDown(t,"star")}},u.a.createElement("div",{className:"token",onMouseDown:function(t){return e.handleMouseDown(t,"star")},onMouseUp:function(t){return e.handleMouseUp(t)}},"X")),u.a.createElement(p.DragDropContainer,{targetKey:"token",dragData:{shape:"circle"},onDrop:function(t){return e.handleDrop(t)},onDragStart:function(t){return e.handleMouseDown(t,"circle")}},u.a.createElement("div",{className:"token",onMouseDown:function(t){return e.handleMouseDown(t,"circle")},onMouseUp:function(t){return e.handleMouseUp(t)}},"O"))),u.a.createElement("div",{className:"score"},"Score:",u.a.createElement("div",{className:"red-score"},c),u.a.createElement("div",{className:"blue-score"},o)),u.a.createElement("div",{className:"controls"},u.a.createElement("label",{className:"hints"},"Hints",u.a.createElement("input",{name:"hints",type:"checkbox",checked:this.state.hints,onChange:this.handleHintsChange})),u.a.createElement("button",{onClick:this.handleUndo},"Undo"),u.a.createElement("button",{onClick:this.handleNewGame},"New"),u.a.createElement("button",{onClick:this.handleShow},"Rules")),u.a.createElement("div",{className:"tutorial"},u.a.createElement(q,{showRules:this.state.showRules,currentRule:this.state.currentRule,handleHide:this.handleHide,handlePrevious:this.handlePrevious,handleNext:this.handleNext})))}}]),a}(u.a.Component);function j(e){var t={red:0,blue:0};for(var a in e)for(var r=0;r<e[0].length-2;r++){var n=e[a][r],l=e[a][r+1],s=e[a][r+2];n&&l&&s&&n.color===l.color&&n.color===s.color&&(t[n.color]+=1)}return t}function C(e){return j(e[0].map((function(t,a){return e.map((function(e){return e[a]}))})))}function D(e){var t=[];for(var a in e){var r=Array(e[a].length-1-a).fill(null),n=Array(parseInt(a)).fill(null),l=r.concat(e[a].concat(n));t.push(l)}return t[0].map((function(e,a){return t.map((function(e){return e[a]}))}))}function R(e){var t=[];for(var a in e){var r=Array(parseInt(a)).fill(null),n=Array(e[a].length-1-a).fill(null),l=r.concat(e[a].concat(n));t.push(l)}return t[0].map((function(e,a){return t.map((function(e){return e[a]}))}))}function M(e){return j(D(e))}function x(e){return j(R(e))}function I(e){var t=j(e),a=C(e),r=M(e),n=x(e),l={red:0,blue:0};for(var s in l)l[s]=t[s]+a[s]+r[s]+n[s];return l}function H(e){var t,a={red:!1,blue:!1},n=Object(r.a)(e);try{for(n.s();!(t=n.n()).done;){var l,s=t.value,c=Object(r.a)(s);try{for(c.s();!(l=c.n()).done;){var o=l.value;for(var i in a)a[i]||!o[i].star&&!o[i].circle||(a[i]=!0)}}catch(u){c.e(u)}finally{c.f()}}}catch(u){n.e(u)}finally{n.f()}return!(a.red&&a.blue)}function P(e,t){alert("No choices left for remaining squares! Empty squares will be filled automatically.");var a=e.slice();for(var r in a)for(var n in a[r])if(!a[r][n]){var l=t[r][n];(l.red.star||l.red.circle)&&(a[r][n]=new f("red","null")),(l.blue.star||l.blue.circle)&&(a[r][n]=new f("blue","null"))}return a}function U(e,t){for(var a in e)for(var r in e[a]){var n=e[a][r],l=t[a][r];if(!n&&!l.red.circle&&!l.red.star&&!l.blue.circle&&!l.blue.star){var s=new f("black","null");e[a][r]=s}}return e}d.a.render(u.a.createElement(k,null),document.getElementById("root")||document.createElement("div"))}},[[10,1,2]]]);
//# sourceMappingURL=main.bb5b5e4c.chunk.js.map