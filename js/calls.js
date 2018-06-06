let colors = {
    "aliceblue": "#f0f8ff",
    "antiquewhite": "#faebd7",
    "aqua": "#00ffff",
    "aquamarine": "#7fffd4",
    "azure": "#f0ffff",
    "beige": "#f5f5dc",
    "bisque": "#ffe4c4",
    "black": "#000000",
    "blanchedalmond": "#ffebcd",
    "blue": "#0000ff",
    "blueviolet": "#8a2be2",
    "brown": "#a52a2a",
    "burlywood": "#deb887",
    "cadetblue": "#5f9ea0",
    "chartreuse": "#7fff00",
    "chocolate": "#d2691e",
    "coral": "#ff7f50",
    "cornflowerblue": "#6495ed",
    "cornsilk": "#fff8dc",
    "crimson": "#dc143c",
    "cyan": "#00ffff",
    "darkblue": "#00008b",
    "darkcyan": "#008b8b",
    "darkgoldenrod": "#b8860b",
    "darkgray": "#a9a9a9",
    "darkgreen": "#006400",
    "darkgrey": "#a9a9a9",
    "darkkhaki": "#bdb76b",
    "darkmagenta": "#8b008b",
    "darkolivegreen": "#556b2f",
    "darkorange": "#ff8c00",
    "darkorchid": "#9932cc",
    "darkred": "#8b0000",
    "darksalmon": "#e9967a",
    "darkseagreen": "#8fbc8f",
    "darkslateblue": "#483d8b",
    "darkslategray": "#2f4f4f",
    "darkslategrey": "#2f4f4f",
    "darkturquoise": "#00ced1",
    "darkviolet": "#9400d3",
    "deeppink": "#ff1493",
    "deepskyblue": "#00bfff",
    "dimgray": "#696969",
    "dimgrey": "#696969",
    "dodgerblue": "#1e90ff",
    "firebrick": "#b22222",
    "floralwhite": "#fffaf0",
    "forestgreen": "#228b22",
    "fuchsia": "#ff00ff",
    "gainsboro": "#dcdcdc",
    "ghostwhite": "#f8f8ff",
    "gold": "#ffd700",
    "goldenrod": "#daa520",
    "gray": "#808080",
    "green": "#008000",
    "greenyellow": "#adff2f",
    "grey": "#808080",
    "honeydew": "#f0fff0",
    "hotpink": "#ff69b4",
    "indianred": "#cd5c5c",
    "indigo": "#4b0082",
    "ivory": "#fffff0",
    "khaki": "#f0e68c",
    "lavender": "#e6e6fa",
    "lavenderblush": "#fff0f5",
    "lawngreen": "#7cfc00",
    "lemonchiffon": "#fffacd",
    "lightblue": "#add8e6",
    "lightcoral": "#f08080",
    "lightcyan": "#e0ffff",
    "lightgoldenrodyellow": "#fafad2",
    "lightgray": "#d3d3d3",
    "lightgreen": "#90ee90",
    "lightgrey": "#d3d3d3",
    "lightpink": "#ffb6c1",
    "lightsalmon": "#ffa07a",
    "lightseagreen": "#20b2aa",
    "lightskyblue": "#87cefa",
    "lightslategray": "#778899",
    "lightslategrey": "#778899",
    "lightsteelblue": "#b0c4de",
    "lightyellow": "#ffffe0",
    "lime": "#00ff00",
    "limegreen": "#32cd32",
    "linen": "#faf0e6",
    "magenta": "#ff00ff",
    "maroon": "#800000",
    "mediumaquamarine": "#66cdaa",
    "mediumblue": "#0000cd",
    "mediumorchid": "#ba55d3",
    "mediumpurple": "#9370db",
    "mediumseagreen": "#3cb371",
    "mediumslateblue": "#7b68ee",
    "mediumspringgreen": "#00fa9a",
    "mediumturquoise": "#48d1cc",
    "mediumvioletred": "#c71585",
    "midnightblue": "#191970",
    "mintcream": "#f5fffa",
    "mistyrose": "#ffe4e1",
    "moccasin": "#ffe4b5",
    "navajowhite": "#ffdead",
    "navy": "#000080",
    "oldlace": "#fdf5e6",
    "olive": "#808000",
    "olivedrab": "#6b8e23",
    "orange": "#ffa500",
    "orangered": "#ff4500",
    "orchid": "#da70d6",
    "palegoldenrod": "#eee8aa",
    "palegreen": "#98fb98",
    "paleturquoise": "#afeeee",
    "palevioletred": "#db7093",
    "papayawhip": "#ffefd5",
    "peachpuff": "#ffdab9",
    "peru": "#cd853f",
    "pink": "#ffc0cb",
    "plum": "#dda0dd",
    "powderblue": "#b0e0e6",
    "purple": "#800080",
    "rebeccapurple": "#663399",
    "red": "#ff0000",
    "rosybrown": "#bc8f8f",
    "royalblue": "#4169e1",
    "saddlebrown": "#8b4513",
    "salmon": "#fa8072",
    "sandybrown": "#f4a460",
    "seagreen": "#2e8b57",
    "seashell": "#fff5ee",
    "sienna": "#a0522d",
    "silver": "#c0c0c0",
    "skyblue": "#87ceeb",
    "slateblue": "#6a5acd",
    "slategray": "#708090",
    "slategrey": "#708090",
    "snow": "#fffafa",
    "springgreen": "#00ff7f",
    "steelblue": "#4682b4",
    "tan": "#d2b48c",
    "teal": "#008080",
    "thistle": "#d8bfd8",
    "tomato": "#ff6347",
    "turquoise": "#40e0d0",
    "violet": "#ee82ee",
    "wheat": "#f5deb3",
    "white": "#ffffff",
    "whitesmoke": "#f5f5f5",
    "yellow": "#ffff00",
    "yellowgreen": "#9acd32"
};
 let array = [];
 let valueBalls = 0;
 let array_colorsBalls = [];
 let array_groups = [];
 let arr_all = [];
    arr_all['groups'] = [];
    arr_all['colors_arr'] = [];
    arr_all['totalBall_colorArr'] = [];
 let del = null;

