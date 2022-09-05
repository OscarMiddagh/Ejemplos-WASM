(module
    (global $casa(mut i32) (i32.const 0))
    (func (export "mas1cuarto")
        global.get $casa
        i32.const 1
        i32.add
        global.set $casa
    )
)