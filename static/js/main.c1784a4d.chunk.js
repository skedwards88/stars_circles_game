(this.webpackJsonpstars_stripes=this.webpackJsonpstars_stripes||[]).push([[0],{10:function(e,a,t){e.exports=t(16)},15:function(e,a,t){},16:function(e,a,t){"use strict";t.r(a),t.d(a,"calculateHorizontalScore",(function(){return k})),t.d(a,"calculateVerticalScore",(function(){return C})),t.d(a,"transposeDiagonalFromLeft",(function(){return D})),t.d(a,"transposeDiagonalFromRight",(function(){return R})),t.d(a,"calculateDiagonalFromLeftScore",(function(){return M})),t.d(a,"calculateDiagonalFromRightScore",(function(){return x})),t.d(a,"calculateScore",(function(){return I})),t.d(a,"isEndgame",(function(){return P})),t.d(a,"completeEndgame",(function(){return H})),t.d(a,"updateBlackout",(function(){return X}));var r=t(8),n=t(2),l=t(3),s=t(5),c=t(4),i=t(1),o=t(0),u=t.n(o),m=t(6),d=t.n(m),h=(t(15),document.getElementById("modal")),v=function(e){Object(s.a)(t,e);var a=Object(c.a)(t);function t(e){var r;return Object(i.a)(this,t),(r=a.call(this,e)).el=document.createElement("div"),r}return Object(l.a)(t,[{key:"componentDidMount",value:function(){h.appendChild(this.el)}},{key:"componentWillUnmount",value:function(){h.removeChild(this.el)}},{key:"render",value:function(){return Object(m.createPortal)(this.props.children,this.el)}}]),t}(u.a.Component),E=t(7),p=function e(a,t){Object(i.a)(this,e),this.color=a,this.shape=t},N=function(e){Object(s.a)(t,e);var a=Object(c.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return 1!==this.props.currentRule?null:u.a.createElement("div",{className:"tutorialStep"},u.a.createElement("div",{className:"tutorial-text"},"Players take turns dragging an X or O of their color onto the grid."),u.a.createElement("div",{className:"tutorial-board"},u.a.createElement("div",{className:"board-row"},u.a.createElement("div",{className:"square"}),u.a.createElement("div",{className:"square"}),u.a.createElement("div",{className:"square"}),u.a.createElement("div",{className:"square tutorial1animation4"},"O"),u.a.createElement("div",{className:"square"})),u.a.createElement("div",{className:"board-row"},u.a.createElement("div",{className:"square"}),u.a.createElement("div",{className:"square"}),u.a.createElement("div",{className:"square"}),u.a.createElement("div",{className:"square"}),u.a.createElement("div",{className:"square"})),u.a.createElement("div",{className:"board-row"},u.a.createElement("div",{className:"square tutorial1animation3"},"X"),u.a.createElement("div",{className:"square"}),u.a.createElement("div",{className:"square"}),u.a.createElement("div",{className:"square"}),u.a.createElement("div",{className:"square"})),u.a.createElement("div",{className:"board-row"},u.a.createElement("div",{className:"square"}),u.a.createElement("div",{className:"square"}),u.a.createElement("div",{className:"square tutorial1animation5"},"O"),u.a.createElement("div",{className:"square"}),u.a.createElement("div",{className:"square"})),u.a.createElement("div",{className:"board-row"},u.a.createElement("div",{className:"square"}),u.a.createElement("div",{className:"square"}),u.a.createElement("div",{className:"square"}),u.a.createElement("div",{className:"square"}),u.a.createElement("div",{className:"square"})),u.a.createElement("div",{className:"board-row"},u.a.createElement("div",{className:"square tray"}),u.a.createElement("div",{className:"square tray tutorial1animationX"},"X"),u.a.createElement("div",{className:"square tray"}),u.a.createElement("div",{className:"square tray tutorial1animationO"},"O"),u.a.createElement("div",{className:"square tray"}))))}}]),t}(u.a.Component),f=function(e){Object(s.a)(t,e);var a=Object(c.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return 2!==this.props.currentRule?null:u.a.createElement("div",{className:"tutorialStep"},u.a.createElement("div",{className:"tutorial-text"},"Matching symbols of opposite color cannot be placed adjacent or diagonal to each other."),u.a.createElement("div",{className:"tutorial-board"},u.a.createElement("div",{className:"board-row"},u.a.createElement("div",{className:"square"}),u.a.createElement("div",{className:"square"}),u.a.createElement("div",{className:"square"}),u.a.createElement("div",{className:"square"}),u.a.createElement("div",{className:"square"})),u.a.createElement("div",{className:"board-row"},u.a.createElement("div",{className:"square"}),u.a.createElement("div",{className:"square"}),u.a.createElement("div",{className:"square"}),u.a.createElement("div",{className:"square"}),u.a.createElement("div",{className:"square"})),u.a.createElement("div",{className:"board-row"},u.a.createElement("div",{className:"square"}),u.a.createElement("div",{className:"square"}),u.a.createElement("div",{className:"square"}),u.a.createElement("div",{className:"square"}),u.a.createElement("div",{className:"square red"},"O")),u.a.createElement("div",{className:"board-row"},u.a.createElement("div",{className:"square"}),u.a.createElement("div",{className:"square"}),u.a.createElement("div",{className:"square"}),u.a.createElement("div",{className:"square blue"},"X"),u.a.createElement("div",{className:"square blue"},"X")),u.a.createElement("div",{className:"board-row"},u.a.createElement("div",{className:"square"}),u.a.createElement("div",{className:"square"}),u.a.createElement("div",{className:"square"}),u.a.createElement("div",{className:"square"}),u.a.createElement("div",{className:"square"})),u.a.createElement("div",{className:"board-row"},u.a.createElement("div",{className:"square tray"}),u.a.createElement("div",{className:"square tray tutorial2animationX"},"X"),u.a.createElement("div",{className:"square tray"}),u.a.createElement("div",{className:"square tray tutorial2_O"},"O"),u.a.createElement("div",{className:"square tray"}))))}}]),t}(u.a.Component),b=function(e){Object(s.a)(t,e);var a=Object(c.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return 3!==this.props.currentRule?null:u.a.createElement("div",{className:"tutorialStep"},"When no symbol can be placed in a square, it is blacked out. (Show)")}}]),t}(u.a.Component),q=function(e){Object(s.a)(t,e);var a=Object(c.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return 4!==this.props.currentRule?null:u.a.createElement("div",{className:"tutorialStep"},"Win by getting the most 3 on a rows of your color. Symbol doesn't matter. (Show board with lines drawn to indicate sets)")}}]),t}(u.a.Component);function g(e){return 1!==e.currentRule?u.a.createElement("button",{onClick:e.handlePrevious},"Previous"):u.a.createElement("div",null)}function y(e){return e.currentRule<e.totalSteps?u.a.createElement("button",{onClick:e.handleNext},"Next"):u.a.createElement("div",null)}function S(e){return e.showRules?u.a.createElement(v,null,u.a.createElement("div",{className:"modal"},u.a.createElement("div",{className:"tutorial"},u.a.createElement(N,{currentRule:e.currentRule}),u.a.createElement(f,{currentRule:e.currentRule}),u.a.createElement(b,{currentRule:e.currentRule}),u.a.createElement(q,{currentRule:e.currentRule}),u.a.createElement("div",{className:"navigation"},u.a.createElement(g,{currentRule:e.currentRule,handlePrevious:e.handlePrevious}),u.a.createElement("div",null,e.currentRule,"/",4),u.a.createElement(y,{currentRule:e.currentRule,totalSteps:4,handleNext:e.handleNext}),u.a.createElement("button",{onClick:e.handleHide},"Exit"))))):null}function O(e){var a="square",t=null;return e.color?(a+=" "+e.color,"star"===e.shape?t="X":"circle"===e.shape&&(t="O")):e.hints&&e.hintShape&&e.hintColor&&e.legalMove[e.hintColor][e.hintShape]&&(a+=" "+e.hintColor+" hint"),u.a.createElement("div",{className:a,onDragOver:e.onDragOver,onDrop:e.onDrop},t)}var w=function(e){Object(s.a)(t,e);var a=Object(c.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"renderSquare",value:function(e,a){var t=this.props.squares[e][a];return u.a.createElement(E.DropTarget,{targetKey:"token",dropData:{row:e,column:a}},u.a.createElement(O,{shape:t?t.shape:null,color:t?t.color:null,key:e+","+a,row:e,column:a,legalMove:this.props.legalMoves[e][a],hintShape:this.props.hintShape,hintColor:this.props.hintColor,hints:this.props.hints}))}},{key:"createSquares",value:function(){for(var e=[],a=0;a<this.props.gridSize;a++){for(var t=[],r=0;r<this.props.gridSize;r++)t.push(this.renderSquare(a,r));e.push(u.a.createElement("div",{className:"board-row",key:a},t))}return e}},{key:"render",value:function(){return u.a.createElement("div",null,this.createSquares())}}]),t}(u.a.Component),j=function(e){Object(s.a)(t,e);var a=Object(c.a)(t);function t(e){var r;Object(i.a)(this,t),(r=a.call(this,e)).handleDragOver=function(e,a,t){e.preventDefault()},r.handleMouseDown=function(e,a){var t=r.state.blueIsNext?"blue":"red";r.setState({hintColor:t,hintShape:a})},r.handleMouseUp=function(e){r.setState({hintColor:null,hintShape:null})},r.handleHintsChange=function(e){var a=e.target.checked;r.setState({hints:a})},r.handleUndo=function(e){var a=r.state.history,t=a.squares.length>1?a.squares.slice(0,-1):a.squares.slice(),n=a.legalMoves.length>1?a.legalMoves.slice(0,-1):a.legalMoves.slice();a.squares=t,a.legalMoves=n;var l=!(a.squares.length>1)||!r.state.blueIsNext;document.getElementsByTagName("body")[0].style.setProperty("--player_color",l?"var(--blue_color)":"var(--red_color)"),r.setState({history:a,blueIsNext:l})},r.handleNewGame=function(e){var a=r.state.history,t=a.squares.slice(0,1),n=a.legalMoves.slice(0,1);a.squares=t,a.legalMoves=n,r.setState({history:a,blueIsNext:!0,hintColor:null,hintShape:null})};for(var l=[],s=0;s<5;s++){for(var c=[],o=0;o<5;o++)c.push({red:{star:!0,circle:!0},blue:{star:!0,circle:!0}});l.push(c)}return r.state={gridSize:5,history:{squares:[Array.from({length:5},(function(e){return Array(5).fill(null)}))],legalMoves:[l]},blueIsNext:!0,hints:!0,hintColor:null,hintShape:null,showRules:!1,currentRule:1},r.handleShow=r.handleShow.bind(Object(n.a)(r)),r.handleHide=r.handleHide.bind(Object(n.a)(r)),r.handlePrevious=r.handlePrevious.bind(Object(n.a)(r)),r.handleNext=r.handleNext.bind(Object(n.a)(r)),r.handleHintsChange=r.handleHintsChange.bind(Object(n.a)(r)),r.handleNewGame=r.handleNewGame.bind(Object(n.a)(r)),r}return Object(l.a)(t,[{key:"handleShow",value:function(){this.setState({showRules:!0})}},{key:"handleHide",value:function(){this.setState({showRules:!1})}},{key:"handlePrevious",value:function(){var e=this.state.currentRule;e-=1,this.setState({currentRule:e})}},{key:"handleNext",value:function(){var e=this.state.currentRule;e+=1,this.setState({currentRule:e})}},{key:"handleDrop",value:function(e){var a=e.dropData.row,t=e.dropData.column,r=e.dragData.shape,n=this.state.history,l=n.squares.slice(),s=l[l.length-1].map((function(e){return e.slice()})),c=this.state.blueIsNext?"blue":"red",i="star"===r?"circle":"star",o=this.state.blueIsNext?"red":"blue",u=n.legalMoves.slice(),m=JSON.parse(JSON.stringify(u[u.length-1]));if(m[a][t][c][r]){for(var d=this.state.gridSize,h=a-1;h<=a+1;h++)for(var v=t-1;v<=t+1;v++)h===a&&v===t&&(m[h][v][o][r]=!1,m[h][v][o][i]=!1,m[h][v][c][i]=!1,m[h][v][c][r]=!1),h>=0&&v>=0&&h<d&&v<d&&(m[h][v][o][r]=!1);s[a][t]=new p(c,r),document.getElementsByTagName("body")[0].style.setProperty("--player_color",this.state.blueIsNext?"var(--red_color)":"var(--blue_color)"),n.squares=l.concat([s]),n.legalMoves=u.concat([m]),this.setState({history:n,blueIsNext:!this.state.blueIsNext,hintColor:null,hintShape:null})}}},{key:"render",value:function(){var e=this,a=this.state.history,t=a.squares.slice(),r=t[t.length-1].slice(),n=a.legalMoves.slice(),l=n[n.length-1].slice();r=X(r,l),P(l)&&(r=H(r,l));var s=I(r),c=s.red,i=s.blue;return u.a.createElement("div",{className:"game"},u.a.createElement("div",{className:"title"},u.a.createElement("h1",null,"Stars and Circles"),u.a.createElement("h2",null,"Game by Colin Thom"),u.a.createElement("h2",null,"Built by Sarah Edwards")),u.a.createElement("div",{className:"game-board"},u.a.createElement(w,{squares:r,gridSize:this.state.gridSize,legalMoves:l,hintShape:this.state.hintShape,hintColor:this.state.hintColor,hints:this.state.hints})),u.a.createElement("div",{className:"token-area"},u.a.createElement(E.DragDropContainer,{targetKey:"token",dragData:{shape:"star"},onDrop:function(a){return e.handleDrop(a)},onDragStart:function(a){return e.handleMouseDown(a,"star")}},u.a.createElement("div",{className:"token",onMouseDown:function(a){return e.handleMouseDown(a,"star")},onMouseUp:function(a){return e.handleMouseUp(a)}},"X")),u.a.createElement(E.DragDropContainer,{targetKey:"token",dragData:{shape:"circle"},onDrop:function(a){return e.handleDrop(a)},onDragStart:function(a){return e.handleMouseDown(a,"circle")}},u.a.createElement("div",{className:"token",onMouseDown:function(a){return e.handleMouseDown(a,"circle")},onMouseUp:function(a){return e.handleMouseUp(a)}},"O"))),u.a.createElement("div",{className:"score"},"Score:",u.a.createElement("div",{className:"red-score"},c),u.a.createElement("div",{className:"blue-score"},i)),u.a.createElement("div",{className:"controls"},u.a.createElement("label",{className:"hints"},"Hints",u.a.createElement("input",{name:"hints",type:"checkbox",checked:this.state.hints,onChange:this.handleHintsChange})),u.a.createElement("button",{onClick:this.handleUndo},"Undo"),u.a.createElement("button",{onClick:this.handleNewGame},"New"),u.a.createElement("button",{onClick:this.handleShow},"Rules")),u.a.createElement("div",{className:"tutorial"},u.a.createElement(S,{showRules:this.state.showRules,currentRule:this.state.currentRule,handleHide:this.handleHide,handlePrevious:this.handlePrevious,handleNext:this.handleNext})))}}]),t}(u.a.Component);function k(e){var a={red:0,blue:0};for(var t in e)for(var r=0;r<e[0].length-2;r++){var n=e[t][r],l=e[t][r+1],s=e[t][r+2];n&&l&&s&&n.color===l.color&&n.color===s.color&&(a[n.color]+=1)}return a}function C(e){return k(e[0].map((function(a,t){return e.map((function(e){return e[t]}))})))}function D(e){var a=[];for(var t in e){var r=Array(e[t].length-1-t).fill(null),n=Array(parseInt(t)).fill(null),l=r.concat(e[t].concat(n));a.push(l)}return a[0].map((function(e,t){return a.map((function(e){return e[t]}))}))}function R(e){var a=[];for(var t in e){var r=Array(parseInt(t)).fill(null),n=Array(e[t].length-1-t).fill(null),l=r.concat(e[t].concat(n));a.push(l)}return a[0].map((function(e,t){return a.map((function(e){return e[t]}))}))}function M(e){return k(D(e))}function x(e){return k(R(e))}function I(e){var a=k(e),t=C(e),r=M(e),n=x(e),l={red:0,blue:0};for(var s in l)l[s]=a[s]+t[s]+r[s]+n[s];return l}function P(e){var a,t={red:!1,blue:!1},n=Object(r.a)(e);try{for(n.s();!(a=n.n()).done;){var l,s=a.value,c=Object(r.a)(s);try{for(c.s();!(l=c.n()).done;){var i=l.value;for(var o in t)t[o]||!i[o].star&&!i[o].circle||(t[o]=!0)}}catch(u){c.e(u)}finally{c.f()}}}catch(u){n.e(u)}finally{n.f()}return!(t.red&&t.blue)}function H(e,a){alert("No choices left for remaining squares! Empty squares will be filled automatically.");var t=e.slice();for(var r in t)for(var n in t[r])if(!t[r][n]){var l=a[r][n];(l.red.star||l.red.circle)&&(t[r][n]=new p("red","null")),(l.blue.star||l.blue.circle)&&(t[r][n]=new p("blue","null"))}return t}function X(e,a){for(var t in e)for(var r in e[t]){var n=e[t][r],l=a[t][r];if(!n&&!l.red.circle&&!l.red.star&&!l.blue.circle&&!l.blue.star){var s=new p("black","null");e[t][r]=s}}return e}d.a.render(u.a.createElement(j,null),document.getElementById("root")||document.createElement("div"))}},[[10,1,2]]]);
//# sourceMappingURL=main.c1784a4d.chunk.js.map