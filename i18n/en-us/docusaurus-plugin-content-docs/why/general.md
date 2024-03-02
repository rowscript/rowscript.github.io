---
sidebar_position: 1
---

# General Ideas

There are several ideas that initially fuel our motivation to create RowScript, well, essentially just some quotes.

## Totality

> Total type theory really is adequate for general-purpose programming.
>
> -- Jon Sterling, [Make Three To Throw Away], WITS '22

By totality, every possible computation will be performed during compilation, and thanks to a dependent type system,
those computation results could feed as some useful type information. This enables our library writers to make better
frameworks, with less tricks and hacks, and most importantly, with a good and interactive **type debugging support**.

[Make Three To Throw Away]: https://www.jonmsterling.com/slides/sterling-2022-wits.pdf

## Universal Scripting

> It makes sense to think of JavaScript as the universal scripting language.
>
> -- Ryan Dahl, [JavaScript Containers]

JavaScript is everywhere, we target our code generation into it first instead of WebAssembly, since we believe in the
powerfulness of this universal language, unless it's aided by modern language tools. :)

[JavaScript Containers]: https://tinyclouds.org/javascript_containers

## Row Polymorphism

> Row polymorphism can be a typed solution to JavaScript's prototype-based design.
>
> -- [玩火 (niltok)], from a group talk in 2021

At the very beginning, we tried experimenting with [row polymorphism] to model some interesting JavaScript code, that's
also the origin of the name "**Row**Script". We further developed the row polymorphic feature and more interesting stuff
to make the type system robust and versatile.

It's worth noting that row polymorphism in RowScript is different from [that in PureScript]. Here, rows could be used to
create **extensible enumeration types**.

[玩火 (niltok)]: https://github.com/niltok
[row polymorphism]: https://en.wikipedia.org/wiki/Row_polymorphism
[that in PureScript]: https://github.com/purescript/documentation/blob/master/language/Types.md#rows
