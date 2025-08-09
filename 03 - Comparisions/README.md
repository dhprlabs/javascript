## Comparisions 

- Comparing two things in javascript codes is a normal thing.

- But there are some cases where things get a bit confusing.

- Hence, now-a-days `typescript` is prefered more.

- It is important to know the difference between `==` and `===` operator.

- Double equals `==` will perform a type conversion when comparing two things, and will handle `NaN`, `-0`, and `+0` specially to conform to IEEE 754 (so `NaN != NaN`, and `-0 == +0`).

- Triple equals `===` will do the same comparison as double equals (including the special handling for `NaN`, `-0`, and `+0`) but without type conversion; if the types differ, `false` is returned.
