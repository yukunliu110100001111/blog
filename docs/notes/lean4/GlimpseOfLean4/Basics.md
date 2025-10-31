# The basic idea in lean proving
The fundamental way to prove formula is using some tactic to make two side of the  `=` equal
## Some basic tatics
### `rw` 伟大，无须多言
rw the fundamental tactic, using to replace one side of the `=` with another
### `ring` can be used to prove some basic arithmetic
ring is a mathlib tactic to prove some basic arithmetic in polynomial identities over commutative semirings / rings.
```
1. expand products
(x + y)^2 = x^2 + y^2 + 2*x*y
2. reaccociate and reorder
x^2 + y^2 + 2*x*y = x^2 + 2*x*y + y^;
x + y + z = x+ (y + z)
3. distibute over addition
x * (y + z) = x*y + x*z
4. collect like terms
x + x = 2*x
5. rewrite subtraction as addition
x - y = x + (-y)
6. cancel terms on both sides
x = x -> x + (-x) = 0
```

## Two ways to prove

```
Prove style 1

example foo : 1 + 1 = 2 := by
 rw [sth]
 rw [sth]

Prove style 2 // this one is more natural
example foo : x + x = y := by  
 calc 
  x + x = b + c := by rw [sth]
  _ = e + d := by rw [sth]
  _ = y := by rw [sth]
```

## Some tips
### how to type different symbols like <-
 In lean, you can use `\l` to type `<-`