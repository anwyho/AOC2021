# Day 5

Ah, finally... today is the day the one-liners break. I'm probably doing something wrong, but my code is running incredibly slow today. It must be because I'm allocating arrays of hundreds of items and putting them into a map, item by item, while recreating the map each time (since there is no `set` method that returns the map afterwards). I don't even want to think about the runtime complexity - it's probably O(n<sup>n<sup>n</sup></sup>) or something.

Sometime this week, I'll try Day 5 again, but with Clojure. We'll see how that goes.

## Description
