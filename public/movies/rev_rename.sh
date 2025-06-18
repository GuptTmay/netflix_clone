#!/bin/bash

for i in {1..10}; do
    mv "image$i.webp" "temp$i.webp"
done

for i in {1..10}; do
    new=$((11 - i))
    mv "temp$i.webp" "image$new.webp"
done