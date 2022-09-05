(module
    (func (export "and") (param $p1 i32) (param $p2 i32) (result i32)
        (block  ;;(0,13)
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
        )
        return   
    )
    (func (export "or") (param $p1 i32) (param $p2 i32) (result i32)
        ;;(block (result i32) ;;(0,13)
        (block ;;(0,12)
            (block ;;(0,8) 
                local.get $p1
                i32.const 0
                i32.ne
                br_if 0  
                local.get $p2
                i32.eqz
                br_if 0                    
            )
            i32.const 1
            br 1  
        )   
        i32.const 0
        ;;)
        return
    )
    (func (export "neg") (param $p1 i32) (result i32)
        ;;(block (result i32)
            (block 
                local.get $p1
                i32.const 0
                i32.ne
                br_if 0
                i32.const 1
                br 1
            )
            i32.const 0        
        ;;)
        return
    )
    (func (export "igual") (param $p1 i32) (param $p2 i32) (result i32)
        ;;(block (result i32)
            (block ;;(0,9)
                local.get $p1
                local.get $p2
                i32.ne
                br_if 0
                i32.const 1
                br 1
            )
            i32.const 0        
        ;;)
        return
    )
    (func (export "noIgual") (param $p1 i32) (param $p2 i32) (result i32)
        ;;(block (result i32)
            (block 
                local.get $p1
                local.get $p2
                i32.eq
                br_if 0
                i32.const 1
                br 1
            )
            i32.const 0        
        ;;)
        return
    )
    (func (export "mayor") (param $p1 i32) (param $p2 i32) (result i32)
        ;;(block (result i32)
            (block 
                local.get $p1
                local.get $p2
                i32.le_s
                br_if 0
                i32.const 1
                br 1
            )
            i32.const 0        
        ;;)
        return
    )
    (func (export "mayorIgual") (param $p1 i32) (param $p2 i32) (result i32)
        ;;(block (result i32)
            (block 
                local.get $p1
                local.get $p2
                i32.lt_s
                br_if 0
                i32.const 1
                br 1
            )
            i32.const 0        
        ;;)
        return
    )
    (func (export "menor") (param $p1 i32) (param $p2 i32) (result i32)
        ;;(block (result i32)
            (block 
                local.get $p1
                local.get $p2
                i32.ge_s
                br_if 0
                i32.const 1
                br 1
            )
            i32.const 0        
        ;;)
        return
    )
    (func (export "menorIgual") (param $p1 i32) (param $p2 i32) (result i32)
        ;;(block (result i32)
            (block 
                local.get $p1
                local.get $p2
                i32.gt_s
                br_if 0
                i32.const 1
                br 1
            )
            i32.const 0        
        ;;)
        return
    )
)