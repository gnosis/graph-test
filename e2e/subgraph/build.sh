#!/usr/bin/env bash

# Helper script to build sample subgraph for testing.
pushd "$(dirname $0)"

echo "# Generating contract ABI"
npx solcjs contracts/Sample.sol --abi -o abis
mv abis/contracts_Sample_sol_Sample.abi abis/Sample.json

echo "# Building subgraph module"
npx graph codegen
npx graph build
