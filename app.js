var express = require ( "express" )
    , http = require ( "http" )
    , app = express ()
    , server = server = http.createServer ( app )
    , io = require ( "socket.io" ).listen ( server );

var q = require ( "q" )
    , fs = require ( "fs" );

var _redis = require ( "redis" ),
    redis = _redis.createClient ( "6379" , "172.17.0.202" );

redis.on( "error" , function ( err ) {
    console.log( "redis error " + err );
});

app.set( "views" , "./" );
app.set( "view engine" , "jade" );

// show index page , the list itself
app.get ( "/" , function ( req , res ) {
    res.render( "index" );
});

// static files
app.get ( "/static/*" , function( req , res ) {
    
})

app.listen ( 3333 );

