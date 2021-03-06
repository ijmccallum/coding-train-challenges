var Aizawa = (function(){
    var a = 0.95, b = 0.7, c = 0.6, d = 3.5, e = 0.25, f = 0.1;
    var zoom = 200;
    var dt = 0.01;
    var max_length = 2000;

    var x, y, z;
    var reset = function(){
        x = 0.1;
        y = 0;
        z = 0;
    }

    var nextPoint = function(){

		var dx = (z-b)*x - d*y;
		var dy = d * x + (z - b) * y;
		var dz = c + a*z - ((z * z * z)/3 ) - ((x * x) + (y * y)) * (1 + e * z) + f * z * (x * x * x); 

        x += (dx * dt);
        y += (dy * dt);
        z += (dz * dt);

        //reset!
        if (!isFinite(x * zoom) || !isFinite(y * zoom) || !isFinite(z * zoom)) {
            return false;
        }

        return {
            x:x, y:y, z:z
        }
    }

    return {
        nextPoint: nextPoint,
        zoom: zoom,
        max_length: max_length,
        reset: reset
    }
})()