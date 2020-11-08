
var MaxX = 1000;
var MaxY = 700;

var x = 20;
var y = 100;
var moveBackward = false;
var movingDown  = true;
var R = 0;
var G = 0;
var B = 0;

function setup()
{
	createCanvas(MaxX, MaxY);
	frameRate(1000);
	background(255,255,255);
}

function drawMainBody(topCornerX, topCornerY, color, pantsColor)
{
	fill(color);
	var bodyHeight = 130;
	var bodyWidth = 120;
	var armWidth = 30;
	var armLength = 90;
	var legWidth = 40;
	var legHeight = 110;
	var headWidth = 80;
	rect((topCornerX+20), topCornerY, bodyWidth, bodyHeight, bodyHeight/10);
	rect(topCornerX, topCornerY, armWidth, armLength, armLength/10);
	rect((topCornerX+bodyWidth+10), topCornerY, armWidth, armLength, armLength/10);
	fill(pantsColor);
	rect((topCornerX+30), (topCornerY+bodyHeight), legWidth, legHeight, legHeight/10);
	rect((topCornerX+50+legWidth), (topCornerY+bodyHeight), legWidth, legHeight, legHeight/10);
	fill('pink');
	rect((topCornerX+armWidth+(armWidth/3)), topCornerY-headWidth, headWidth, headWidth, (headWidth/10));
	fill('pink');
	rect( (topCornerX+armWidth), (topCornerY-headWidth)+(headWidth/3), 10, 20);
	rect( (topCornerX+armWidth)+headWidth+(headWidth/8), (topCornerY-headWidth)+(headWidth/3), 10, 20);

	
	if ( x < 255 ) {
		R = 255 - x;
		B = x;
	}
	fill(R, G , B);
	ellipse((topCornerX+headWidth-(headWidth/4)), (topCornerY-headWidth)+(headWidth/3), 20);
	ellipse((topCornerX+(headWidth/4)+headWidth), (topCornerY-headWidth)+(headWidth/3), 20);
	
}

function draw()
{
	
	strokeWeight(2);
	background( 245, 245, 220 );

	var topCornerX = x;
	var topCornerY = y;
	var color = 'red';
	if ( y == 100 ) {
		//movingDown  = true;
	//}
	//if ( y == 300 ) {
			//movingDown = false;
	//}
	//if ( x == 450 ) {
		//moveBackward = true;
		//if ( movingDown )
			y = y + 20;
		//else
			//y = y - 20;
	//}
	//if ( x == 20 ) {
		//moveBackward = false;
	//}
	//if (  moveBackward ) {
		//x--;
	//}
	//else {
		//x++;
	}
	
	drawMainBody(x, y, 'red', 'black');
	drawMainBody(x+180, y, 'blue', 'yellow');
	drawMainBody(x+360, y, 'green', 'violet');
	
	line( 50, 240+y, 950, 240+y);
	
}