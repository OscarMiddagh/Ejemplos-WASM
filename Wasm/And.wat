(module
    (func (export "and") (param $p1 i32) (param $p2 i32) (result i32)
        
            (block ;;(0,12)
                local.get $p1
                i32.eqz
                br_if 0 ;;salto 0
                local.get $p2
                i32.eqz 
                br_if 0 ;;salto 0
                i32.const 1
                br 1  ;;salir
                ;;salto 1
            )
        i32.const 0   
        
        return   
    )
)