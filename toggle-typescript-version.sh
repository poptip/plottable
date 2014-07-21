#!/bin/bash

D=node_modules/typescript/bin

if [ -e "$D/tsc-old.js" ]; then
    mv -v "$D/tsc-old.js" "$D/tsc.js"
    echo
    echo 'now using old typescript'
else
    mv -v "$D/tsc.js" "$D/tsc-old.js"
    cp -v "tc.js" "$D/tsc.js"
    echo
    echo 'now using new typescript'
fi
