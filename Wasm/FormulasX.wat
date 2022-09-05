(module
    (func (export "func1") (param i32) (param i32) (param i32)(result i32)
        local.get 0
        local.get 1
        local.get 2
        i32.mul
        i32.add
        return
    )
    (func (export "func2") (param i32) (param i32) (param i32)(result i32)
        local.get 0
        local.get 1
        local.get 2
        i32.div_s
        i32.sub
        return
    )
    (func (export "func3") (param i32) (param i32) (result i32)
        local.get 0
        local.get 1
        i32.rem_s
        return
    )
    (func (export "func4") (param i32) (result i32)
        local.get 0
        i32.const 1
        i32.add
        local.set 0
        local.get 0
        return
    )
)