const ColorCall = async (input) => {
    valueBalls = 0;
    array_colorsBalls = [];
    array_groups = [];
    arr_all['groups'] = [];
    arr_all['colors_arr'] = [];
    arr_all['totalBall_colorArr'] = [];
    del = null;
    array = [];

    try {
        let n = null;
        n = input;
        valueBalls = n*n;
        random_getColor(n);
        arr_all['totalBall_colorArr'] = array_colorsBalls;
        asociateColors_ToGrops(n);
        return arr_all;

    } catch (error) {
        console.log(error)
    }
};

function deleteByValue(val, arr) {
    for(var f in arr) {
        if(arr[f] === val) {
            delete arr[f];
        }
    }
    return arr;
}

const random_getColor = async (n) => {
    del = null;

    for ( var i = 0; i < n; i++ ) {
        let keys = Object.keys(colors);
        array[i] = del = colors[keys[ keys.length * Math.random() << 0] ];
        array_colorsBalls[del] = 1;
        array_groups['Group_' + (i + 1)] = [];
        colors = deleteByValue(del, colors);
    }
    arr_all['colors_arr'] = array;
    asociate_colors(n);
};

function asociate_colors(n) {
    let first_key = '';
    for ( var i = 0; i < (valueBalls - n); i++){
        if( i===0 ) {
            first_key = del = array[Math.floor(Math.random() * array.length)];
        } else {
            del = array[Math.floor(Math.random() * array.length)];
        }
        array_colorsBalls[del] = array_colorsBalls[del] + 1;
    }
    // if( array_colorsBalls.reduce((a, b) => a + b, 0) < valueBalls ) {
    //     array_colorsBalls[first_key] = array_colorsBalls[first_key] + 1;
    // }
}

Array.prototype.contains = function(obj) {
    var i = this.length;
    while (i--) {
        if (this[i] == obj) {
            return true;
        }
    }
    return false;
};

function max_arr() {

    var lowest = '';
    let keys = Object.keys(array_colorsBalls);
    for (var i = 0; i < Object.keys(array_colorsBalls).length; i++) {

        if ( lowest === '') lowest = keys[i];
        if (array_colorsBalls[keys[i]] > array_colorsBalls[lowest]) lowest = keys[i];
    }
    return lowest;
}

function min_arr() {

    var lowest = '';
    let keys = Object.keys(array_colorsBalls);
    for (var i = 0; i < Object.keys(array_colorsBalls).length; i++) {

        if ( lowest === '') { lowest = keys[i]; }
        if (array_colorsBalls[keys[i]] < array_colorsBalls[lowest]) { lowest = keys[i]; }
    }
    return lowest;
}

function addTo_group(n) {

      let arr = [];
      let min = min_arr();
      let max_s = max_arr();
      let diff = 0;

        if ( array_colorsBalls[min] === n ) {
            arr[min] = array_colorsBalls[min];
            delete array_colorsBalls[min];
            array_colorsBalls.sort();
            return arr;
        } else {
            if( array_colorsBalls[min] < n ) {
                arr[min] = array_colorsBalls[min];
                diff = n - array_colorsBalls[min];
                arr[max_s] = diff;
                array_colorsBalls[max_s] = array_colorsBalls[max_s] - diff;

                delete array_colorsBalls[min];
                array_colorsBalls.sort();
                return arr;
            }else {
                if ( min === max_s ) {
                    arr[min] = array_colorsBalls[min];
                    delete array_colorsBalls[min];
                    array_colorsBalls.sort();

                    return arr;
                }
                if ( max_s === n ) {
                    arr[max_s] = array_colorsBalls[max_s];
                    delete array_colorsBalls[max_s];
                    array_colorsBalls.sort();

                    return arr;
                }
            }
        }
      return arr;
}


function asociateColors_ToGrops(n) {
    for ( var i = 1; i <= n; i++){
        arr_all['groups']['Group_'+i] = addTo_group(n);
    }
}
