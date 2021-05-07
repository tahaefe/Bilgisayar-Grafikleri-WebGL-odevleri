var gl;



var colorLocation;
var r=0;
var g=0;
var b=0;
var radyan;
var aci;
var Tx=0.0;
var Ty=0.0;
var Tz=0.0;
var u_xformMatrix;
var u_rotmatrix ;
var rotmatrix;
var xformMatrix;
var oteleme_ilkdeger;
var translation;
window.onload = function init() {

  const canvas = document.querySelector("#glcanvas");
  // Initialize the GL context
  gl = canvas.getContext("webgl");
  // Only continue if WebGL is available and working
  if (!gl) {
    alert("Unable to initialize WebGL. Your browser or machine may not support it.");
    return;
  }
	var program = initShaders(gl,"vertex-shader","fragment-shader");
	
	
	gl.useProgram( program );
	colorLocation = gl.getUniformLocation(program, "u_color");
	translation = gl.getUniformLocation(program, 'translation');
	u_rotmatrix = gl.getUniformLocation(program, 'u_rotation');
	u_xformMatrix = gl.getUniformLocation(program, 'u_xformMatrix');
		aci=0;
		oteleme_ilkdeger=[0.0,0.0,0.0,1.0];
		
			
		radyan= (aci*Math.PI/180);
		 rotmatrix= new Float32Array([
			Math.cos(radyan), -Math.sin(radyan), 0.0,0.0,
			Math.sin(radyan), Math.cos(radyan),  0.0,0.0,
			0.0,			 0.0,			     1.0,0.0,
			0.0,			 0.0,			     0.0,1.0
	]);
	
		
		/*===================scaling==========================*/

         var Sx = 1.0, Sy = 1.0, Sz = 1.0;
          xformMatrix = new Float32Array([
            Sx,   0.0,  0.0,  0.0,
            0.0,  Sy,   0.0,  0.0,
            0.0,  0.0,  Sz,   0.0,
            0.0,  0.0,  0.0,  1.0  
         ]);

         
        
	/*----------------------------------------*/
	
		
		
		var myButton = document.getElementById("acibt"); 
           myButton.addEventListener("click", 
			function() {
				aci = 0;
				aci = document.getElementById("acinput").value;
				taha();
				
				
			});
		
		document.getElementById("slidex").onchange = function() {
          
		 oteleme_ilkdeger=[this.value,Ty,Tz,1.0];
		 
		render();
		Tx=this.value;
		};
		
		
		document.getElementById("slidey").onchange = function() {
          
		 oteleme_ilkdeger=[Tx,this.value,Tz,1.0];
		 
		render();
		Ty=this.value;
		};
		
		
		document.getElementById("slideol").onchange = 
		function() {  var Sx = this.value, Sy = this.value, Sz = 1.0;
          xformMatrix = new Float32Array([
            Sx,   0.0,  0.0,  0.0,
            0.0,  Sy,   0.0,  0.0,
            0.0,  0.0,  Sz,   0.0,
            0.0,  0.0,  0.0,  1.0  
         ]);

         // u_xformMatrix = gl.getUniformLocation(program, 'u_xformMatrix');
         //gl.uniformMatrix4fv(u_xformMatrix, false, xformMatrix);
		 render();
		 };
		 
		
		
		
		var myButton = document.getElementById("renkbt"); 
myButton.addEventListener("click", 
			function() {
				colorLocation = gl.getUniformLocation(program, "u_color");
				r = document.getElementById("input1").value;
				g = document.getElementById("input2").value;
				b = document.getElementById("input3").value;
				gl.uniform4f(colorLocation,r,g,b,1);
			});
				

	
	
	kafa();
	
	var vPosition = gl.getAttribLocation( program, "vPosition" );
	gl.vertexAttribPointer( vPosition, 2, gl.FLOAT, false, 0, 0 );
	gl.enableVertexAttribArray( vPosition );
	
	
	
	
		 
		 
	
	
	function taha(){
		
		radyan= (aci*Math.PI/180);
		 rotmatrix= new Float32Array([
			Math.cos(radyan), -Math.sin(radyan), 0.0,0.0,
			Math.sin(radyan), Math.cos(radyan),  0.0,0.0,
			0.0,			 0.0,			     1.0,0.0,
			0.0,			 0.0,			     0.0,1.0
	]);
	
	
      
	}
		
	
        
	
		 
		 
		 
	
	
  // Set clear color to black, fully opaque
  gl.clearColor(0.3, 0.0, 0.5, 1.0);
  
	requestAnimFrame(render);
}; 

function render() {
	 gl.uniformMatrix4fv(u_xformMatrix, false, xformMatrix);
	gl.uniform4fv(translation, oteleme_ilkdeger);
	 gl.uniformMatrix4fv(u_rotmatrix, false, rotmatrix);
	gl.uniform4f(colorLocation,r,g,b,1);
	gl.clear(gl.COLOR_BUFFER_BIT);
	
	gl.drawArrays(gl.TRIANGLES, 0, 36);
	
	
	requestAnimFrame(render);
}
function kafa(){
	var vertices = new Float32Array( 
				[ //ust
				   -0.6, 0.3,
				   -0.6, 0.2,
				   -0.1, 0.3,
				   -0.6, 0.2,
				   -0.1, 0.3,
				   -0.1,0.2,
				   //alt t
				   -0.4, 0.2,
				   -0.3, 0.2,
				   -0.4,-0.2,
				   -0.3, 0.2,
				   -0.3, -0.2,
				   -0.4,-0.2,
				   //e sol
				   0.1, 0.3,
				   0.2, 0.3,
				   0.1,-0.2,
				   0.1,-0.2,
				   0.2, 0.3,
				   0.2,-0.2,
				   //e ust
				   0.2,0.3,
				   0.5,0.3,
				   0.2,0.2,
				   0.5, 0.3,
				   0.2, 0.2,
				   0.5,0.2,
				   // e orta
				   0.2,0.1,
				   0.4,0.1,
				   0.2,0,
				   0.4, 0.1,
				   0.2,0.0,
				   0.4,0.0,
				   // e alt
				   0.2,-0.1,
				   0.5,-0.1,
				   0.2,-0.2,
				   0.5,-0.1,
				   0.2,-0.2,
				   0.5,-0.2
				   
				   
					]);

	

	var bufferId = gl.createBuffer();
	gl.bindBuffer( gl.ARRAY_BUFFER, bufferId );
	gl.bufferData( gl.ARRAY_BUFFER, flatten(vertices), gl.STATIC_DRAW );
	
	
}