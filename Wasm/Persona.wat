(module
    (global  $anioNacimiento  (mut i32) (i32.const 0))
    (global $alturaCm (mut i32) (i32.const 0))
    (global $anioInscripcion (mut i32)(i32.const 0))


    (func $getEdadInscripcion (result i32)
        (local $res i32)
        global.get $anioInscripcion
        global.get $anioNacimiento
        i32.sub
        local.set $res
        local.get $res
        return
    )
    (func $setAnioNacimiento (export "setAnioNacimiento") (param i32)
        local.get 0
        global.set 0
    )
    (func $getAnioNacimiento (export "anioNacimiento") (result i32)
        global.get $anioNacimiento
        return
    )
    (func $setAnioInscripcion (export "setAnioInscripcion") (param i32)
        local.get 0
        global.set $anioInscripcion
    )
    (func $getAnioInscripcion (export "anioInscripcion") (result i32)
        global.get $anioInscripcion
        return
    )  
    (func $setAltura (export "setAltura") (param i32)
        local.get 0
        global.set $alturaCm
    )
    (func $getAltura (export "altura") (result i32)
        global.get $alturaCm
        return
    )
)