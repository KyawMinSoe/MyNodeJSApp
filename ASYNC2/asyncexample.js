var fs = require('fs')
var asyn = require('async')

function loadfile2(path, callback){
    var f
    asyn.waterfall([
        function(cb){
            fs.open(path,'r',cb)
        },
        
        function(handle, cb){
            f = handle
            fs.fstat(f,cb)
        },
        
        function(stats,cb){
            var b = new Buffer(stats.size)
            if(stats.isFile()){
                fs.read(f,b,0,stats.size,null,cb)
            }else{
                callback(make_error('not file','cant load directory'))
            }

        },

        function(bytesRead, buffer, cb){
            fs.close(f, function(err){
                if(err){
                    cb(err)
                }else{
                    cb(null,buffer.toString('utf8',0,bytesRead))
                }
            })
        }

    ],
    function(err,fileContent){
        callback(err,fileContent)   
    })
}

loadfile2('text.txt',
function(err, contents){
    if(err){
        console.log(err)
    }
    else{
        console.log(contents)
    }
})

function make_error(err,msg)
{
    var e = new Error(msg)
    e.code = msg
    return e
}